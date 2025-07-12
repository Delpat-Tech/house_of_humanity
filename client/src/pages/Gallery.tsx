import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryImageData from './gallery.json';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { Sparkles } from 'lucide-react';

type GalleryImageData = {
  filename: string;
  year: string;
  month: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'programs', name: 'Programs' },
    { id: 'success-stories', name: 'Success Stories' }
  ];

  const years = ['all', '2025', '2024', '2023', '2022'];
  const months = [
    { id: 'all', name: 'All Months' },
    { id: '01', name: 'January' },
    { id: '02', name: 'February' },
    { id: '03', name: 'March' },
    { id: '04', name: 'April' },
    { id: '05', name: 'May' },
    { id: '06', name: 'June' },
    { id: '07', name: 'July' },
    { id: '08', name: 'August' },
    { id: '09', name: 'September' },
    { id: '10', name: 'October' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' }
  ];

  type GalleryImage = {
    id: number;
    category: string;
    src: string;
    title: string;
    description: string;
    year: string;
    month: string;
  };

  const images: GalleryImage[] = (galleryImageData as GalleryImageData[]).map((data: GalleryImageData, idx: number) => ({
    id: idx + 1,
    category: 'gallery', // default category
    src: `/Gallery/${data.filename}`,
    title: data.filename,
    description: '',
    year: data.year,
    month: data.month,
  }));

  const filteredImages = images.filter(image => {
    const categoryMatch = selectedCategory === 'all' || image.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || image.year === selectedYear;
    const monthMatch = selectedMonth === 'all' || image.month === selectedMonth;
    return categoryMatch && yearMatch && monthMatch;
  });

  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 pt-24 bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <HeroStatsSection
        title={<span>Our Gallery</span>}
        subtitle={"A visual journey through our impact, events, and success stories."}
        stats={[]}
        badge={<><Sparkles className="w-5 h-5 text-yellow-300 mr-2" /><span className="text-white font-medium">Visual Journey</span></>}
        backgroundClassName="bg-gradient-to-br from-primary-blue via-primary-blue to-blue-800"
        overlayClassName="bg-black bg-opacity-10"
        className="rounded-2xl mb-6 py-6 px-2"
      />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-blue/40 scrollbar-track-transparent"
        style={{ maxWidth: '100%' }}
      >
        <div className="flex gap-2 w-full min-w-[320px] max-w-2xl mx-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-1 min-w-[120px] max-w-xs px-4 py-2 rounded-md transition-colors duration-300 text-center ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-blue to-fresh-green text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              style={{ flex: '1 0 120px' }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Filters */}
      <div className="mb-12">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-primary-blue/20 dark:border-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-primary-blue/30 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-primary-blue/30 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
              >
                {months.map(month => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid with animation and hover overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + selectedYear + selectedMonth}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-primary-blue/10 dark:border-gray-600 cursor-pointer group"
              onClick={() => setLightboxImage(image)}
            >
              <div className="relative h-48 group">
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-2 max-w-3xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition"
                onClick={() => setLightboxImage(null)}
                aria-label="Close preview"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Your Story */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-md p-6 mt-12 text-center border border-primary-blue/20 dark:border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Share Your Story</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have photos or stories from our events? Share them with us to be featured in our gallery.
        </p>
        <button className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
          Submit Photos
        </button>
      </motion.div>
    </div>
  );
};

export default Gallery;