import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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
}

const DonationSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [donationDetails, setDonationDetails] = useState<DonationDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const paymentId = searchParams.get('paymentId');
    const amount = searchParams.get('amount');
    const purpose = searchParams.get('purpose');
    const donorName = searchParams.get('donorName');
    const donorEmail = searchParams.get('donorEmail');
    const donorPhone = searchParams.get('donorPhone');
    const orderId = searchParams.get('orderId');
    const createdAt = searchParams.get('createdAt');

    if (!paymentId || !amount || !purpose || !donorName || !orderId || !createdAt) {
      setError('Missing donation details');
      return;
    }

    setDonationDetails({
      paymentId,
      amount: parseFloat(amount),
      purpose,
      donorName,
      donorEmail: donorEmail || '',
      donorPhone: donorPhone || '',
      orderId,
      createdAt,
    });
  }, [searchParams]);

  const isSitaare = donationDetails?.purpose?.startsWith('Sitaare');

  if (error || !donationDetails) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
      >
        <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Error</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{error || 'No donation details found'}</p>
          <button
            onClick={() => navigate(isSitaare ? 'https://sitaare.vercel.app' : '/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
    >
      <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Thank You for Your Donation!</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Your generous donation of ₹{donationDetails.amount.toLocaleString()} to {donationDetails.purpose} has been successfully processed.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Donation Details</h3>
            <p className="text-gray-600 dark:text-gray-300"><strong>NGO:</strong> House of Humanity</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Donor Name:</strong> {donationDetails.donorName}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {donationDetails.donorEmail || 'Not provided'}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {donationDetails.donorPhone || 'Not provided'}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Purpose:</strong> {donationDetails.purpose}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Amount:</strong> ₹{donationDetails.amount.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Payment ID:</strong> {donationDetails.paymentId}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Order ID:</strong> {donationDetails.orderId}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Date:</strong> {new Date(donationDetails.createdAt).toLocaleString()}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            A confirmation email and receipt have been sent to {donationDetails.donorEmail || 'the provided email'}. Thank you for supporting our mission!
          </p>
          <button
            onClick={() => navigate(isSitaare ? 'https://hoh-demo-website.web.app' : '/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationSuccess;