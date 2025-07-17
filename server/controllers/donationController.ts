// import { Request, Response } from 'express';
// import Razorpay from 'razorpay';
// import crypto from 'crypto';
// import nodemailer, { Transporter } from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

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
//       const recipients = [donorEmail, process.env.NGO_EMAIL].filter(email => email && isValidEmail(email));
//       if (recipients.length === 0) {
//         console.warn('No valid recipients for failure email:', { donorEmail, ngoEmail: process.env.NGO_EMAIL });
//       } else {
//         const failureMailOptions = {
//           from: process.env.EMAIL_USER as string,
//           to: recipients.join(','),
//           subject: 'Donation Payment Failed - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             </head>
//             <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
//               <table role="presentation" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #2563eb; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
//                     <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity" style="max-width: 200px; height: auto;">
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px;">
//                     <h2 style="color: #333333; font-size: 20px; margin-top: 0;">Payment Failed</h2>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Dear ${donorName || 'Donor'},</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">We regret to inform you that your donation attempt of ₹${(amount / 100).toLocaleString()} for ${purpose} was unsuccessful.</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> Invalid payment signature</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Please try again or contact our support team at <a href="mailto:support@houseofhumanity.org" style="color: #2563eb; text-decoration: none;">support@houseofhumanity.org</a> for assistance.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #22c55e; color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
//                     <p style="font-size: 14px; margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved.</p>
//                     <p style="font-size: 14px; margin: 5px 0;">
//                       <a href="mailto:info@houseofhumanity.in" style="color: #ffffff; text-decoration: none;">Contact Us</a> | 
//                       <a href="https://hoh-demo-website.web.app" style="color: #ffffff; text-decoration: none;">Visit Our Website</a>
//                     </p>
//                   </td>
//                 </tr>
//               </table>
//             </body>
//             </html>
//           `,
//         };

//         try {
//           await transporter.sendMail(failureMailOptions);
//           console.log('Failure email sent to:', recipients);
//         } catch (emailError) {
//           console.error('Error sending failure email:', emailError);
//         }
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
//       const recipients = [donorEmail, process.env.NGO_EMAIL].filter(email => email && isValidEmail(email));
//       if (recipients.length === 0) {
//         console.warn('No valid recipients for failure email:', { donorEmail, ngoEmail: process.env.NGO_EMAIL });
//       } else {
//         const failureMailOptions = {
//           from: process.env.EMAIL_USER as string,
//           to: recipients.join(','),
//           subject: 'Donation Payment Failed - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             </head>
//             <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
//               <table role="presentation" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #2563eb; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
//                     <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity" style="max-width: 200px; height: auto;">
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px;">
//                     <h2 style="color: #333333; font-size: 20px; margin-top: 0;">Payment Failed</h2>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Dear ${donorName || 'Donor'},</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">We regret to inform you that your donation attempt of ₹${(amount / 100).toLocaleString()} for ${purpose} was unsuccessful.</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${payment?.error_description || 'Payment not captured'}</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Please try again or contact our support team at <a href="mailto:support@houseofhumanity.org" style="color: #2563eb; text-decoration: none;">support@houseofhumanity.org</a> for assistance.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #22c55e; color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
//                     <p style="font-size: 14px; margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved.</p>
//                     <p style="font-size: 14px; margin: 5px 0;">
//                       <a href="mailto:info@houseofhumanity.in" style="color: #ffffff; text-decoration: none;">Contact Us</a> | 
//                       <a href="https://hoh-demo-website.web.app" style="color: #ffffff; text-decoration: none;">Visit Our Website</a>
//                     </p>
//                   </td>
//                 </tr>
//               </table>
//             </body>
//             </html>
//           `,
//         };

//         try {
//           await transporter.sendMail(failureMailOptions);
//           console.log('Failure email sent to:', recipients);
//         } catch (emailError) {
//           console.error('Error sending failure email:', emailError);
//         }
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
//     const receiptRecipients = [donorEmailValid ? donorEmail : null, process.env.NGO_EMAIL]
//       .filter(Boolean)
//       .join(',');

