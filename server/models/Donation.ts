import mongoose, { Schema, Document } from 'mongoose';

export interface IDonation extends Document {
  donorName: string;
  donorEmail: string;
  amount: number;
  message?: string;
  createdAt: Date;
}

const DonationSchema: Schema = new Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IDonation>('Donation', DonationSchema);
