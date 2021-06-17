import { connectToDatabase } from 'util/mongodb';
import AgreementsSchema from 'models/Agreements';

export const getAgreementsOnly = async () => {
  await connectToDatabase();
  return await AgreementsSchema.find({});
};

export const getAgreements = async () => {
  await connectToDatabase();
  return await AgreementsSchema.find({}).populate('events');
};

export default async (req, res) => {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const agreements = await AgreementsSchema.find({}).populate('events');
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
