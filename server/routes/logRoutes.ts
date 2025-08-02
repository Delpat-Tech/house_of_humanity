import express from 'express';
import logger from '../utils/logger';

const router = express.Router();

router.post('/logs', (req, res) => {
  const { level, name, timestamp, message, userAgent, url } = req.body;
  
  logger.log(level, 'Frontend log:', {
    name,
    timestamp,
    message,
    userAgent,
    url
  });
  
  res.status(200).json({ success: true });
});

export default router;