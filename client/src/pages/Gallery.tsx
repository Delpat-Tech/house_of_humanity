import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const years = ['all', '2024', '2023', '2022'];
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

  // import all images from public/Gallery
  const galleryFilenames = [
    "IMG-4030.webp",
    "IMG-4028-scaled.webp",
    "IMG-0997-scaled.webp",
    "edd707e5-5e9a-461b-ae8e-82cbdedbd241.webp",
    "IMG-6474-scaled.webp",
    "IMG-6313-2-scaled.webp",
    "IMG-6310-scaled.webp",
    "IMG-5807-1-scaled.webp",
    "IMG-5797-scaled.webp",
    "017f1cfc-91c0-4c03-8485-d4faf7ee8004.webp",
    "9a99fc70-7259-4e80-b853-68469dda507e-1.webp",
    "Pad-House-1.webp",
    "Team-1.webp",
    "WhatsApp-Image-2022-02-19-at-7.42.12-PM-1.webp",
    "WhatsApp-Image-2021-12-09-at-7.16.53-PM.webp"
  ];

  const images = galleryFilenames.map((filename, idx) => ({
    id: idx + 1,
    category: 'gallery', // default category
    src: `/Gallery/${filename}`,
    title: filename,
    description: ''
  }));

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 tracking-tight">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A visual journey through our impact, events, and success stories.
        </p>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center space-x-4 mb-8"
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedCategory === category.id
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Filters */}
      <div className="mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
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

      {/* Gallery Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {filteredImages.map(image => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Share Your Story */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-md p-6 mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Share Your Story</h2>
        <p className="text-gray-600 mb-6">
          Have photos or stories from our events? Share them with us to be featured in our gallery.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition-colors duration-300">
          Submit Photos
        </button>
      </motion.div>
    </div>
  );
};

export default Gallery;