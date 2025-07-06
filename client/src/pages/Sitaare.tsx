import React from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Sitaare = () => {
  return (
    <section className="pt-24 px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3"
          >
            House of Humanity
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="uppercase tracking-wider text-sm text-teal-600 dark:text-teal-400 mb-8"
          >
            P R E S E N T S
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Project Sitaare</h3>
            <p className="text-pink-100 text-sm mt-1">Empowering dreams, one girl at a time</p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            custom={3}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">About Project Sitaare</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Project Sitaare is a one-of-a-kind orphanage and shelter home for girls aged 6 to 18.
              More than just shelter—it's a place where dreams take flight. With full education,
              safety, and holistic development, it's the most empowering space for girls in Gujarat.
            </p>
            
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-pink-600 dark:text-pink-400 flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Why Project Sitaare?
              </h5>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">✓</span>
                  Full school support, digital literacy, and career guidance
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">✓</span>
                  Nutritious meals, healthcare & emotional well-being
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">✓</span>
                  Vocational training, sports & self-defense
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">✓</span>
                  Safe and nurturing home environment
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Vision, Mission & Goals */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            custom={4}
            className="space-y-6"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h5 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Our Vision
              </h5>
              <p className="text-slate-600 dark:text-slate-300 italic">
                A world where every girl can dream, learn, and succeed—regardless of her past.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h5 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Our Mission
              </h5>
              <p className="text-slate-600 dark:text-slate-300">
                To empower orphaned girls with the tools to become strong, independent women who make a
                positive difference in the world.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h5 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Impact Goals
              </h5>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">•</span>
                  Safe, loving home for 30+ girls
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">•</span>
                  100% education and career readiness
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">•</span>
                  Financial independence through life skills
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">•</span>
                  Foster confidence and belief in self
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Corporate CSR',
              text: 'Support infrastructure, sponsor learning programs, provide internships, mentorships, and career guidance.',
              icon: '🏢'
            },
            {
              title: 'Individual Giving',
              text: 'Sponsor a child\'s education, healthcare, or donate hygiene kits, meals, and essentials.',
              icon: '💝'
            },
            {
              title: 'Volunteer Opportunities',
              text: 'Mentor, teach, or run workshops—help girls explore digital skills, arts, and STEM. Even virtual adoption is possible.',
              icon: '🤝'
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 5}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {card.title}
              </h5>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={8}
          className="text-center bg-gradient-to-r from-pink-50 via-rose-50 to-blue-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600"
        >
          <h4 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Make a Difference Today
          </h4>
          <p className="text-slate-600 dark:text-slate-300 mb-2">
            With just <span className="text-pink-600 dark:text-pink-400 font-bold text-lg">₹11,551/month</span>, you can virtually adopt a child and provide:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-teal-600 dark:text-teal-400 mb-6">
            <span className="bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded-full">Education</span>
            <span className="bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded-full">Meals</span>
            <span className="bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded-full">Healthcare</span>
            <span className="bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded-full">Life Skills</span>
          </div>
          <a
            href="https://sitaare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More on Sitaare.org
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sitaare;