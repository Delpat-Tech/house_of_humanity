import { Schema, model, Document } from 'mongoose';
import { Donation as DonationType } from '../types';

// Extend the Donation interface to include Mongoose Document methods
export interface DonationDocument extends DonationType, Document {
  toJSON(): DonationType;
}

// Donation Schema
const donationSchema = new Schema<DonationDocument>({
  donorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Donor ID is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [1, 'Amount must be at least 1']
  },
  currency: {
    type: String,
    required: [true, 'Currency is required'],
    default: 'INR',
    enum: ['INR', 'USD', 'EUR', 'GBP']
  },
  cause: {
    type: String,
    required: [true, 'Cause is required'],
    trim: true,
    maxlength: [200, 'Cause cannot exceed 200 characters']
  },
  paymentMethod: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: ['card', 'upi', 'bank_transfer', 'cash'],
    default: 'card'
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  anonymous: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    trim: true,
    maxlength: [500, 'Message cannot exceed 500 characters']
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
donationSchema.index({ donorId: 1 });
donationSchema.index({ status: 1 });
donationSchema.index({ createdAt: -1 });
donationSchema.index({ cause: 1 });
donationSchema.index({ transactionId: 1 }, { unique: true, sparse: true });

// Virtual for formatted amount
donationSchema.virtual('formattedAmount').get(function() {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: this.currency
  }).format(this.amount);
});

// Virtual for donor info (populated)
donationSchema.virtual('donor', {
  ref: 'User',
  localField: 'donorId',
  foreignField: '_id',
  justOne: true
});

// Static method to get total donations
donationSchema.statics.getTotalDonations = function() {
  return this.aggregate([
    { $match: { status: 'completed' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);
};

// Static method to get donations by cause
donationSchema.statics.getDonationsByCause = function() {
  return this.aggregate([
    { $match: { status: 'completed' } },
    { $group: { _id: '$cause', total: { $sum: '$amount' }, count: { $sum: 1 } } },
    { $sort: { total: -1 } }
  ]);
};

// Static method to get recent donations
donationSchema.statics.getRecentDonations = function(limit = 10) {
  return this.find({ status: 'completed' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('donor', 'name email avatar');
};

// Instance method to mark as completed
donationSchema.methods.markAsCompleted = function(transactionId?: string) {
  this.status = 'completed';
  if (transactionId) {
    this.transactionId = transactionId;
  }
  return this.save();
};

// Instance method to mark as failed
donationSchema.methods.markAsFailed = function() {
  this.status = 'failed';
  return this.save();
};

// Pre-save middleware to validate amount
donationSchema.pre('save', function(next) {
  if (this.amount <= 0) {
    next(new Error('Amount must be greater than 0'));
  } else {
    next();
  }
});

// Export the model
export const Donation = model<DonationDocument>('Donation', donationSchema);

// Export types
export type { DonationDocument };
