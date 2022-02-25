import { connectToDatabase } from 'util/mongodb';
import StatusShema from 'models/Status';

export const getStatus = async () => {
  await connectToDatabase();
  return await StatusShema.find({}).sort({ order: 1 });
};

export default async (req, res) => {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const status = await StatusShema.find({}).sort({ order: 1 });
        res.status(200).json({ success: true, data: status });
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
