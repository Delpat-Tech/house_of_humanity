import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useTheme } from '../shared/contexts/ThemeContext';
import {
  Heart, Users, Award, Target, TrendingUp, Star, ArrowRight, Calendar, Sparkles, Rocket, Lightbulb, Handshake
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from "../components/data/projectsData";

// Sample project/stat items
const allItems = [
  { name: 'Project पोषण', highlights: '1,20,000+ meals served...', icon: <Heart className="w-6 h-6" />, color: 'text-red-600' },
  { name: 'Pad House', highlights: '28,000+ girls educated...', icon: <Users className="w-6 h-6" />, color: 'text-purple-600' },
  { name: 'Project Rakt Setu', highlights: '2,500+ blood units...', icon: <Heart className="w-6 h-6" />, color: 'text-red-500' },
  { name: 'Sahara', highlights: '100+ devices provided...', icon: <Target className="w-6 h-6" />, color: 'text-blue-600' },
  { name: 'Project Maya', highlights: '200+ children supported...', icon: <Star className="w-6 h-6" />, color: 'text-yellow-600' },
  { name: 'Project Bachpan', highlights: '950+ slum children...', icon: <Users className="w-6 h-6" />, color: 'text-green-600' },
  { name: 'Project Raah', highlights: '50+ students mentored...', icon: <TrendingUp className="w-6 h-6" />, color: 'text-indigo-600' },
  { name: 'Blanket Drive', highlights: '3,000+ blankets...', icon: <Heart className="w-6 h-6" />, color: 'text-orange-600' },
  { name: 'Sweet Drive', highlights: '2,500+ people reached...', icon: <Star className="w-6 h-6" />, color: 'text-pink-600' },
  { name: 'Joy of Ride', highlights: '600+ children...', icon: <Users className="w-6 h-6" />, color: 'text-teal-600' },
  { name: 'Cyclothon', highlights: '1,800+ participants...', icon: <Award className="w-6 h-6" />, color: 'text-blue-500' },
  { name: 'Marathon', highlights: '2,800+ runners...', icon: <Award className="w-6 h-6" />, color: 'text-green-500' },
  { name: 'Concerts for a Cause', highlights: '7,000+ attendees...', icon: <Star className="w-6 h-6" />, color: 'text-violet-600' },
  { name: 'Grooming & Etiquette Drive', highlights: '400+ girls...', icon: <Sparkles className="w-6 h-6" />, color: 'text-rose-600' },
  { name: 'Joyful Gifting', highlights: '1,000+ recipients...', icon: <Heart className="w-6 h-6" />, color: 'text-emerald-600' },
  { name: 'Project Sanskruti', highlights: '30+ women...', icon: <Target className="w-6 h-6" />, color: 'text-lime-600' },
];

const sectionNames = ['पोषण','Pad House','Rakt Setu','Sahara','Maya','Bachpan','Raah','Blanket Drive','Sweet Drive','Joy of Ride','Cyclothon','Marathon','Concerts for a Cause','Grooming & Etiquette Drive','Joyful Gifting','Sanskruti'];

const sections = sectionNames.map((title, idx) => ({
  title,
  items: [allItems[idx]]
}));

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

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);

  // Use projects array for sections
  return (
    <div className={`min-h-screen pt-32 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gray-900'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>

      {/* Hero Section (from Projects) */}
      <section className="pt-32 pb-20 px-4 md:px-20 bg-gradient-to-r from-primary-blue/10 to-fresh-green/10 dark:from-primary-blue/20 dark:to-fresh-green/20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-h2 text-center uppercase mb-6 leading-tight"
          >
            our journey so far
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-h1 text-center mb-8 max-w-5xl mx-auto leading-relaxed"
          >
            Building communities, empowering people <br />
            <span className="text-primary-blue">
              our projects are more than initiatives, they are movements.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-gray-200 text-center leading-relaxed"
          >
            At House of Humanity, we are committed to change, powered by
            purpose. Each endeavor reflects our mission to create lasting impact
            — from healthcare and education to sustainability and dignity.
            Together, we craft solutions that lead to a better tomorrow — one
            project, one life at a time.
          </motion.p>
        </div>
      </section>
      <div className="mb-8" />

   {/* Sticky Filter Button Bar */}
<div className="sticky top-0 z-20 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 mt-8">
  <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5">
    <div className="flex items-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-primary-blue/40 scrollbar-track-transparent pb-2 px-3 scroll-px-3">
      {projects.map((project, idx) => (
        <button
          key={idx}
          onClick={() => setActiveSection(idx)}
          className={`shrink-0 px-5 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 ${
            activeSection === idx
              ? 'bg-primary-blue text-white'
              : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-blue/10 hover:text-primary-blue'
          }`}
        >
          {project.title}
        </button>
      ))}
    </div>
  </div>
</div>


      {/* Content Section */}
      <motion.section
        key={activeSection}
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        animate="show"
        className="py-16 px-6 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Section */}
            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={projects[activeSection].image}
                    alt={projects[activeSection].title}
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -top-4 -right-4 bg-fresh-green text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  Project {activeSection + 1}
                </div>
              </div>
            </motion.div>
            {/* Content Section */}
            <motion.div
              className="lg:w-1/2 w-full space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-blue leading-tight">
                  {projects[activeSection].title}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-fresh-green rounded-full" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "Our Vision",
                    content: projects[activeSection].content.vision,
                    icon: Target,
                    color: "text-blue-600",
                  },
                  {
                    title: "Our Mission",
                    content: projects[activeSection].content.mission,
                    icon: Rocket,
                    color: "text-purple-600",
                  },
                  {
                    title: "What We Do",
                    content: projects[activeSection].content.whatWeDo,
                    icon: Lightbulb,
                    color: "text-yellow-600",
                  },
                  {
                    title: "Impact Created",
                    content: projects[activeSection].content.impact,
                    icon: Star,
                    color: "text-orange-500",
                  },
                  {
                    title: "Get Involved",
                    content: projects[activeSection].content.getInvolved,
                    icon: Handshake,
                    color: "text-green-600",
                  },
                ].map((section, sectionIndex) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.div
                      key={sectionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + sectionIndex * 0.1,
                      }}
                      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md ${section.color}`}
                        >
                          <IconComponent
                            size={18}
                            className="text-current"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base text-teal-600 dark:text-teal-400 mb-1">
                            {section.title}
                          </h3>
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm">
                              {section.content.map((item: string, idx: number) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                              {section.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Bottom CTA Section (from Projects) */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-primary-blue to-fresh-green">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Join us in creating lasting positive change. Every contribution, no
            matter how small, helps us build a better world for everyone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
             onClick={() => navigate("/get-involved")}
            className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Get Involved
            </button>
            <button
              onClick={() => navigate("/donate-for-a-cause")}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
