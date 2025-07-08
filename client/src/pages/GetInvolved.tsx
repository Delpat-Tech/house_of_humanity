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
    quote: "Being part of House of Humanity has been incredibly rewarding. Their compassion and dedication to uplifting communities is truly inspiring.",
    name: "Dhwani Vyas",
    img: "https://drive.google.com/uc?id=1tSWEU2sS2ccpoXFLzoIc5gWrpt3EUuMs",
  },
  {
    quote: "House of Humanity made my birthday special by helping me bring joy to underprivileged kids. The team is selfless and dedicated to making a difference every day!",
    name: "Rucha Shukla",
    img: "https://drive.google.com/uc?id=1tSWEU2sS2ccpoXFLzoIc5gWrpt3EUuMs",
  },
  {
    quote: "House of Humanity gave me a new perspective and made me more empathetic. I now realize how privileged I am and want to help others more.",
    name: "SHRUTI JITENDRA PAGI",
    img: "https://drive.google.com/uc?id=1WZRmgyMe3Y4MkSQSAiQNH0f0oVz-BnS_",
  },
  {
    quote: "HOH has given me meaningful opportunities to support underprivileged communities and grow personally.",
    name: "Rachna Suthar",
    img: "https://drive.google.com/uc?id=1rI-oJAVdrYjcQbY8JW7NA93hLIYwGKc1",
  },
  {
    quote: "It was an amazing experience and the best till now.",
    name: "Drashti Patel",
    img: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    quote: "The HoH team is doing very appreciable work as a whole.",
    name: "Patel Zalak",
    img: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    quote: "It was a great experience overall.",
    name: "Swapnil Patil",
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    quote: "Seeing children receive supplies and care through HoH has been very fulfilling. Our projects bring hope and smiles to many.",
    name: "Preeti Sharma",
    img: "https://drive.google.com/uc?id=1Z2vTd9ALN6w51LaC3M8tcwnd0idTq7Xg",
  },
  {
    quote: "HOH is one of the best NGOs, truly caring for people and creating real change. Amazing work!",
    name: "Zeel Shah",
    img: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    quote: "Joining HOH has been a wonderful experience. The team's efforts and dedication are commendable.",
    name: "Nidhi Hitendra Pandya",
    img: "https://drive.google.com/uc?id=1Se8YcZ12xOir7mljcSXkb6DuFqQ3F9Hv",
  },
  {
    quote: "It's been great seeing HOH achieve its goals and help the community. I hope to see it grow even more.",
    name: "Hiteshi Vaishnav",
    img: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
];

const flipIcons = [
  // Volunteer: Hand with Heart (bold, filled)
  (
    <span className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full">
      <svg className="w-7 h-7 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </span>
  ),
  // Attend an Event: Calendar Star (keep as is, just larger)
  (
    <span className="inline-flex items-center justify-center w-14 h-14 bg-fresh-green/10 rounded-full">
      <svg className="w-10 h-10 text-fresh-green" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 3v4M8 3v4M3 9h18" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="12,13 13,15 15,15 13.5,16.5 14,18.5 12,17.5 10,18.5 10.5,16.5 9,15 11,15" fill="currentColor" />
      </svg>
    </span>
  ),
  // Fundraise: Rupee Icon (bolder, larger, with background)
  (
    <span className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full">
      <svg className="w-10 h-10 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
        <text x="6" y="18" fontSize="16" fontWeight="bold" fill="currentColor">₹</text>
      </svg>
    </span>
  ),
  // Spread the Word: Share Alt (bolder, larger, with background)
  (
    <span className="inline-flex items-center justify-center w-14 h-14 bg-fresh-green/10 rounded-full">
      <svg className="w-10 h-10 text-fresh-green" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.83 3.98" stroke="white" strokeWidth="1.5" />
      </svg>
    </span>
  ),
];