//     if (!receiptRecipients) {
//       console.warn('No valid recipients for success emails:', { donorEmail, ngoEmail: process.env.NGO_EMAIL });
//     }

//     // Send emails
//     const emailPromises: Promise<any>[] = [];
//     if (donorEmailValid) {
//       emailPromises.push(
//         transporter.sendMail({
//           from: process.env.EMAIL_USER as string,
//           to: donorEmail,
//           subject: 'Thank You for Your Donation - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Thank You for Your Donation</title>
//               <style>
//                 body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//                 .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//                 .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//                 .header img { max-width: 180px; margin-bottom: 8px; }
//                 .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//                 .content { padding: 32px 32px 24px 32px; color: #22223b; }
//                 .content h2 { color: #2563eb; margin-top: 0; }
//                 .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//                 .cta-btn { display: inline-block; background: #22c55e; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 24px 0; transition: background 0.2s; }
//                 .cta-btn:hover { background: #2563eb; }
//                 .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//                 .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//               </style>
//             </head>
//             <body>
//               <div class="container">
//                 <div class="header">
//                   <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                   <h1>Thank You!</h1>
//                 </div>
//                 <div class="content">
//                   <h2>Dear ${donorName || 'Donor'},</h2>
//                   <p>Your generosity plants the seeds for a brighter future. We are deeply grateful for your donation of <strong>₹${(amount / 100).toLocaleString()}</strong> to support <strong>${purpose}</strong>.</p>
//                   <p>Your contribution is making a real difference in our mission to empower communities and uplift lives.</p>
//                   <a class="cta-btn" href="https://hoh-demo-website.web.app">Learn More About Our Work</a>
//                 </div>
//                 <div class="footer">
//                   © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                   <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                   <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//                 </div>
//               </div>
//             </body>
//             </html>
//           `,
//         })
//       );
//     }

//     emailPromises.push(
//       transporter.sendMail({
//         from: process.env.EMAIL_USER as string,
//         to: process.env.NGO_EMAIL,
//         subject: 'New Donation Received - House of Humanity',
//         html: `
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>New Donation Received</title>
//             <style>
//               body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//               .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//               .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//               .header img { max-width: 180px; margin-bottom: 8px; }
//               .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//               .content { padding: 32px 32px 24px 32px; color: #22223b; }
//               .content h2 { color: #2563eb; margin-top: 0; }
//               .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//               .donation-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
//               .donation-table th, .donation-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
//               .donation-table th { background: #f1f5f9; color: #2563eb; }
//               .donation-table tr:nth-child(even) { background: #f9fafb; }
//               .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//               .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header">
//                 <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                 <h1>New Donation Received</h1>
//               </div>
//               <div class="content">
//                 <h2>Donation Details</h2>
//                 <table class="donation-table">
//                   <tr><th>Donor</th><td>${donorName || 'Anonymous'}</td></tr>
//                   <tr><th>Email</th><td>${donorEmail || 'Not provided'}</td></tr>
//                   <tr><th>Phone</th><td>${donorPhone || 'Not provided'}</td></tr>
//                   <tr><th>Amount</th><td>₹${(amount / 100).toLocaleString()}</td></tr>
//                   <tr><th>Purpose</th><td>${purpose}</td></tr>
//                   <tr><th>Date</th><td>${new Date().toLocaleString()}</td></tr>
//                 </table>
//                 <p>Please ensure follow-up actions are taken as needed.</p>
//               </div>
//               <div class="footer">
//                 © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                 <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                 <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//               </div>
//             </div>
//           </body>
//           </html>
//         `,
//       })
//     );

