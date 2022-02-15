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
      $group: {
        _id: '$agreement_id',
        indicators_count: { $sum: 1 },
        statuses: { $push: '$last_status' },
      },
    },
    {
      $project: {
        _id: 1,
        indicators_count: 1,
        moderate: {
          $size: {
            $filter: {
              input: '$statuses',
              as: 'item',
              cond: { $eq: ['$$item', 'moderate'] },
            },
          },
        },
        high: {
          $size: {
            $filter: {
              input: '$statuses',
              as: 'item',
              cond: { $eq: ['$$item', 'high'] },
            },
          },
        },
        extreme: {
          $size: {
            $filter: {
              input: '$statuses',
              as: 'item',
              cond: { $eq: ['$$item', 'extreme'] },
            },
          },
        },
      },
    },
    {
      $set: {
        null: {
          $subtract: [
            '$indicators_count',
            { $add: ['$moderate', '$high', '$extreme'] },
          ],
        },
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
