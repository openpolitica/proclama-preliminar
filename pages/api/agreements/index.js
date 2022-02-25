import { connectToDatabase } from 'util/mongodb';
import 'models/Indicators'; //required to populate indicators
import 'models/Events'; //required to populate events
import AgreementsSchema from 'models/Agreements';
import IndicatorsSchema from 'models/Indicators';

export const getAgreementsOnly = async () => {
  await connectToDatabase();
  return await AgreementsSchema.find({}).sort({ id: 1 });
};

export const getAgreementsCount = async () => {
  await connectToDatabase();
  return await AgreementsSchema.find({}).count();
};

export const getAgreements = async () => {
  await connectToDatabase();
  return await AgreementsSchema.find({}).sort({ id: 1 }).populate('indicators');
};

export const getAgreementByID = async id => {
  await connectToDatabase();
  return await AgreementsSchema.findOne({ id }).populate({
    path: 'indicators',
    populate: {
      path: 'events',
    },
  });
};

export const getStatusCounters = async () => {
  await connectToDatabase();
  return await IndicatorsSchema.aggregate([
    {
      $lookup: {
        from: 'events',
        localField: 'indicator_id',
        foreignField: 'indicator_id',
        as: 'events',
      },
    },
    {
      $unwind: {
        path: '$events',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ['$events', '$$ROOT'],
        },
      },
    },
    {
      $project: {
        events: 0,
        title: 0,
        description: 0,
        data_source: 0,
        data_source_url: 0,
      },
    },
    {
      $sort: { created_At: 1, indicator_id: 1 },
    },
    {
      $group: {
        _id: '$_id',
        last_status: { $last: '$status' },
        indicator_id: { $last: '$indicator_id' },
        agreement_id: { $last: '$agreement_id' },
      },
    },
    {
      $set: {
        last_status: {
          $cond: {
            if: {
              $eq: ['$last_status', null],
            },
            then: 'stateless',
            else: '$last_status',
          },
        },
      },
    },
    {
      $group: {
        _id: { agreement: '$agreement_id', status: '$last_status' },
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: '$_id.agreement',
        statuses: {
          $push: {
            status: '$_id.status',
            count: '$count',
          },
        },
        indicators_count: { $sum: '$count' },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
};

export default async (req, res) => {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const agreements = await AgreementsSchema.find({})
          .sort({ id: 1 })
          .populate('indicators');
        res.status(200).json({ success: true, data: agreements });
      } catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
