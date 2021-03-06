import { Schema, model, models } from 'mongoose';

const EventsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  data_source: {
    type: String,
    required: true,
  },
  indicator_id: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['moderate', 'high', 'extreme'],
    required: true,
  },
  political_party: {
    type: String,
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now(),
    index: true,
  },
});

export default models.events || model('events', EventsSchema, 'events');