const FlipCard = ({ front, back, icon, cta }: { front: string; back: string; icon: React.ReactNode; cta?: string }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="w-full h-56 cursor-pointer group"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,152,219,0.25)' }}
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
          className="absolute w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-primary-blue/10 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {icon}
          <span className="text-2xl font-extrabold text-primary-blue drop-shadow">{front}</span>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-off-white dark:bg-gray-800 rounded-2xl shadow-xl px-6 text-center border-2 border-primary-blue/10"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <span className="text-lg text-primary-blue font-medium mb-4">{back}</span>
          {cta && (
            <button className="mt-2 bg-fresh-green hover:bg-primary-blue text-white px-4 py-1.5 rounded-lg font-semibold shadow hover:scale-105 transition-transform">{cta}</button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Carousel = ({ testimonials }: { testimonials: { quote: string; name: string; img: string }[] }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [index, isPaused]);

  return (
    <>
      {/* Desktop: arrows beside card, flex-row */}
      <div
        className="hidden md:flex items-center justify-center w-full max-w-2xl mx-auto gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <button
          onClick={prev}
          className="flex items-center justify-center bg-primary-blue hover:bg-fresh-green text-white rounded-full w-14 h-14 shadow-lg text-2xl z-20 p-0"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction === 1 ? 80 : -80, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction === 1 ? -80 : 80, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.4, 0.15, 0.25, 1] }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-2xl flex flex-col items-center relative overflow-hidden w-full border-2 border-primary-blue/10"
        >
          {/* Decorative Quote Icon */}
          <svg className="absolute top-6 left-6 w-10 h-10 text-primary-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h.01M15 7h.01M7 11a5 5 0 015-5h0a5 5 0 015 5v1a5 5 0 01-5 5h-1a5 5 0 01-5-5v-1z" /></svg>
          <img src={testimonials[index].img} alt={testimonials[index].name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary-blue shadow-lg ring-4 ring-primary-blue/30" />
          <p className="italic text-2xl text-primary-blue font-serif mb-4 text-center leading-relaxed z-10 max-h-28 overflow-hidden line-clamp-3">"{testimonials[index].quote}"</p>
          <div className="mt-2 text-primary-blue/90 font-bold text-lg z-10">— {testimonials[index].name}</div>
        </motion.div>
        <button
          onClick={next}
          className="flex items-center justify-center bg-primary-blue hover:bg-fresh-green text-white rounded-full w-14 h-14 shadow-lg text-2xl z-20 p-0"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Mobile: card, then arrows below */}
      <div
        className="md:hidden w-full max-w-2xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction === 1 ? 80 : -80, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction === 1 ? -80 : 80, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.4, 0.15, 0.25, 1] }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center relative overflow-hidden w-full border-2 border-primary-blue/10"
        >
          <svg className="absolute top-6 left-6 w-10 h-10 text-primary-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h.01M15 7h.01M7 11a5 5 0 015-5h0a5 5 0 015 5v1a5 5 0 01-5 5h-1a5 5 0 01-5-5v-1z" /></svg>
          <img src={testimonials[index].img} alt={testimonials[index].name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary-blue shadow-lg ring-4 ring-primary-blue/30" />
          <p className="italic text-2xl text-primary-blue font-serif mb-4 text-center leading-relaxed z-10 max-h-28 overflow-hidden line-clamp-3">"{testimonials[index].quote}"</p>
          <div className="mt-2 text-primary-blue/90 font-bold text-lg z-10">— {testimonials[index].name}</div>
        </motion.div>
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={prev}
            className="flex items-center justify-center bg-primary-blue hover:bg-fresh-green text-white rounded-full w-14 h-14 shadow-lg text-2xl z-20 p-0"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center bg-primary-blue hover:bg-fresh-green text-white rounded-full w-14 h-14 shadow-lg text-2xl z-20 p-0"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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
        className="mb-12 text-center bg-gradient-to-br from-primary-blue to-fresh-green rounded-3xl py-10 shadow-xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Get Involved</h1>
        <p className="text-xl text-white/90 font-medium">Join our vibrant community. Flip a card to discover how you can make a difference!</p>
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-primary-blue/20 dark:border-blue-400/30"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary-blue dark:text-blue-300">Volunteer Signup</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-600 dark:text-green-400 font-semibold text-lg text-center"
          >
            Thank you for signing up! We'll be in touch soon.<br />
            <a
              href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary-blue hover:bg-fresh-green dark:bg-blue-700 dark:hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow transition-all"
            >
              Tell us about your experience!
            </a>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 dark:text-gray-200 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-200 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-200 font-medium">Areas of Interest</label>
              <input
                type="text"
                name="interests"
                value={form.interests}
                onChange={handleChange}
                placeholder="e.g. Health, Education, Events"
                className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-200 font-medium">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-blue-400/30 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-400 focus:border-primary-blue dark:focus:border-blue-400 transition-colors"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-blue-700 dark:to-green-600 text-white px-8 py-2 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </form>
        )}
      </motion.div>

      {/* Carousel for Volunteer Stories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary-blue text-center">Volunteer Stories</h2>
        <Carousel testimonials={testimonials} />
      </motion.div>
    </div>
  );
};

export default GetInvolved; 