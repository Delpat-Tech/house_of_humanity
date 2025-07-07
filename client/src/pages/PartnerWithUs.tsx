import React, { useState } from 'react';
import { motion } from 'framer-motion';

const partnerTypes = [
  {
    title: 'Corporate',
    icon: (
      <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    desc: 'CSR, employee engagement, and brand visibility.'
  },
  {
    title: 'NGO',
    icon: (
      <svg className="w-10 h-10 text-fresh-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    ),
    desc: 'Collaboration for greater social impact.'
  },
  {
    title: 'Government',
    icon: (
      <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /></svg>
    ),
    desc: 'Public-private partnerships for sustainable change.'
  },
  {
    title: 'Community',
    icon: (
      <svg className="w-10 h-10 text-fresh-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    ),
    desc: 'Grassroots support and local leadership.'
  },
];

const PartnerWithUs = () => {
  const [form, setForm] = useState({ name: '', org: '', email: '', type: '', message: '' });
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
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Partner With Us</h1>
        <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">Join hands with House of Humanity to create lasting impact. We welcome partnerships with corporates, NGOs, government, and community organizations.</p>
      </motion.div>

      {/* Partnership Benefits */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold text-primary-blue mb-4">Why Partner With Us?</h2>
        <p className="text-dark-gray max-w-2xl mx-auto">Amplify your impact, boost your brand, and make a real difference in the lives of women, children, and communities. Our partners enjoy brand visibility, CSR opportunities, and the satisfaction of driving sustainable change.</p>
      </div>

      {/* Partner Types Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {partnerTypes.map((type, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,152,219,0.15)' }}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-primary-blue/20 hover:shadow-2xl transition-all"
          >
            {type.icon}
            <h3 className="text-xl font-bold text-primary-blue mb-2">{type.title}</h3>
            <p className="text-dark-gray text-sm">{type.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Partnership Inquiry Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-primary-blue/20"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Become a Partner</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-600 font-semibold text-lg text-center"
          >
            Thank you for your interest! We'll be in touch soon.<br />
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
              <label className="block text-gray-600 font-medium">Organization</label>
              <input
                type="text"
                name="org"
                value={form.org}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Type of Partner</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              >
                <option value="">Select...</option>
                <option value="Corporate">Corporate</option>
                <option value="NGO">NGO</option>
                <option value="Government">Government</option>
                <option value="Community">Community</option>
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

      {/* Logo Wall */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary-blue mb-6 text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-xl shadow p-4 flex items-center justify-center w-40 h-20 border border-primary-blue/20">
              <img src={`https://placehold.co/120x40/0098DB/FFF?text=Logo+${n}`} alt={`Partner Logo ${n}`} className="object-contain h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs; 