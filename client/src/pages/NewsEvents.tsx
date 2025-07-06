import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ui/ImageSlider';
import Button from '../components/ui/Button';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import MediaWithText from '../components/ui/MediaWithText';
import EventCard from '../components/ui/EventCard';
import MediaCard from '../components/ui/MediaCard';
import { fadeIn, staggerContainer } from '../utils/motion';

const NewsAndEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('media');

  const printMediaCoverage = [
    {
      title: "Project Sanskruti Transforms Lives in Halol Taluka",
      publication: "Gujarat Times",
      date: "June 15, 2024",
      excerpt: "30 women empowered through sustainable vermi-compost initiative supported by Grasim Industries...",
      image: "newspaper-article-1"
    },
    {
      title: "Self-Help Groups Drive Rural Development",
      publication: "Economic Tribune",
      date: "May 28, 2024",
      excerpt: "Community-driven approach creates lasting impact in women's livelihood programs...",
      image: "newspaper-article-2"
    },
    {
      title: "Sustainable Agriculture Gets Boost Through SHG Initiative",
      publication: "Farmers Weekly",
      date: "April 20, 2024",
      excerpt: "Vermi-compost production unit generates income while promoting eco-friendly farming...",
      image: "newspaper-article-3"
    },
    {
      title: "Corporate Social Responsibility Makes Real Impact",
      publication: "Business Herald",
      date: "March 12, 2024",
      excerpt: "Grasim Industries partnership demonstrates effective CSR implementation...",
      image: "newspaper-article-4"
    }
  ];

  const digitalMediaCoverage = [
    {
      title: "Women Entrepreneurs Leading Change in Rural Gujarat",
      platform: "Digital Gujarat",
      date: "June 20, 2024",
      type: "Web Article",
      views: "2.5K",
      image: "digital-article-1"
    },
    {
      title: "Sustainable Livelihoods: A Model for Rural Development",
      platform: "Social Impact Today",
      date: "June 10, 2024",
      type: "Feature Story",
      views: "3.2K",
      image: "digital-article-2"
    },
    {
      title: "Video: Project Sanskruti Success Stories",
      platform: "YouTube",
      date: "May 25, 2024",
      type: "Video",
      views: "5.8K",
      image: "youtube-video-1"
    },
    {
      title: "Photo Gallery: Women at Work in Vermi-Compost Unit",
      platform: "Instagram",
      date: "May 15, 2024",
      type: "Photo Series",
      views: "4.1K",
      image: "instagram-gallery-1"
    }
  ];

  const pastEvents = [
    {
      title: "Annual Women's Empowerment Summit",
      date: "March 8, 2024",
      location: "Halol Community Center",
      attendees: "150+",
      description: "International Women's Day celebration with skill development workshops and success story sharing.",
      image: "womens-summit-2024"
    },
    {
      title: "Vermi-Compost Training Workshop",
      date: "February 15, 2024",
      location: "Project Sanskruti Unit",
      attendees: "30",
      description: "Hands-on training session for SHG members on advanced vermi-compost techniques.",
      image: "vermi-workshop-2024"
    },
    {
      title: "Community Health and Nutrition Drive",
      date: "January 20, 2024",
      location: "Multiple Villages",
      attendees: "500+",
      description: "Health awareness campaign focusing on maternal and child nutrition.",
      image: "health-drive-2024"
    }
  ];

  const upcomingEvents = [
    {
      title: "Sustainable Agriculture Conference",
      date: "August 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Vadodara Convention Center",
      type: "Conference",
      status: "Registration Open",
      description: "Join experts and practitioners to discuss sustainable farming practices and women's role in agriculture.",
      image: "agriculture-conference-2024"
    },
    {
      title: "SHG Leadership Training Program",
      date: "September 5-7, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Halol Training Center",
      type: "Workshop",
      status: "Limited Seats",
      description: "3-day intensive program for SHG leaders focusing on group management and financial literacy.",
      image: "leadership-training-2024"
    },
    {
      title: "Project Sanskruti Impact Showcase",
      date: "October 12, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Grasim Industries Office",
      type: "Presentation",
      status: "By Invitation",
      description: "Annual presentation of project outcomes and future expansion plans.",
      image: "impact-showcase-2024"
    },
    {
      title: "Rural Women's Entrepreneurship Fair",
      date: "November 20, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Halol Market Square",
      type: "Exhibition",
      status: "Open to All",
      description: "Showcase of products and services created by rural women entrepreneurs.",
      image: "entrepreneurship-fair-2024"
    }
  ];

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 mt-24"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Unique Hero Section */}
      <motion.div 
        className="relative overflow-hidden mb-16"
        variants={fadeIn('up', 0.2)}
      >
        <div className="bg-gradient-to-r from-primary-blue via-fresh-green to-warm-light-blue rounded-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-6">
                  <span className="px-6 py-3 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Stay Connected
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  News & Events
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Discover our latest media coverage, success stories, and upcoming events that showcase our impact on communities
                </p>
              </div>

              {/* Interactive Tab Navigation */}
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('media')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeTab === 'media'
                      ? 'bg-white text-primary-blue shadow-lg transform scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  📰 Media Coverage
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('events')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeTab === 'events'
                      ? 'bg-white text-primary-blue shadow-lg transform scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  📅 Events & Activities
                </motion.button>
              </div>

            
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-warm-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
      </motion.div>

      {/* Media Coverage Section */}
      {activeTab === 'media' && (
        <motion.div 
          className="space-y-16"
          variants={fadeIn('up', 0.4)}
        >
          {/* Print Media */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-blue to-blue-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📰</span>
                <h2 className="text-3xl font-bold text-white">Print Media Coverage</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {printMediaCoverage.map((article, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                  >
                    <MediaCard
                      title={article.title}
                      publication={article.publication}
                      date={article.date}
                      excerpt={article.excerpt}
                      image={article.image}
                      onReadMore={() => console.log('Read article:', article.title)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Media */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-fresh-green to-green-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💻</span>
                <h2 className="text-3xl font-bold text-white">Digital Media Coverage</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalMediaCoverage.map((content, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                  >
                    <MediaCard
                      title={content.title}
                      platform={content.platform}
                      date={content.date}
                      type={content.type}
                      views={content.views}
                      image={content.image}
                      isDigital={true}
                      onViewContent={() => console.log('View content:', content.title)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Events Section */}
      {activeTab === 'events' && (
        <motion.div 
          className="space-y-16"
          variants={fadeIn('up', 0.4)}
        >
          {/* Past Events */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-dark-gray to-gray-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📅</span>
                  <h2 className="text-3xl font-bold text-white">Past Events</h2>
                </div>
               
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                  >
                    <EventCard
                      title={event.title}
                      date={event.date}
                      location={event.location}
                      description={event.description}
                      image={event.image}
                      attendees={event.attendees}
                      onViewDetails={() => console.log('View event details:', event.title)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-fresh-green to-green-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🗓️</span>
                <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                  >
                    <EventCard
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      description={event.description}
                      image={event.image}
                      type={event.type}
                      status={event.status}
                      isUpcoming={true}
                      onRegister={() => console.log('Register for event:', event.title)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

     
    </motion.div>
  );
};

export default NewsAndEvents;