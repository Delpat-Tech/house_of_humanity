import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 md:mb-16 flex justify-center"
          >
            <div className="relative">
              {/* Logo background for better visibility */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl -m-4"></div>
              <img
                src="/images/HeroSectionLogo.png"
                alt="House of Humanity Logo"
                className="relative z-10 w-full max-w-[20rem] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem] drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center space-y-8 md:space-y-12">
            {/* Tagline */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-primary-blue font-semibold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building a Better World
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
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
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary-blue text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-blue hover:bg-white hover:text-primary-blue"
                onClick={() => navigate("/about-us")}
              >
                Who We Are
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-transparent text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white hover:bg-white hover:text-dark-gray"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-8 md:mt-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-fresh-green text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-fresh-green hover:bg-white hover:text-fresh-green"
                onClick={() => navigate("/donate-for-a-cause")}
              >
                Make a Difference Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
