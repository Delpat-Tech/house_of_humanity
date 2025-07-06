import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Monitor, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Eye,
  ArrowRight,
  X,
  Heart,
  Award,
  Utensils,
  BookOpen,
  Zap
} from 'lucide-react';
import ImageSlider from '../components/ui/ImageSlider';
import Button from '../components/ui/Button';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import MediaWithText from '../components/ui/MediaWithText';
import EventCard from '../components/ui/EventCard';
import MediaCard from '../components/ui/MediaCard';
import { fadeIn, staggerContainer } from '../utils/motion';

const NewsAndEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('media');
  const [selectedNews, setSelectedNews] = useState(null);

  const houseOfHumanityNews = [
    {
      id: 1,
      title: "Project Bachpan - Transforming Lives of Special Children",
      publication: "Gujarat Samachar",
      date: "December 15, 2024",
      excerpt: "House of Humanity organized a heartwarming picnic for mentally and physically challenged children under Project Bachpan...",
      image: "/News1.png",
      imageUrl: "/News1.png",
      icon: <Heart className="w-5 h-5" />,
      category: "Children Welfare",
      fullContent: {
        headline: "Project Bachpan - Picnic for Mentally and Physically Challenged Children",
        details: [
          "House of Humanity organized a special picnic for mentally and physically challenged children under their flagship 'Project Bachpan' initiative.",
          "More than 50 children participated in various engaging activities spread across three hours, including nutritious breakfast and lunch.",
          "The children were taken to Decathlon Mall where they learned about shopping and gained real-world experience in a supportive environment.",
          "Physical fitness activities included volleyball games and energetic Zumba sessions designed to improve their motor skills.",
          "Dancing sessions to various songs helped develop the children's agility and brought joy to their faces.",
          "All participants received prizes and recognition for their participation, boosting their confidence and self-esteem.",
          "Volunteers from M.S. University's Footprints organization and children from Arpan Charitable Trust were present to ensure a safe and enjoyable experience.",
          "The organization has committed to organizing more such activities to help these special children become more capable mentally and physically in the future.",
          "Founders Harsh Rao and Manthan Shah emphasized that children enjoy outings more than adults, which motivated them to organize this transformative picnic experience."
        ]
      }
    },
    {
      id: 2,
      title: "Daily Meal Service Feeds 250+ People at SSG Hospital",
      publication: "Times of India",
      date: "November 28, 2024",
      excerpt: "House of Humanity has been providing free meals to over 250 people daily at SSG Hospital for the past two and a half years...",
      image: "/News2.png",
      icon: <Utensils className="w-5 h-5" />,
      category: "Healthcare Support",
      fullContent: {
        headline: "Daily Meal Service and Support at SSG Hospital",
        details: [
          "House of Humanity Charitable Trust has been providing free meals to over 250 people daily at SSG Hospital for the past two and a half years.",
          "The noble initiative started during the COVID-19 pandemic by founders Harsh Rao and Manthan Shah, who initially began by feeding 25 people with simple khichdi.",
          "Today, they serve complete nutritious meals including dal, rice, roti, vegetables, and sweets to ensure proper nutrition for patients' families.",
          "The trust also provides free bananas, milk, and biscuits to more than 70 children in the SSG Hospital's pediatric ward.",
          "What started as a small initiative with just 5 people has now grown into a dedicated team of over 25 young volunteers.",
          "On special occasions like birthdays or anniversaries of team members, they serve elaborate meals including puri, vegetables, dal, rice, sweets, pav bhaji, and pizza.",
          "Beyond food, they provide crucial motivational support to the stressed relatives of patients, offering emotional comfort during difficult times.",
          "The service extends even to stray dogs at the hospital campus, providing them with milk and rotis, showing their compassion for all living beings.",
          "The foundation maintains the highest standards of health and hygiene throughout the cooking and distribution process."
        ]
      }
    },
    {
      id: 3,
      title: "Holistic Development Programs for Underprivileged Children",
      publication: "Indian Express",
      date: "October 20, 2024",
      excerpt: "The trust works tirelessly for the holistic development of children in various slum areas of the city...",
      image: "newspaper-child-development",
      icon: <BookOpen className="w-5 h-5" />,
      category: "Education & Development",
      fullContent: {
        headline: "Initiatives for Underprivileged Children and Animal Care",
        details: [
          "The trust works dedicatedly for the holistic development of children in various slum areas across the city.",
          "They organize educational visits to different places of interest to enhance children's knowledge and broaden their perspectives.",
          "The organization firmly believes that today's children are tomorrow's future, and youth must actively participate in their development.",
          "The trust provides educational materials and sports equipment to children in underserved communities.",
          "Regular skill development workshops are conducted to prepare children for future opportunities.",
          "The organization also demonstrates compassion for animals by feeding stray dogs with milk, roti, and pedigree.",
          "Medical care and other necessary support are provided for injured and sick animals in the community.",
          "The trust organizes awareness programs about animal welfare and responsible pet ownership.",
          "Community engagement programs help build stronger relationships between volunteers and beneficiaries."
        ]
      }
    },
    {
      id: 4,
      title: "Menstrual Hygiene Awareness Reaches 5,000+ Women",
      publication: "Gujarat Guardian",
      date: "September 15, 2024",
      excerpt: "House of Humanity Foundation conducts monthly awareness programs and distributes sanitary pads in various areas...",
      image: "/News4.png",
      icon: <Award className="w-5 h-5" />,
      category: "Women's Health",
      fullContent: {
        headline: "Awareness and Distribution of Sanitary Pads",
        details: [
          "House of Humanity Foundation, Gotri, conducts comprehensive monthly awareness programs and distributes sanitary pads across various areas, including schools, villages, and slum areas.",
          "Recently, they conducted an impactful session at Dr. Hansa Mehta School in Makarpura to educate young girls about health and hygiene related to menstruation.",
          "35-40 girls benefited from this intensive one-hour session, where they learned about menstruation, its proper management, and the importance of debunking harmful superstitions.",
          "Qualified doctors were invited to provide accurate medical information and conduct practical demonstrations.",
          "After each educational session, every girl received two sanitary pads, and additional packets were provided to schools for future distribution.",
          "The foundation has successfully distributed over 5,000 sanitary napkins to girls and women across approximately 25 rural areas.",
          "They also provide educational materials and sports equipment for Anganwadi children in rural areas as part of their comprehensive development approach.",
          "The program has helped break taboos and create awareness about menstrual health in conservative communities.",
          "Regular follow-up sessions ensure sustained impact and continued education."
        ]
      }
    },
    {
      id: 5,
      title: "Day-Care Services for 25 Differently-Abled Children",
      publication: "Vadodara Mirror",
      date: "August 10, 2024",
      excerpt: "The foundation provides comprehensive day-care services for around 25 differently-abled children at a specialized school...",
      image: "/News5.png",
      icon: <Users className="w-5 h-5" />,
      category: "Special Needs Support",
      fullContent: {
        headline: "Support for Differently-abled Children",
        details: [
          "The foundation provides comprehensive day-care services for around 25 differently-abled children at a specialized school for the disabled in Tarsali, Vadodara.",
          "The program includes quality education tailored to each child's specific needs and learning capabilities.",
          "Professional physiotherapy exercises are conducted to improve motor skills and physical development.",
          "Regular Zumba activities are organized to enhance coordination, balance, and overall physical fitness.",
          "Individual attention is given to each child to ensure their unique requirements are met.",
          "The program focuses on building independence and life skills among differently-abled children.",
          "Trained volunteers work closely with professional therapists to provide the best possible care.",
          "Regular assessments are conducted to track progress and adjust programs accordingly.",
          "The initiative has shown remarkable improvements in the children's confidence and social skills."
        ]
      }
    },
    {
      id: 6,
      title: "CM Bhupendra Patel Commends Cancer Support Initiative",
      publication: "DNA India",
      date: "February 3, 2024",
      excerpt: "Chief Minister praised House of Humanity's active role in bringing smiles to over 100 children battling cancer...",
      image: "/News6.png",
      icon: <Award className="w-5 h-5" />,
      category: "Government Recognition",
      fullContent: {
        headline: "Appreciation from the Chief Minister of Gujarat",
        details: [
          "Bhupendra Patel, the Chief Minister of Gujarat, expressed his pleasure at receiving an invitation to attend the World Cancer Day celebration organized by House of Humanity on February 3, 2024, in Vadodara.",
          "He commended the organization's active and compassionate role in bringing smiles back to the faces of over 100 children battling cancer.",
          "The Chief Minister praised their unwavering passion for serving people and helping cancer patients fight their battles through entertaining and uplifting programs.",
          "He acknowledged the organization's innovative approach to combining entertainment with therapeutic support for cancer patients.",
          "The Chief Minister extended his heartfelt best wishes to the entire dedicated team of House of Humanity.",
          "He also blessed all the participating children and their families, recognizing their courage and strength.",
          "The recognition from the state's highest office validates the organization's impactful work in the healthcare sector.",
          "This government acknowledgment has motivated the organization to expand their cancer support programs.",
          "The event showcased the power of community support in healthcare and healing."
        ]
      }
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Charity Gala 2025",
      date: "March 15, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Vadodara Club, Race Course",
      type: "Fundraising Event",
      status: "Registration Open",
      description: "Join us for an evening of celebration and fundraising to support our ongoing initiatives for children, healthcare, and community development.",
      image: "charity-gala-2025",
      attendees: "500+"
    },
    {
      title: "Project Bachpan - Summer Camp",
      date: "April 10-15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Multiple Venues, Vadodara",
      type: "Children's Program",
      status: "Registration Starting Soon",
      description: "6-day summer camp for mentally and physically challenged children with activities, learning, and fun experiences.",
      image: "summer-camp-2025",
      attendees: "100+"
    },
    {
      title: "Healthcare Workers Appreciation Day",
      date: "May 12, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "SSG Hospital",
      type: "Recognition Event",
      status: "Open to All",
      description: "Honoring healthcare workers and volunteers who serve tirelessly. Includes meal distribution and appreciation ceremony.",
      image: "healthcare-appreciation-2025",
      attendees: "300+"
    },
    {
      title: "Women's Hygiene Awareness Drive",
      date: "June 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Rural Areas, Vadodara District",
      type: "Awareness Campaign",
      status: "Volunteers Needed",
      description: "Large-scale awareness campaign and sanitary pad distribution in rural areas with medical consultations.",
      image: "hygiene-drive-2025",
      attendees: "1000+"
    }
  ];

  const pastEvents = [
    {
      title: "World Cancer Day Celebration",
      date: "February 3, 2024",
      location: "Vadodara",
      attendees: "100+",
      description: "Special celebration for children battling cancer with entertainment programs, appreciated by CM Bhupendra Patel.",
      image: "world-cancer-day-2024"
    },
    {
      title: "Project Bachpan Picnic",
      date: "December 2024",
      location: "Decathlon Mall & Recreation Center",
      attendees: "50+",
      description: "Transformative picnic experience for mentally and physically challenged children with shopping, games, and Zumba.",
      image: "bachpan-picnic-2024"
    },
    {
      title: "Rural Health & Hygiene Campaign",
      date: "November 2024",
      location: "25 Rural Areas",
      attendees: "500+",
      description: "Comprehensive health awareness program with sanitary pad distribution reaching over 5,000 women and girls.",
      image: "rural-health-2024"
    }
  ];

  const NewsModal = ({ news, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
          >
            <X size={24} />
          </button>
          
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-blue text-white rounded-full text-sm">
                {news.category}
              </span>
              <span className="text-sm text-gray-500">{news.publication}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{news.date}</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {news.fullContent.headline}
            </h2>
            
                      <div className="mb-6">
            {news.image && news.image.startsWith('/') ? (
              <img
                src={news.image}
                alt={news.title}
                className="rounded-lg w-full h-auto max-h-[500px] object-contain"
                style={{ maxWidth: '100%' }}
              />
            ) : (
              <ImagePlaceholder 
                width="100%" 
                height="300px" 
                text={`${news.image} - Newspaper Coverage`}
                className="rounded-lg"
              />
            )}
          </div>
            
            <div className="space-y-4">
              {news.fullContent.details.map((detail, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 mt-24"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Hero Section */}
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
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'media'
                      ? 'bg-white text-primary-blue shadow-lg transform scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  <Newspaper size={20} />
                  Media Coverage
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('events')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'events'
                      ? 'bg-white text-primary-blue shadow-lg transform scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  <Calendar size={20} />
                  Events & Activities
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
          {/* House of Humanity News */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-blue to-blue-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <Newspaper size={32} className="text-white" />
                <div>
                  <h2 className="text-3xl font-bold text-white">House of Humanity in News</h2>
                  <p className="text-white/80 mt-1">Latest media coverage of our community initiatives</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {houseOfHumanityNews.map((article, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      {article.image && article.image.startsWith('/') ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      ) : (
                        <ImagePlaceholder 
                          width="100%" 
                          height="200px" 
                          text={`${article.image} - Newspaper Cutout`}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-primary-blue rounded-full text-xs font-semibold flex items-center gap-1">
                          {article.icon}
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <span className="font-medium">{article.publication}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedNews(article)}
                        className="inline-flex items-center gap-2 text-primary-blue hover:text-blue-700 font-semibold transition-colors"
                      >
                        Read Full Article
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
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
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-fresh-green to-green-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <Calendar size={32} className="text-white" />
                <div>
                  <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
                  <p className="text-white/80 mt-1">Join us in making a difference</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <ImagePlaceholder 
                        width="100%" 
                        height="200px" 
                        text={event.image}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-fresh-green text-white rounded-full text-xs font-semibold">
                          {event.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold">
                          {event.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar size={16} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users size={16} />
                          <span>Expected: {event.attendees}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-fresh-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Calendar size={16} />
                        Register Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-dark-gray to-gray-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <Calendar size={32} className="text-white" />
                <div>
                  <h2 className="text-3xl font-bold text-white">Past Events</h2>
                  <p className="text-white/80 mt-1">Celebrating our achievements</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <ImagePlaceholder 
                          width="100%" 
                          height="200px" 
                          text={event.image}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          {event.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar size={16} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users size={16} />
                            <span>Attendees: {event.attendees}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 text-primary-blue hover:text-blue-700 font-semibold transition-colors"
                        >
                          <Eye size={16} />
                          View Gallery
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* News Modal */}
      {selectedNews && (
        <NewsModal 
          news={selectedNews} 
          onClose={() => setSelectedNews(null)} 
        />
      )}
    </motion.div>
  );
};

export default NewsAndEvents;