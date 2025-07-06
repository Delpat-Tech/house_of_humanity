import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className=" bg-white/80 dark:bg-gray-700/80 px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Left section Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/Gallery/image4.png"
            alt="About Image"
            className="w-full max-w-[36rem] rounded-xl mt-4 mx-auto"
          />
        </motion.div>

        {/* Right section content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-primary-blue"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="mt-6 mb-4 text-base text-dark-gray dark:text-gray-200 sm:text-lg md:text-xl font-medium text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Providing a solution to the problem should be the ultimate goal of
            life. The Corona Virus and the immediate lockdown that was imposed
            on the 22nd of March, 2020 left the entire nation locked down in
            their respective homes. But wait!! What about the millions of
            homeless families out there? That’s what made a pathway for 2 young
            guys who teamed up to serve the homeless families near their
            locality. That indeed was the beginning of a new era which we now
            call the House of Humanity Charitable Trust. Starting with serving
            food to 200 people daily amidst the lockdown, the team has now grown
            from 2 members to around 150 and has seen exponential growth over
            the past one and a half years.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-sm sm:text-base md:text-xl font-semibold bg-blue-500 rounded-xl px-6 py-2 mt-4 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
