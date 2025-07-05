import React from "react";
import ImpactCard from "../ui/ImpactCard";
import { impactData } from "../../data/impactData";
import NextArrow from "../ui/NextArrow";
import PrevArrow from "../ui/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Impact = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 6,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16"
    >
      <div className="md:max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fadeIn("down", 0.1)}
          className="text-[28px] font-bold text-center mb-4 text-primary"
        >
          Our Impact
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="text-[24px] font-extrabold text-center mb-8 uppercase"
        >
          Creating lasting impact
        </motion.h2>

        <motion.div variants={fadeIn("up", 0.3)} className="flex justify-center">
          <div className="w-full max-w-full sm:max-w-2xl md:max-w-7xl">
            <Slider {...settings}>
              {impactData.map((item, index: number) => (
                <div
                  key={index}
                  className="px-2 flex justify-center"
                >
                  <ImpactCard
                    icon={item.icon}
                    count={item.number}
                    title={item.project}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Impact;
