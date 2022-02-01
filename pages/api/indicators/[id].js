import { connectToDatabase } from 'util/mongodb';
import IndicatorsSchema from 'models/Indicators';

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const indicator = await IndicatorsSchema.findOne({ id }).populate(
          'events',
        );
        res.status(200).json({ success: true, data: indicator });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'Error retrieving data' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
