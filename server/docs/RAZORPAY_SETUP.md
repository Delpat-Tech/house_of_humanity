# Razorpay Integration Setup Guide

This guide will help you complete the Razorpay payment gateway integration for Project Sitaare.

## Prerequisites

1. **Razorpay Account**: Sign up at [razorpay.com](https://razorpay.com)
2. **Node.js and npm**: Ensure you have Node.js installed
3. **MongoDB**: Make sure MongoDB is running locally or you have a cloud MongoDB instance

## Step 1: Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Database Configuration
MONGO_URI=mongodb://localhost:27017/sitaare

# Server Configuration
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### Getting Razorpay Credentials:

1. Log in to your Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Generate a new API key pair
4. Copy the **Key ID** and **Key Secret** to your `.env` file

**Note**: Use test credentials for development and live credentials for production.

## Step 2: Install Dependencies

### Backend Dependencies
The Razorpay package is already installed. If not, run:
```bash
cd server
npm install razorpay
```

### Frontend Dependencies
Install the Razorpay SDK (optional, as we're using CDN):
```bash
cd client
npm install razorpay
```

## Step 3: Database Setup

The donation model is already configured. Ensure MongoDB is running and the connection is established.

## Step 4: Testing the Integration

### 1. Start the Backend Server
```bash
cd server
npm start
```

### 2. Start the Frontend Application
```bash
cd client
npm start
```

### 3. Test Payment Flow
1. Navigate to the donation form
2. Enter donation details
3. Click "Donate Now"
4. Complete the payment using Razorpay test cards

## Test Card Details

Use these test cards for testing:

| Card Number | Expiry | CVV | Name |
|-------------|--------|-----|------|
| 4111 1111 1111 1111 | 12/25 | 123 | Any Name |
| 5555 5555 5555 4444 | 12/25 | 123 | Any Name |

## API Endpoints

### Create Order
- **POST** `/api/donate/create-order`
- **Body**: `{ amount, donorName, donorEmail, donorPhone, description, anonymous }`

### Verify Payment
- **POST** `/api/donate/verify-payment`
- **Body**: `{ razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId }`

### Get All Donations
- **GET** `/api/donate/all`

### Get Donation Statistics
- **GET** `/api/donate/stats`

## Features Implemented

✅ **Backend Integration**
- Order creation
- Payment verification
- Database storage
- Error handling

✅ **Frontend Integration**
- Donation form with donor details
- Anonymous donation option
- Payment processing
- Success/error handling

✅ **Security Features**
- Payment signature verification
- Environment variable protection
- Input validation

✅ **Database Features**
- Donation record storage
- Payment status tracking
- Statistics calculation

## Production Deployment

### 1. Environment Variables
- Use live Razorpay credentials
- Set proper MongoDB connection string
- Configure CORS for your domain

### 2. Frontend Configuration
Update `client/src/config/config.js`:
```javascript
API_BASE_URL: 'https://your-backend-domain.com'
```

### 3. Security Considerations
- Use HTTPS in production
- Implement rate limiting
- Add proper logging
- Set up monitoring

## Troubleshooting

### Common Issues

1. **"Order creation failed"**
   - Check Razorpay credentials
   - Verify environment variables
   - Check server logs

2. **"Payment verification failed"**
   - Ensure signature verification is working
   - Check if payment was actually completed

3. **CORS Errors**
   - Update CORS configuration in `server/app.js`
   - Add your frontend domain to allowed origins

4. **Database Connection Issues**
   - Verify MongoDB is running
   - Check connection string
   - Ensure database exists

### Debug Mode

Enable debug logging by adding to your `.env`:
```env
DEBUG=razorpay:*
```

## Support
 
For Razorpay-specific issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

For project-specific issues, check the server logs and browser console for detailed error messages. 



### Steps to Test and Debug
1. **Verify Email Configuration**:
   - Update the `.env` file with the corrected `EMAIL_PASS` and `RAZORPAY_WEBHOOK_SECRET`.
   - Restart the server and check the logs for:
     ```
     Nodemailer SMTP connection verified
     ```
     If you see an error, double-check the `EMAIL_USER` and `EMAIL_PASS` in the `.env` file.
   - Test email sending by calling the `/api/test-email` endpoint (e.g., using Postman):
     ```
     GET http://localhost:3000/api/test-email
     ```
     Check the inbox and spam/junk folder of `akashpatelyo2@gmail.com` for the test email.

2. **Simulate a Donation**:
   - Navigate to `https://hoh-demo-website.web.app/donate-for-a-cause`.
   - Enter a valid email (e.g., `akashpatelyo2@gmail.com`) in the donation form.
   - Use Razorpay’s test card (e.g., `4111 1111 1111 1111`, expiry: any future date, CVV: `123`) to complete a payment.
   - Monitor the server logs for:
     - `Order created successfully`
     - `Razorpay payment fetch response`
     - `Emails sent successfully` or `No valid recipients for success emails`
     - Any errors from Nodemailer or Razorpay.
   - Check `akashpatelyo2@gmail.com` for the NGO notification and receipt emails.

3. **Verify Webhook**:
   - Ensure the webhook is configured in the Razorpay dashboard with the URL `https://hoh-demo-website.web.app/api/donations/razorpay-webhook` and the correct secret.
   - Simulate a webhook event using Razorpay’s test webhook feature or wait for a real `payment.captured` event.
   - Check the logs for:
     ```
     Webhook event received
     Webhook emails sent successfully
     ```

4. **Check Frontend**:
   - Verify the frontend code (e.g., `DonateForACause.tsx`) sends a valid `donorEmail` in the `paymentAuth` request:
     ```typescript
     const authResponse = await fetch(
       "http://localhost:3000/api/donate/payment-auth",
       {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           razorpay_payment_id: response.razorpay_payment_id,
           razorpay_order_id: response.razorpay_order_id,
           razorpay_signature: response.razorpay_signature,
           donorName: responseDonorName,
           donorEmail: responseDonorEmail,
           donorPhone: responseDonorPhone,
           amount: orderAmount,
           purpose: responsePurpose,
         }),
       }
     );
     ```
   - Add logging to confirm the values:
     ```typescript
     console.log('Sending payment auth request:', {
       donorName: responseDonorName,
       donorEmail: responseDonorEmail,
       donorPhone: responseDonorPhone,
       amount: orderAmount,
       purpose: responsePurpose,
     });
     ```

5. **Use a Testing Email Service (Optional)**:
   - If emails are still not received, use a service like Mailtrap or Ethereal to capture emails during testing:
     ```typescript
     const transporter = nodemailer.createTransport({
       host: 'smtp.ethereal.email',
       port: 587,
       auth: {
         user: 'your-ethereal-username',
         pass: 'your-ethereal-password',
       },
     });
     ```
   - Sign up for Ethereal (https://ethereal.email) to get temporary credentials and view sent emails in their dashboard.

### Expected Outcome
With the updated code and `.env` file:
- The server will validate the email configuration at startup.
- Successful payments will trigger emails to `akashpatelyo2@gmail.com` (NGO notification and receipt) and the donor’s email (if valid).
- Webhook `payment.captured` events will also trigger emails.
- Detailed logs will help identify any issues with email sending or payment verification.

If you still don’t receive emails, check the server logs for errors and verify the inbox/spam folder of `akashpatelyo2@gmail.com`. Let me know if you encounter specific errors or need help with the frontend code or further debugging!