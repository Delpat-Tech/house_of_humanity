import { Schema, model, Document } from 'mongoose';
import { Program as ProgramType } from '../types';

// Extend the Program interface to include Mongoose Document methods
export interface ProgramDocument extends ProgramType, Document {
  toJSON(): ProgramType;
}

// Program Schema
const programSchema = new Schema<ProgramDocument>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: ['healthcare', 'education', 'environment', 'poverty', 'women-empowerment', 'children', 'elderly', 'disability', 'other']
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['active', 'completed', 'upcoming'],
    default: 'upcoming'
  },
  startDate: {
    type: Date,
    required: function() { return this.status === 'active' || this.status === 'upcoming'; }
  },
  endDate: {
    type: Date,
    validate: {
      validator: function(this: ProgramDocument, value: Date) {
        if (this.startDate && value) {
          return value > this.startDate;
        }
        return true;
      },
      message: 'End date must be after start date'
    }
  },
  location: {
    type: String,
    trim: true,
    maxlength: [200, 'Location cannot exceed 200 characters']
  },
  maxParticipants: {
    type: Number,
    min: [1, 'Maximum participants must be at least 1']
  },
  currentParticipants: {
    type: Number,
    default: 0,
    min: [0, 'Current participants cannot be negative']
  },
  budget: {
    type: Number,
    min: [0, 'Budget cannot be negative']
  },
  raisedAmount: {
    type: Number,
    default: 0,
    min: [0, 'Raised amount cannot be negative']
  },
  impact: {
    beneficiaries: {
      type: Number,
      required: [true, 'Number of beneficiaries is required'],
      min: [0, 'Number of beneficiaries cannot be negative']
    },
    description: {
      type: String,
      required: [true, 'Impact description is required'],
      trim: true,
      maxlength: [500, 'Impact description cannot exceed 500 characters']
    }
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes for better query performance
programSchema.index({ status: 1 });
programSchema.index({ category: 1 });
programSchema.index({ startDate: 1 });
programSchema.index({ title: 'text', description: 'text' });

// Virtual for progress percentage
programSchema.virtual('progressPercentage').get(function() {
  if (this.maxParticipants && this.maxParticipants > 0) {
    return Math.round((this.currentParticipants / this.maxParticipants) * 100);
  }
  return 0;
});

// Virtual for funding progress
programSchema.virtual('fundingProgress').get(function() {
  if (this.budget && this.budget > 0) {
    return Math.round((this.raisedAmount / this.budget) * 100);
  }
  return 0;
});

// Virtual for is fully funded
programSchema.virtual('isFullyFunded').get(function() {
  return this.budget && this.raisedAmount >= this.budget;
});

// Virtual for is fully booked
programSchema.virtual('isFullyBooked').get(function() {
  return this.maxParticipants && this.currentParticipants >= this.maxParticipants;
});

// Static method to get active programs
programSchema.statics.getActivePrograms = function() {
  return this.find({ status: 'active' })
    .sort({ startDate: 1 });
};

// Static method to get upcoming programs
programSchema.statics.getUpcomingPrograms = function() {
  return this.find({ status: 'upcoming' })
    .sort({ startDate: 1 });
};

// Static method to get programs by category
programSchema.statics.getProgramsByCategory = function(category: string) {
  return this.find({ category, status: { $in: ['active', 'upcoming'] } })
    .sort({ startDate: 1 });
};

// Static method to search programs
programSchema.statics.searchPrograms = function(searchTerm: string) {
  return this.find({
    $text: { $search: searchTerm },
    status: { $in: ['active', 'upcoming'] }
  }).sort({ score: { $meta: 'textScore' } });
};

// Instance method to add participant
programSchema.methods.addParticipant = function() {
  if (this.maxParticipants && this.currentParticipants >= this.maxParticipants) {
    throw new Error('Program is fully booked');
  }
  this.currentParticipants += 1;
  return this.save();
};

// Instance method to remove participant
programSchema.methods.removeParticipant = function() {
  if (this.currentParticipants > 0) {
    this.currentParticipants -= 1;
    return this.save();
  }
  return this;
};

// Instance method to add donation
programSchema.methods.addDonation = function(amount: number) {
  this.raisedAmount += amount;
  return this.save();
};

// Pre-save middleware to validate participants
programSchema.pre('save', function(next) {
  if (this.maxParticipants && this.currentParticipants > this.maxParticipants) {
    next(new Error('Current participants cannot exceed maximum participants'));
  } else {
    next();
  }
});

// Pre-save middleware to update status based on dates
programSchema.pre('save', function(next) {
  const now = new Date();
  
  if (this.startDate && this.startDate <= now && this.status === 'upcoming') {
    this.status = 'active';
  }
  
  if (this.endDate && this.endDate <= now && this.status === 'active') {
    this.status = 'completed';
  }
  
  next();
});

// Export the model
export const Program = model<ProgramDocument>('Program', programSchema);

// Export types
export type { ProgramDocument };
