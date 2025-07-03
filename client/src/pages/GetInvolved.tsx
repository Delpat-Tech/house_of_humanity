import React, { useState } from 'react';
import { motion } from 'framer-motion';

const involvementWays = [
  {
    title: 'Volunteer',
    front: 'Volunteer',
    back: 'Sign up to volunteer for our projects and events. Your time and skills can make a real difference!'
  },
  {
    title: 'Attend an Event',
    front: 'Attend an Event',
    back: 'Participate in our upcoming events and drives. Check our Events page for details.'
  },
  {
    title: 'Fundraise',
    front: 'Fundraise',
    back: 'Start a fundraiser in your community or online to support our causes. Contact us for resources and ideas!'
  },
  {
    title: 'Spread the Word',
    front: 'Spread the Word',
    back: 'Share our mission and stories on social media. Every share helps us reach more people in need.'
  },
];

const testimonials = [
  {
    quote: 'Volunteering with House of Humanity has been a life-changing experience. I\'ve made lifelong friends and seen the impact of our work firsthand.',
    name: 'Priya S.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote: 'I started as a volunteer and now lead a team of 20! The sense of purpose and community here is amazing.',
    name: 'Rahul M.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Helping at events gave me confidence and a sense of belonging. I recommend it to everyone!',
    name: 'Ayesha K.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const flipIcons = [
  (
    <svg className="w-10 h-10 text-pink-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0v2m0 4v.01" /></svg>
  ),
  (
    <svg className="w-10 h-10 text-fuchsia-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h8a2 2 0 002-2v-6" /></svg>
  ),
  (
    <svg className="w-10 h-10 text-pink-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
  ),
  (
    <svg className="w-10 h-10 text-fuchsia-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
  ),
];

const FlipCard = ({ front, back, icon, cta }: { front: string; back: string; icon: React.ReactNode; cta?: string }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="w-full h-56 cursor-pointer group"
      onClick={() => setFlipped((f) => !f)}
      whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(236,72,153,0.25)' }}
      style={{ perspective: 1200 }}
    >
      <div
        className="relative w-full h-full duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 rounded-2xl shadow-2xl border border-pink-400 group-hover:ring-4 group-hover:ring-rose-400 transition-all"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {icon}
          <span className="text-2xl font-extrabold text-white drop-shadow">{front}</span>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-rose-100 rounded-2xl shadow-xl px-6 text-center border border-rose-200"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <span className="text-lg text-rose-600 font-medium mb-4">{back}</span>
          {cta && (
            <button className="mt-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-1.5 rounded-lg font-semibold shadow hover:scale-105 transition-transform">{cta}</button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Carousel = ({ testimonials }: { testimonials: { quote: string; name: string; img: string }[] }) => {
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

const GetInvolved = () => {
  const [form, setForm] = useState({ name: '', email: '', interests: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        className="mb-12 text-center bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 rounded-3xl py-10 shadow-xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Get Involved</h1>
        <p className="text-xl text-pink-100 font-medium">Join our vibrant community. Flip a card to discover how you can make a difference!</p>
      </motion.div>

      {/* CardGrid with FlipCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {involvementWays.map((way, idx) => (
          <FlipCard
            key={idx}
            front={way.front}
            back={way.back}
            icon={flipIcons[idx]}
            cta={
              way.front === 'Volunteer' ? 'Sign Up' :
              way.front === 'Attend an Event' ? 'See Events' :
              way.front === 'Fundraise' ? 'Start Now' :
              way.front === 'Spread the Word' ? 'Share' : undefined
            }
          />
        ))}
      </div>

      {/* Volunteer Signup Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-pink-100"
      >
        <h2 className="text-3xl font-bold mb-4 text-pink-600">Volunteer Signup</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-600 font-semibold text-lg text-center"
          >
            Thank you for signing up! We'll be in touch soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-pink-200 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full border-2 border-pink-200 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Areas of Interest</label>
              <input
                type="text"
                name="interests"
                value={form.interests}
                onChange={handleChange}
                placeholder="e.g. Health, Education, Events"
                className="w-full border-2 border-pink-200 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-pink-200 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-2 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </form>
        )}
      </motion.div>

      {/* Carousel for Volunteer Stories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Volunteer Stories</h2>
        <Carousel testimonials={testimonials} />
      </motion.div>
    </div>
  );
};

export default GetInvolved; 