import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="w-full flex md:flex-row flex-col gap-16 items-center">
        {/* Left section Image */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/Gallery/Frame-33-1.webp"
            alt="About Image"
            className="w-[44rem] max-w-full"
          />
        </motion.div>

        {/* Right section content */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="md:text-7xl text-6xl bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent font-bold text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="my-6 text-xl font-medium"
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
            className="text-white text-xl font-semibold bg-blue-500 rounded-xl px-7 py-2 my-3 hover:bg-blue-600"
            onClick={() => navigate("/about")}
          >
            About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
