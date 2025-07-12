import express from 'express';
import { sendMail } from '../utils/mailer';

const router = express.Router();

// Test email endpoint
router.post('/test-email', async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: to, subject, message'
      });
    }

    // Check if environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({
        success: false,
        message: 'Email configuration not set. Please check SMTP_USER and SMTP_PASS environment variables.'
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Test Email from House of Humanity</h2>
        <p style="color: #666; line-height: 1.6;">${message}</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
          This is a test email sent from the House of Humanity application.
        </p>
      </div>
    `;

    const result = await sendMail({
      to,
      subject,
      html: htmlContent,
      text: message
    });

    res.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Email test error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Email service is running',
    timestamp: new Date().toISOString(),
    env: {
      smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
      smtpPort: process.env.SMTP_PORT || 587,
      smtpUser: process.env.SMTP_USER ? 'Set' : 'Not set',
      smtpPass: process.env.SMTP_PASS ? 'Set' : 'Not set',
      smtpFrom: process.env.SMTP_FROM || 'Not set'
    }
  });
});

export default router; 