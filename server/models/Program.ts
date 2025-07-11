import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
}

const ProgramSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isActive: { type: Boolean, default: true },
});

export default mongoose.model<IProgram>('Program', ProgramSchema);
