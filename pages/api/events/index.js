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