//     if (receiptRecipients) {
//       emailPromises.push(
//         transporter.sendMail({
//           from: process.env.EMAIL_USER as string,
//           to: receiptRecipients,
//           subject: 'Donation Receipt - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Donation Receipt</title>
//               <style>
//                 body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//                 .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//                 .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//                 .header img { max-width: 180px; margin-bottom: 8px; }
//                 .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//                 .content { padding: 32px 32px 24px 32px; color: #22223b; }
//                 .content h2 { color: #2563eb; margin-top: 0; }
//                 .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//                 .receipt-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
//                 .receipt-table th, .receipt-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
//                 .receipt-table th { background: #f1f5f9; color: #2563eb; }
//                 .receipt-table tr:nth-child(even) { background: #f9fafb; }
//                 .cta-btn { display: inline-block; background: #22c55e; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 24px 0; transition: background 0.2s; }
//                 .cta-btn:hover { background: #2563eb; }
//                 .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//                 .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//               </style>
//             </head>
//             <body>
//               <div class="container">
//                 <div class="header">
//                   <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                   <h1>Donation Receipt</h1>
//                 </div>
//                 <div class="content">
//                   <h2>Dear ${donorName || 'Donor'},</h2>
//                   <p>Thank you for your generous donation. Below are the details of your contribution:</p>
//                   <table class="receipt-table">
//                     <tr><th>NGO</th><td>House of Humanity</td></tr>
//                     <tr><th>Amount</th><td>₹${(amount / 100).toLocaleString()}</td></tr>
//                     <tr><th>Purpose</th><td>${purpose}</td></tr>
//                     <tr><th>Donor Name</th><td>${donorName || 'Anonymous'}</td></tr>
//                     <tr><th>Email</th><td>${donorEmail || 'Not provided'}</td></tr>
//                     <tr><th>Phone</th><td>${donorPhone || 'Not provided'}</td></tr>
//                     <tr><th>Payment ID</th><td>${razorpay_payment_id}</td></tr>
//                     <tr><th>Order ID</th><td>${razorpay_order_id}</td></tr>
//                     <tr><th>Date</th><td>${new Date().toLocaleString()}</td></tr>
//                   </table>
//                   <p>We deeply appreciate your support in helping us make a difference.</p>
//                   <a class="cta-btn" href="https://hoh-demo-website.web.app">Support Us Again</a>
//                 </div>
//                 <div class="footer">
//                   © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                   <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                   <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//                 </div>
//               </div>
//             </body>
//             </html>
//           `,
//         })
//       );
//     }

//     if (emailPromises.length > 0) {
//       try {
//         await Promise.all(emailPromises);
//         console.log('Emails sent successfully:', {
//           donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
//           ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
//           receiptRecipients,
//         });
//       } catch (emailError) {
//         const errMsg = emailError instanceof Error ? emailError.message : String(emailError);
//         const errStack = emailError instanceof Error ? emailError.stack : undefined;
//         console.error('Error sending emails:', {
//           error: errMsg,
//           stack: errStack,
//           recipients: receiptRecipients,
//         });
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
//       requestBody: req.body,
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
//     console.log('Webhook event received:', { event, payload: req.body.payload });

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
//       const receiptRecipients = [donorEmailValid ? donorEmail : null, process.env.NGO_EMAIL]
//         .filter(Boolean)
//         .join(',');

