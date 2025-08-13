export function getDonorThankYouEmail(donorName: string, amount: number, purpose: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Donation</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 24px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <img src="https://houseofhumanity.org/logo192.png" alt="House of Humanity Logo" style="max-width: 180px; height: auto;" />
            <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0;">House of Humanity</h1>
          </div>
          <div style="padding: 24px; color: #333333;">
            <h2 style="color: #2563eb; font-size: 20px; margin-top: 0;">Dear ${donorName || 'Donor'},</h2>
            <p style="font-size: 16px; line-height: 1.5;">Thank you for your generous donation of <strong>₹${(amount / 100).toLocaleString()}</strong> to support <strong>${purpose}</strong>. Your kindness helps us empower communities and transform lives.</p>
            <p style="font-size: 16px; line-height: 1.5; font-style: italic;">"The best way to find yourself is to lose yourself in the service of others."</p>
<a href="https://houseofhumanity.org/about" style="font-family: Arial, sans-serif; font-size: 16px; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; display: inline-block;">Learn More About Our Work</a>

          </div>
          <div style="background: #f1f5f9; color: #64748b; text-align: center; padding: 16px; font-size: 14px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved. 🎉</p>
            <p style="margin: 8px 0;">
              <a href="mailto:info@houseofhumanity.in" style="color: #2563eb; text-decoration: none;">Contact Us</a> | 
              <a href="https://houseofhumanity.org" style="color: #2563eb; text-decoration: none;">Visit Our Website</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getNGOEmail(donorName: string, donorEmail: string, donorPhone: string, amount: number, purpose: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Donation Received</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 24px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <img src="https://houseofhumanity.org/logo192.png" alt="House of Humanity Logo" style="max-width: 180px; height: auto;" />
            <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0;">House of Humanity</h1>
          </div>
          <div style="padding: 24px; color: #333333;">
            <h2 style="color: #2563eb; font-size: 20px; margin-top: 0;">New Donation Received</h2>
            <p style="font-size: 16px; line-height: 1.5;">A new donation has been received. Please find the details below:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Donor</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">${donorName || 'Anonymous'}</td>
              </tr>
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Email</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">${donorEmail || 'Not provided'}</td>
              </tr>
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Phone</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">${donorPhone || 'Not provided'}</td>
              </tr>
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Amount</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">₹${(amount / 100).toLocaleString()}</td>
              </tr>
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Purpose</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">${purpose}</td>
              </tr>
              <tr>
                <th style="border: 1px solid #e2e8f0; padding: 8px; background: #f1f5f9; color: #2563eb; text-align: left;">Date</th>
                <td style="border: 1px solid #e2e8f0; padding: 8px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <p style="font-size: 16px; line-height: 1.5;">Please ensure follow-up actions are taken as needed.</p>
          </div>
          <div style="background: #f1f5f9; color: #64748b; text-align: center; padding: 16px; font-size: 14px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved. 🎉</p>
            <p style="margin: 8px 0;">
              <a href="mailto:info@houseofhumanity.in" style="color: #2563eb; text-decoration: none;">Contact Us</a> | 
              <a href="https://houseofhumanity.org" style="color: #2563eb; text-decoration: none;">Visit Our Website</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getFailureEmail(donorName: string, amount: number, purpose: string, reason: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Donation Payment Failed</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(90deg, #2563eb 0%, #22c55e 100%); padding: 24px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <img src="https://houseofhumanity.org/logo192.png" alt="House of Humanity Logo" style="max-width: 180px; height: auto;" />
            <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0;">House of Humanity</h1>
          </div>
          <div style="padding: 24px; color: #333333;">
            <h2 style="color: #2563eb; font-size: 20px; margin-top: 0;">Payment Failed</h2>
            <p style="font-size: 16px; line-height: 1.5;">Dear ${donorName || 'Donor'},</p>
            <p style="font-size: 16px; line-height: 1.5;">We regret to inform you that your donation attempt of <strong>₹${(amount / 100).toLocaleString()}</strong> for <strong>${purpose}</strong> was unsuccessful.</p>
            <p style="font-size: 16px; line-height: 1.5;"><strong>Reason:</strong> ${reason}</p>
            <p style="font-size: 16px; line-height: 1.5;">Please try again or contact our support team at <a href="mailto:support@houseofhumanity.org" style="color: #2563eb; text-decoration: none;">support@houseofhumanity.org</a> for assistance.</p>
          </div>
          <div style="background: #f1f5f9; color: #64748b; text-align: center; padding: 16px; font-size: 14px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} House of Humanity. All rights reserved. 🎉</p>
            <p style="margin: 8px 0;">
              <a href="mailto:info@houseofhumanity.in" style="color: #2563eb; text-decoration: none;">Contact Us</a> | 
              <a href="https://houseofhumanity.org" style="color: #2563eb; text-decoration: none;">Visit Our Website</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}