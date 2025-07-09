import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active by looking at the document or body classes
    const checkDarkMode = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const floatingParticles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className=" transition-all duration-500 bg-gray-50">
      <section
        className={`relative overflow-hidden mt-24 px-4 sm:px-6 py-16 sm:py-20 md:py-24 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-md"
            : "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
        }`}
      >
        {/* Floating Particles */}
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 rounded-full bg-orange-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Geometric Shapes */}
        <motion.div
          className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] bg-orange-300/20 rounded-xl z-0"
          animate={{
            x: [0, 20, -10, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-140px] w-[400px] h-[400px] bg-red-300/20 rounded-xl z-0"
          animate={{
            x: [0, -30, 10, 0],
            rotate: [0, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Morphing Background Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 bg-gradient-to-r from-purple-300 to-pink-300"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-14 md:gap-20 items-center z-10">
          {/* Left Image with Advanced Effects */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30, scale: 1.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative rounded-2xl shadow-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full z-10"
                transition={{ duration: 0.6 }}
              />

              {/* Glowing Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-2xl bg-current" />
              </motion.div>

              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                <motion.img
                  src="/Gallery/image4.webp"
                  alt="About Image"
                  className="relative w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Image Overlay Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500/80 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white text-sm">♥</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content with Enhanced Animations */}
          <motion.div
            className="w-full md:w-1/2 space-y-5"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Animated Title with Gradient Text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 className="text-4xl sm:text-5xl text-primary-blue font-extrabold leading-tight">
                About Us
              </motion.h2>

              {/* Underline Animation */}
              <motion.div
                className="h-1 rounded-full mt-2 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Animated Text with Typewriter Effect */}
            <motion.p
              className="text-lg sm:text-xl font-medium text-justify leading-relaxed text-dark-gray"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
              >
                Providing a solution to the problem should be the ultimate goal
                of life. The Coronavirus lockdown on March 22, 2020, left
                millions of homeless families stranded. That moment sparked two
                young individuals to take action — serving food to over 200
                people daily. This small act of kindness grew into what is now
                the House of Humanity Charitable Trust, a team of over 150
                members driving sustainable impact through education, nutrition,
                and care.
              </motion.span>
            </motion.p>

            {/* Enhanced Button with Ripple Effect */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.button
                className="text-white bg-primary-blue font-semibold rounded-xl px-8 py-4 mt-2 border-2 border-blue-600 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#2563eb",
                  borderColor: "#2563eb",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about-us")}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 rounded-full bg-orange-500/60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
