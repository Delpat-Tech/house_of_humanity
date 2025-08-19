// config.ts
import dotenv from 'dotenv';
import path from 'path';

// Load environment-specific .env file (from server root, not dist)
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

console.log(`✅ Loaded environment variables from ${envFile}`);

