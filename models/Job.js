import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  requirements: [String]
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
export default Job;