//       const emailPromises: Promise<any>[] = [];
//       if (donorEmailValid) {
//         emailPromises.push(
//           transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: donorEmail,
//             subject: 'Thank You for Your Donation - House of Humanity',
//             html: `
//               <!DOCTYPE html>
//               <html lang="en">
//               <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Thank You for Your Donation</title>
//                 <style>
//                   body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//                   .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//                   .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//                   .header img { max-width: 180px; margin-bottom: 8px; }
//                   .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//                   .content { padding: 32px 32px 24px 32px; color: #22223b; }
//                   .content h2 { color: #2563eb; margin-top: 0; }
//                   .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//                   .cta-btn { display: inline-block; background: #22c55e; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 24px 0; transition: background 0.2s; }
//                   .cta-btn:hover { background: #2563eb; }
//                   .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//                   .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//                 </style>
//               </head>
//               <body>
//                 <div class="container">
//                   <div class="header">
//                     <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                     <h1>Thank You!</h1>
//                   </div>
//                   <div class="content">
//                     <h2>Dear ${donorName},</h2>
//                     <p>Your generosity plants the seeds for a brighter future. We are deeply grateful for your donation of <strong>₹${amountInINR.toLocaleString()}</strong> to support <strong>${purpose}</strong>.</p>
//                     <p>Your contribution is making a real difference in our mission to empower communities and uplift lives.</p>
//                     <a class="cta-btn" href="https://hoh-demo-website.web.app">Learn More About Our Work</a>
//                   </div>
//                   <div class="footer">
//                     © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                     <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                     <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//                   </div>
//                 </div>
//               </body>
//               </html>
//             `,
//           })
//         );
//       }

//       emailPromises.push(
//         transporter.sendMail({
//           from: process.env.EMAIL_USER,
//           to: process.env.NGO_EMAIL,
//           subject: 'New Donation Received - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>New Donation Received</title>
//               <style>
//                 body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//                 .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//                 .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//                 .header img { max-width: 180px; margin-bottom: 8px; }
//                 .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//                 .content { padding: 32px 32px 24px 32px; color: #22223b; }
//                 .content h2 { color: #2563eb; margin-top: 0; }
//                 .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//                 .donation-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
//                 .donation-table th, .donation-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
//                 .donation-table th { background: #f1f5f9; color: #2563eb; }
//                 .donation-table tr:nth-child(even) { background: #f9fafb; }
//                 .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//                 .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//               </style>
//             </head>
//             <body>
//               <div class="container">
//                 <div class="header">
//                   <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                   <h1>New Donation Received</h1>
//                 </div>
//                 <div class="content">
//                   <h2>Donation Details</h2>
//                   <table class="donation-table">
//                     <tr><th>Donor</th><td>${donorName}</td></tr>
//                     <tr><th>Email</th><td>${donorEmail || 'Not provided'}</td></tr>
//                     <tr><th>Phone</th><td>${donorPhone || 'Not provided'}</td></tr>
//                     <tr><th>Amount</th><td>₹${amountInINR.toLocaleString()}</td></tr>
//                     <tr><th>Purpose</th><td>${purpose}</td></tr>
//                     <tr><th>Date</th><td>${new Date().toLocaleString()}</td></tr>
//                   </table>
//                   <p>Please ensure follow-up actions are taken as needed.</p>
//                 </div>
//                 <div class="footer">
//                   © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                   <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                   <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//                 </div>
//               </div>
//             </body>
//             </html>
//           `,
//         })
//       );

