const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:3000';
const TEST_EMAIL = 'your-test-email@gmail.com'; // Change this to your test email

async function testEmailService() {
  try {
    console.log('🧪 Testing Email Service...\n');

    // Test 1: Health Check
    console.log('1. Checking service health...');
    const healthResponse = await axios.get(`${BASE_URL}/api/test/health`);
    console.log('✅ Health check passed:', healthResponse.data);
    console.log('');

    // Test 2: Send Test Email
    console.log('2. Sending test email...');
    const emailResponse = await axios.post(`${BASE_URL}/api/test/test-email`, {
      to: TEST_EMAIL,
      subject: 'Test Email from House of Humanity',
      message: 'This is a test email to verify that the email service is working correctly. If you receive this, the configuration is successful!'
    });
    
    console.log('✅ Email sent successfully:', emailResponse.data);
    console.log('📧 Check your inbox at:', TEST_EMAIL);

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    
    if (error.response?.status === 500 && error.response?.data?.message?.includes('Email configuration not set')) {
      console.log('\n💡 Solution: Make sure you have set up your .env file with:');
      console.log('   SMTP_USER=your-email@gmail.com');
      console.log('   SMTP_PASS=your-app-password');
      console.log('   SMTP_FROM=your-email@gmail.com');
    }
  }
}

// Run the test
testEmailService(); 