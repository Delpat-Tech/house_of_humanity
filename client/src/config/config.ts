// client/src/config/config.ts
const config = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  API_ENDPOINTS: {
    CREATE_ORDER: '/api/donations/create-order',
    PAYMENT_AUTH: '/api/donations/payment-auth',
    DONATION_DETAILS: '/api/donations/details',
  },
  RAZORPAY: {
    NAME: 'House of Humanity',
    THEME_COLOR: '#BC1782',
  },
};

export default config;