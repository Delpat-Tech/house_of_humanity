import nodemailer, { Transporter } from 'nodemailer';
import { Request, Response } from 'express';
import { getFormEmailTemplate } from '../utils/formEmailTemplate';
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

// Initialize Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || "587"),
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
    console.log('Nodemailer SMTP connection for contact email verified');
  }
});

export const sendContactEmail = async (req: Request, res: Response): Promise<void> => {
  const { name, email, subject, message } = req.body;

  // Log full request body for debugging
  console.log('Received request body:', req.body);

  if (!name || !email || !subject || !message) {
    console.error('Missing required fields:', { name, email, subject, message });
    res.status(400).json({ success: false, error: 'All fields (name, email, subject, message) are required' });
    return;
  }

  if (!isValidEmail(email)) {
    console.error('Invalid email address:', email);
    res.status(400).json({ success: false, error: 'Invalid email address' });
    return;
  } 
  // Sanitize inputs to prevent XSS

  const sanitize = (input: string) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message).replace(/\n/g, '<br>');

    const recipient = process.env.NODE_ENV === 'production' ? process.env.NGO_EMAIL : 'jyotisingh0249@gmail.com'; // Default to NGO email
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  // Log timestamp for debugging
  console.log('Generated timestamp:', timestamp);

  // Get and replace placeholders in the email template
  const emailTemplate = getFormEmailTemplate();
  const htmlContent = emailTemplate
    .replace(/{{safeName}}/g, safeName)
    .replace(/{{safeEmail}}/g, safeEmail)
    .replace(/{{safeSubject}}/g, safeSubject)
    .replace(/{{safeMessage}}/g, safeMessage)
    .replace(/{{timestamp}}/g, timestamp);

  try {
    console.log('Preparing to send email:', {
      to: recipient,
      from: process.env.EMAIL_USER,
      sender: `${safeName} <${safeEmail}>`,
      subject: `New Inquiry from ${safeName}`,
    });

    const info = await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: safeEmail,
      subject: `New Inquiry from ${safeName}`,
      text: `
        New contact form submission from ${safeName} (${safeEmail}):
        Name: ${safeName}
        Email: ${safeEmail}
        Subject: ${safeSubject}
        Message: ${safeMessage}
      `,
      html: htmlContent,
    });

    console.log('Email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email sending failed:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      input: { name, email, subject, message },
    });
    throw new Error('Failed to send email. Please try again later.');
  }
};