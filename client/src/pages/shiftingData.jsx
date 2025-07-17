import { motion } from "framer-motion";
import Lottie from "lottie-react";
import starsAnimation from "../../assets/stars.json";
import {
  FaBook,
  FaApple,
  FaBirthdayCake,
  FaSmile,
  FaHeart,
  FaHandHoldingHeart,
  FaStar,
  FaUtensils,
  FaUserFriends,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationForm from "../../components/DonationForm";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const donateOptions = [
  {
    title: "Sponsor",
    amount: 3500,
    description:
      "₹3,500/month ensures a girl receives quality education, books & supplies.",
    icon: FaBook,
    color: "#BC1782",
  },
  {
    title: "Support Daily Nutrition",
    amount: 2000,
    description:
      "₹2,000/month covers daily meals to keep her healthy and energized.",
    icon: FaApple,
    color: "#E94BA2",
  },
  {
    title: "Adopt a Sitaare for a Month",
    amount: 11551,
    description:
      "₹11,551 provides full care including housing, education & health.",
    icon: FaHandHoldingHeart,
    color: "#FFD700",
    highlight: true,
  },
  {
    title: "One-Time Meal (All Sitaare)",
    amount: 4000,
    description: "₹4,000 sponsors a wholesome meal for all our girls.",
    icon: FaUtensils,
    color: "#A78BFA",
  },
  {
    title: "Meal for 2 Girls (Full Day)",
    amount: 8000,
    description:
      "₹8,000 feeds two girls for an entire day with nutritious meals.",
    icon: FaUserFriends,
    color: "#7C0C55",
  },
  {
    title: "Sponsor a Celebration",
    amount: 15000,
    description: "₹15,000 funds a joyful birthday or festival celebration.",
    icon: FaBirthdayCake,
    color: "#FF8EB5",
  },
  {
    title: "Custom Donation",
    amount: null, // Indicates custom amount
    description: "Choose your own amount to support our mission.",
    icon: FaStar,
    color: "#D61A91",
    custom: true,
  },
];

const impactStats = [
  {
    icon: <FaSmile className="text-pink-500 text-4xl impact-icon" />,
    label: "Girls Empowered",
    value: 120,
    bg: "from-pink-100 to-pink-50",
    border: "border-pink-300",
    story: "Each girl is now dreaming bigger.",
    badge: "Milestone!",
    animation: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    },
    iconAnim: "impact-pulse",
    offset: "md:mt-8",
  },
  {
    icon: <FaHeart className="text-blue-500 text-4xl impact-icon" />,
    label: "Donations Received",
    value: 350,
    bg: "from-blue-100 to-blue-50",
    border: "border-blue-300",
    story: "Every rupee brings hope.",
    animation: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
    },
    iconAnim: "impact-beat",
    offset: "md:mt-0",
  },
  {
    icon: <FaUserFriends className="text-green-500 text-4xl impact-icon" />,
    label: "Volunteers Joined",
    value: 45,
    bg: "from-green-100 to-green-50",
    border: "border-green-300",
    story: "A growing family of changemakers.",
    animation: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
    },
    // ... (other stats remain unchanged)
    iconAnim: "impact-wave",
    offset: "md:-mt-8",
  },
];

const testimonials = [
  {
    text: "Sitaare gave me a new family and the courage to dream big. I am forever grateful!",
    name: "Priya",
    role: "Beneficiary",
  },
  {
    text: "Supporting Sitaare is the best decision I made. The impact is real and visible.",
    name: "Neha",
    role: "Donor",
  },
  {
    text: "Volunteering here changed my life. The girls inspire me every day.",
    name: "Amit",
    role: "Volunteer",
  },
];

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  useState(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let increment = end / (duration * 60);
    let current = start;
    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
  }, [value]);
  return <span>{count}</span>;
}

