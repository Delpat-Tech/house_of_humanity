import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useTheme } from '../shared/contexts/ThemeContext';
import StatsCard from '../components/ui/StatsCard';
import Card from '../components/ui/Card';
import { Heart, Users, Award, Target, TrendingUp, Star, ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';

interface ProjectStat {
  name: string;
  highlights: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
}

interface SectorStat {
  sector: string;
  details: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
}

const projectStats: ProjectStat[] = [
  { 
    name: 'Project पोषण', 
    highlights: '1,20,000+ meals served, 300+ daily meals, 3 hospitals, 480+ days',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-red-600',
    bgGradient: 'from-red-50 to-pink-50'
  },
  { 
    name: 'Pad House', 
    highlights: '28,000+ girls educated, 8,000+ homes, 75+ schools',
    icon: <Users className="w-6 h-6" />,
    color: 'text-purple-600',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  { 
    name: 'Project Rakt Setu', 
    highlights: '2,500+ blood units, 8 drives, 230 volunteers',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-red-500',
    bgGradient: 'from-red-50 to-orange-50'
  },
  { 
    name: 'Sahara', 
    highlights: '100+ devices provided, 4 centers, 500+ people assisted',
    icon: <Target className="w-6 h-6" />,
    color: 'text-blue-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  { 
    name: 'Project Maya', 
    highlights: '200+ children supported monthly',
    icon: <Star className="w-6 h-6" />,
    color: 'text-yellow-600',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  { 
    name: 'Project Bachpan', 
    highlights: '950+ slum children, 98 Anganwadis supported',
    icon: <Users className="w-6 h-6" />,
    color: 'text-green-600',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  { 
    name: 'Project Raah', 
    highlights: '50+ students mentored, 2 schools adopted',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'text-indigo-600',
    bgGradient: 'from-indigo-50 to-purple-50'
  },
  { 
    name: 'Blanket Drive', 
    highlights: '3,000+ blankets distributed',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-orange-600',
    bgGradient: 'from-orange-50 to-red-50'
  },
  { 
    name: 'Sweet Drive', 
    highlights: '2,500+ people reached annually',
    icon: <Star className="w-6 h-6" />,
    color: 'text-pink-600',
    bgGradient: 'from-pink-50 to-rose-50'
  },
  { 
    name: 'Joy of Ride', 
    highlights: '600+ children, 8 slums',
    icon: <Users className="w-6 h-6" />,
    color: 'text-teal-600',
    bgGradient: 'from-teal-50 to-green-50'
  },
  { 
    name: 'Cyclothon', 
    highlights: '1,800+ participants, 2 major events',
    icon: <Award className="w-6 h-6" />,
    color: 'text-blue-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
  { 
    name: 'Marathon', 
    highlights: '2,800+ runners, 3 editions',
    icon: <Award className="w-6 h-6" />,
    color: 'text-green-500',
    bgGradient: 'from-green-50 to-lime-50'
  },
  { 
    name: 'Concerts for a Cause', 
    highlights: '7,000+ attendees, 150+ kids trained/performed',
    icon: <Star className="w-6 h-6" />,
    color: 'text-violet-600',
    bgGradient: 'from-violet-50 to-purple-50'
  },
  { 
    name: 'Grooming & Etiquette Drive', 
    highlights: '400+ girls benefited',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'text-rose-600',
    bgGradient: 'from-rose-50 to-pink-50'
  },
  { 
    name: 'Joyful Gifting', 
    highlights: '1,000+ recipients annually',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  { 
    name: 'Project Sanskruti', 
    highlights: '30+ women engaged in composting',
    icon: <Target className="w-6 h-6" />,
    color: 'text-lime-600',
    bgGradient: 'from-lime-50 to-green-50'
  },
];

const sectorStats: SectorStat[] = [
  { 
    sector: 'Health Care', 
    details: 'Pad House, Rakt Setu, Sahara, Project पोषण – served 1,50,000+ lives collectively',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-red-600',
    bgGradient: 'from-red-500 to-pink-500'
  },
  { 
    sector: 'Education', 
    details: 'Project Raah, Project Bachpan – 1,000+ children reached, 100+ centers supported',
    icon: <Users className="w-8 h-8" />,
    color: 'text-blue-600',
    bgGradient: 'from-blue-500 to-indigo-500'
  },
  { 
    sector: 'Livelihood & Sustainability', 
    details: 'Project Sanskruti – 30+ women empowered through composting and awareness',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'text-green-600',
    bgGradient: 'from-green-500 to-emerald-500'
  },
  { 
    sector: 'Dignity & Relief', 
    details: 'Blanket Drive, Sweet Drive, Joyful Gifting, Grooming – 6,000+ lives touched annually',
    icon: <Star className="w-8 h-8" />,
    color: 'text-purple-600',
    bgGradient: 'from-purple-500 to-violet-500'
  },
  { 
    sector: 'Community Engagement & Events', 
    details: 'Joy of Ride, Cyclothon, Marathon, Concerts – 12,000+ participants impacted',
    icon: <Award className="w-8 h-8" />,
    color: 'text-orange-600',
    bgGradient: 'from-orange-500 to-amber-500'
  },
];

const CountUpAnimation: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

const Milestones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'sectors'>('projects');
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 pt-32 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90 dark:opacity-80"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Our Impact Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Milestones</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Transformative numbers. Real impact. Empowered lives.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px]">
                <div className="text-3xl font-bold text-primary-blue mb-2"><CountUpAnimation end={150000} duration={3} />+</div>
                <div className="text-dark-gray dark:text-gray-200 font-medium">Lives Impacted</div>
              </div>
              <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px]">
                <div className="text-3xl font-bold text-primary-blue mb-2"><CountUpAnimation end={16} duration={2} />+</div>
                <div className="text-dark-gray dark:text-gray-200 font-medium">Active Projects</div>
              </div>
              <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px]">
                <div className="text-3xl font-bold text-primary-blue mb-2"><CountUpAnimation end={5} duration={1} /></div>
                <div className="text-dark-gray dark:text-gray-200 font-medium">Key Sectors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'projects' ? 'bg-white dark:bg-gray-900 text-blue-600 shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'}`}
              >
                <Target className="w-5 h-5 inline mr-2" />
                Projects
              </button>
              <button
                onClick={() => setActiveTab('sectors')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'sectors' ? 'bg-white dark:bg-gray-900 text-blue-600 shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'}`}
              >
                <Award className="w-5 h-5 inline mr-2" />
                Sectors
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      {activeTab === 'projects' && (
        <motion.section
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          animate="show"
          className="py-16 px-6 lg:px-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project Impact Dashboard
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Each project tells a story of transformation and hope</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {projectStats.map((proj, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', index * 0.1)}
                  className={`group relative rounded-2xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-white shadow-lg ${proj.color}`}>{proj.icon}</div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-blue-300 group-hover:text-blue-600 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                    {proj.highlights}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    Ongoing Impact
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* Sectors Section */}
      {activeTab === 'sectors' && (
        <motion.section
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          animate="show"
          className="py-16 px-6 lg:px-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Sector-wise Impact Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Comprehensive impact across key social sectors</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {sectorStats.map((sector, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', index * 0.1)}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${sector.bgGradient} text-white shadow-lg`}>
                      {sector.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-blue-300 group-hover:text-blue-600 transition-colors">
                        {sector.sector}
                      </h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        Multiple Locations
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                    {sector.details}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Continuous Impact</span>
                      <div className="flex items-center text-sm text-blue-600 font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Growing
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Milestones;