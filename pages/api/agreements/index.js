import { connectToDatabase } from 'util/mongodb';
import 'models/Indicators'; //required to populate indicators
import 'models/Events'; //required to populate events
import AgreementsSchema from 'models/Agreements';

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
  return await AgreementsSchema.findOne({ id })
    .populate('indicators')
    .populate('events');
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
