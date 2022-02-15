import { Schema, model, models } from 'mongoose';

const StatusSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

export default models.status || model('status', StatusSchema, 'status');
