import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat md:h-[50rem]"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-300/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-20 md:py-10 py-6">
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
            className="w-64 sm:w-96 md:w-[44rem]  max-w-full"
          />
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-10 md:mt-auto">
          {/* Heading Section */}
          <div className="max-w-4xl">
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl text-blue-500 font-semibold mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Building a Better World
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold ... break-words max-w-full bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 bg-clip-text text-transparent lg:leading-snug md:leading-snug tracking-normal"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Empowering Today for a Healthier Society and a Sustainable
              Tomorrow.
            </motion.h1>
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
              onClick={() => navigate("/about")}
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
