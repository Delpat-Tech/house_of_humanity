// import { Request, Response } from 'express';
// import Razorpay from 'razorpay';
// import crypto from 'crypto';
// import nodemailer, { Transporter } from 'nodemailer';
// import { getDonorThankYouEmail, getNGOEmail, getFailureEmail } from '../utils/emailTemplates';
// import '../config';


// // Simple email validation regex
// const isValidEmail = (email: string): boolean => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

// // Validate critical environment variables at startup
// if (!process.env.NGO_EMAIL || !isValidEmail(process.env.NGO_EMAIL)) {
//   console.error('NGO_EMAIL is not set or invalid in .env file:', process.env.NGO_EMAIL);
//   process.exit(1);
// }

// if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//   console.error('EMAIL_USER or EMAIL_PASS is not set in .env file');
//   process.exit(1);
// }

// // Initialize Razorpay
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID as string,
//   key_secret: process.env.RAZORPAY_KEY_SECRET as string,
// });

// // Initialize Nodemailer
// const transporter: Transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER as string,
//     pass: process.env.EMAIL_PASS as string,
//   },
// });

// // Verify SMTP connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('Nodemailer SMTP configuration error:', error);
//   } else {
//     console.log('Nodemailer SMTP connection verified');
//   }
// });

// // Define interfaces for request bodies and Razorpay order response
// interface CreateOrderBody {
//   amount: number;
//   purpose: string;
//   donorName?: string;
//   donorEmail?: string;
//   donorPhone?: string;
// }

// interface PaymentAuthBody {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
//   donorName: string;
//   donorEmail: string;
//   donorPhone: string;
//   amount: number;
//   purpose: string;
// }

// interface RazorpayOrder {
//   id: string;
//   entity: string;
//   amount: string | number;
//   amount_paid: number;
//   amount_due: number;
//   currency: string;
//   receipt?: string;
//   status: string;
//   attempts: number;
//   notes?: {
//     purpose?: string;
//     donorName?: string;
//     donorEmail?: string;
//     donorPhone?: string;
//     [key: string]: any;
//   };
//   created_at: number;
// }

// const allowedPurposes = [
//   'Child Health and Upliftment',
//   'Women Empowerment Fund',
//   'Sustainable Livelihood',
//   'Hygiene Awareness',
//   'Community Outreach Campaigns',
//   'Women Health',
//   'Women Empowerment',
//   'Healthcare Fund',
//   'Sitaare Sponsor',
//   'Sitaare Nutrition',
//   'Sitaare Full Care',
//   'Sitaare One-Time Meal',
//   'Sitaare Meal for Two',
//   'Sitaare Celebration',
//   'General Donation',
// ];

// // Retry mechanism for Razorpay payment fetch
// const fetchPaymentWithRetry = async (paymentId: string, retries = 3, delay = 1000): Promise<any> => {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const payment = await razorpay.payments.fetch(paymentId);
//       return payment;
//     } catch (error) {
//       if (error instanceof Error) {
//         console.warn(`Retry ${i + 1} for payment fetch:`, error.message);
//       } else {
//         console.warn(`Retry ${i + 1} for payment fetch:`, error);
//       }
//       if (i < retries - 1) {
//         await new Promise((resolve) => setTimeout(resolve, delay));
//       } else {
//         throw error;
//       }
//     }
//   }
// };

// // Test email endpoint
// export const testEmail = async (req: Request, res: Response) => {
//   try {
//     await transporter.verify();
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.NGO_EMAIL,
//       subject: 'Test Email from House of Humanity',
//       text: 'This is a test email to verify Nodemailer configuration.',
//     });
//     res.json({ success: true, message: 'Test email sent successfully' });
//   } catch (error) {
//     const errMsg = error instanceof Error ? error.message : String(error);
//     res.status(500).json({ success: false, error: 'Failed to send test email', details: errMsg });
//   }
// };

