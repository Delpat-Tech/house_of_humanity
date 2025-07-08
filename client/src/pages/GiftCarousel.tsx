import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  image: string;
  amount: string;
  description: string;
  id?: string;
}

const slides: Slide[] = [
  { image: '/assets/donation-impact/i1.jpg', amount: '₹1,800', description: 'Provides 5 women with a year\'s supply of Asani Sanitary Napkins' },
  { image: '/assets/donation-impact/i2.jpg', amount: '₹4,500', description: 'Supports 1 woman for a 3 month Sewing Skills program' },
  { image: '/assets/donation-impact/i3.jpg', amount: '₹15,000', description: 'Provides health services for 15 women for a whole year' },
  { image: '/assets/donation-impact/i4.jpg', amount: '₹35,000', description: 'Supports 1 fun-filled summer camp in one state in India' },
  { image: '/assets/donation-impact/i5.jpg', amount: '₹40,000', description: 'Delivers vocational training to 6 rural women' },
  { image: '/assets/donation-impact/i6.jpg', amount: '₹50,000', description: 'Funds clean water solutions for one village' },
  { image: '/assets/donation-impact/i7.jpg', amount: '₹1,80,000', description: 'Helps 3 women become micro-entrepreneurs' },
  { image: '/assets/donation-impact/i8.jpg', amount: '₹3,00,000', description: 'Conducts hygiene awareness workshops for 100 girls' },
  { image: '/assets/donation-impact/i9.jpg', amount: '₹6,00,000', description: 'Sponsors community outreach campaigns in 3 villages' },
];

const CARD_WIDTH = 240; // px
const CARD_GAP = 0; // px (no gap needed for single card)

const GiftCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Calculate the offset for the sliding effect
  const offset = -(CARD_WIDTH + CARD_GAP) * current;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Heading */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-primary-blue mb-1 tracking-tight">
          How Your Gift Creates Impact
        </h2>
        <p className="text-base text-primary-blue/80 max-w-xs mx-auto">
          Every contribution is a step towards a brighter, more humane world.
        </p>
      </div>
      {/* Carousel */}
      <div
        className="relative flex items-center justify-center mx-auto"
        style={{ width: CARD_WIDTH + 64 }} // 64px for two 32px arrow buttons
      >
        {/* Prev Button */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-blue/90 hover:text-white text-primary-blue w-8 h-8 rounded-full flex items-center justify-center shadow border border-primary-blue/20 transition-all duration-200"
        >
          <span className="text-lg">❮</span>
        </button>
        {/* Cards filmstrip */}
        <div className="overflow-hidden" style={{ width: CARD_WIDTH }}>
          <motion.div
            className="flex items-center"
            style={{ gap: `${CARD_GAP}px` }}
            animate={{ x: offset }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
          >
            {slides.map((slide, idx) => {
              const isCenter = idx === current;
              return (
                <div
                  key={idx}
                  className={`relative flex-shrink-0 bg-white/90 rounded-xl shadow-lg border border-primary-blue/10 overflow-hidden transition-all duration-300
                    ${isCenter ? 'scale-100 opacity-100 z-20' : 'scale-75 opacity-0 pointer-events-none z-0'}
                  `}
                  style={{ width: CARD_WIDTH, minHeight: 320 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.amount}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent p-3">
                    <div className="text-primary-blue font-bold text-lg">{slide.amount}</div>
                    <div className="text-xs text-gray-700 font-medium">{slide.description}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        {/* Next Button */}
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-blue/90 hover:text-white text-primary-blue w-8 h-8 rounded-full flex items-center justify-center shadow border border-primary-blue/20 transition-all duration-200"
        >
          <span className="text-lg">❯</span>
        </button>
      </div>
      {/* Dots */}
      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-primary-blue/30
              ${i === current ? 'bg-primary-blue scale-110' : 'bg-gray-200 hover:bg-primary-blue/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GiftCarousel;
