import { connectToDatabase } from 'util/mongodb';
import EventsSchema from 'models/Events';
import AgreementsSchema from 'models/Agreements';
import withSession from 'lib/session';

export const createEvent = async body => {
  //Event creation
  const newEvent = await EventsSchema.create(new EventsSchema(body));
  //Agreement update for new related event
  await AgreementsSchema.updateOne(
    { id: body.agreement_id },
    { $push: { events: newEvent._id } },
  );
  return newEvent;
};

export const getEvents = async () => {
  await connectToDatabase();
  const events = await EventsSchema.find({});
  return events;
};

export const getLastEvents = async limit => {
  await connectToDatabase();

  const events = await EventsSchema.aggregate([
    {
      $sort: { created_At: -1 },
    },
    {
      $limit: limit,
    },
    {
      $lookup: {
        from: 'indicators',
        localField: 'indicator_id',
        foreignField: 'indicator_id',
        as: 'indicator',
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [{ $arrayElemAt: ['$indicator', 0] }, '$$ROOT'],
        },
      },
    },
    {
      $project: { indicator: 0, events: 0 },
    },
    {
      $lookup: {
        from: 'agreements',
        localField: 'agreement_id',
        foreignField: 'id',
        as: 'agreement',
      },
    },
    {
      $set: {
        agreement_title: { $arrayElemAt: ['$agreement.title', 0] },
        agreement_description: { $arrayElemAt: ['$agreement.description', 0] },
      },
    },
    {
      $project: { agreement: 0 },
    },
  ]);

  return events;
};

export default withSession(async (req, res) => {
  const { method, body } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const events = await EventsSchema.find({});
        res.status(200).json({ success: true, data: events });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'Error retrieving data' });
      }
      break;
    case 'POST':
      try {
        const user = req.session.get('user');

        if (user) {
          const newEvent = await createEvent(body);
          res.status(200).json({ success: true, data: newEvent });
        } else {
          res.status(403).json({ success: false, message: 'Not authorized' });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
});
