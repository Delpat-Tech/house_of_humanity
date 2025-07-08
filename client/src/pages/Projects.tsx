import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../components/data/projectsData";
import {
  Target,
  Rocket,
  Lightbulb,
  Star,
  Handshake,
  Heart,
  Users,
  BookOpen,
  Shield,
  Globe,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(0);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Helper to scroll to details
  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // On mount, check for projectIndex in navigation state
  useEffect(() => {
    if (location.state && typeof location.state.projectIndex === 'number') {
      setSelectedProject(location.state.projectIndex);
      setTimeout(scrollToDetails, 200);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-white to-warm-light-blue dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      {/* Hero Section */}
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

      {/* Interactive Project Menu - REDESIGNED */}
      <section className="py-20 px-4 md:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue/10 to-fresh-green/10 px-6 py-3 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
              <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider">
                Our Impact Portfolio
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-fresh-green mb-6">
              Explore Our Projects
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the initiatives that are transforming communities and creating lasting change. 
              Each project represents our commitment to building a better world.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer transition-all duration-500 ${
                  selectedProject === index
                    ? "transform -translate-y-2 shadow-2xl"
                    : "hover:transform hover:-translate-y-1 hover:shadow-xl"
                }`}
                onClick={() => {
                  setSelectedProject(index);
                  setTimeout(scrollToDetails, 100); // ensure state updates first
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Project Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-primary-blue">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Selected Indicator */}
                    {selectedProject === index && (
                      <motion.div
                        layoutId="selectedIndicator"
                        className="absolute top-4 right-4 w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        selectedProject === index 
                          ? 'bg-fresh-green/90 text-white' 
                          : 'bg-white/90 text-gray-700 group-hover:bg-primary-blue/90 group-hover:text-white'
                      } transition-all duration-300`}>
                        {selectedProject === index ? 'Currently Viewing' : 'Click to View'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Active Project
                        </span>
                      </div>
                      
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-blue to-fresh-green rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: selectedProject === index ? '100%' : '60%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Counter & Navigation */}
          <div className="flex flex-col items-center gap-8">
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary-blue/10 to-fresh-green/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[300px]"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                {String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {projects[selectedProject].title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Currently viewing project details below
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`transition-all duration-300 ${
                    selectedProject === index
                      ? "w-8 h-3 bg-gradient-to-r from-primary-blue to-fresh-green rounded-full"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedProject(selectedProject > 0 ? selectedProject - 1 : projects.length - 1)}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Navigate Projects
              </div>
              
              <button
                onClick={() => setSelectedProject(selectedProject < projects.length - 1 ? selectedProject + 1 : 0)}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
                aria-label="Next project"
              >
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Project Details */}
      <section className="py-12 px-4 md:px-20" ref={detailsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div
              className={`absolute inset-0 -z-10 ${
                selectedProject % 2 === 0
                  ? "bg-gradient-to-r from-primary-blue/5 to-transparent dark:from-primary-blue/10"
                  : "bg-gradient-to-l from-fresh-green/5 to-transparent dark:from-fresh-green/10"
              } rounded-3xl transform -skew-y-1`}
            />

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Image Section */}
              <motion.div
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative group">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-[25rem] sm:h-[28rem] lg:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-fresh-green text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    Project {selectedProject + 1}
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="lg:w-1/2 w-full space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Project Title */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight">
                    {projects[selectedProject].title}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-fresh-green rounded-full" />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {[
                    {
                      title: "Our Vision",
                      content: projects[selectedProject].content.vision,
                      icon: Target,
                      color: "text-blue-600",
                    },
                    {
                      title: "Our Mission",
                      content: projects[selectedProject].content.mission,
                      icon: Rocket,
                      color: "text-purple-600",
                    },
                    {
                      title: "What We Do",
                      content: projects[selectedProject].content.whatWeDo,
                      icon: Lightbulb,
                      color: "text-yellow-600",
                    },
                    {
                      title: "Impact Created",
                      content: projects[selectedProject].content.impact,
                      icon: Star,
                      color: "text-orange-500",
                    },
                    {
                      title: "Get Involved",
                      content: projects[selectedProject].content.getInvolved,
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
                        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md ${section.color}`}
                          >
                            <IconComponent
                              size={24}
                              className="text-current"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-teal-600 dark:text-teal-400 mb-2">
                              {section.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="pt-4"
                >
                  <button className="bg-gradient-to-r from-primary-blue to-fresh-green text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    onClick={scrollToDetails}
                  >
                    Learn More About This Project
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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

export default ProjectsPage;