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
    "image20.webp",          

    
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-galleryTitle mb-4 tracking-tight">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl text-gallerySubtitle max-w-3xl mx-auto">
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
                ? 'bg-galleryCategoryActive text-galleryCategoryActiveText'
                : 'bg-galleryCategory text-galleryCategoryText hover:bg-galleryCategoryHover'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Filters */}
      <div className="mb-12">
        <div className="bg-galleryFilter rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-galleryFilterLabel mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-galleryFilterBorder focus:outline-none focus:ring-2 focus:ring-galleryFilterFocus"
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
              <label className="block text-sm font-semibold text-galleryFilterLabel mb-2">
                Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-galleryFilterBorder focus:outline-none focus:ring-2 focus:ring-galleryFilterFocus"
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
          <div key={image.id} className="bg-galleryCard rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
        className="bg-galleryShare rounded-lg shadow-md p-6 mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-galleryShareTitle">Share Your Story</h2>
        <p className="text-galleryShareText mb-6">
          Have photos or stories from our events? Share them with us to be featured in our gallery.
        </p>
        <button className="bg-galleryShareBtn hover:bg-galleryShareBtnHover text-galleryShareBtnText px-6 py-2 rounded-md transition-colors duration-300">
          Submit Photos
        </button>
      </motion.div>
    </div>
  );
};

export default Gallery;