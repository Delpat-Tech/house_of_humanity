import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DonateNow = () => {
  const navigate = useNavigate();



  return (
    <section className="relative md:max-w-7xl mx-auto py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-blue-50 to-fuchsia-50 dark:from-blue-800/20 dark:to-fuchsia-800/20 overflow-hidden rounded-3xl my-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        {/* Left: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-md"
        >
          <motion.img
            src="/Gallery/donateNow.webp"
            alt="Donate for a Cause"
            className="w-full rounded-2xl shadow-2xl border-4 border-white/40"
            initial={{ scale: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </motion.div>

        {/* Right: Text with Animations */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Donate Now
          </motion.h2>
          
          <motion.h3 
            className="text-lg md:text-xl text-fresh-green mb-6 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join Hands to Make a Difference
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A lot many people cannot even afford the necessities, let alone
            indulge in anything extra. Just a little kindness goes a long way.
            We provide clothes, food, toys, utensils, and other essential items
            to the needy and marginalized people. Your donations can play a
            major role.
          </motion.p>

          <motion.button
            onClick={() => navigate("/donate-for-a-cause")}
            className="px-8 py-3 rounded-2xl font-medium border-2 border-primary-blue cursor-pointer relative overflow-hidden"
            initial={{
              scale: 1,
              backgroundColor: "#1750A4",
              color: "#ffffff",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#1750A4",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              // Remove CSS transitions to let Framer Motion handle everything
              transition: 'none'
            }}
          >
            <motion.span
              className="relative z-10"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
            >
              Donate Now
            </motion.span>
            
            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Pulses */}
      <motion.div 
        className="absolute top-10 right-10 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: [0.4, 0, 0.6, 1]
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: [0.4, 0, 0.6, 1],
          delay: 1
        }}
      />
    </section>
  );
};

export default DonateNow;