
export const getFormEmailTemplate = (type: 'contact' | 'testimonial', format: 'html' | 'text'): string => {
  const css = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background-color: #f8fafc;
        padding: 20px;
        line-height: 1.6;
      }
      
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }
      
      .header {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        color: white;
        padding: 24px;
        text-align: center;
      }
      
      .header h1 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      
      .header p {
        font-size: 14px;
        opacity: 0.9;
      }
      
      .priority-badge {
        display: inline-block;
        background: #10b981;
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        margin-top: 8px;
      }
      
      .content {
        padding: 32px;
      }
      
      .inquiry-type {
        background: #f0f9ff;
        border-left: 4px solid #2563eb;
        padding: 12px 16px;
        margin-bottom: 24px;
        border-radius: 0 6px 6px 0;
      }
      
      .inquiry-type h2 {
        color: #1e293b;
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;
      }
      
      .field-group {
        margin-bottom: 24px;
        padding: 0 8px;
      }
      
      .field-label {
        font-weight: 600;
        color: #374151;
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
      }
      
      .field-value {
        background: #f9fafb;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #e5e7eb;
        color: #1f2937;
        width: 100%;
        display: block;
        min-height: 20px;
      }
      
      .message-field {
        background: #fefefe;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        min-height: 120px;
        white-space: pre-wrap;
        color: #374151;
        width: 100%;
        display: block;
      }
      
      .metadata {
        background: #f8fafc;
        padding: 16px;
        border-radius: 8px;
        margin-top: 24px;
        border: 1px solid #e2e8f0;
      }
      
      .metadata h3 {
        color: #475569;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      
      .metadata-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        font-size: 13px;
      }
      
      .metadata-label {
        color: #64748b;
        font-weight: 500;
      }
      
      .metadata-value {
        color: #374151;
        font-weight: 400;
      }
      
      .actions {
        background: #f0f9ff;
        padding: 20px 32px;
        text-align: center;
        border-top: 1px solid #e2e8f0;
      }
      
      .btn {
        display: inline-block;
        padding: 10px 20px;
        margin: 0 8px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s;
      }
      
      .btn-primary {
        background: #2563eb;
        color: white;
      }
      
      .btn-primary:hover {
        background: #1d4ed8;
      }
      
      .btn-secondary {
        background: #10b981;
        color: white;
      }
      
      .btn-secondary:hover {
        background: #059669;
      }
      
      .footer {
        background: #1f2937;
        color: #9ca3af;
        padding: 20px 32px;
        text-align: center;
        font-size: 12px;
        line-height: 1.5;
      }
      
      .footer h4 {
        color: #ffffff;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
      }
      
      .footer p {
        margin-bottom: 6px;
      }
      
      .footer a {
        color: #60a5fa;
        text-decoration: none;
      }
      
      .footer a:hover {
        text-decoration: underline;
      }
      
      @media (max-width: 600px) {
        body {
          padding: 10px;
        }
        
        .content {
          padding: 24px;
        }
        
        .actions {
          padding: 16px 24px;
        }
        
        .footer {
          padding: 16px 24px;
        }
        
        .btn {
          display: block;
          margin: 8px 0;
        }
      }
    </style>
  `;

  if (type === 'contact') {
    if (format === 'html') {
      return `
<!DOCTYPE html>
<html>
<head>
  ${css}
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>Received from House of Humanity</p>
      <span class="priority-badge">New Inquiry</span>
    </div>
    <div class="content">
      <div class="inquiry-type">
        <h2>Contact Inquiry</h2>
      </div>
      <div class="field-group">
        <span class="field-label">Name</span>
        <span class="field-value">{{safeName}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Email</span>
        <span class="field-value">{{safeEmail}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Subject</span>
        <span class="field-value">{{safeSubject}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Message</span>
        <span class="message-field">{{safeMessage}}</span>
      </div>
      <div class="metadata">
        <h3>Submission Details</h3>
        <div class="metadata-item">
          <span class="metadata-label">Submitted at</span>
          <span class="metadata-value timestamp">{{timestamp}}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <a href="mailto:{{safeEmail}}?subject=Re: Your Inquiry" class="btn btn-primary">Reply to Sender</a>
      <a href="https://houseofhumanity.org" class="btn btn-secondary">Visit Website</a>
    </div>
    <div class="footer">
      <h4>House of Humanity</h4>
      <p>Transforming lives through compassion and action.</p>
      <p><a href="https://houseofhumanity.org">houseofhumanity.org</a></p>
      <p>Note: If replying on a mobile device, please copy the message text manually to avoid formatting issues.</p>
    </div>
  </div>
</body>
</html>
      `;
    } else {
      return `
New contact form submission from {{safeName}} ({{safeEmail}}):
Name: {{safeName}}
Email: {{safeEmail}}
Subject: {{safeSubject}}
Message: {{safeMessage}}
Submitted at: {{timestamp}}
      `;
    }
  } else if (type === 'testimonial') {
    if (format === 'html') {
      return `
<!DOCTYPE html>
<html>
<head>
  ${css}
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Testimonial Awaiting Review</h1>
      <p>Received from House of Humanity</p>
      <span class="priority-badge">New Testimonial</span>
    </div>
    <div class="content">
      <div class="inquiry-type">
        <h2>Testimonial Submission</h2>
      </div>
      <div class="field-group">
        <span class="field-label">Name</span>
        <span class="field-value">{{safeName}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Email</span>
        <span class="field-value">{{safeEmail}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Interaction Type</span>
        <span class="field-value">{{safeInteractionType}}{{safeOtherInteraction}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Rating</span>
        <span class="field-value">{{safeRating}}/5 ({{ratingStars}})</span>
      </div>
      <div class="field-group">
        <span class="field-label">Experience</span>
        <span class="message-field">{{safeExperience}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Impact</span>
        <span class="message-field">{{safeImpact}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Would Recommend</span>
        <span class="field-value">{{safeRecommendation}}{{safeOtherRecommendation}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Permission to Feature</span>
        <span class="field-value">{{safePermission}}</span>
      </div>
      <div class="field-group">
        <span class="field-label">Suggestions</span>
        <span class="message-field">{{safeSuggestions}}</span>
      </div>
      <div class="metadata">
        <h3>Submission Details</h3>
        <div class="metadata-item">
          <span class="metadata-label">Submitted at</span>
          <span class="metadata-value timestamp">{{timestamp}}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <a href="mailto:{{safeEmail}}?subject=Thank you for your testimonial" class="btn btn-primary">Reply to Sender</a>
      <a href="https://houseofhumanity.org" class="btn btn-secondary">Visit Website</a>
    </div>
    <div class="footer">
      <h4>House of Humanity</h4>
      <p>Transforming lives through compassion and action.</p>
      <p><a href="https://houseofhumanity.org">houseofhumanity.org</a></p>
      <p>Note: If replying on a mobile device, please copy the message text manually to avoid formatting issues.</p>
    </div>
  </div>
</body>
</html>
      `;
    } else {
      return `
New testimonial submission from {{safeName}} ({{safeEmail}}):
Interaction Type: {{safeInteractionType}}{{safeOtherInteraction}}
Rating: {{safeRating}}/5 ({{ratingStars}})
Experience: {{safeExperience}}
Impact: {{safeImpact}}
Would Recommend: {{safeRecommendation}}{{safeOtherRecommendation}}
Permission to Feature: {{safePermission}}
Suggestions: {{safeSuggestions}}
Submitted at: {{timestamp}}
      `;
    }
  }
  return '';
};