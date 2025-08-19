import nodemailer, { Transporter } from 'nodemailer';
import { Request, Response } from 'express';
import { getFormEmailTemplate } from '../utils/formEmailTemplate'; // Only import this function
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

if (!process.env.NGO_EMAIL_PASS) {
  console.error('NGO_EMAIL_PASS is not set in .env file');
  process.exit(1);
}

// Initialize Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || "465"),
  auth: {
    user: process.env.NGO_EMAIL as string,
    pass: process.env.NGO_EMAIL_PASS as string,
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
  console.log('Received contact request body:', req.body);

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
    
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  console.log('Generated timestamp:', timestamp);

  // Get HTML email template for contact form
  const emailTemplate = getFormEmailTemplate('contact', 'html');
  const htmlContent = emailTemplate
    .replace(/{{safeName}}/g, safeName)
    .replace(/{{safeEmail}}/g, safeEmail)
    .replace(/{{safeSubject}}/g, safeSubject)
    .replace(/{{safeMessage}}/g, safeMessage)
    .replace(/{{timestamp}}/g, timestamp);

  try {
    console.log('Preparing to send contact email:', {
      to: process.env.NGO_EMAIL,
      from: `${safeName} <${safeEmail}>`,
      subject: `New Inquiry from ${safeName}`,
    });

    const info = await transporter.sendMail({
      from: `${safeName} `,
      to: process.env.NGO_EMAIL,
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

    console.log('Contact email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Contact email sending failed:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      input: { name, email, subject, message },
    });
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
};

// Send testimonial email - FIXED VERSION
export const sendTestimonialEmail = async (req: Request, res: Response): Promise<void> => {
  const { 
    name, 
    email, 
    interactionType, 
    otherInteraction, 
    rating, 
    experience, 
    impact, 
    recommendation, 
    otherRecommendation, 
    permission, 
    suggestions 
  } = req.body;

  console.log('Received testimonial request body:', req.body);

  // Validate required fields
  if (!name || !email || !interactionType || !rating || !experience || !impact || !recommendation || !permission) {
    console.error('Missing required testimonial fields');
    res.status(400).json({ success: false, error: 'All required fields must be filled' });
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
  
  // Handle interaction type (include "Other" specification if applicable)
  const safeInteractionType = sanitize(interactionType);
  const safeOtherInteraction = otherInteraction ? ` (${sanitize(otherInteraction)})` : '';

  const safeRating = sanitize(rating);
  
  // Generate star rating display
  const ratingStars = '★'.repeat(parseInt(rating)) + '☆'.repeat(5 - parseInt(rating));
  
  const safeExperience = sanitize(experience).replace(/\n/g, '<br>');
  const safeImpact = sanitize(impact).replace(/\n/g, '<br>');
  
  // Handle recommendation (include "Other" specification if applicable)
  const safeRecommendation = sanitize(recommendation);
  const safeOtherRecommendation = otherRecommendation ? ` (${sanitize(otherRecommendation)})` : '';

  const safePermission = sanitize(permission);
  const safeSuggestions = suggestions ? sanitize(suggestions).replace(/\n/g, '<br>') : 'None provided';
  
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  // Get testimonial email template using the unified function
  const emailTemplate = getFormEmailTemplate('testimonial', 'html');
  const htmlContent = emailTemplate
    .replace(/{{safeName}}/g, safeName)
    .replace(/{{safeEmail}}/g, safeEmail)
    .replace(/{{safeInteractionType}}/g, safeInteractionType)
    .replace(/{{safeOtherInteraction}}/g, safeOtherInteraction)
    .replace(/{{safeRating}}/g, safeRating)
    .replace(/{{ratingStars}}/g, ratingStars)
    .replace(/{{safeExperience}}/g, safeExperience)
    .replace(/{{safeImpact}}/g, safeImpact)
    .replace(/{{safeRecommendation}}/g, safeRecommendation)
    .replace(/{{safeOtherRecommendation}}/g, safeOtherRecommendation)
    .replace(/{{safePermission}}/g, safePermission)
    .replace(/{{safeSuggestions}}/g, safeSuggestions)
    .replace(/{{timestamp}}/g, timestamp);

  try {
    console.log('Preparing to send testimonial email:', {
      to: process.env.NGO_EMAIL,
      from: `"${safeName}" <${safeEmail}>`,
      subject: `New Testimonial Awaiting Review - ${safeName}`,
    });

    const info = await transporter.sendMail({
      from: `"${safeName}" <${safeEmail}>`,
      to: process.env.NGO_EMAIL,
      replyTo: safeEmail,
      subject: `New Testimonial Awaiting Review - ${safeName}`,
      html: htmlContent,
      text: `
        New testimonial submission from ${safeName} (${safeEmail}):
        
        Interaction Type: ${interactionType}${otherInteraction ? ` (${otherInteraction})` : ''}
        Rating: ${rating}/5
        Experience: ${experience}
        Impact: ${impact}
        Would Recommend: ${recommendation}${otherRecommendation ? ` (${otherRecommendation})` : ''}
        Permission to Feature: ${permission}
        Suggestions: ${suggestions || 'None'}
        
        Submitted at: ${timestamp}
        
        Please review and approve the testimonial for publication on your website.
      `,
    });

    console.log('Testimonial email sent successfully:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    res.status(200).json({ success: true, message: 'Testimonial email sent successfully' });
  } catch (error: any) {
    console.error('Error sending testimonial email:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
    });
    res.status(500).json({ success: false, error: 'Failed to send testimonial email. Please try again later.' });
  }
};