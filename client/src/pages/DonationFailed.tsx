import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

interface DonationDetails {
  amount: number;
  purpose: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  paymentId: string;
  orderId: string;
  createdAt: string;
  errorDescription?: string;
}

const DonationFailed: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [donationDetails, setDonationDetails] = useState<DonationDetails | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('Something went wrong with your payment.');

  useEffect(() => {
    const paymentId = searchParams.get('paymentId');
    const amount = searchParams.get('amount');
    const purpose = searchParams.get('purpose');
    const donorName = searchParams.get('donorName');
    const donorEmail = searchParams.get('donorEmail');
    const donorPhone = searchParams.get('donorPhone');
    const orderId = searchParams.get('orderId');
    const createdAt = searchParams.get('createdAt');
    const errorDescription = searchParams.get('errorDescription');

    if (paymentId && amount && purpose && donorName && orderId && createdAt) {
      setDonationDetails({
        paymentId,
        amount: parseFloat(amount),
        purpose,
        donorName,
        donorEmail: donorEmail || '',
        donorPhone: donorPhone || '',
        orderId,
        createdAt,
        errorDescription: errorDescription || 'Payment processing error',
      });
      setErrorMessage(errorDescription || 'Something went wrong with your payment.');
    }
  }, [searchParams]);

  const isSitaare = donationDetails?.purpose?.startsWith('Sitaare');

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-bromm from-slate-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
    >
      <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#BC1782] dark:text-pink-300 mb-4">Payment Failed</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          {errorMessage} Please try again or contact support at support@houseofhumanity.org.
        </p>
        {donationDetails && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Donation Attempt Details</h3>
            <p className="text-gray-600 dark:text-gray-300"><strong>NGO:</strong> House of Humanity</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Donor Name:</strong> {donationDetails.donorName}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {donationDetails.donorEmail || 'Not provided'}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {donationDetails.donorPhone || 'Not provided'}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Purpose:</strong> {donationDetails.purpose}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Amount:</strong> ₹{donationDetails.amount.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Payment ID:</strong> {donationDetails.paymentId}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Order ID:</strong> {donationDetails.orderId}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Date:</strong> {new Date(donationDetails.createdAt).toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Error:</strong> {donationDetails.errorDescription}</p>
          </div>
        )}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/donate-for-a-cause')}
            className="bg-[#BC1782] text-white px-6 py-3 rounded-full font-bold hover:bg-[#E94BA2] transition-all duration-300"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate(isSitaare ? 'https://hoh-demo-website.web.app' : '/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 nghi"
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationFailed;