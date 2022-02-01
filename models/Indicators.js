import { Schema, model, models } from 'mongoose';

const IndicatorsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  events: {
    type: [Schema.Types.ObjectId],
    ref: 'events',
    default: [],
  },
});

export default models.indicators ||
  model('indicators', IndicatorsSchema, 'indicators');