// export const createOrder = async (req: Request<{}, any, CreateOrderBody>, res: Response) => {
//   try {
//     const { amount, purpose, donorName, donorEmail, donorPhone } = req.body;

//     // Validate input
//     if (!amount || !purpose) {
//       console.error('Missing required fields:', { amount, purpose });
//       return res.status(400).json({ success: false, error: 'Amount and purpose are required' });
//     }

//     if (typeof amount !== 'number' || amount <= 0) {
//       console.error('Invalid amount:', amount);
//       return res.status(400).json({ success: false, error: 'Invalid amount' });
//     }

//     if (!allowedPurposes.includes(purpose)) {
//       console.error('Invalid purpose:', purpose);
//       return res.status(400).json({ success: false, error: 'Invalid donation purpose' });
//     }

//     const receipt = `don_${Date.now()}`;
//     const order: RazorpayOrder = await razorpay.orders.create({
//       amount: amount * 100, // Convert INR to paise
//       currency: 'INR',
//       receipt,
//       notes: {
//         purpose,
//         donorName: donorName || 'Anonymous',
//         donorEmail: donorEmail || '',
//         donorPhone: donorPhone || '',
//       },
//     });

//     // Validate order response
//     if (!order || !order.id) {
//       console.error('Razorpay order creation failed:', { order });
//       throw new Error('Invalid order response from Razorpay');
//     }

//     // Validate receipt
//     if (typeof order.receipt !== 'string') {
//       console.error('Invalid receipt in order response:', { order });
//       throw new Error('Receipt not found in Razorpay order response');
//     }

//     // Convert amount to number if it's a string
//     const amountInPaise = typeof order.amount === 'string' ? parseFloat(order.amount) : order.amount;
//     if (isNaN(amountInPaise) || amountInPaise <= 0) {
//       console.error('Invalid amount in order response:', { order });
//       throw new Error('Invalid amount in Razorpay order response');
//     }

//     const amountInINR = amountInPaise / 100; // Convert paise to INR for logging

//     console.log('Order created successfully:', {
//       orderId: order.id,
//       amount: amountInINR,
//       receipt: order.receipt,
//       purpose,
//       donorName: donorName || 'Anonymous',
//       donorEmail,
//       donorPhone,
//     });

//     res.json({
//       success: true,
//       data: {
//         orderId: order.id,
//         amount: amountInPaise,
//         currency: order.currency,
//         keyId: process.env.RAZORPAY_KEY_ID,
//         donorName: donorName || 'Anonymous',
//         donorEmail,
//         donorPhone,
//         purpose,
//       },
//     });
//   } catch (error: any) {
//     console.error('Order creation error:', {
//       message: error.message,
//       stack: error.stack,
//       requestBody: req.body,
//     });
//     res.status(500).json({ success: false, error: 'Failed to create payment order', details: error.message });
//   }
// };

// export const paymentAuth = async (req: Request<{}, any, PaymentAuthBody>, res: Response) => {
//   try {
//     const { razorpay_payment_id, razorpay_order_id, razorpay_signature, donorName, donorEmail, donorPhone, amount, purpose } = req.body;

//     // Validate input
//     if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
//       console.error('Missing payment verification fields:', { razorpay_payment_id, razorpay_order_id, razorpay_signature });
//       return res.status(400).json({ success: false, error: 'Missing payment verification details' });
//     }

//     // Verify payment signature
//     const generatedSignature = crypto
//       .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET as string)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest('hex');

//     if (generatedSignature !== razorpay_signature) {
//       console.error('Invalid payment signature:', { razorpay_payment_id, razorpay_order_id });
//       if (donorEmail && isValidEmail(donorEmail)) {
//         try {
//           await transporter.sendMail({
//             from: process.env.EMAIL_USER as string,
//             to: donorEmail,
//             subject: 'Donation Payment Failed - House of Humanity',
//             html: getFailureEmail(donorName || 'Donor', amount, purpose, 'Invalid payment signature'),
//           });
//           console.log('Failure email sent to:', donorEmail);
//         } catch (emailError) {
//           console.error('Error sending failure email:', emailError);
//         }
//       } else {
//         console.warn('No valid donor email for failure email:', donorEmail);
//       }

