import { connectToDatabase } from '../../../util/mongodb';
import AgreementsSchema from '../../../models/Agreements';

export default async (req, res) => {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const agreements = await AgreementsSchema.find({}).populate('events');
        res.status(200).json({ success: true, data: agreements });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: 'Error retrieving data' });
      }
      break;
    // case 'POST':
    //   try {
    //     const newAgreement = await AgreementsSchema.create(new AgreementsSchema(body));
    //     res.status(200).json({ success: true, data: newAgreement });
    //   } catch (error) {
    //     console.log(error);
    //     res.status(400).json({ success: false, message: error.message})
    //   }
    //   break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