//       if (receiptRecipients) {
//         emailPromises.push(
//           transporter.sendMail({
//             from: process.env.EMAIL_USER as string,
//             to: receiptRecipients,
//             subject: 'Donation Receipt - House of Humanity',
//             html: `
//               <!DOCTYPE html>
//               <html lang="en">
//               <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Donation Receipt</title>
//                 <style>
//                   body { background: #f6f8fa; margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; }
//                   .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(37,99,235,0.08); overflow: hidden; }
//                   .header { background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 32px 0 16px 0; text-align: center; }
//                   .header img { max-width: 180px; margin-bottom: 8px; }
//                   .header h1 { color: #fff; font-size: 2rem; margin: 0; letter-spacing: 1px; }
//                   .content { padding: 32px 32px 24px 32px; color: #22223b; }
//                   .content h2 { color: #2563eb; margin-top: 0; }
//                   .content p { font-size: 1.1rem; line-height: 1.7; margin: 12px 0; }
//                   .receipt-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
//                   .receipt-table th, .receipt-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
//                   .receipt-table th { background: #f1f5f9; color: #2563eb; }
//                   .receipt-table tr:nth-child(even) { background: #f9fafb; }
//                   .cta-btn { display: inline-block; background: #22c55e; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 24px 0; transition: background 0.2s; }
//                   .cta-btn:hover { background: #2563eb; }
//                   .footer { background: #f1f5f9; color: #64748b; text-align: center; padding: 18px 0; font-size: 0.95rem; }
//                   .footer a { color: #2563eb; text-decoration: none; margin: 0 8px; }
//                 </style>
//               </head>
//               <body>
//                 <div class="container">
//                   <div class="header">
//                     <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity Logo" />
//                     <h1>Donation Receipt</h1>
//                   </div>
//                   <div class="content">
//                     <h2>Dear ${donorName},</h2>
//                     <p>Thank you for your generous donation. Below are the details of your contribution:</p>
//                     <table class="receipt-table">
//                       <tr><th>NGO</th><td>House of Humanity</td></tr>
//                       <tr><th>Amount</th><td>₹${amountInINR.toLocaleString()}</td></tr>
//                       <tr><th>Purpose</th><td>${purpose}</td></tr>
//                       <tr><th>Donor Name</th><td>${donorName}</td></tr>
//                       <tr><th>Email</th><td>${donorEmail || 'Not provided'}</td></tr>
//                       <tr><th>Phone</th><td>${donorPhone || 'Not provided'}</td></tr>
//                       <tr><th>Payment ID</th><td>${paymentId}</td></tr>
//                       <tr><th>Order ID</th><td>${orderId}</td></tr>
//                       <tr><th>Date</th><td>${new Date().toLocaleString()}</td></tr>
//                     </table>
//                     <p>We deeply appreciate your support in helping us make a difference.</p>
//                     <a class="cta-btn" href="https://hoh-demo-website.web.app">Support Us Again</a>
//                   </div>
//                   <div class="footer">
//                     © ${new Date().getFullYear()} House of Humanity. All rights reserved.<br>
//                     <a href="mailto:info@houseofhumanity.in">Contact Us</a> |
//                     <a href="https://hoh-demo-website.web.app">Visit Our Website</a>
//                   </div>
//                 </div>
//               </body>
//               </html>
//             `,
//           })
//         );
//       }

//       if (emailPromises.length > 0) {
//         try {
//           await Promise.all(emailPromises);
//           console.log('Webhook emails sent successfully:', {
//             donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
//             ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
//             receiptRecipients,
//           });
//         } catch (emailError) {
//           const errMsg = emailError instanceof Error ? emailError.message : String(emailError);
//           const errStack = emailError instanceof Error ? emailError.stack : undefined;
//           console.error('Webhook email error:', {
//             error: errMsg,
//             stack: errStack,
//             recipients: receiptRecipients,
//           });
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

//       const recipients = [donorEmail, process.env.NGO_EMAIL].filter(email => email && isValidEmail(email));
//       if (recipients.length === 0) {
//         console.warn('No valid recipients for webhook failure email:', { donorEmail, ngoEmail: process.env.NGO_EMAIL });
//       } else {
//         const failureMailOptions = {
//           from: process.env.EMAIL_USER as string,
//           to: recipients.join(','),
//           subject: 'Donation Payment Failed - House of Humanity',
//           html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             </head>
//             <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
//               <table role="presentation" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #2563eb; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
//                     <img src="https://hoh-demo-website.web.app/HOHLogo-1.png" alt="House of Humanity" style="max-width: 200px; height: auto;">
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px;">
//                     <h2 style="color: #333333; font-size: 20px; margin-top: 0;">Payment Failed</h2>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Dear ${donorName},</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">We regret to inform you that your donation attempt of ₹${amountInINR.toLocaleString()} for ${purpose} was unsuccessful.</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${payment.entity.error_description || 'Payment failed'}</p>
//                     <p style="color: #333333; font-size: 16px; line-height: 1.5;">Please try again or contact our support team at <a href="mailto:support@houseofhumanity.org" style="color: #2563eb; text-decoration: none;">support@houseofhumanity.org</a> for assistance.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px; text-align: center; background-color: #22c55e; color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
//                     <p style="font-size: 14px; margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved.</p>
//                     <p style="font-size: 14px; margin: 5px 0;">
//                       <a href="mailto:info@houseofhumanity.in" style="color: #ffffff; text-decoration: none;">Contact Us</a> | 
//                       <a href="https://hoh-demo-website.web.app" style="color: #ffffff; text-decoration: none;">Visit Our Website</a>
//                     </p>
//                   </td>
//                 </tr>
//               </table>
//             </body>
//             </html>
//           `,
//         };

