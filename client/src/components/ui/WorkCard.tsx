import React from "react";
import TrapeziumButton from "./TrapeziumButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { WorkCardProps } from "../../types";

const WorkCard: React.FC<WorkCardProps> = ({ title, subtitle, description, onClick, className }) => {
  const navigate = useNavigate();
  return (
    <div className={`w-full max-w-[25rem] min-h-[20rem] h-auto bg-white border-b-[6px] border-teal-500 shadow-2xl rounded-lg overflow-hidden flex flex-col items-center p-6 ${className || ''}`}>
      {/* Title */}
      <motion.h2
        className="text-[24px] font-bold text-center mt-4 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-blue-500 font-semibold text-center mb-3 px-2 uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-gray-700 font-bold text-center mb-4 px-2"
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
        onClick={onClick || (() => navigate("/projects"))}
      >
        <TrapeziumButton
          className="uppercase"
          label="Read More"
          onClick={onClick || (() => navigate("/projects"))}
        />
      </motion.div>
    </div>
  );
};

export default WorkCard;
