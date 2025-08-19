// config.ts
import dotenv from 'dotenv';
import path from 'path';

// Load environment-specific .env file (from server root, not dist)
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

console.log(`✅ Loaded environment variables from ${envFile}`);

// Sanity check for required vars
if (!process.env.NGO_EMAIL) {
  console.error(`❌ Missing NGO_EMAIL in ${envFile}`);
  process.exit(1);
}

export const config = {
  port: process.env.PORT || 3000,
  email: process.env.NGO_EMAIL,
  emailUser: process.env.EMAIL_USER,
  ngoEmailPass: process.env.NGO_EMAIL_PASS,
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET,
};

