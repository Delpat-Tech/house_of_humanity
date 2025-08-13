// config.ts
import dotenv from 'dotenv';
import path from 'path';

// Load environment-specific .env file
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });
console.log

if (!process.env.NGO_EMAIL) {
    console.error("Missing NGO_EMAIL in .env");
    process.exit(1);
}