//       return res.status(400).json({ success: false, error: 'Invalid payment signature' });
//     }

//     // Fetch payment details from Razorpay
//     const payment = await fetchPaymentWithRetry(razorpay_payment_id);
//     console.log('Razorpay payment fetch response:', {
//       paymentId: razorpay_payment_id,
//       status: payment?.status,
//       details: payment,
//     });
//     if (!payment || payment.status !== 'captured') {
//       console.error('Payment not captured:', {
//         paymentId: razorpay_payment_id,
//         status: payment?.status,
//         errorDescription: payment?.error_description,
//       });
//       if (donorEmail && isValidEmail(donorEmail)) {
//         try {
//           await transporter.sendMail({
//             from: process.env.EMAIL_USER as string,
//             to: donorEmail,
//             subject: 'Donation Payment Failed - House of Humanity',
//             html: getFailureEmail(donorName || 'Donor', amount, purpose, payment?.error_description || 'Payment not captured'),
//           });
//           console.log('Failure email sent to:', donorEmail);
//         } catch (emailError) {
//           console.error('Error sending failure email:', emailError);
//         }
//       } else {
//         console.warn('No valid donor email for failure email:', donorEmail);
//       }

//       return res.status(400).json({
//         success: false,
//         error: 'Payment not captured',
//         details: payment?.error_description || 'Payment not captured',
//       });
//     }

//     // Validate email addresses for success emails
//     const donorEmailValid = donorEmail && isValidEmail(donorEmail);
//     if (!donorEmailValid) {
//       console.warn('Invalid or missing donor email:', donorEmail);
//     }
//     const ngoEmailValid = process.env.NGO_EMAIL && isValidEmail(process.env.NGO_EMAIL);
//     if (!ngoEmailValid) {
//       console.warn('Invalid or missing NGO email:', process.env.NGO_EMAIL);
//     }

//     // Prepare email promises
//     const emailPromises: Promise<any>[] = [];

//     if (donorEmailValid) {
//       emailPromises.push(
//         transporter.sendMail({
//           from: process.env.EMAIL_USER as string,
//           to: donorEmail,
//           subject: 'Thank You for Your Donation - House of Humanity',
//           html: getDonorThankYouEmail(donorName || 'Anonymous', amount, purpose),
//         })
//       );
//     }
//     if (ngoEmailValid) {
//       emailPromises.push(
//         transporter.sendMail({
//           from: process.env.EMAIL_USER as string,
//           to: process.env.NGO_EMAIL,
//           subject: 'New Donation Received - House of Humanity',
//           html: getNGOEmail(donorName || 'Anonymous', donorEmail || 'Not provided', donorPhone || 'Not provided', amount, purpose),
//         })
//       );
//     }

//     if (emailPromises.length > 0) {
//       try {
//         await Promise.all(emailPromises);
//         console.log('Emails sent successfully:', {
//           donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
//           ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
//         });
//       } catch (emailError) {
//         console.error('Error sending emails:', emailError);
//       }
//     } else {
//       console.warn('No emails sent due to lack of valid recipients:', {
//         donorEmail,
//         ngoEmail: process.env.NGO_EMAIL,
//       });
//     }

//     console.log('Payment successful:', {
//       paymentId: razorpay_payment_id,
//       orderId: razorpay_order_id,
//       amount: amount / 100,
//       purpose,
//       donorName,
//       donorEmail,
//       donorPhone,
//     });

//     res.json({
//       success: true,
//       data: {
//         paymentId: razorpay_payment_id,
//         orderId: razorpay_order_id,
//         amount: amount / 100,
//         purpose,
//         donorName,
//         donorEmail,
//         donorPhone,
//         createdAt: new Date().toISOString(),
//       },
//     });
//   } catch (error: any) {
//     console.error('Payment auth error:', {
//       message: error.message,
//       stack: error.stack,
//     });
//     res.status(500).json({ success: false, error: 'Payment verification failed', details: error.message });
//   }
// };

