import React from "react";
import ImpactCard from "../ui/ImpactCard";
import { impactData } from "../data/impactData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Impact = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          centerMode: true,
          centerPadding: '20px',
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
          className="md:text-5xl text-gradient-h2 font-bold text-center mb-6 text-primary"
        >
          Our Impact
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="text-2xl font-extrabold text-slate-700 text-center mb-20 uppercase"
        >
          Creating lasting impact
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex justify-center"
        >
          <div className="w-full max-w-full sm:max-w-2xl md:max-w-7xl">
            <Slider {...settings}>
              {impactData.map((item, index) => (
                <div key={index} className="px-2 flex justify-center">
                  <ImpactCard
                    iconName={item.icon}
                    count={item.number}
                    title={item.project}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Custom styles for mobile dots */}
        <style jsx>{`
          .slick-dots {
            bottom: -50px;
          }
          
          .slick-dots li button:before {
            font-size: 12px;
            color: #cbd5e1;
            opacity: 0.5;
          }
          
          .slick-dots li.slick-active button:before {
            color: #3b82f6;
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .slick-dots {
              bottom: -40px;
            }
            
            .slick-dots li {
              margin: 0 5px;
            }
          }
          
          /* Custom arrow styles for desktop */
          .slick-prev:before,
          .slick-next:before {
            color: #3b82f6;
            font-size: 24px;
          }
          
          .slick-prev {
            left: -50px;
          }
          
          .slick-next {
            right: -50px;
          }
          
          @media (max-width: 1024px) {
            .slick-prev {
              left: -30px;
            }
            
            .slick-next {
              right: -30px;
            }
          }
        `}</style>
      </div>
    </motion.section>
  );
};

export default Impact;