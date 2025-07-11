import mongoose, { Schema, Document } from 'mongoose';

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
  interests?: string;
  createdAt: Date;
}

const VolunteerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  interests: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);
