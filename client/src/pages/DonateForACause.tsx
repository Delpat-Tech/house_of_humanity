import React, { useState, ChangeEvent } from 'react';
import GiftCarousel from './GiftCarousel';
import BhimQR from './BhimQR';
import WaysToDonate from './WaysToDonate';
import { motion } from 'framer-motion';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

type Errors = {
  firstName?: string;
  email?: string;
};

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
    <>
      {/* Desktop: arrows beside card, flex-row */}
      <div className="hidden md:flex items-center justify-center w-full max-w-2xl mx-auto gap-6">
        <button
          onClick={prev}
          className="flex items-center justify-center bg-pink-300 hover:bg-pink-400 text-white rounded-full w-14 h-14 shadow-lg text-3xl z-20"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 rounded-2xl p-10 shadow-2xl flex flex-col items-center relative overflow-hidden w-full border border-pink-100"
        >
          {/* Decorative Quote Icon */}
          <svg className="absolute top-6 left-6 w-10 h-10 text-pink-300 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h.01M15 7h.01M7 11a5 5 0 015-5h0a5 5 0 015 5v1a5 5 0 01-5 5h-1a5 5 0 01-5-5v-1z" /></svg>
          <img src={testimonials[index].img} alt={testimonials[index].name} className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg ring-4 ring-rose-200" />
          <p className="italic text-2xl text-white font-serif mb-4 text-center leading-relaxed z-10">“{testimonials[index].quote}”</p>
          <div className="mt-2 text-pink-100 font-bold text-lg z-10">— {testimonials[index].name}</div>
        </motion.div>
        <button
          onClick={next}
          className="flex items-center justify-center bg-pink-300 hover:bg-pink-400 text-white rounded-full w-14 h-14 shadow-lg text-3xl z-20"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
      {/* Mobile: card, then arrows below */}
      <div className="md:hidden w-full max-w-2xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 rounded-2xl p-8 shadow-2xl flex flex-col items-center relative overflow-hidden w-full border border-pink-100"
        >
          <svg className="absolute top-6 left-6 w-10 h-10 text-pink-300 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h.01M15 7h.01M7 11a5 5 0 015-5h0a5 5 0 015 5v1a5 5 0 01-5 5h-1a5 5 0 01-5-5v-1z" /></svg>
          <img src={testimonials[index].img} alt={testimonials[index].name} className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg ring-4 ring-rose-200" />
          <p className="italic text-2xl text-white font-serif mb-4 text-center leading-relaxed z-10">“{testimonials[index].quote}”</p>
          <div className="mt-2 text-pink-100 font-bold text-lg z-10">— {testimonials[index].name}</div>
        </motion.div>
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={prev}
            className="bg-pink-300 hover:bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl z-20"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="bg-pink-300 hover:bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl z-20"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
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

  const amounts = ['10.00', '25.00', '50.00', '100.00', '250.00', '500.00'];

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
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 py-20 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <div className="flex flex-col items-center mb-6">
            <svg className="w-16 h-16 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">Donate for a Cause</h1>
            <p className="text-xl text-pink-100 font-medium max-w-2xl">Help us cultivate dignity for women and children to Dream Beyond their circumstances. All individual donations are <span className="font-bold text-white">100% matched</span>.</p>
          </div>
        </motion.div>
        {/* Decorative blurred circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl opacity-10"></div>
      </div>

      {/* Donation Form Section */}
      <div className="-mt-24 max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 mt-12 border border-pink-100"
        >
          <div className="w-full h-2 bg-gray-200 rounded mb-8 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-pink-600 to-rose-600 transition-all duration-500 rounded ${getProgress()}`} />
          </div>

          {step === 0 && (
            <div>
              <p className="font-bold mb-2 text-pink-600">How much would you like to donate today?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={`border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${amount === amt ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg scale-105' : 'bg-white text-pink-600 border-pink-200 hover:bg-pink-50'}`}
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
                className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button onClick={handleContinue} className="bg-gradient-to-r from-pink-600 to-rose-600 text-white w-full py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform">
                Donate now →
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="font-bold mb-4 text-pink-600">We'll never share this information with anyone.</p>
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.firstName && <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>}
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}
              <div className="flex justify-between mt-4">
                <button onClick={handleBack} className="text-pink-600 font-semibold">← Back</button>
                <button onClick={handleContinue} className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-lg font-bold shadow hover:scale-105 transition-transform">
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="font-bold mb-4 text-pink-600">Payment Details</p>
              <div className="border-2 border-pink-200 p-4 rounded-lg mb-4 bg-pink-50">
                <p><strong>Payment Amount:</strong> <span className="text-pink-600">₹{amount}</span></p>
                <p><strong>Giving Frequency:</strong> <span className="text-pink-600">One time</span></p>
              </div>
              <div className="border-2 border-pink-200 p-4 rounded-lg mb-4 text-sm bg-pink-50">Donate with Stripe Payment Element (placeholder)</div>

              {submitError && (
                <div className="text-red-600 text-sm mb-4 whitespace-pre-wrap">
                  {submitError}
                </div>
              )}

              <div className="flex justify-between mt-4 items-center">
                <button onClick={handleBack} className="text-pink-600 font-semibold" disabled={isSubmitting}>
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting && (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Submitting...' : 'Donate now'}
                </button>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-pink-600 mt-4">
            🔒 100% Secure Donation
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center mt-12"
        >
          <GiftCarousel />
        </motion.div>
      </div>

      {/* How Your Gift Creates Impact Section */}
      <div className="max-w-5xl mx-auto px-4 mt-20 mb-16">
        <h2 className="text-3xl font-extrabold text-pink-600 mb-8 text-center">How Your Gift Creates Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              img: 'https://placehold.co/200x140/EC4899/FFF?text=Health',
              title: 'Health & Hygiene',
              desc: 'Provides sanitary pads, health camps, and hygiene education for women and children.'
            },
            {
              img: 'https://placehold.co/200x140/BE185D/FFF?text=Education',
              title: 'Education',
              desc: 'Funds school supplies, scholarships, and after-school programs for underprivileged kids.'
            },
            {
              img: 'https://placehold.co/200x140/F472B6/FFF?text=Nutrition',
              title: 'Nutrition',
              desc: 'Delivers nutritious meals and supplements to malnourished children and families.'
            },
            {
              img: 'https://placehold.co/200x140/FB7185/FFF?text=Livelihood',
              title: 'Livelihood',
              desc: 'Supports vocational training and micro-enterprise for women and youth.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center text-center border border-pink-100 hover:shadow-2xl transition-all">
              <img src={item.img} alt={item.title} className="rounded-xl mb-4 w-full h-36 object-cover shadow" />
              <h3 className="text-xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-pink-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-extrabold text-pink-600 mb-8 text-center">What Our Donors Say</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <BhimQR />
        <WaysToDonate />
      </div>
    </div>
  );
};

export default DonateForACause;
