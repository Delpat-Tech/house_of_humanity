import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import nodemailer, { Transporter } from 'nodemailer';
import { getDonorThankYouEmail, getNGOEmail, getFailureEmail } from '../utils/emailTemplates';
import '../config';

// Simple email validation regex
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate critical environment variables at startup
if (!process.env.NGO_EMAIL || !isValidEmail(process.env.NGO_EMAIL)) {
  console.error('NGO_EMAIL is not set or invalid in .env file:', process.env.NGO_EMAIL);
  process.exit(1);
}

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('EMAIL_USER or EMAIL_PASS is not set in .env file');
  process.exit(1);
}

if (!process.env.RAZORPAY_KEY_ID) {
  console.error('RAZORPAY_KEY_ID is not set in .env file');
  process.exit(1);
}

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

// Initialize Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., mail.houseofhumanity.in
  port: Number(process.env.SMTP_PORT), // e.g., 465
  // secure: process.env.MAIL_SECURE === 'true', // SSL: true for 465
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
  // tls: {
  //   rejectUnauthorized: false, // Optional: prevent cert errors on shared hosts
  // },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer SMTP configuration error:', error);
  } else {
    console.log('Nodemailer SMTP connection verified');
  }
});

// Define interfaces for request bodies and Razorpay order response
interface CreateOrderBody {
  amount: number;
  purpose: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
}

interface RazorpayOrder {
  id: string;
  entity: string;
  amount: string | number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt?: string;
  status: string;
  attempts: number;
  notes?: {
    purpose?: string;
    donorName?: string;
    donorEmail?: string;
    donorPhone?: string;
    [key: string]: any;
  };
  created_at: number;
}

const allowedPurposes = [
  'Child Health and Upliftment',
  'Women Empowerment Fund',
  'Sustainable Livelihood',
  'Hygiene Awareness',
  'Community Outreach Campaigns',
  'Women Health',
  'Women Empowerment',
  'Healthcare Fund',
  'Sitaare Sponsor',
  'Sitaare Nutrition',
  'Sitaare Full Care',
  'Sitaare One-Time Meal',
  'Sitaare Meal for Two',
  'Sitaare Celebration',
  'General Donation',
];


export const createOrder = async (req: Request<{}, any, CreateOrderBody>, res: Response) => {
  try {
    const { amount, purpose, donorName, donorEmail, donorPhone } = req.body;
    if (!donorPhone || !donorEmail || !donorName) {
      console.error('Missing required fields');
      return res.status(400).json({ success: false, error: 'Phone , Name and Email are required' });
    }
    // Validate input
    if (!amount || !purpose) {
      console.error('Missing required fields: amount, purpose ');
      return res.status(400).json({ success: false, error: 'Amount and purpose are required' });
    }

    if (typeof amount !== 'number' || amount <= 0) {
      console.error('Invalid amount:', amount);
      return res.status(400).json({ success: false, error: 'Invalid amount' });
    }

    if (!allowedPurposes.includes(purpose)) {
      console.error('Invalid purpose:', purpose);
      return res.status(400).json({ success: false, error: 'Invalid donation purpose' });
    }

    const receipt = `don_${Date.now()}`;
    const order: RazorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // Convert INR to paise
      currency: 'INR',
      receipt,
      notes: {
        purpose,
        donorName: donorName,
        donorEmail: donorEmail,
        donorPhone: donorPhone,
      },
    });

    // Validate order response
    if (!order || !order.id) {
      console.error('Razorpay order creation failed:', { order });
      throw new Error('Invalid order response from Razorpay');
    }

    // Validate receipt
    if (typeof order.receipt !== 'string') {
      console.error('Invalid receipt in order response:', { order });
      throw new Error('Receipt not found in Razorpay order response');
    }

    // Convert amount to number if it's a string
    const amountInPaise = typeof order.amount === 'string' ? parseFloat(order.amount) : order.amount;
    if (isNaN(amountInPaise) || amountInPaise <= 0) {
      console.error('Invalid amount in order response:', { order });
      throw new Error('Invalid amount in Razorpay order response');
    }

    const amountInINR = amountInPaise / 100; // Convert paise to INR for logging

    console.log('Order created successfully:', {
      orderId: order.id,
      amount: amountInINR,
      receipt: order.receipt,
      purpose,
      donorName: donorName,
      donorEmail,
      donorPhone,
    });

    res.json({
      success: true,
      data: {
        orderId: order.id,
        amount: amountInPaise,
        currency: order.currency,
        keyId: process.env.RAZORPAY_KEY_ID,
        donorName: donorName,
        donorEmail,
        donorPhone,
        purpose,
      },
    });
  } catch (error: any) {
    console.error('Order creation error:', {
      message: error.message,
      stack: error.stack,
      requestBody: req.body,
    });
    res.status(500).json({ success: false, error: 'Failed to create payment order', details: error.message });
  }
};

