import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

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
  },
  {
    quote: "House of Humanity made my birthday special by helping me bring joy to underprivileged kids. The team is selfless and dedicated to making a difference every day!",
    name: "Rucha Shukla",
  },
  {
    quote: "House of Humanity gave me a new perspective and made me more empathetic. I now realize how privileged I am and want to help others more.",
    name: "SHRUTI JITENDRA PAGI",
  },
  {
    quote: "HOH has given me meaningful opportunities to support underprivileged communities and grow personally.",
    name: "Rachna Suthar",
  },
  {
    quote: "It was an amazing experience and the best till now.",
    name: "Drashti Patel",
  },
  {
    quote: "The HoH team is doing very appreciable work as a whole.",
    name: "Patel Zalak",
  },
  {
    quote: "It was a great experience overall.",
    name: "Swapnil Patil",
  },
  {
    quote: "Seeing children receive supplies and care through HoH has been very fulfilling. Our projects bring hope and smiles to many.",
    name: "Preeti Sharma",
  },
  {
    quote: "HOH is one of the best NGOs, truly caring for people and creating real change. Amazing work!",
    name: "Zeel Shah",
  },
  {
    quote: "Joining HOH has been a wonderful experience. The team's efforts and dedication are commendable.",
    name: "Nidhi Hitendra Pandya",
  },
  {
    quote: "It's been great seeing HOH achieve its goals and help the community. I hope to see it grow even more.",
    name: "Hiteshi Vaishnav",
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

const Carousel = ({ testimonials }: { testimonials: { quote: string; name: string }[] }) => {
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
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interests: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; interests?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{8,15}$/.test(phone);

  const validateStep1 = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email format';
    if (!form.phone.trim() || !validatePhone(form.phone)) newErrors.phone = 'Valid phone number (8-15 digits) required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: typeof errors = {};
    if (!form.interests.trim()) newErrors.interests = 'Please specify your areas of interest';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !validateStep2()) return;
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or a service
  };

  const getProgress = () => (step === 0 ? 'w-1/3' : step === 1 ? 'w-2/3' : 'w-full');

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <HeroStatsSection
        title={<span>Get Involved</span>}
        subtitle={"Join our vibrant community. Flip a card to discover how you can make a difference!"}
        stats={[]}
        className="mb-12"
        badge={<><Sparkles className="w-5 h-5 text-yellow-300 mr-2" /><span className="text-white font-medium">Support & Empower</span></>}
      />
      {/* Your Impact in Action Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-fresh-green/10 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-blue-200 mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-fresh-green dark:text-fresh-green/80 font-semibold mb-2">
              Every act of involvement plants a seed of hope.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Thanks to your generosity and participation, lives are being transformed every day. Here's how your support and involvement are making a real difference in our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                stat: "+500 Women Helped",
                title: "Health & Hygiene",
                desc: "Provides sanitary pads, health camps, and hygiene education for women and children.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
              {
                stat: "120 Scholarships",
                title: "Education",
                desc: "Funds school supplies, scholarships, and after-school programs for underprivileged kids.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                stat: "10,000+ Meals Served",
                title: "Nutrition",
                desc: "Delivers nutritious meals and supplements to malnourished children and families.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                ),
              },
              {
                stat: "75+ Women Entrepreneurs",
                title: "Livelihood",
                desc: "Supports vocational training and micro-enterprise for women and youth.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 ring-1 ring-inset ring-fresh-green/20 hover:ring-fresh-green/40 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-blue to-fresh-green mb-3 shadow mt-6">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-primary-blue dark:text-blue-200 font-bold mt-8 text-lg">
            Be the change.{' '}
            <span className="text-fresh-green">Your support matters.</span>
          </p>
        </div>
      </div>
      {/* End Your Impact in Action Section */}
      <div className="py-8" />
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        {/* Volunteer Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto border border-primary-blue/20 dark:border-blue-400/30"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary-blue dark:text-blue-300">Volunteer Signup</h2>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-8 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-primary-blue to-fresh-green transition-all duration-500 rounded ${getProgress()}`} />
          </div>
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
              {step === 0 && (
                <div>
                  <p className="font-bold mb-4 text-primary-blue">We'll never share this information with anyone.</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const email = e.target.value;
                      if (!validateEmail(email)) {
                        setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
                      } else {
                        setErrors((prev) => ({ ...prev, email: '' }));
                      }
                    }}
                    className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const phone = e.target.value;
                      if (!validatePhone(phone)) {
                        setErrors((prev) => ({ ...prev, phone: 'Valid phone number (8-15 digits) required' }));
                      } else {
                        setErrors((prev) => ({ ...prev, phone: '' }));
                      }
                    }}
                    className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}
                  <Button
                    type="button"
                    onClick={handleContinue}
                    className="w-full py-3 bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white font-bold shadow-lg hover:scale-105 transition-transform rounded-lg mt-2"
                  >
                    Continue →
                  </Button>
                </div>
              )}
              {step === 1 && (
                <div>
                  <p className="font-bold mb-2 text-primary-blue">Volunteer Details</p>
                  <input
                    type="text"
                    name="interests"
                    placeholder="Areas of Interest (e.g. Health, Education, Events)"
                    value={form.interests}
                    onChange={handleChange}
                    className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.interests && <p className="text-red-600 text-sm mb-2">{errors.interests}</p>}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us why you want to volunteer (optional)"
                    className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    rows={3}
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-primary-blue font-semibold hover:text-blue-700 transition-colors"
                    >
                      ← Back
                    </button>
                    <Button
                      type="button"
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
                  <p className="font-bold mb-4 text-primary-blue">Confirm Your Details</p>
                  <div className="border-2 border-primary-blue/30 p-4 rounded-lg mb-4 bg-primary-blue/5 dark:bg-blue-900/10">
                    <p><strong className="text-gray-700 dark:text-gray-200">Name:</strong> <span className="text-primary-blue dark:text-blue-200">{form.name}</span></p>
                    <p><strong className="text-gray-700 dark:text-gray-200">Email:</strong> <span className="text-primary-blue dark:text-blue-200">{form.email}</span></p>
                    <p><strong className="text-gray-700 dark:text-gray-200">Phone:</strong> <span className="text-primary-blue dark:text-blue-200">{form.phone}</span></p>
                    <p><strong className="text-gray-700 dark:text-gray-200">Areas of Interest:</strong> <span className="text-primary-blue dark:text-blue-200">{form.interests}</span></p>
                    {form.message && <p><strong className="text-gray-700 dark:text-gray-200">Message:</strong> <span className="text-primary-blue dark:text-blue-200">{form.message}</span></p>}
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-primary-blue font-semibold hover:text-blue-700 transition-colors"
                    >
                      ← Back
                    </button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 font-bold shadow-lg hover:scale-105 transition-transform rounded-lg"
                    >
                      Confirm & Submit
                    </Button>
                  </div>
                </div>
              )}
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
    </div>
  );
};

export default GetInvolved; 