// export const getFormEmailTemplate = (): string => {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>New Contact Form Submission</title>
//   <style>
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }

//     body {
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//       background-color: #f8fafc;
//       padding: 20px;
//       line-height: 1.6;
//     }

//     .email-container {
//       max-width: 600px;
//       margin: 0 auto;
//       background: white;
//       border-radius: 12px;
//       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//       overflow: hidden;
//     }

//     .header {
//       background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
//       color: white;
//       padding: 24px;
//       text-align: center;
//     }

//     .header h1 {
//       font-size: 24px;
//       font-weight: 600;
//       margin-bottom: 4px;
//     }

//     .header p {
//       font-size: 14px;
//       opacity: 0.9;
//     }

//     .priority-badge {
//       display: inline-block;
//       background: #10b981;
//       color: white;
//       padding: 4px 12px;
//       border-radius: 20px;
//       font-size: 11px;
//       font-weight: 600;
//       text-transform: uppercase;
//       margin-top: 8px;
//     }

//     .content {
//       padding: 32px;
//     }

//     .inquiry-type {
//       background: #f0f9ff;
//       border-left: 4px solid #2563eb;
//       padding: 12px 16px;
//       margin-bottom: 24px;
//       border-radius: 0 6px 6px 0;
//     }

//     .inquiry-type h2 {
//       color: #1e293b;
//       font-size: 18px;
//       font-weight: 600;
//       text-transform: capitalize;
//     }

//     .field-group {
//       margin-bottom: 20px;
//     }

//     .field-label {
//       font-weight: 600;
//       color: #374151;
//       font-size: 14px;
//       margin-bottom: 6px;
//       display: block;
//     }

//     .field-value {
//       background: #f9fafb;
//       padding: 12px;
//       border-radius: 6px;
//       border: 1px solid #e5e7eb;
//       color: #1f2937;
//       width: 100%;
//       display: block;
//       min-height: 20px;
//     }

//     .message-field {
//       background: #fefefe;
//       border: 1px solid #e5e7eb;
//       border-radius: 8px;
//       padding: 16px;
//       min-height: 120px;
//       white-space: pre-wrap;
//       color: #374151;
//     }

//     .metadata {
//       background: #f8fafc;
//       padding: 16px;
//       border-radius: 8px;
//       margin-top: 24px;
//       border: 1px solid #e2e8f0;
//     }

//     .metadata h3 {
//       color: #475569;
//       font-size: 14px;
//       font-weight: 600;
//       margin-bottom: 8px;
//     }

//     .metadata-item {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 4px;
//       font-size: 13px;
//     }

//     .metadata-label {
//       color: #64748b;
//       font-weight: 500;
//     }

//     .metadata-value {
//       color: #374151;
//       font-weight: 400;
//     }

//     .actions {
//       background: #f0f9ff;
//       padding: 20px 32px;
//       text-align: center;
//       border-top: 1px solid #e2e8f0;
//     }

//     .btn {
//       display: inline-block;
//       padding: 10px 20px;
//       margin: 0 8px;
//       border-radius: 6px;
//       text-decoration: none;
//       font-weight: 600;
//       font-size: 14px;
//       transition: all 0.2s;
//     }

//     .btn-primary {
//       background: #2563eb;
//       color: white;
//     }

//     .btn-primary:hover {
//       background: #1d4ed8;
//     }

//     .btn-secondary {
//       background: #10b981;
//       color: white;
//     }

//     .btn-secondary:hover {
//       background: #059669;
//     }

//     .footer {
//       background: #1f2937;
//       color: #9ca3af;
//       padding: 20px 32px;
//       text-align: center;
//       font-size: 12px;
//       line-height: 1.5;
//     }

//     .footer h4 {
//       color: #ffffff;
//       margin-bottom: 8px;
//       font-size: 14px;
//       font-weight: 600;
//     }

//     .footer p {
//       margin-bottom: 6px;
//     }

//     .footer a {
//       color: #60a5fa;
//       text-decoration: none;
//     }

//     .footer a:hover {
//       text-decoration: underline;
//     }

//     .social-links {
//       display: flex;
//       justify-content: center;
//       gap: 12px;
//       margin-top: 12px;
//     }

//     .social-links a {
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       width: 32px;
//       height: 32px;
//       color: #ffffff;
//       background: rgba(255, 255, 255, 0.1);
//       border: 1px solid rgba(255, 255, 255, 0.2);
//       border-radius: 50%;
//       text-align: center;
//       line-height: 32px;
//       transition: all 0.2s ease;
//     }

//     .social-links a:hover {
//       background: rgba(255, 255, 255, 0.2);
//       transform: translateY(-2px);
//     }

//     .social-links svg {
//       width: 16px;
//       height: 16px;
//       fill: #ffffff;
//     }

//     .timestamp {
//       color: #10b981;
//       font-weight: 600;
//     }

//     @media (max-width: 600px) {
//       body {
//         padding: 10px;
//       }

//       .content {
//         padding: 24px;
//       }

//       .actions {
//         padding: 16px 24px;
//       }

//       .footer {
//         padding: 16px 24px;
//       }

