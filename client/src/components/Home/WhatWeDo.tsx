import React from "react";
import WorkCard from "../ui/WorkCard";
import { useNavigate } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
// Import project data
import { projects } from "../../components/data/projectsData";

const ImpactCategories = [
  {
    title: "Health & Wellness",
    icon: "🏥",
    projects: ["Pad House", "Education of FLu", "Project Rakt"],
    color: "from-pink-500 to-rose-500",
    description: "Ensuring health accessibility for all communities"
  },
  {
    title: "Women Empowerment",
    icon: "👩‍💼",
    projects: ["Project Naari", "Project Sanskruti"],
    color: "from-purple-500 to-indigo-500",
    description: "Empowering women through education and opportunity"
  },
  {
    title: "Food Security",
    icon: "🍽️",
    projects: ["Project पोषण"],
    color: "from-orange-500 to-red-500",
    description: "Ensuring no one goes hungry in our communities"
  }
];

const FeaturedProject = {
  title: "Project पोषण",
  subtitle: "Hunger eradication",
  description: "Transforming lives through sustainable food distribution and community kitchens. In a world where 1/3 of food goes to waste, we're bridging the gap to ensure no one sleeps hungry.",
};

const WhatWeDo: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-20 px-4 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Hero Section with Animated Title */}
        <motion.div
          className="text-center mb-20"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-primary-blue dark:text-blue-200 mb-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Commitment to
            <br />
            <span className="bg-gradient-to-r from-primary-blue via-purple-500 to-fresh-green bg-clip-text text-transparent">
              Communities
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Transforming lives through purpose-driven initiatives across health, empowerment, and community development
          </motion.p>
        </motion.div>

        {/* Interactive Categories Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-dark-gray dark:text-gray-200 mb-12"
            variants={categoryVariants}
          >
            Our Impact Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ImpactCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative w-80 h-64 flex flex-col justify-between"
                variants={categoryVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${category.color} shadow-2xl w-full h-full flex flex-col justify-between`}>
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  />
                  <motion.div
                    className="text-6xl mb-4"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        className="text-sm text-white/80 bg-white/10 rounded-full px-3 py-1 inline-block mr-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: projectIndex * 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {project}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-dark-gray dark:text-gray-200 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Featured Initiatives
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary-blue to-fresh-green mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects
              .filter((project: any) =>
                project.title === "Project पोषण" ||
                project.title === "Pad House" ||
                project.title === "Project Rakt Setu"
              )
              .map((project: any) => (
                <motion.div
                  key={project.title}
                  className="flex justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <WorkCard
                    title={project.title}
                    subtitle={project.content.mission}
                    description={project.content.whatWeDo.join(" ")}
                    className="w-80 h-64"
                  />
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Interactive CTA Section */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-blue via-purple-600 to-fresh-green p-12 text-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30"
              animate={{ 
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))",
                  "linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3))",
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Ready to Explore More?
              </motion.h3>
              
              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Discover the full spectrum of our community initiatives and see how you can be part of the change
              </motion.p>
              
              <motion.button
                className="group relative overflow-hidden px-8 py-4 bg-white text-primary-blue font-bold rounded-2xl text-lg shadow-2xl"
                onClick={() => navigate("/projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                <span className="relative z-10">Explore All Projects</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Empowering Message Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h1
              className="text-5xl font-bold bg-gradient-to-r from-primary-blue to-fresh-green bg-clip-text text-transparent dark:from-blue-200 dark:to-fresh-green mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Empowering with Purpose
            </motion.h1>
            
            <motion.p
              className="text-xl font-semibold text-dark-gray dark:text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              We believe true change begins with empowerment — not temporary aid,
              but lasting impact. Rather than offering one-time support, we strive
              to equip individuals with the tools to build a life of dignity,
              self-respect, and independence. Everyone deserves the chance to
              thrive, not just survive.
            </motion.p>
            
            <motion.button
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-blue to-fresh-green text-white font-bold rounded-2xl text-lg shadow-2xl"
              onClick={() => navigate("/projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fresh-green to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">DISCOVER MORE</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-blue/20 to-fresh-green/20 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <motion.div
                  className="w-60 h-60 rounded-full bg-gradient-to-br from-primary-blue/30 to-fresh-green/30 flex items-center justify-center"
                  animate={{ 
                    scale: [1.05, 1, 1.05],
                    rotate: [0, -360]
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <span className="text-6xl">🌟</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;