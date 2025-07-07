import React, { useState, ChangeEvent } from 'react';
import GiftCarousel from './GiftCarousel';
import BhimQR from './BhimQR';
import WaysToDonate from './WaysToDonate';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

import { FormErrors } from '../types';

type Errors = FormErrors;

// Testimonial data and component
const testimonials = [
  {
    quote: 'My donation truly made a difference. I received updates and saw the impact firsthand!',
    name: 'Anjali P.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    quote: 'Supporting House of Humanity is the best way to give back to the community.',
    name: 'Vikram S.',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    quote: 'I love how transparent and impactful their work is. Highly recommended!',
    name: 'Sara M.',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

const TestimonialCarousel = ({ testimonials }: { testimonials: { quote: string; name: string; img: string }[] }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between gap-6">
        <button
          onClick={prev}
          className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <img 
              src={testimonials[index].img} 
              alt={testimonials[index].name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" 
            />
            <div className="flex-1">
              <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                "{testimonials[index].quote}"
              </p>
              <div className="text-primary-blue font-semibold">
                {testimonials[index].name}
              </div>
            </div>
          </div>
        </motion.div>
        
        <button
          onClick={next}
          className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <img 
              src={testimonials[index].img} 
              alt={testimonials[index].name} 
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" 
            />
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                "{testimonials[index].quote}"
              </p>
              <div className="text-primary-blue font-semibold">
                {testimonials[index].name}
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prev}
            className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-10 h-10 shadow-md transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-10 h-10 shadow-md transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const DonateForACause: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [amount, setAmount] = useState<string>('10.00');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const amounts = ['10', '25', '50', '100', '250', '500'];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error('Simulated server error');
    } catch (error) {
      setSubmitError(
        "The following error occurred when submitting the form:\n\nSomething went wrong, please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgress = (): string => {
    return step === 0 ? 'w-1/3' : step === 1 ? 'w-2/3' : 'w-full';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="relative w-full bg-gradient-to-br from-primary-blue via-blue-600 to-fresh-green pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <div className="flex flex-col items-center mb-6">
            <svg className="w-20 h-20 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">Donate for a Cause</h1>
            <p className="text-xl text-white/90 font-medium max-w-2xl">Help us cultivate dignity for women and children to Dream Beyond their circumstances. All individual donations are <span className="font-bold text-white">100% matched</span>.</p>
          </div>
        </motion.div>
        {/* Decorative blurred circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl opacity-10"></div>
      </div>

      {/* Donation Form Section */}
      <div className="-mt-24 max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 mt-12 border border-primary-blue/20 md:col-span-1"
        >
          <div className="w-full h-2 bg-gray-200 rounded mb-8 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-primary-blue to-fresh-green transition-all duration-500 rounded ${getProgress()}`} />
          </div>

          {step === 0 && (
            <div>
              <p className="font-bold mb-2 text-primary-blue">How much would you like to donate today?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={`border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${amount === amt ? 'bg-gradient-to-r from-primary-blue to-fresh-green text-white shadow-lg scale-105' : 'bg-white text-primary-blue border-primary-blue/30 hover:bg-primary-blue/5'}`}
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount('');
                    }}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCustomAmount(e.target.value);
                  setAmount(e.target.value);
                }}
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
              <Button
                onClick={handleContinue}
                className="w-full py-3 bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white font-bold shadow-lg hover:scale-105 transition-transform rounded-lg"
              >
                Donate now →
              </Button>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="font-bold mb-4 text-primary-blue">We'll never share this information with anyone.</p>
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
              {errors.firstName && <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>}
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={(e) => {
                  const email = e.target.value;
                  if (!validateEmail(email)) {
                    setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
                  } else {
                    setErrors((prev) => ({ ...prev, email: '' }));
                  }
                }}
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
              {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={handleBack} 
                  className="text-primary-blue font-semibold hover:text-blue-700 transition-colors"
                >
                  ← Back
                </button>
                <Button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 font-bold shadow hover:scale-105 transition-transform rounded-lg"
                >
                  Continue →
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="font-bold mb-4 text-primary-blue">Payment Details</p>
              <div className="border-2 border-primary-blue/30 p-4 rounded-lg mb-4 bg-primary-blue/5">
                <p><strong>Payment Amount:</strong> <span className="text-primary-blue">₹{amount}</span></p>
                <p><strong>Giving Frequency:</strong> <span className="text-primary-blue">One time</span></p>
              </div>
              <div className="border-2 border-primary-blue/30 p-4 rounded-lg mb-4 text-sm bg-primary-blue/5">Donate with Stripe Payment Element (placeholder)</div>

              {submitError && (
                <div className="text-red-600 text-sm mb-4 whitespace-pre-wrap">
                  {submitError}
                </div>
              )}

              <div className="flex justify-between mt-4 items-center">
                <button 
                  onClick={handleBack} 
                  disabled={isSubmitting}
                  className="text-primary-blue font-semibold hover:text-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 font-bold shadow-lg hover:scale-105 transition-transform rounded-lg ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Submitting...' : 'Donate now'}
                </Button>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-primary-blue mt-4">
            🔒 100% Secure Donation
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center mt-12 md:col-span-2"
        >
          <GiftCarousel />
        </motion.div>
      </div>


      {/* Testimonial Carousel */}
      <div className="max-w-5xl mx-auto px-4 mt-24 mb-20">
        <h2 className="text-3xl font-extrabold text-primary-blue mb-8 text-center">What Our Donors Say</h2>
        <TestimonialCarousel testimonials={testimonials} />
=======
      <div className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us cultivate dignity for women and children to Dream Beyond their circumstances. 
              All individual donations are <span className="font-semibold text-primary-blue">100% matched</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Complete Your Donation</h2>
                <span className="text-sm text-gray-500">Step {step + 1} of 3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 bg-primary-blue rounded-full transition-all duration-500 ${getProgress()}`} />
              </div>
            </div>

            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select donation amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                          amount === amt 
                            ? 'border-primary-blue bg-primary-blue text-white shadow-lg' 
                            : 'border-gray-200 text-gray-700 hover:border-primary-blue hover:bg-blue-50'
                        }`}
                        onClick={() => {
                          setAmount(amt);
                          setCustomAmount('');
                        }}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCustomAmount(e.target.value);
                        setAmount(e.target.value);
                      }}
                      className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleContinue}
                  className="w-full py-4 bg-primary-blue hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Continue to Details
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Your information
                  </label>
                  <p className="text-sm text-gray-500 mb-4">
                    We'll never share this information with anyone.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onBlur={(e) => {
                          const email = e.target.value;
                          if (!validateEmail(email)) {
                            setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
                          } else {
                            setErrors((prev) => ({ ...prev, email: '' }));
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={handleBack} 
                    className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    ← Back
                  </button>
                  <Button
                    onClick={handleContinue}
                    className="px-8 py-3 bg-primary-blue hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment summary
                  </label>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold text-primary-blue">₹{amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-semibold">One time</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  Stripe Payment Element will load here
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <button 
                    onClick={handleBack} 
                    disabled={isSubmitting}
                    className="text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50"
                  >
                    ← Back
                  </button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-primary-blue hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting && (
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                    )}
                    {isSubmitting ? 'Processing...' : 'Complete Donation'}
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Secure & Encrypted
            </div>
          </motion.div>

          {/* Gift Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <GiftCarousel />
          </motion.div>
        </div>
>>>>>>> 0ae371c4e1e834d0f238bdb99069dbc9bc6f7a99
      </div>

      {/* Impact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your generous donation creates meaningful change in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: 'https://placehold.co/300x200/0098DB/FFF?text=Health+%26+Hygiene',
                title: 'Health & Hygiene',
                desc: 'Provides sanitary pads, health camps, and hygiene education for women and children.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                img: 'https://placehold.co/300x200/70BF44/FFF?text=Education',
                title: 'Education',
                desc: 'Funds school supplies, scholarships, and after-school programs for underprivileged kids.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                img: 'https://placehold.co/300x200/0098DB/FFF?text=Nutrition',
                title: 'Nutrition',
                desc: 'Delivers nutritious meals and supplements to malnourished children and families.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                )
              },
              {
                img: 'https://placehold.co/300x200/70BF44/FFF?text=Livelihood',
                title: 'Livelihood',
                desc: 'Supports vocational training and micro-enterprise for women and youth.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                )
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-blue to-fresh-green relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those who've made a difference through their generous support
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      {/* Additional Payment Options */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <BhimQR />
          <WaysToDonate />
        </div>
      </div>
    </div>
  );
};

export default DonateForACause;