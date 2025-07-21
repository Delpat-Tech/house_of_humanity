import { Router } from 'express';
import * as donationController from '../controllers/donationController';

const router = Router();

router.post('/create-order', donationController.createOrder);
router.post('/webhook', donationController.webhook);

export default router;
