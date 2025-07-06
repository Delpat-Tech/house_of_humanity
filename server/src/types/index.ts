// ============================================================================
// SERVER-SIDE TYPES
// ============================================================================

import { Request, Response, NextFunction } from 'express';

// ============================================================================
// DATABASE MODEL TYPES
// ============================================================================

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'volunteer' | 'donor' | 'guest';
  phone?: string;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  preferences?: {
    newsletter: boolean;
    notifications: boolean;
  };
}

export interface Donation {
  _id?: string;
  donorId: string;
  amount: number;
  currency: string;
  cause: string;
  paymentMethod: 'card' | 'upi' | 'bank_transfer' | 'cash';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  anonymous: boolean;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Program {
  _id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'active' | 'completed' | 'upcoming';
  startDate?: Date;
  endDate?: Date;
  location?: string;
  maxParticipants?: number;
  currentParticipants: number;
  budget?: number;
  raisedAmount: number;
  impact: {
    beneficiaries: number;
    description: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Volunteer {
  _id?: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: {
    days: string[];
    timeSlots: string[];
  };
  experience: string;
  interests: string[];
  status: 'active' | 'inactive' | 'pending';
  totalHours: number;
  programs: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  category: string;
  maxParticipants: number;
  currentParticipants: number;
  registrationRequired: boolean;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// API REQUEST/RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role?: string;
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
  refreshToken: string;
}

// Donation
export interface CreateDonationRequest {
  amount: number;
  cause: string;
  paymentMethod: string;
  anonymous?: boolean;
  message?: string;
}

export interface DonationResponse {
  donation: Donation;
  paymentUrl?: string;
}

// Program
export interface CreateProgramRequest {
  title: string;
  description: string;
  category: string;
  image: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  maxParticipants?: number;
  budget?: number;
  impact: {
    beneficiaries: number;
    description: string;
  };
}

// Volunteer
export interface CreateVolunteerRequest {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: {
    days: string[];
    timeSlots: string[];
  };
  experience: string;
  interests: string[];
}

// Contact
export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

// ============================================================================
// MIDDLEWARE TYPES
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: Omit<User, 'password'>;
}

export interface AuthMiddleware {
  (req: AuthenticatedRequest, res: Response, next: NextFunction): void;
}

export interface ValidationMiddleware {
  (req: Request, res: Response, next: NextFunction): void;
}

export interface ErrorMiddleware {
  (error: Error, req: Request, res: Response, next: NextFunction): void;
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

export interface DatabaseConfig {
  uri: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    maxPoolSize: number;
    serverSelectionTimeoutMS: number;
    socketTimeoutMS: number;
  };
}

export interface ServerConfig {
  port: number;
  host: string;
  environment: 'development' | 'staging' | 'production';
  cors: {
    origin: string | string[];
    credentials: boolean;
  };
}

export interface JWTConfig {
  secret: string;
  expiresIn: string;
  refreshSecret: string;
  refreshExpiresIn: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface PaymentConfig {
  provider: 'razorpay' | 'stripe' | 'paypal';
  keyId: string;
  keySecret: string;
  currency: string;
}

export interface AppConfig {
  database: DatabaseConfig;
  server: ServerConfig;
  jwt: JWTConfig;
  email: EmailConfig;
  payment: PaymentConfig;
  upload: {
    maxSize: number;
    allowedTypes: string[];
    uploadPath: string;
  };
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type StatusType = 'success' | 'error' | 'warning' | 'info';

export type RoleType = 'admin' | 'volunteer' | 'donor' | 'guest';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export type ProgramStatus = 'active' | 'completed' | 'upcoming';

export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

export type ContactStatus = 'new' | 'read' | 'replied' | 'closed';

// ============================================================================
// ERROR TYPES
// ============================================================================

export interface AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  code?: string;
}

export interface ValidationErrorResponse {
  success: false;
  message: string;
  errors: ValidationError[];
  statusCode: number;
}

// ============================================================================
// LOGGING TYPES
// ============================================================================

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  userId?: string;
  requestId?: string;
  context?: Record<string, any>;
  stack?: string;
}

export interface RequestLog {
  method: string;
  url: string;
  statusCode: number;
  responseTime: number;
  userAgent?: string;
  ip?: string;
  userId?: string;
  timestamp: string;
}

// ============================================================================
// EMAIL TYPES
// ============================================================================

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

export interface EmailTemplates {
  welcome: EmailTemplate;
  passwordReset: EmailTemplate;
  donationConfirmation: EmailTemplate;
  volunteerRegistration: EmailTemplate;
  contactConfirmation: EmailTemplate;
}

// ============================================================================
// FILE UPLOAD TYPES
// ============================================================================

export interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer?: Buffer;
}

export interface FileUploadConfig {
  maxSize: number;
  allowedTypes: string[];
  uploadPath: string;
  generateUniqueName: boolean;
}

// ============================================================================
// CACHE TYPES
// ============================================================================

export interface CacheConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
  keyPrefix: string;
  ttl: number;
}

export interface CacheEntry<T = any> {
  key: string;
  value: T;
  ttl: number;
  createdAt: number;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export type {
  // Re-export commonly used types
  User,
  Donation,
  Program,
  Volunteer,
  Event,
  Contact,
  ApiResponse,
  PaginatedResponse,
  AuthenticatedRequest,
  AppConfig,
  AppError,
  LogEntry,
}; 