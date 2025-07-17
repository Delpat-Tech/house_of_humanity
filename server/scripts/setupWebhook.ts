import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import nodemailer, { Transporter } from 'nodemailer';
import Donation from './models/Donation';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

interface WebhookRequest extends Request {
  body: {
    event: string;
    payload: {
      payment: {
        entity: {
          order_id: string;
          payment_id: string;
        };
      };
    };
  };
  headers: {
    'x-razorpay-signature'?: string;
  };
}

const webhookHandler = async (req: WebhookRequest, res: Response) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string;
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(body)
    .digest('hex');

  if (signature === expectedSignature) {
    const event = req.body.event;
    if (event === 'payment.captured') {
      const { order_id, payment_id } = req.body.payload.payment.entity;
      const donation = await Donation.findOneAndUpdate(
        { razorpayOrderId: order_id },
        { razorpayPaymentId: payment_id, paymentStatus: 'completed' },
        { new: true }
      );

      if (donation) {
        console.log('Webhook: Donation saved:', donation);
        const transporter: Transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: donation.donorEmail || 'support@houseofhumanity.in',
          subject: 'Donation Confirmation',
          text: `Thank you for your donation of ₹${donation.amount}! Purpose: ${donation.description}`,
        });
        console.log('Webhook: Confirmation email sent to:', donation.donorEmail);
      }
    }
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(400).json({ status: 'verification_failed' });
  }
};

export default webhookHandler;