const DonateForACause = () => {
  const navigate = useNavigate();
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [error, setError] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async ({ amount, donorName, donorEmail, donorPhone, address, purpose }) => {
    setError('');
    const beneficiaryId = '6873a70e65146a295f57015b'; // Replace with dynamic selection later

    if (!amount || amount < 100) {
      return { success: false, error: 'Please enter a valid donation amount (minimum ₹100)' };
    }
    if (!donorName || !donorEmail || !donorPhone || !address) {
      return { success: false, error: 'Please fill in all required donor details' };
    }

    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error('Failed to load Razorpay SDK.');
      }

      const response = await fetch('http://localhost:5000/api/donate/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          beneficiaryId,
          donorName,
          donorEmail,
          donorPhone,
          address,
          purpose,
        }),
      });
      const data = await response.json();
      console.log('Create order data:', data);

      if (!data.success || !data.data.orderId) {
        throw new Error(data.error || 'Failed to create order.');
      }

      return new Promise((resolve) => {
        const options = {
          key: data.data.keyId,
          amount: data.data.amount,
          currency: 'INR',
          name: 'Project Sitaare',
          description: purpose || 'Donation for Child Education',
          image: '/logo512.png',
          order_id: data.data.orderId,
          handler: async function (response) {
            try {
              const verifyResponse = await fetch('http://localhost:5000/api/donate/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                  beneficiaryId,
                  donorName,
                  donorEmail,
                  donorPhone,
                  amount: data.data.amount,
                  address,
                  purpose,
                }),
              });
              const verifyData = await verifyResponse.json();
              console.log('Verify payment result:', verifyData);

              const authResponse = await fetch('http://localhost:5000/api/donate/payment-auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentId: response.razorpay_payment_id }),
              });
              const authData = await authResponse.json();
              console.log('Payment auth result:', authData);

              if (authData.success && authData.status === 'captured') {
                // Store donation details in localStorage for DonationSuccess page
                localStorage.setItem('donationDetails', JSON.stringify({
                  amount: amount,
                  donorName,
                  donorEmail,
                  purpose,
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  createdAt: new Date().toISOString(),
                }));
                setDonateSuccess(true);
                setTimeout(() => {
                  setDonateSuccess(false);
                  navigate('/donation-success');
                }, 2000);
                resolve({ success: true });
              } else {
                setError(authData.error || 'Payment not captured.');
                setTimeout(() => {
                  navigate('/donation-failed');
                }, 2000);
                resolve({ success: false, error: authData.error || 'Payment not captured.' });
              }
            } catch (error) {
              console.error('Verification error:', error);
              setError('Error verifying payment.');
              setTimeout(() => {
                navigate('/donation-failed');
              }, 2000);
              resolve({ success: false, error: 'Error verifying payment.' });
            }
          },
          prefill: {
            name: donorName,
            email: donorEmail,
            contact: donorPhone,
          },
          notes: {
            purpose: purpose || 'Donation',
            beneficiaryId,
            address,
          },
          theme: { color: '#BC1782' },
          method: {
            upi: true,
            card: true,
            netbanking: true,
            wallet: true,
            paylater: true,
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          console.error('Payment failed:', response.error);
          setError(response.error.description || 'Payment failed.');
          setTimeout(() => {
            navigate('/donation-failed');
          }, 2000);
          resolve({ success: false, error: response.error.description || 'Payment failed.' });
        });
        rzp.open();
      });
    } catch (error) {
      console.error('Order creation error:', error);
      setError('Error creating order.');
      setTimeout(() => {
        navigate('/donation-failed');
      }, 2000);
      return { success: false, error: 'Error creating order.' };
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-[#4B4B4B] px-2 sm:px-4 md:px-8 pb-24 overflow-x-hidden"
    >
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center py-10 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lottie
            animationData={starsAnimation}
            loop
            autoplay
            className="w-full h-full opacity-60 blur-sm scale-110"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#BC1782] drop-shadow mb-4 px-2"
        >
          Every Gift is a New Beginning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-base xs:text-lg sm:text-xl text-center max-w-2xl mx-auto mb-6 text-[#7C0C55] font-medium px-2"
        >
          Your donation transforms lives—providing safety, education, nutrition,
          and hope for every Sitaare girl. Choose your impact below and help a
          star shine bright.
        </motion.p>
        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10 max-w-4xl w-full mx-auto mb-8"
        >
          {error && (
            <div className="text-red-500 text-center mb-4 text-sm">{error}</div>
          )}
          {donateSuccess && (
            <div className="text-green-500 text-center mb-4 text-sm">
              Payment successful! Redirecting...
            </div>
          )}
          <DonationForm onDonate={handleDonate} donateOptions={donateOptions} />
        </motion.div>
        {/* Inspiring Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 italic text-base xs:text-lg sm:text-xl text-[#BC1782] text-center mt-4 font-semibold border-l-4 border-[#E94BA2] pl-4 mx-auto max-w-2xl px-2"
        >
          “Even a single star can light the dark sky — your kindness helps them
          shine.”
        </motion.blockquote>
      </div>

      {/* Impact Counter Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 mb-12 px-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-8 w-full">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={stat.animation.initial}
              animate={stat.animation.animate}
              className={`group bg-gradient-to-br ${stat.bg} ${stat.border} border-2 rounded-3xl p-4 xs:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center w-full max-w-xs mx-auto md:w-1/3 ${stat.offset} relative`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {stat.badge && (
                <div className="absolute top-4 left-4 bg-yellow-300 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs shadow-md animate-pulse z-20">
                  {stat.badge}
                </div>
              )}
              <span className={`mb-2 ${stat.iconAnim}`}>{stat.icon}</span>
              <span className="text-2xl xs:text-3xl sm:text-4xl font-black mt-2 mb-1 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-gray-700 font-bold uppercase tracking-wider text-xs xs:text-sm sm:text-base text-center mb-1">
                {stat.label}
              </span>
              <span className="text-gray-500 text-xs xs:text-sm text-center italic">
                {stat.story}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative z-10 max-w-2xl mx-auto mb-20 px-2">
        <div className="bg-white/80 rounded-3xl shadow-xl p-4 xs:p-6 md:p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg xs:text-xl sm:text-2xl font-bold text-[#BC1782] mb-6 text-center"
          >
            What Our Supporters Say
          </motion.h2>
          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>

      {/* HOH Website Donation Link */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto mb-16 px-2"
      >
        <div className="bg-gradient-to-br from-[#BC1782] to-[#E94BA2] rounded-3xl shadow-2xl p-6 xs:p-8 md:p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base xs:text-lg mb-6 text-white/90 max-w-2xl mx-auto"
            >
              Visit our main website to explore more donation options and learn
              about our comprehensive programs at House of Humanity.
            </motion.p>
            <motion.a
              href="https://houseofhumanity.in/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#BC1782] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base xs:text-lg"
            >
              <FaHeart className="text-[#BC1782]" />
              Visit House of Humanity
              <FaArrowUp className="text-[#BC1782] transform rotate-45" />
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-sm text-white/70 mt-4"
            >
              Your support helps us create more safe spaces for girls in need
            </motion.p>
          </div> 
        </div>
      </motion.div>

      {/* Sticky Donate CTA for mobile */}
      <div className="fixed bottom-2 left-0 w-full flex justify-center z-50 sm:hidden pointer-events-none px-2">
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            })
          }
          className="pointer-events-auto bg-gradient-to-r from-[#BC1782] to-[#E94BA2] text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse text-base border-2 border-white w-full max-w-xs"
        >
          Donate Now →
        </button>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BC1782]/10 to-transparent rounded-full -ml-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#D61A91]/10 to-transparent rounded-full -mr-12 -mb-12 z-0"></div>
    </motion.div>
  );
};

