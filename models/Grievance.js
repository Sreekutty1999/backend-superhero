import mongoose from 'mongoose';

const grievanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }, // Add a timestamp field
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

export default Grievance;
