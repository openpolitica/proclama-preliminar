import { connectToDatabase } from 'util/mongodb';
import IndicatorsSchema from 'models/Indicators';

export const getIndicatorsOnly = async () => {
  await connectToDatabase();
  return await IndicatorsSchema.find({}).sort({ id: 1 });
};

export const getIndicators = async () => {
  await connectToDatabase();
  return await IndicatorsSchema.find({}).sort({ id: 1 }).populate('events');
};

export default async (req, res) => {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const indicators = await IndicatorsSchema.find({})
          .sort({ id: 1 })
          .populate('events');
        res.status(200).json({ success: true, data: indicators });
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
