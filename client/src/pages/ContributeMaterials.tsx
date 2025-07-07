import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or a service
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 mt-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center bg-gradient-to-br from-primary-blue via-blue-600 to-fresh-green rounded-3xl py-10 shadow-xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Contribute Materials</h1>
        <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">Your unused items can bring joy and dignity. Donate clothes, food, toys, utensils, and educational materials to help families in need.</p>
      </motion.div>

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

      {/* Material Donation Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-primary-blue/20"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Material Donation Form</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-600 font-semibold text-lg text-center"
          >
            Thank you for your generosity! We'll be in touch soon.<br />
            <a
              href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary-blue hover:bg-fresh-green text-white font-bold py-2 px-6 rounded-full shadow transition-all"
            >
              Tell us about your experience!
            </a>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Contact (Phone or Email)</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Items to Donate</label>
              <input
                type="text"
                name="items"
                value={form.items}
                onChange={handleChange}
                placeholder="e.g. Clothes, Food, Toys"
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Preferred Method</label>
              <select
                name="method"
                value={form.method}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              >
                <option value="">Select...</option>
                <option value="Drop-off">Drop-off</option>
                <option value="Pick-up">Pick-up</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-8 py-2 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </form>
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