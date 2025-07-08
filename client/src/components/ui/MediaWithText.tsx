import React from "react";
import { motion } from "framer-motion";

type MediaWithTextProps = {
  heading: string;
  subheading?: string;
  description: string;
  mediaSrc: string;
  mediaAlt?: string;
  reverse?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

const MediaWithText: React.FC<MediaWithTextProps> = ({
  heading,
  subheading,
  description,
  mediaSrc,
  mediaAlt = "image",
  reverse = false,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-xl">
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-primary-blue dark:text-fresh-green text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {heading}
      </motion.h1>

      {subheading && (
        <motion.p
          className="text-center text-base md:text-lg text-fresh-green dark:text-blue-200 font-semibold uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {subheading}
        </motion.p>
      )}

      <div
        className={`flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Media */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={mediaSrc}
            alt={mediaAlt}
            className="w-[36rem] max-w-full rounded-xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="my-6 text-lg dark:text-gray-200 text-dark-gray md:text-xl font-medium whitespace-pre-line">
            {description}
          </p>

          {buttonText && onButtonClick && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-lg font-semibold bg-blue-500 dark:bg-fresh-green rounded-xl px-7 py-2 my-3 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white dark:hover:bg-primary-blue dark:hover:text-gray-100 transition-colors"
              onClick={onButtonClick}
            >
              {buttonText}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaWithText;
