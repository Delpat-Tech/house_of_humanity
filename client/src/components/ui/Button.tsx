import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center bg-no-repeat md:h-[36rem]"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-300/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-8 md:px-16 md:py-8 py-4">
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
            className="w-36 sm:w-56 md:w-[20rem] max-w-full"
          />
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mt-6 md:mt-auto">
          {/* Heading Section */}
          <div className="max-w-3xl">
            <motion.p
              className="text-sm sm:text-base md:text-xl text-blue-500 font-semibold mb-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              BuilBetter World
            </motion.p>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold break-words max-w-full bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 bg-clip-text text-transparent leading-snug tracking-normal"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Empowering Today for a Healthier Society and a Sustainable Tomorrow.
            </motion.h1>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 md:gap-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-black text-white text-sm sm:text-base md:text-lg uppercase font-semibold"
              onClick={() => navigate("/about")}
            >
              Who We Are
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-black text-white text-sm sm:text-base md:text-lg uppercase font-semibold"
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
