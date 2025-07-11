import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../shared/contexts/ThemeContext";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Enhanced Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-0 transition-all duration-300 ${theme === 'dark' ? 'bg-black/60' : ''}`}
        style={theme === 'dark' ? { background: 'rgba(0,0,0,0.55)' } : undefined}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-2 sm:mb-3 md:mb-4 flex justify-center"
          >
            <div className="relative">
              {/* Logo background for better visibility */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl -m-2 sm:-m-3"></div>
              <img
                src="/images/HeroSectionLogo.png"
                alt="House of Humanity Logo"
                className="relative z-10 w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[32rem] drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-primary-blue font-semibold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building a Better World
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Empowering Today for a <span className="text-fresh-green">Healthier Society</span> and a <span className="text-primary-blue">Sustainable Tomorrow</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mt-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Join us in creating lasting positive change through education, healthcare, 
              and sustainable development initiatives that transform lives and communities.
            </motion.p>

            {/* Single CTA Button - Centered, prominent */}
            <motion.div
              className="flex justify-center items-center mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-fresh-green text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-fresh-green hover:bg-white hover:text-fresh-green focus:outline-none focus:ring-4 focus:ring-fresh-green/30"
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
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
