// src/components/ui/ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Image = {
  src: string;
  alt?: string;
};

type ImageSliderProps = {
  images: Image[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <motion.div
      className="w-full px-4 py-6 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <motion.img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              className="rounded-xl w-full h-[16rem] sm:h-[20rem] md:h-[24rem] object-cover mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.9 }}
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default ImageSlider;
