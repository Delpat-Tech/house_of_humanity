import { Schema, model, Document } from 'mongoose';
import { Volunteer as VolunteerType } from '../types';

// Extend the Volunteer interface to include Mongoose Document methods
export interface VolunteerDocument extends VolunteerType, Document {
  toJSON(): VolunteerType;
}

// Volunteer Schema
const volunteerSchema = new Schema<VolunteerDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  skills: [{
    type: String,
    trim: true,
    enum: [
      'teaching', 'healthcare', 'cooking', 'driving', 'counseling',
      'event-management', 'fundraising', 'social-media', 'photography',
      'videography', 'translation', 'legal', 'accounting', 'other'
    ]
  }],
  availability: {
    days: [{
      type: String,
      enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    }],
    timeSlots: [{
      type: String,
      enum: ['morning', 'afternoon', 'evening', 'night']
    }]
  },
  experience: {
    type: String,
    required: [true, 'Experience description is required'],
    trim: true,
    maxlength: [500, 'Experience description cannot exceed 500 characters']
  },
  interests: [{
    type: String,
    trim: true,
    maxlength: [50, 'Interest cannot exceed 50 characters']
  }],
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },
  totalHours: {
    type: Number,
    default: 0,
    min: [0, 'Total hours cannot be negative']
  },
  programs: [{
    type: Schema.Types.ObjectId,
    ref: 'Program'
  }]
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
volunteerSchema.index({ userId: 1 }, { unique: true });
volunteerSchema.index({ email: 1 }, { unique: true });
volunteerSchema.index({ status: 1 });
volunteerSchema.index({ skills: 1 });
volunteerSchema.index({ 'availability.days': 1 });

// Virtual for user info (populated)
volunteerSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
});

// Virtual for program details (populated)
volunteerSchema.virtual('programDetails', {
  ref: 'Program',
  localField: 'programs',
  foreignField: '_id'
});

// Virtual for availability summary
volunteerSchema.virtual('availabilitySummary').get(function() {
  if (!this.availability.days.length) return 'Not specified';
  
  const days = this.availability.days.join(', ');
  const times = this.availability.timeSlots.join(', ');
  return `${days} (${times})`;
});

// Virtual for skills summary
volunteerSchema.virtual('skillsSummary').get(function() {
  return this.skills.join(', ');
});

// Static method to get active volunteers
volunteerSchema.statics.getActiveVolunteers = function() {
  return this.find({ status: 'active' })
    .populate('user', 'name email avatar')
    .sort({ totalHours: -1 });
};

// Static method to get volunteers by skill
volunteerSchema.statics.getVolunteersBySkill = function(skill: string) {
  return this.find({ 
    skills: skill, 
    status: 'active' 
  })
    .populate('user', 'name email avatar')
    .sort({ totalHours: -1 });
};

// Static method to get volunteers by availability
volunteerSchema.statics.getVolunteersByAvailability = function(day: string, timeSlot: string) {
  return this.find({
    'availability.days': day,
    'availability.timeSlots': timeSlot,
    status: 'active'
  })
    .populate('user', 'name email avatar')
    .sort({ totalHours: -1 });
};

// Static method to get top volunteers
volunteerSchema.statics.getTopVolunteers = function(limit = 10) {
  return this.find({ status: 'active' })
    .populate('user', 'name email avatar')
    .sort({ totalHours: -1 })
    .limit(limit);
};

// Instance method to add hours
volunteerSchema.methods.addHours = function(hours: number) {
  this.totalHours += hours;
  return this.save();
};

// Instance method to add program
volunteerSchema.methods.addProgram = function(programId: string) {
  if (!this.programs.includes(programId)) {
    this.programs.push(programId);
    return this.save();
  }
  return this;
};

// Instance method to remove program
volunteerSchema.methods.removeProgram = function(programId: string) {
  this.programs = this.programs.filter(id => id.toString() !== programId);
  return this.save();
};

// Instance method to update status
volunteerSchema.methods.updateStatus = function(status: 'active' | 'inactive' | 'pending') {
  this.status = status;
  return this.save();
};

// Pre-save middleware to validate availability
volunteerSchema.pre('save', function(next) {
  if (this.availability.days.length === 0) {
    next(new Error('At least one day of availability is required'));
  } else if (this.availability.timeSlots.length === 0) {
    next(new Error('At least one time slot is required'));
  } else {
    next();
  }
});

// Pre-save middleware to validate skills
volunteerSchema.pre('save', function(next) {
  if (this.skills.length === 0) {
    next(new Error('At least one skill is required'));
  } else {
    next();
  }
});

// Export the model
export const Volunteer = model<VolunteerDocument>('Volunteer', volunteerSchema);

// Export types
export type { VolunteerDocument };
