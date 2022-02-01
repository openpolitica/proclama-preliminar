import { connectToDatabase } from 'util/mongodb';
import AgreementsSchema from 'models/Agreements';

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const agreement = await AgreementsSchema.findOne({ id }).populate(
          'indicators',
        );
        res.status(200).json({ success: true, data: agreement });
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
