import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-3 sm:mb-4 md:mb-6 flex justify-center"
          >
            <div className="relative">
              {/* Logo background for better visibility */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl -m-2 sm:-m-3"></div>
              <img
                src="/images/HeroSectionLogo.png"
                alt="House of Humanity Logo"
                className="relative z-10 w-full max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] xl:max-w-[16rem] drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-blue font-semibold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building a Better World
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Empowering Today for a{" "}
              <span className="text-fresh-green">Healthier Society</span>{" "}
              and a{" "}
              <span className="text-primary-blue">Sustainable Tomorrow</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Join us in creating lasting positive change through education, healthcare, 
              and sustainable development initiatives that transform lives and communities.
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mt-3 sm:mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-primary-blue text-white text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-blue hover:bg-white hover:text-primary-blue"
                onClick={() => navigate("/about")}
              >
                Who We Are
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-transparent text-white text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white hover:bg-white hover:text-dark-gray"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-2 sm:mt-3 md:mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-fresh-green text-white text-xs sm:text-sm md:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-fresh-green hover:bg-white hover:text-fresh-green"
                onClick={() => navigate("/donate")}
              >
                Make a Difference Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 sm:bottom-12 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroHome;
