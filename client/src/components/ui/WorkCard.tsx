import React from "react";
import TrapeziumButton from "./TrapeziumButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

const WorkCard: React.FC<CardProps> = ({ title, subtitle, description }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[25rem] min-h-[28rem] bg-gray-100 border-b-[6px] border-teal-500 shadow-2xl rounded-lg overflow-hidden flex flex-col items-center p-6">
      {/* Title */}
      <motion.h2
        className="text-[26px] font-bold text-primary-blue text-center mt-4 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-fresh-green font-semibold text-center mb-3 px-2 uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-dark-gray dark:text-gray-200 font-medium text-lg text-center mt-3 px-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {description}
      </motion.p>

      {/*  Button */}
      <motion.div
        className="mt-auto mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        onClick={() => navigate("/projects")}
      >
        <button
          className="bg-primary-blue text-white px-6 py-3 rounded-xl hover:bg-white hover:text-primary-blue font-medium uppercase"
          onClick={() => console.log("Button clicked")}
        >
          Read More
        </button>
      </motion.div>
    </div>
  );
};

export default WorkCard;