// export const webhook = async (req: Request, res: Response) => {
//   try {
//     const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string;
//     const signature = req.headers['x-razorpay-signature'] as string;

//     if (!webhookSecret) {
//       console.error('RAZORPAY_WEBHOOK_SECRET is not set in .env file');
//       return res.status(500).json({ status: 'error', message: 'Webhook secret not configured' });
//     }

//     const generatedSignature = crypto
//       .createHmac('sha256', webhookSecret)
//       .update(JSON.stringify(req.body))
//       .digest('hex');

//     if (generatedSignature !== signature) {
//       console.error('Invalid webhook signature:', { signature, generatedSignature });
//       return res.status(400).json({ status: 'error', message: 'Invalid signature' });
//     }

//     const event = req.body.event;
//     console.log('Webhook event received:', { event, payload: req.body });

//     if (event === 'payment.captured') {
//       const { payment, order } = req.body.payload;
//       const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
//       const donorName = order.entity.notes.donorName || 'Anonymous';
//       const donorEmail = order.entity.notes.donorEmail;
//       const donorPhone = order.entity.notes.donorPhone;
//       const purpose = order.entity.notes.purpose || 'General Donation';
//       const paymentId = payment.entity.id;
//       const orderId = order.entity.id;

//       const donorEmailValid = donorEmail && isValidEmail(donorEmail);
//       if (!donorEmailValid) {
//         console.warn('Invalid or missing donor email:', donorEmail);
//       }
//       const ngoEmailValid = process.env.NGO_EMAIL && isValidEmail(process.env.NGO_EMAIL);
//       if (!ngoEmailValid) {
//         console.warn('Invalid or missing NGO email:', process.env.NGO_EMAIL);
//       }

//       const emailPromises: Promise<any>[] = [];
//       if (donorEmailValid) {
//         emailPromises.push(
//           transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: donorEmail,
//             subject: 'Thank You for Your Donation - House of Humanity',
//             html: getDonorThankYouEmail(donorName, amountInINR * 100, purpose),
//           })
//         );
//       }
//       if (ngoEmailValid) {
//         emailPromises.push(
//           transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.NGO_EMAIL,
//             subject: 'New Donation Received - House of Humanity',
//             html: getNGOEmail(donorName, donorEmail || 'Not provided', donorPhone || 'Not provided', amountInINR * 100, purpose),
//           })
//         );
//       }

//       if (emailPromises.length > 0) {
//         try {
//           await Promise.all(emailPromises);
//           console.log('Webhook emails sent successfully:', {
//             donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
//             ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
//           });
//         } catch (emailError) {
//           console.error('Webhook email error:', emailError);
//         }
//       } else {
//         console.warn('No webhook emails sent due to lack of valid recipients:', {
//           donorEmail,
//           ngoEmail: process.env.NGO_EMAIL,
//         });
//       }

//       console.log('Payment captured:', {
//         paymentId: payment.entity.id,
//         orderId: order.entity.id,
//         amount: isNaN(amountInINR) ? 'Invalid amount' : amountInINR,
//         receipt: order.entity.receipt || 'Not provided',
//         purpose,
//         donorName,
//         donorEmail,
//         donorPhone: order.entity.notes.donorPhone,
//       });
//     } else if (event === 'payment.failed') {
//       const { payment, order } = req.body.payload;
//       const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
//       const donorName = order.entity.notes.donorName || 'Anonymous';
//       const donorEmail = order.entity.notes.donorEmail;
//       const purpose = order.entity.notes.purpose || 'General Donation';

//       if (donorEmail && isValidEmail(donorEmail)) {
//         try {
//           await transporter.sendMail({
//             from: process.env.EMAIL_USER as string,
//             to: donorEmail,
//             subject: 'Donation Payment Failed - House of Humanity',
//             html: getFailureEmail(donorName, amountInINR * 100, purpose, payment.entity.error_description || 'Payment failed'),
//           });
//           console.log('Webhook failure email sent to:', donorEmail);
//         } catch (emailError) {
//           console.error('Error sending webhook failure email:', emailError);
//         }
//       } else {
//         console.warn('No valid donor email for webhook failure email:', donorEmail);
//       }

