// src/utils/motion.ts

import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0): Variants => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 40;
      break;
    case "down":
      y = -40;
      break;
    case "left":
      x = 40;
      break;
    case "right":
      x = -40;
      break;
  }

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
