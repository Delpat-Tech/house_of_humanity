// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useTheme } from "../../shared/contexts/ThemeContext";

// const About: React.FC = () => {
//   const navigate = useNavigate();
//   const { theme } = useTheme();

//   return (
//     <section className="bg-white/80 dark:bg-gray-700/80 px-4 sm:px-6 py-16 sm:py-20 md:py-24 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
//         {/* Left section Image */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <img
//             src="/Gallery/image4.webp"
//             alt="About Image"
//             className="w-full max-w-[36rem] rounded-xl mt-4 mx-auto"
//           />
//         </motion.div>

//         {/* Right section content */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-primary-blue dark:text-fresh-green transition-colors duration-300"
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             About Us
//           </motion.h1>

//           <motion.p
//             className="mt-6 mb-4 text-base text-dark-gray dark:text-gray-200 sm:text-lg md:text-xl font-medium text-justify transition-colors duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             Providing a solution to the problem should be the ultimate goal of
//             life. The Corona Virus and the immediate lockdown that was imposed
//             on the 22nd of March, 2020 left the entire nation locked down in
//             their respective homes. But wait!! What about the millions of
//             homeless families out there? That’s what made a pathway for 2 young
//             guys who teamed up to serve the homeless families near their
//             locality. That indeed was the beginning of a new era which we now
//             call the House of Humanity Charitable Trust. Starting with serving
//             food to 200 people daily amidst the lockdown, the team has now grown
//             from 2 members to around 150 and has seen exponential growth over
//             the past one and a half years.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`text-white text-sm sm:text-base md:text-xl font-semibold rounded-xl px-6 py-2 mt-4 transition-colors duration-300 border ${theme === 'dark' ? 'bg-fresh-green hover:bg-white hover:text-fresh-green hover:border-fresh-green border-fresh-green' : 'bg-primary-blue hover:bg-white hover:text-primary-blue hover:border-primary-blue border-primary-blue'}`}
//             onClick={() => navigate("/about-us")}
//           >
//             About Us
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../shared/contexts/ThemeContext";

const About: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden rounded-2xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/30 transition-colors duration-300">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-14 md:gap-20 items-center z-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="/Gallery/image4.webp"
              alt="About Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-blue dark:text-white leading-tight mb-6">
            About Us
          </h2>

          <p className="text-lg sm:text-xl font-medium text-dark-gray dark:text-gray-200 text-justify leading-relaxed">
            Providing a solution to the problem should be the ultimate goal of life. The Coronavirus lockdown on March 22, 2020, left millions of homeless families stranded. That moment sparked two young individuals to take action — serving food to over 200 people daily. This small act of kindness grew into what is now the House of Humanity Charitable Trust, a team of over 150 members driving sustainable impact through education, nutrition, and care.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-white font-semibold rounded-xl px-6 py-3 mt-6 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-fresh-green hover:bg-white hover:text-fresh-green border-fresh-green"
                : "bg-primary-blue hover:bg-white hover:text-primary-blue border-primary-blue"
            }`}
            onClick={() => navigate("/about-us")}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

