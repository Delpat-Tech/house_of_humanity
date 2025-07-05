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
    "image1.webp",
    "image2.webp",
    "image3.webp",
    "image4.webp",
    "image5.webp",
    "image6.webp",
    "image7.webp",
    "image8.webp",
    "image9.webp",
    "image10.webp",
    "image11.webp",
    "image12.webp",
    "image13.webp",
    "image14.webp",
    "image15.webp",
    "image16.webp",
    "image17.webp",
    "image18.webp",
    "image19.webp",
    "image20.webp"
    
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
    <div className="container mx-auto px-4 py-12 pt-24 bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-4 tracking-tight">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                ? 'bg-gradient-to-r from-primary-blue to-fresh-green text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
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

      {/* Gallery Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {filteredImages.map(image => (
          <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-primary-blue/10 dark:border-gray-600">
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