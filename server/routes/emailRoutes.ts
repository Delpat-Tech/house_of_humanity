import { Router } from 'express';
import * as emailController from '../controllers/emailController';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/email', emailController.sendContactEmail);
router.post('/testimonial', upload.array('files', 5), emailController.sendTestimonialEmail);

export default router; 