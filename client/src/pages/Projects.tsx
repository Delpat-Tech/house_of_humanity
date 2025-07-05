import React from "react";
import { motion } from "framer-motion";
import { projects } from "../components/data/projectsData";
import { Target, Rocket, Lightbulb, Star, Handshake, Heart, Users, BookOpen, Shield, Globe } from "lucide-react";

const ProjectsPage: React.FC = () => {
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
            <span className="text-primary-blue">our projects are more than initiatives, they are movements.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-gray-200 text-center leading-relaxed"
          >
            At House of Humanity, we are committed to change, powered by purpose.
            Each endeavor reflects our mission to create lasting impact — from
            healthcare and education to sustainability and dignity. Together, we
            craft solutions that lead to a better tomorrow — one project, one life
            at a time.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Background Decoration */}
                <div className={`absolute inset-0 -z-10 ${
                  index % 2 === 0 
                    ? "bg-gradient-to-r from-primary-blue/5 to-transparent dark:from-primary-blue/10" 
                    : "bg-gradient-to-l from-fresh-green/5 to-transparent dark:from-fresh-green/10"
                } rounded-3xl transform -skew-y-1`} />

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  {/* Image Section */}
                  <motion.div 
                    className="lg:w-1/2 w-full"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative group">
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[25rem] sm:h-[28rem] lg:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-4 -right-4 bg-fresh-green text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        Project {index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div 
                    className="lg:w-1/2 w-full space-y-8"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Project Title */}
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight">
                        {project.title}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-fresh-green rounded-full" />
                    </div>

                    {/* Project Details */}
                     <div className="space-y-6">
                       {[
                         { title: "Our Vision", content: project.content.vision, icon: Target, color: "text-blue-600" },
                         { title: "Our Mission", content: project.content.mission, icon: Rocket, color: "text-purple-600" },
                         { title: "What We Do", content: project.content.whatWeDo, icon: Lightbulb, color: "text-yellow-600" },
                         { title: "Impact Created", content: project.content.impact, icon: Star, color: "text-orange-500" },
                         { title: "Get Involved", content: project.content.getInvolved, icon: Handshake, color: "text-green-600" }
                       ].map((section, sectionIndex) => {
                         const IconComponent = section.icon;
                         return (
                           <motion.div
                             key={sectionIndex}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.7 + sectionIndex * 0.1 }}
                             viewport={{ once: true }}
                             className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                           >
                             <div className="flex items-start gap-4">
                               <div className={`flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md ${section.color}`}>
                                 <IconComponent size={24} className="text-current" />
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
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="pt-4"
                    >
                      <button className="bg-gradient-to-r from-primary-blue to-fresh-green text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                        Learn More About This Project
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Join us in creating lasting positive change. Every contribution, no matter how small, 
            helps us build a better world for everyone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