//       .btn {
//         display: block;
//         margin: 8px 0;
//       }
//     }
//   </style>
// </head>
// <body>
//   <div class="email-container">
//     <!-- Header -->
//     <div class="header">
//       <h1>House of Humanity</h1>
//       <p>New Contact Form Submission Received</p>
//       <span class="priority-badge">New Inquiry</span>
//     </div>

//     <!-- Content -->
//     <div class="content">
//       <!-- Inquiry Type -->
//       <div class="inquiry-type">
//         <h2>{{safeSubject}} inquiry from {{safeName}}</h2>
//       </div>

//       <!-- Message -->
//       <div class="field-group">
//         <label class="field-label">Message</label>
//         <div class="message-field">{{safeMessage}}</div>
//       </div>

//       <!-- Metadata -->
//       <div class="metadata">
//         <h3>Submission Information</h3>
//         <div class="metadata-item">
//           <span class="metadata-label">Received:</span>
//           <span class="metadata-value timestamp">{{timestamp}}</span>
//         </div>
//         <div class="metadata-item">
//           <span class="metadata-label">Source:</span>
//           <span class="metadata-value">Website Contact Form</span>
//         </div>
//       </div>
//     </div>

//     <!-- Action Buttons -->
//     <div class="actions">
//       <a href="mailto:{{safeEmail}}?subject=Re: {{safeSubject}} Inquiry&body=Dear {{safeName}},%0A%0AThank you for contacting House of Humanity. We have received your inquiry and will respond shortly.%0A%0ABest regards,%0AHouse of Humanity Team" class="btn btn-primary">📧 Reply to Inquiry</a>
//       <a href="https://houseofhumanity.org" class="btn btn-secondary">🌍 Visit Website</a>
//     </div>

//     <!-- Footer -->
//     <div class="footer">
//       <h4>House of Humanity Charitable Trust</h4>
//       <p>B1/44 Somdutt Park, Near Rajesh Tower, Gotri Road, Vadodara - 390023</p>
//       <p>Email: <a href="mailto:Info@houseofhumanity.in">Info@houseofhumanity.in</a> | Phone: <a href="tel:+919974191811">+91 99741 91811</a></p>

//       <div class="social-links">
//         <a href="https://www.facebook.com/houseofhumanityfoundation/" title="Facebook">
//           <svg viewBox="0 0 24 24">
//             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//           </svg>
//         </a>
//         <a href="https://www.instagram.com/houseofhumanitycharitabletrust/?hl=en" title="Instagram">
//           <svg viewBox="0 0 24 24">
//             <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//           </svg>
//         </a>
//         <a href="https://www.linkedin.com/company/house-of-humanity-charitable-trust/?originalSubdomain=in" title="LinkedIn">
//           <svg viewBox="0 0 24 24">
//             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>
// </body>
// </html>
//   `;
// };

export const getFormEmailTemplate = (): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
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
      margin-bottom: 20px;
    }
    
    .field-label {
      font-weight: 600;
      color: #374151;
      font-size: 14px;
      margin-bottom: 6px;
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
    
    .social-links {
      text-align: center;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    
    .social-links a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #4a5568;
      border-radius: 20px;
      margin: 0 8px;
      text-decoration: none;
      line-height: 40px;
      text-align: center;
      vertical-align: middle;
      border: 2px solid #60a5fa;
    }
    
    .social-links a:hover {
      background-color: #60a5fa;
    }
    
    /* Use text content instead of SVG for better compatibility */
    .social-icon {
      color: #ffffff !important;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
    }
    
    .timestamp {
      color: #10b981;
      font-weight: 600;
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
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <h1>House of Humanity</h1>
      <p>New Contact Form Submission Received</p>
      <span class="priority-badge">New Inquiry</span>
    </div>
    
    <!-- Content -->
    <div class="content">
      <!-- Inquiry Type -->
      <div class="inquiry-type">
        <h2>{{safeSubject}} inquiry from {{safeName}}</h2>
      </div>
      
      <!-- Message -->
      <div class="field-group">
        <label class="field-label">Message</label>
        <div class="message-field">{{safeMessage}}</div>
      </div>
      
      <!-- Metadata -->
      <div class="metadata">
        <h3>Submission Information</h3>
        <div class="metadata-item">
          <span class="metadata-label">Received:</span>
          <span class="metadata-value timestamp">{{timestamp}}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Source:</span>
          <span class="metadata-value">Website Contact Form</span>
        </div>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <div class="actions">
      <a href="mailto:{{safeEmail}}?subject=Re: {{safeSubject}} Inquiry&body=Dear {{safeName}},%0A%0AThank you for contacting House of Humanity. We have received your inquiry and will respond shortly.%0A%0ABest regards,%0AHouse of Humanity Team" class="btn btn-primary">✉️ Reply to Inquiry</a>
      <a href="https://houseofhumanity.org" class="btn btn-secondary">🌍 Visit Website</a>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <h4>House of Humanity Charitable Trust</h4>
      <p>B1/44 Somdutt Park, Near Rajesh Tower, Gotri Road, Vadodara - 390023</p>
      <p>Email: <a href="mailto:Info@houseofhumanity.in">Info@houseofhumanity.in</a> | Phone: <a href="tel:+919974191811">+91 99741 91811</a></p>
      </div>

    </div>
  </div>
</body>
</html>
  `;
};
