import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const GiftCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsPerView = 2;
  const totalGroups = Math.ceil(slides.length / cardsPerView);

  const next = () => {
    if (currentIndex < totalGroups - 1) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative py-10 bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 border border-primary-blue/20 text-center w-full">
      <h2 className="text-2xl font-bold mb-6 text-primary-blue">
        HOW YOUR GIFT CREATES IMPACT
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary-blue hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg z-10"
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary-blue hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg z-10"
          disabled={currentIndex === totalGroups - 1}
        >
          ❯
        </button>

        {/* Carousel Content with padding to avoid button overlap */}
        <div className="px-10">
          <div
            className="flex transition-transform duration-500 ease-in-out justify-center"
            style={{
              width: `${(slides.length / cardsPerView) * 100}%`,
              transform: `translateX(-${currentIndex * (100 / totalGroups)}%)`,
            }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-1/2 px-2 box-border">
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-primary-blue/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <img src={slide.image} alt={`Impact ${idx + 1}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-primary-blue">{slide.amount}</h3>
                    <p className="text-sm text-dark-gray">{slide.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`mx-1 w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
                i === currentIndex ? 'bg-primary-blue scale-125' : 'bg-gray-300 hover:bg-primary-blue/50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCarousel;