//       console.log('Payment failed:', {
//         paymentId: payment.entity.id,
//         orderId: order.entity.id,
//         amount: isNaN(amountInINR) ? 'Invalid amount' : amountInINR,
//         receipt: order.entity.receipt || 'Not provided',
//         errorDescription: payment.entity.error_description || 'Payment failed',
//         purpose,
//         donorName,
//         donorEmail,
//         donorPhone: order.entity.notes.donorPhone,
//       });
//     }

//     res.json({ status: 'success' });
//   } catch (error: any) {
//     console.error('Webhook error:', {
//       message: error.message,
//       stack: error.stack,
//       event: req.body?.event,
//     });
//     res.status(500).json({ status: 'error', message: 'Webhook processing failed' });
//   }
// };
import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
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

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is not set in .env file');
  process.exit(1);
}

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

// Initialize Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
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

// Retry mechanism for Razorpay payment fetch
const fetchPaymentWithRetry = async (paymentId: string, retries = 3, delay = 1000): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    try {
      const payment = await razorpay.payments.fetch(paymentId);
      return payment;
    } catch (error) {
      if (error instanceof Error) {
        console.warn(`Retry ${i + 1} for payment fetch:`, error.message);
      } else {
        console.warn(`Retry ${i + 1} for payment fetch:`, error);
      }
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
};

// Test email endpoint
export const testEmail = async (req: Request, res: Response) => {
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NGO_EMAIL,
      subject: 'Test Email from House of Humanity',
      text: 'This is a test email to verify Nodemailer configuration.',
    });
    res.json({ success: true, message: 'Test email sent successfully' });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    res.status(500).json({ success: false, error: 'Failed to send test email', details: errMsg });
  }
};

