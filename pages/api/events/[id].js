import { connectToDatabase } from 'util/mongodb';
import EventsSchema from 'models/Events';

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const event = await EventsSchema.findById({ id });
        res.status(200).json({ success: true, data: event });
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
