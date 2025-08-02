import dotenv from "dotenv";
import express, { Express } from 'express';
import morgan from 'morgan';
import logger from './utils/logger';
import cors from 'cors';
import donationRoutes from "./routes/donationRoutes";
import logRoutes from "./routes/logRoutes";

dotenv.config();


const app: Express = express();
app.use(cors());
app.use(express.json());

// HTTP request logging
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));
// Error handling middleware
app.use((error: any, req: any, res: any, next: any) => {
  logger.error('Unhandled error:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });
  res.status(500).json({ error: 'Internal server error' });
});

app.use('/api/donate', donationRoutes);
app.use('/api', logRoutes);

app.get('/health', (req, res) => {
  res.send('Server is running!');
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));