export const createOrder = async (req: Request<{}, any, CreateOrderBody>, res: Response) => {
  try {
    const { amount, purpose, donorName, donorEmail, donorPhone } = req.body;

    // Validate input
    if (!amount || !purpose) {
      console.error('Missing required fields:', { amount, purpose });
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
        donorName: donorName || 'Anonymous',
        donorEmail: donorEmail || '',
        donorPhone: donorPhone || '',
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
      donorName: donorName || 'Anonymous',
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
        donorName: donorName || 'Anonymous',
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
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string;
    const signature = req.headers['x-razorpay-signature'] as string;

    // TODO: Obtain RAZORPAY_WEBHOOK_SECRET from Razorpay dashboard and add to .env file
    // Temporarily bypass signature verification for testing (NOT SAFE FOR PRODUCTION)
    if (webhookSecret && signature) {
      const generatedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(JSON.stringify(req.body))
        .digest('hex');

      if (generatedSignature !== signature) {
        console.error('Invalid webhook signature:', { signature, generatedSignature });
        return res.status(400).json({ status: 'error', message: 'Invalid signature' });
      }
    } else {
      console.warn('Webhook secret or signature missing; bypassing verification (development only)');
    }

    const event = req.body.event;
    console.log('Webhook event received:', { event, payload: req.body });

    if (event === 'payment.captured') {
      const { payment, order } = req.body.payload;
      const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
      const donorName = order.entity.notes.donorName || 'Anonymous';
      const donorEmail = order.entity.notes.donorEmail;
      const donorPhone = order.entity.notes.donorPhone || 'Not provided';
      const purpose = order.entity.notes.purpose || 'General Donation';
      const paymentId = payment.entity.id;
      const orderId = order.entity.id;

      // Verify payment status
      const paymentDetails = await fetchPaymentWithRetry(paymentId);
      if (!paymentDetails || paymentDetails.status !== 'captured') {
        console.error('Payment not captured:', {
          paymentId,
          status: paymentDetails?.status,
          errorDescription: paymentDetails?.error_description,
        });
        if (donorEmail && isValidEmail(donorEmail)) {
          try {
            await transporter.sendMail({
              from: process.env.EMAIL_USER as string,
              to: donorEmail,
              subject: 'Donation Payment Failed - House of Humanity',
              html: getFailureEmail(donorName, amountInINR * 100, purpose, paymentDetails?.error_description || 'Payment not captured'),
            });
            console.log('Webhook failure email sent to:', donorEmail);
          } catch (emailError) {
            console.error('Error sending webhook failure email:', emailError);
          }
        }
        return res.status(400).json({
          status: 'error',
          message: 'Payment not captured',
          details: paymentDetails?.error_description || 'Payment not captured',
        });
      }

      const donorEmailValid = donorEmail && isValidEmail(donorEmail);
      const ngoEmailValid = process.env.NGO_EMAIL && isValidEmail(process.env.NGO_EMAIL);

      const emailPromises: Promise<any>[] = [];
      if (donorEmailValid) {
        emailPromises.push(
          transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: donorEmail,
            subject: 'Thank You for Your Donation - House of Humanity',
            html: getDonorThankYouEmail(donorName, amountInINR * 100, purpose),
          })
        );
      }
      if (ngoEmailValid) {
        emailPromises.push(
          transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.NGO_EMAIL,
            subject: 'New Donation Received - House of Humanity',
            html: getNGOEmail(donorName, donorEmail || 'Not provided', donorPhone || 'Not provided', amountInINR * 100, purpose),
          })
        );
      }

      if (emailPromises.length > 0) {
        try {
          await Promise.all(emailPromises);
          console.log('Webhook emails sent successfully:', {
            donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
            ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
          });
        } catch (emailError) {
          console.error('Webhook email error:', emailError);
        }
      } else {
        console.warn('No webhook emails sent due to lack of valid recipients:', {
          donorEmail,
          ngoEmail: process.env.NGO_EMAIL,
        });
      }

      console.log('Payment captured:', {
        paymentId,
        orderId,
        amount: isNaN(amountInINR) ? 'Invalid amount' : amountInINR,
        receipt: order.entity.receipt || 'Not provided',
        purpose,
        donorName,
        donorEmail,
        donorPhone,
      });

      // Optionally, store payment details in a database for redirection handling
      // Example: Save to a database for later retrieval by the frontend
    } else if (event === 'payment.failed') {
      const { payment, order } = req.body.payload;
      const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
      const donorName = order.entity.notes.donorName || 'Anonymous';
      const donorEmail = order.entity.notes.donorEmail;
      const donorPhone = order.entity.notes.donorPhone || 'Not provided';
      const purpose = order.entity.notes.purpose || 'General Donation';

      if (donorEmail && isValidEmail(donorEmail)) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER as string,
            to: donorEmail,
            subject: 'Donation Payment Failed - House of Humanity',
            html: getFailureEmail(donorName, amountInINR * 100, purpose, payment.entity.error_description || 'Payment failed'),
          });
          console.log('Webhook failure email sent to:', donorEmail);
        } catch (emailError) {
          console.error('Error sending webhook failure email:', emailError);
        }
      } else {
        console.warn('No valid donor email for webhook failure email:', donorEmail);
      }

      console.log('Payment failed:', {
        paymentId: payment.entity.id,
        orderId: order.entity.id,
        amount: isNaN(amountInINR) ? 'Invalid amount' : amountInINR,
        receipt: order.entity.receipt || 'Not provided',
        errorDescription: payment.entity.error_description || 'Payment failed',
        purpose,
        donorName,
        donorEmail,
        donorPhone,
      });
    }

    res.json({ status: 'success' });
  } catch (error: any) {
    console.error('Webhook error:', {
      message: error.message,
      stack: error.stack,
      event: req.body?.event,
    });
    res.status(500).json({ status: 'error', message: 'Webhook processing failed' });
  }
};