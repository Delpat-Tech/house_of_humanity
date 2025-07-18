// config.ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

if (!process.env.NGO_EMAIL) {
    console.error("Missing NGO_EMAIL in .env");
    process.exit(1);
}