export const webhook = async (req: Request, res: Response) => {
  try {
    const event = req.body.event;
    console.log('Webhook event received:', { event, payload: req.body });

    if (event === 'payment.captured') {
      const payment = req.body.payload?.payment?.entity;
      const orderId = payment.order_id;

      let order: RazorpayOrder | null = null;
      if (orderId) {
        try {
          order = await razorpay.orders.fetch(orderId);
        } catch (fetchError) {
          console.error('Failed to fetch order:', fetchError);
          res.status(404).json({ status: 'error', message: 'Order not defined' });
          return; // Added return to prevent further execution
        }
      }

      const amountInINR = payment.amount;
      const notes = order?.notes || {};
      const donorName = notes.donorName;
      const donorEmail = notes.donorEmail;
      const donorPhone = notes.donorPhone;
      const purpose = notes.purpose;
      const paymentId = payment.id;
      if (!donorPhone || !donorEmail || !donorName || !purpose) {
        console.error('Missing required fields');
        return res.status(400).json({ success: false, error: 'Phone , Name ,Purpose and Email are required' });
      }

      const emailPromises: Promise<any>[] = [];

      emailPromises.push(
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: donorEmail,
          subject: 'Thank You for Your Donation - House of Humanity',
          html: getDonorThankYouEmail(donorName, amountInINR, purpose),
        })
      );


      emailPromises.push(
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.NGO_EMAIL,
          subject: 'New Donation Received - House of Humanity',
          html: getNGOEmail(donorName, donorEmail, donorPhone, amountInINR, purpose),
        })
      );

      if (emailPromises.length > 1) {
        try {
          await Promise.all(emailPromises);
          console.log('Webhook emails sent successfully');
        } catch (emailError) {
          console.error('Error sending webhook emails:', emailError);
        }
      }

      console.log('Payment captured:', {
        paymentId,
        orderId: order?.id || 'Not available',
        amount: amountInINR / 100,
        receipt: order?.receipt || 'Not provided',
        purpose,
        donorName,
        donorEmail,
        donorPhone,
      });
    } else if (event === 'payment.failed') {
      const payment = req.body.payload.payment.entity;
      const orderId = payment.order_id;

      let order: RazorpayOrder | null = null;
      if (orderId) {
        try {
          order = await razorpay.orders.fetch(orderId);
        } catch (fetchError) {
          console.error('Failed to fetch order for failed payment:', fetchError);
        }
      }

      const amountInINR = payment.amount;
      const notes = order?.notes || {};
      const donorName = notes.donorName;
      const donorEmail = notes.donorEmail;
      const donorPhone = notes.donorPhone;
      const purpose = notes.purpose;
      if (!donorPhone || !donorEmail || !donorName || !purpose) {
        console.error('Missing required fields');
        return res.status(400).json({ success: false, error: 'Phone , Name ,Purpose and Email are required' });
      }
      if (donorEmail && isValidEmail(donorEmail)) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER!,
            to: donorEmail,
            subject: 'Donation Payment Failed - House of Humanity',
            html: getFailureEmail(donorName, amountInINR, purpose, payment.error_description || 'Payment failed'),
          });
          console.log('Failure email sent to donor');
        } catch (emailError) {
          console.error('Error sending failure email:', emailError);
        }
      }

      console.log('Payment failed:', {
        paymentId: payment.id,
        orderId: order?.id,
        amount: amountInINR / 100,
        receipt: order?.receipt,
        errorDescription: payment.error_description || 'N/A',
        purpose,
        donorName,
        donorEmail,
        donorPhone,
      });
    }

    res.status(200).json({ status: 'webhook call success' });
  } catch (error: any) {
    console.error('Webhook error:', {
      message: error.message,
      stack: error.stack,
      event: req.body?.event,
    });
    res.status(500).json({ status: 'error', message: 'Webhook processing failed' });
  }
};