// Simple testimonial carousel
function TestimonialCarousel({ testimonials }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative flex flex-col items-center">
      <motion.p
        key={testimonials[idx].text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-700 italic mb-4 text-center min-h-[60px]"
      >
        “{testimonials[idx].text}”
      </motion.p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#BC1782] font-bold">
          {testimonials[idx].name}
        </span>
        <span className="text-xs text-gray-400">
          ({testimonials[idx].role})
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full ${
              i === idx ? 'bg-[#BC1782]' : 'bg-gray-300'
            } transition`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DonateForACause;

// donateSuccess.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';


const DonationSuccess = () => {
  const navigate = useNavigate();
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    // Retrieve donation details from localStorage
    const storedDetails = JSON.parse(localStorage.getItem('donationDetails'));
    if (storedDetails) {
      setDonationDetails(storedDetails);
      // Clear localStorage to prevent stale data
      localStorage.removeItem('donationDetails');
    }
  }, []);

  if (!donationDetails) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing...</h2>
        <p className="text-gray-600 text-lg">Loading your donation details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h2>
        <p className="text-gray-600 text-lg mb-6">
          Your generous donation of ₹{donationDetails.amount.toLocaleString()} to {donationDetails.purpose} has been successfully processed.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Donation Details</h3>
          <p className="text-gray-600"><strong>Donor Name:</strong> {donationDetails.donorName}</p>
          <p className="text-gray-600"><strong>Email:</strong> {donationDetails.donorEmail}</p>
          <p className="text-gray-600"><strong>Purpose:</strong> {donationDetails.purpose}</p>
          <p className="text-gray-600"><strong>Payment ID:</strong> {donationDetails.paymentId}</p>
          <p className="text-gray-600"><strong>Order ID:</strong> {donationDetails.orderId}</p>
          <p className="text-gray-600"><strong>Date:</strong> {new Date(donationDetails.createdAt).toLocaleString()}</p>
        </div>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to {donationDetails.donorEmail}. Thank you for supporting Project Sitaare!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

// export default DonationSuccess;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';


const DonationSuccess = () => {
  const navigate = useNavigate();
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    // Retrieve donation details from localStorage
    const storedDetails = JSON.parse(localStorage.getItem('donationDetails'));
    if (storedDetails) {
      setDonationDetails(storedDetails);
      // Clear localStorage to prevent stale data
      localStorage.removeItem('donationDetails');
    }
  }, []);

  if (!donationDetails) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing...</h2>
        <p className="text-gray-600 text-lg">Loading your donation details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h2>
        <p className="text-gray-600 text-lg mb-6">
          Your generous donation of ₹{donationDetails.amount.toLocaleString()} to {donationDetails.purpose} has been successfully processed.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Donation Details</h3>
          <p className="text-gray-600"><strong>Donor Name:</strong> {donationDetails.donorName}</p>
          <p className="text-gray-600"><strong>Email:</strong> {donationDetails.donorEmail}</p>
          <p className="text-gray-600"><strong>Purpose:</strong> {donationDetails.purpose}</p>
          <p className="text-gray-600"><strong>Payment ID:</strong> {donationDetails.paymentId}</p>
          <p className="text-gray-600"><strong>Order ID:</strong> {donationDetails.orderId}</p>
          <p className="text-gray-600"><strong>Date:</strong> {new Date(donationDetails.createdAt).toLocaleString()}</p>
        </div>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to {donationDetails.donorEmail}. Thank you for supporting Project Sitaare!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

// export default DonationSuccess;

