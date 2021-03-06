import { Schema, model, models } from 'mongoose';

const AgreementsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  indicators: {
    type: [Schema.Types.ObjectId],
    ref: 'indicators',
    default: [],
  },
});

export default models.agreements ||
  model('agreements', AgreementsSchema, 'agreements');
