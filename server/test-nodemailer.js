const nodemailer = require('nodemailer');
require('dotenv').config();

async function testNodemailer() {
  console.log('🧪 Testing Nodemailer Configuration...\n');

  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || 'smtp.gmail.com (default)');
  console.log('SMTP_PORT:', process.env.SMTP_PORT || '587 (default)');
  console.log('SMTP_USER:', process.env.SMTP_USER ? '✅ Set' : '❌ Not set');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '✅ Set' : '❌ Not set');
  console.log('SMTP_FROM:', process.env.SMTP_FROM || '❌ Not set');
  console.log('');

  // Check if required variables are set
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('❌ Missing required environment variables!');
    console.log('Please set SMTP_USER and SMTP_PASS in your .env file');
    return;
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Test 1: Verify connection
    console.log('🔍 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    console.log('');

    // Test 2: Send test email (optional)
    const testEmail = process.argv[2]; // Get email from command line argument
    if (testEmail) {
      console.log('📧 Sending test email to:', testEmail);
      
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: testEmail,
        subject: 'Nodemailer Test - House of Humanity',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">✅ Nodemailer Test Successful!</h2>
            <p style="color: #666;">This email confirms that your nodemailer configuration is working correctly.</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">
              Sent from House of Humanity application at ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        text: 'Nodemailer test successful! Your email configuration is working.'
      });

      console.log('✅ Test email sent successfully!');
      console.log('Message ID:', info.messageId);
      console.log('📧 Check your inbox at:', testEmail);
    } else {
      console.log('💡 To send a test email, run:');
      console.log('   node test-nodemailer.js akashpatelyo2@gmail.com');
    }

  } catch (error) {
    console.error('❌ Nodemailer test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Authentication failed. Check your:');
      console.log('   - Gmail username and password');
      console.log('   - App password (if using 2FA)');
      console.log('   - Less secure app access settings');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Connection failed. Check your:');
      console.log('   - Internet connection');
      console.log('   - SMTP host and port settings');
      console.log('   - Firewall settings');
    }
  }
}

// Run the test
testNodemailer(); 