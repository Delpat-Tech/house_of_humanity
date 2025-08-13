import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { ConfettiCheckProps, Errors, FormData } from '../types';

const funFacts = [
  "Did you know? We reply to every message!",
  "Your words can spark change.",
  "We love hearing from you!",
  "Every message is read by a real human.",
  "Your feedback helps us grow!",
];

function useRotatingFact(facts: string[], interval = 4000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % facts.length), interval);
    return () => clearInterval(timer);
  }, [facts, interval]);
  return facts[index];
}

const ConfettiCheck: React.FC<ConfettiCheckProps> = ({ show }) => (
  <div className="flex flex-col items-center mb-2 min-h-[32px]">
    {show ? (
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="ml-2 text-green-500 font-semibold">Sent!</span>
      </motion.div>
    ) : null}
  </div>
);

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({ name: '', email: '', subject: '', submit: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const rotatingFact = useRotatingFact(funFacts);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleContinue = () => {
    let hasError = false;
    const newErrors: Errors = { name: '', email: '', subject: '', submit: '' };
    if (step === 0) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        hasError = true;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        hasError = true;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
        hasError = true;
      }
    } else if (step === 1) {
      if (!formData.subject) {
        newErrors.subject = 'Subject is required';
        hasError = true;
      }
    }
    setErrors(newErrors);
    if (!hasError) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setShowConfetti(true);
    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({ name: '', email: '', subject: '', submit: '' });
      } else {
        const errorData = await response.json();
        setErrors({ name: '', email: '', subject: '', submit: errorData.error || 'Failed to send message. Please try again.' });
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrors({ name: '', email: '', subject: '', submit: 'Network error. Please try again later.' });
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowConfetti(false), 1800);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      <HeroStatsSection
        title={<span>Contact Us</span>}
        subtitle={"We'd love to hear from you! Reach out for questions, collaborations, or to get involved."}
        stats={[]}
        badge={<><Sparkles className="w-5 h-5 text-yellow-300 mr-2" /><span className="text-white font-medium">Let's Connect</span></>}
      />
      <div className="py-12" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information & Social Media */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-warm-light-blue dark:bg-slate-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-warm-light-blue dark:border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-primary-blue dark:text-fresh-green">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-primary-blue dark:text-slate-100">Email</h3>
                    <a href="mailto:Info@houseofhumanity.in" className="text-dark-gray dark:text-slate-300 hover:text-primary-blue dark:hover:text-fresh-green transition-colors">
                      Info@houseofhumanity.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-primary-blue dark:text-slate-100">Phone</h3>
                    <a href="tel:+919974191811" className="text-dark-gray dark:text-slate-300 hover:text-primary-blue dark:hover:text-fresh-green transition-colors">
                      +91 99741 91811
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-primary-blue dark:text-slate-100">Address</h3>
                    <p className="text-dark-gray dark:text-slate-300">
                      B1/44 Somdutt park,<br />
                      Near Rajesh tower, Gotri road,<br />
                      Vadodara - 390023
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-warm-light-blue dark:border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-primary-blue dark:text-fresh-green">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/houseofhumanityfoundation/" className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full hover:bg-primary-blue dark:hover:bg-fresh-green hover:text-white transition-colors group">
                    <svg className="h-6 w-6 text-primary-blue group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/houseofhumanitycharitabletrust/?hl=en" className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full hover:bg-primary-blue dark:hover:bg-fresh-green hover:text-white transition-colors group">
                    <svg className="h-6 w-6 text-primary-blue group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/house-of-humanity-charitable-trust/?originalSubdomain=in" className="bg-primary-blue/10 dark:bg-fresh-green/10 p-3 rounded-full hover:bg-primary-blue dark:hover:bg-fresh-green hover:text-white transition-colors group">
                    <svg className="h-6 w-6 text-primary-blue group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-start">
                <a
                  href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto block text-center bg-primary-blue hover:bg-fresh-green text-white dark:text-white dark:hover:text-white font-bold py-3 px-4 sm:px-6 rounded-full shadow transition-all mt-4"
                >
                  Want to leave a testimonial? Click here!
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-warm-light-blue dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-warm-light-blue dark:border-slate-700"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary-blue dark:text-fresh-green">Send a Message</h2>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-green-600 dark:text-green-400 font-semibold text-lg text-center"
              >
                Thank you for reaching out! We'll get back to you soon.<br />
                <a
                  href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-primary-blue hover:bg-fresh-green dark:bg-fresh-green dark:hover:bg-primary-blue text-white font-bold py-2 px-6 rounded-full shadow transition-all"
                >
                  Want to leave a testimonial? Click here!
                </a>
              </motion.div>
            ) : (
              <>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-8 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary-blue to-fresh-green transition-all duration-500 rounded ${step === 0 ? 'w-1/3' : step === 1 ? 'w-2/3' : 'w-full'}`}
                  />
                </div>
                {step === 0 && (
                  <div>
                    <p className="font-bold mb-2 text-primary-blue dark:text-fresh-green">Contact Details</p>
                    <input
                      type="text"
                      placeholder="Full name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors"
                    />
                    {errors.name && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.name}</p>}
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors"
                    />
                    {errors.email && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.email}</p>}
                    <div className="flex flex-col items-center mt-4">
                      <button
                        type="button"
                        onClick={handleContinue}
                        className="w-full py-3 bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold shadow-lg hover:scale-105 transition-transform rounded-lg mt-2"
                      >
                        Continue →
                      </button>
                      <div className="pt-8 flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                          <svg className="w-4 h-4 text-primary-blue dark:text-fresh-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                          We respect your privacy. Your information will only be used to respond to your inquiry.
                        </div>
                        <div className="text-xs text-primary-blue dark:text-fresh-green mt-1 italic transition-opacity duration-500">{rotatingFact}</div>
                      </div>
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <p className="font-bold mb-2 text-primary-blue dark:text-fresh-green">Message Details</p>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Query</option>
                    </select>
                    {errors.subject && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.subject}</p>}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors"
                      rows={4}
                    />
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-primary-blue dark:text-fresh-green font-semibold hover:text-blue-700 dark:hover:text-fresh-green transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleContinue}
                        className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold px-4 py-2 shadow hover:scale-105 transition-transform rounded-lg"
                      >
                        Continue →
                      </button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <p className="font-bold mb-4 text-primary-blue dark:text-fresh-green">Confirm Your Message</p>
                    <div className="border-2 border-primary-blue/30 dark:border-blue-400/30 p-4 rounded-lg mb-4 bg-primary-blue/5 dark:bg-blue-900/10">
                      <p><strong className="text-gray-700 dark:text-gray-200">Name:</strong> <span className="text-primary-blue dark:text-fresh-green">{formData.name}</span></p>
                      <p><strong className="text-gray-700 dark:text-gray-200">Email:</strong> <span className="text-primary-blue dark:text-fresh-green">{formData.email}</span></p>
                      <p><strong className="text-gray-700 dark:text-gray-200">Subject:</strong> <span className="text-primary-blue dark:text-fresh-green">{formData.subject}</span></p>
                      {formData.message && <p><strong className="text-gray-700 dark:text-gray-200">Message:</strong> <span className="text-primary-blue dark:text-fresh-green">{formData.message}</span></p>}
                    </div>
                    <ConfettiCheck show={showConfetti} />
                    <div className="flex flex-col items-center gap-1 mt-3">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                        <svg className="w-4 h-4 text-primary-blue dark:text-fresh-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        We respect your privacy. Your information will only be used to respond to your inquiry.
                      </div>
                      <div className="text-xs text-primary-blue dark:text-fresh-green mt-1 italic transition-opacity duration-500">{rotatingFact}</div>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-primary-blue dark:text-fresh-green font-semibold hover:text-blue-700 dark:hover:text-fresh-green transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform rounded-lg disabled:opacity-60"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                    {errors.submit && <p className="text-red-600 dark:text-red-400 text-sm mt-2 text-center">{errors.submit}</p>}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-warm-light-blue dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-warm-light-blue dark:border-slate-700"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.768235304775!2d73.17656007412952!3d22.29076824691765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7c3c7c3c7c3%3A0x0!2sGotri%20Rd%2C%20Vadodara%2C%20Gujarat%20390023!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;