//         try {
//           await transporter.sendMail(failureMailOptions);
//           console.log('Webhook failure email sent to:', recipients);
//         } catch (emailError) {
//           console.error('Error sending webhook failure email:', emailError);
//         }
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
//       event: req.body.event,
//     });
//     res.status(500).json({ status: 'error', message: 'Webhook processing failed' });
//   }
// };

import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
import { getDonorThankYouEmail, getNGOEmail, getFailureEmail } from '../utils/emailTemplates';

dotenv.config();

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

interface PaymentAuthBody {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  purpose: string;
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

export const paymentAuth = async (req: Request<{}, any, PaymentAuthBody>, res: Response) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, donorName, donorEmail, donorPhone, amount, purpose } = req.body;

    // Validate input
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      console.error('Missing payment verification fields:', { razorpay_payment_id, razorpay_order_id, razorpay_signature });
      return res.status(400).json({ success: false, error: 'Missing payment verification details' });
    }

    // Verify payment signature
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET as string)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      console.error('Invalid payment signature:', { razorpay_payment_id, razorpay_order_id });
      if (donorEmail && isValidEmail(donorEmail)) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER as string,
            to: donorEmail,
            subject: 'Donation Payment Failed - House of Humanity',
            html: getFailureEmail(donorName || 'Donor', amount, purpose, 'Invalid payment signature'),
          });
          console.log('Failure email sent to:', donorEmail);
        } catch (emailError) {
          console.error('Error sending failure email:', emailError);
        }
      } else {
        console.warn('No valid donor email for failure email:', donorEmail);
      }

      return res.status(400).json({ success: false, error: 'Invalid payment signature' });
    }

    // Fetch payment details from Razorpay
    const payment = await fetchPaymentWithRetry(razorpay_payment_id);
    console.log('Razorpay payment fetch response:', {
      paymentId: razorpay_payment_id,
      status: payment?.status,
      details: payment,
    });
    if (!payment || payment.status !== 'captured') {
      console.error('Payment not captured:', {
        paymentId: razorpay_payment_id,
        status: payment?.status,
        errorDescription: payment?.error_description,
      });
      if (donorEmail && isValidEmail(donorEmail)) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER as string,
            to: donorEmail,
            subject: 'Donation Payment Failed - House of Humanity',
            html: getFailureEmail(donorName || 'Donor', amount, purpose, payment?.error_description || 'Payment not captured'),
          });
          console.log('Failure email sent to:', donorEmail);
        } catch (emailError) {
          console.error('Error sending failure email:', emailError);
        }
      } else {
        console.warn('No valid donor email for failure email:', donorEmail);
      }

      return res.status(400).json({
        success: false,
        error: 'Payment not captured',
        details: payment?.error_description || 'Payment not captured',
      });
    }

    // Validate email addresses for success emails
    const donorEmailValid = donorEmail && isValidEmail(donorEmail);
    if (!donorEmailValid) {
      console.warn('Invalid or missing donor email:', donorEmail);
    }
    const ngoEmailValid = process.env.NGO_EMAIL && isValidEmail(process.env.NGO_EMAIL);
    if (!ngoEmailValid) {
      console.warn('Invalid or missing NGO email:', process.env.NGO_EMAIL);
    }

    // Prepare email promises
    const emailPromises: Promise<any>[] = [];

    if (donorEmailValid) {
      emailPromises.push(
        transporter.sendMail({
          from: process.env.EMAIL_USER as string,
          to: donorEmail,
          subject: 'Thank You for Your Donation - House of Humanity',
          html: getDonorThankYouEmail(donorName || 'Anonymous', amount, purpose),
        })
      );
    }
    if (ngoEmailValid) {
      emailPromises.push(
        transporter.sendMail({
          from: process.env.EMAIL_USER as string,
          to: process.env.NGO_EMAIL,
          subject: 'New Donation Received - House of Humanity',
          html: getNGOEmail(donorName || 'Anonymous', donorEmail || 'Not provided', donorPhone || 'Not provided', amount, purpose),
        })
      );
    }

    if (emailPromises.length > 0) {
      try {
        await Promise.all(emailPromises);
        console.log('Emails sent successfully:', {
          donorEmail: donorEmailValid ? donorEmail : 'Not sent (invalid)',
          ngoEmail: ngoEmailValid ? process.env.NGO_EMAIL : 'Not sent (invalid)',
        });
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
      }
    } else {
      console.warn('No emails sent due to lack of valid recipients:', {
        donorEmail,
        ngoEmail: process.env.NGO_EMAIL,
      });
    }

    console.log('Payment successful:', {
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      amount: amount / 100,
      purpose,
      donorName,
      donorEmail,
      donorPhone,
    });

    res.json({
      success: true,
      data: {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        amount: amount / 100,
        purpose,
        donorName,
        donorEmail,
        donorPhone,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error('Payment auth error:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ success: false, error: 'Payment verification failed', details: error.message });
  }
};

export const webhook = async (req: Request, res: Response) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string;
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!webhookSecret) {
      console.error('RAZORPAY_WEBHOOK_SECRET is not set in .env file');
      return res.status(500).json({ status: 'error', message: 'Webhook secret not configured' });
    }

    const generatedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (generatedSignature !== signature) {
      console.error('Invalid webhook signature:', { signature, generatedSignature });
      return res.status(400).json({ status: 'error', message: 'Invalid signature' });
    }

    const event = req.body.event;
    console.log('Webhook event received:', { event, payload: req.body });

    if (event === 'payment.captured') {
      const { payment, order } = req.body.payload;
      const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
      const donorName = order.entity.notes.donorName || 'Anonymous';
      const donorEmail = order.entity.notes.donorEmail;
      const donorPhone = order.entity.notes.donorPhone;
      const purpose = order.entity.notes.purpose || 'General Donation';
      const paymentId = payment.entity.id;
      const orderId = order.entity.id;

      const donorEmailValid = donorEmail && isValidEmail(donorEmail);
      if (!donorEmailValid) {
        console.warn('Invalid or missing donor email:', donorEmail);
      }
      const ngoEmailValid = process.env.NGO_EMAIL && isValidEmail(process.env.NGO_EMAIL);
      if (!ngoEmailValid) {
        console.warn('Invalid or missing NGO email:', process.env.NGO_EMAIL);
      }

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
        paymentId: payment.entity.id,
        orderId: order.entity.id,
        amount: isNaN(amountInINR) ? 'Invalid amount' : amountInINR,
        receipt: order.entity.receipt || 'Not provided',
        purpose,
        donorName,
        donorEmail,
        donorPhone: order.entity.notes.donorPhone,
      });
    } else if (event === 'payment.failed') {
      const { payment, order } = req.body.payload;
      const amountInINR = typeof order.entity.amount === 'string' ? parseFloat(order.entity.amount) / 100 : order.entity.amount / 100;
      const donorName = order.entity.notes.donorName || 'Anonymous';
      const donorEmail = order.entity.notes.donorEmail;
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
        donorPhone: order.entity.notes.donorPhone,
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