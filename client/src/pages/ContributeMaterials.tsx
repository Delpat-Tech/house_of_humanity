import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { Sparkles } from 'lucide-react';

const donationItems = [
  {
    title: 'Clothes',
    icon: (
      <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 3l2.29 2.29A1 1 0 0119 6.41V21a1 1 0 01-1 1H6a1 1 0 01-1-1V6.41a1 1 0 01.29-.71L7.59 3M9 21V9a3 3 0 016 0v12" /></svg>
    ),
    desc: 'Gently used or new clothes for all ages.'
  },
  {
    title: 'Food',
    icon: (
      <svg className="w-10 h-10 text-fresh-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v18m9-9H3" /></svg>
    ),
    desc: 'Non-perishable food items, grains, pulses, snacks.'
  },
  {
    title: 'Toys',
    icon: (
      <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    ),
    desc: 'Clean, safe toys for children.'
  },
  {
    title: 'Utensils',
    icon: (
      <svg className="w-10 h-10 text-fresh-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>
    ),
    desc: 'Plates, bowls, spoons, and other kitchenware.'
  },
  {
    title: 'Educational Materials',
    icon: (
      <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4m0 0L3 9m9-5l9 5" /></svg>
    ),
    desc: 'Books, notebooks, stationery, and school supplies.'
  },
];

const ContributeMaterials = () => {
  const [form, setForm] = useState({ name: '', contact: '', items: '', method: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({ name: '', contact: '', items: '', method: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleContinue = () => {
    let hasError = false;
    if (!form.name) {
      setErrors(prev => ({ ...prev, name: 'Name is required' }));
      hasError = true;
    }
    if (!form.contact) {
      setErrors(prev => ({ ...prev, contact: 'Contact is required' }));
      hasError = true;
    }
    if (step === 0 && !hasError) {
      setStep(1);
    } else if (step === 1 && !hasError) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or a service
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      <HeroStatsSection
        title={<span>Contribute Materials</span>}
        subtitle={"Your unused items can bring joy and dignity. Donate clothes, food, toys, utensils, and educational materials to help families in need."}
        stats={[]}
        badge={<><Sparkles className="w-5 h-5 text-yellow-300 mr-2" /><span className="text-white font-medium">Give with Love</span></>}
      />
      {/* Padding between hero and cards */}
      <div className="py-12" />

      {/* What You Can Donate */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary-blue mb-4 text-center">What You Can Donate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {donationItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,152,219,0.15)' }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-primary-blue/20 hover:shadow-2xl transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-primary-blue mb-2">{item.title}</h3>
              <p className="text-dark-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How to Contribute */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold text-primary-blue mb-4">How to Contribute</h2>
        <p className="text-dark-gray max-w-2xl mx-auto mb-2">Drop off your items at our center, or request a pick-up for bulk donations. For questions, contact us at <a href="mailto:info@houseofhumanity.in" className="underline text-primary-blue">info@houseofhumanity.in</a> or call +91 99741 91811.</p>
        <p className="text-dark-gray max-w-2xl mx-auto">Address: B1/44 Somdutt park, Near Rajesh tower, Gotri road, Vadodara - 390023</p>
      </div>

      {/* Material Donation Form (Multi-step, DonateForACause style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-primary-blue/20 dark:border-blue-400/30"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary-blue dark:text-blue-200">Material Donation Form</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-600 dark:text-green-400 font-semibold text-lg text-center"
          >
            Thank you for your generosity! We'll be in touch soon.<br />
            <a
              href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary-blue hover:bg-fresh-green dark:bg-fresh-green dark:hover:bg-primary-blue text-white font-bold py-2 px-6 rounded-full shadow transition-all"
            >
              Tell us about your experience!
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
                <p className="font-bold mb-2 text-primary-blue dark:text-blue-200">Your Details</p>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                />
                {errors.name && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.name}</p>}
                <input
                  type="text"
                  placeholder="Contact (Phone or Email)"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                />
                {errors.contact && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.contact}</p>}
                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full py-3 bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold shadow-lg hover:scale-105 transition-transform rounded-lg mt-2"
                >
                  Continue →
                </button>
              </div>
            )}
            {step === 1 && (
              <div>
                <p className="font-bold mb-2 text-primary-blue dark:text-blue-200">Donation Details</p>
                <input
                  type="text"
                  placeholder="Items to Donate (e.g. Clothes, Food, Toys)"
                  name="items"
                  value={form.items}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                />
                {errors.items && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.items}</p>}
                <select
                  name="method"
                  value={form.method}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                >
                  <option value="">Preferred Method</option>
                  <option value="Drop-off">Drop-off</option>
                  <option value="Pick-up">Pick-up</option>
                </select>
                {errors.method && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.method}</p>}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message (optional)"
                  className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                  rows={3}
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-primary-blue dark:text-blue-200 font-semibold hover:text-blue-700 dark:hover:text-fresh-green transition-colors"
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
                <p className="font-bold mb-4 text-primary-blue dark:text-blue-200">Confirm Your Donation</p>
                <div className="border-2 border-primary-blue/30 dark:border-blue-400/30 p-4 rounded-lg mb-4 bg-primary-blue/5 dark:bg-blue-900/10">
                  <p><strong className="text-gray-700 dark:text-gray-200">Name:</strong> <span className="text-primary-blue dark:text-blue-200">{form.name}</span></p>
                  <p><strong className="text-gray-700 dark:text-gray-200">Contact:</strong> <span className="text-primary-blue dark:text-blue-200">{form.contact}</span></p>
                  <p><strong className="text-gray-700 dark:text-gray-200">Items:</strong> <span className="text-primary-blue dark:text-blue-200">{form.items}</span></p>
                  <p><strong className="text-gray-700 dark:text-gray-200">Method:</strong> <span className="text-primary-blue dark:text-blue-200">{form.method}</span></p>
                  {form.message && <p><strong className="text-gray-700 dark:text-gray-200">Message:</strong> <span className="text-primary-blue dark:text-blue-200">{form.message}</span></p>}
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-primary-blue dark:text-blue-200 font-semibold hover:text-blue-700 dark:hover:text-fresh-green transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform rounded-lg"
                  >
                    Submit Donation
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Impact Statement */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-primary-blue mb-2">Your Impact</h2>
        <p className="text-dark-gray max-w-2xl mx-auto">Last year, your contributions helped <span className="font-bold text-primary-blue">500+ families</span> with essential materials and support. Thank you for making a difference!</p>
      </div>
    </div>
  );
};

export default ContributeMaterials; 