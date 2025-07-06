import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../shared/contexts/ThemeContext";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center bg-no-repeat h-[38rem]"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-300/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-20 md:py-10 py-6">
        {/* Top Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/images/HeroSectionLogo.png"
            alt="logo"
            className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem]"
          />
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-6 md:mt-auto">
          {/* Heading Section */}
          <div className="max-w-[61rem]">
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-blue-500 font-semibold mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Building a Better World
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 bg-clip-text text-transparent tracking-normal"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Empowering Today for a Healthier Society and a Sustainable
              Tomorrow.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Join us in creating lasting positive change through education,
              healthcare, and sustainable development initiatives that transform
              lives and communities.
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

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-black text-white text-base sm:text-lg md:text-xl uppercase font-semibold"
              onClick={() => navigate("/about-us")}
            >
              Who We Are
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-black text-white text-base sm:text-lg md:text-xl uppercase font-semibold"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
