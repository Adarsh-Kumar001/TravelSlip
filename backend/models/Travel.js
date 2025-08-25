import mongoose from 'mongoose';

const travelSchema = new mongoose.Schema({
  From: { type: String },
  To: { type: String },
  Date: { type: Date },
  Type: { type: String },
});

export default mongoose.model('Travel', travelSchema);
