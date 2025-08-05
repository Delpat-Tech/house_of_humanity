// config.ts
import dotenv from 'dotenv';
import path from 'path';

// Determine the environment (default to 'development')
const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = `.env.${nodeEnv}`;

// Load environment-specific .env file
dotenv.config({ path: path.resolve(__dirname, envFile) });
console.log(`Using environment file: ${envFile}`);

// Define required environment variables
const requiredEnvVars = [
  'PORT',
  'NGO_EMAIL',
  'EMAIL_USER',
  'EMAIL_PASS',
  'SMTP_HOST',
  'SMTP_PORT',
  nodeEnv === 'production' ? 'RAZORPAY_KEY_ID_LIVE' : 'RAZORPAY_KEY_ID',
  nodeEnv === 'production' ? 'RAZORPAY_KEY_SECRET_LIVE' : 'RAZORPAY_KEY_SECRET',
];

// Check for missing environment variables
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(`Missing environment variables: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Export configuration object
export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv,
  email: {
    ngoEmail: process.env.NGO_EMAIL,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
  },
  razorpay: {
    keyId: process.env[nodeEnv === 'production' ? 'RAZORPAY_KEY_ID_LIVE' : 'RAZORPAY_KEY_ID'],
    keySecret: process.env[nodeEnv === 'production' ? 'RAZORPAY_KEY_SECRET_LIVE' : 'RAZORPAY_KEY_SECRET'],
  },
};