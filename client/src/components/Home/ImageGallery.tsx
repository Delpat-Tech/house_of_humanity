import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../ui/ImageSlider";
import { motion } from "framer-motion";
import { useTheme } from "../../shared/contexts/ThemeContext";

type Image = {
  src: string;
  alt?: string;
};

const ImageGallery: React.FC = () => {
  const { theme } = useTheme();
  const imageList: Image[] = [
    {
      src: "/Gallery/img1.webp",
      alt: "Image 1",
    },
    { src: "/Gallery/img2.webp", alt: "Image 2" },
    {
      src: "/Gallery/img3.webp",
      alt: "Image 3",
    },
    { src: "/Gallery/img4.webp", alt: "Image 4" },
    {
      src: "/Gallery/img5.png",
      alt: "Image 5",
    },
    {
      src: "/Gallery/img6.webp",
      alt: "Image 6",
    },
    { src: "/Gallery/img7.webp", alt: "Image 7" },
    {
      src: "/Gallery/img8.webp",
      alt: "Image 8",
    },
    { src: "/Gallery/img9.webp", alt: "Image 9" },
    {
      src: "/Gallery/img10.webp",
      alt: "Image 10",
    },
    {
      src: "/Gallery/img11.webp",
      alt: "Image 11",
    },
    { src: "/Gallery/img12.webp", alt: "Image 12" },
    {
      src: "/Gallery/img13.webp",
      alt: "Image 13",
    },
    { src: "/Gallery/img14.webp", alt: "Image 14" },
    {
      src: "/Gallery/img15.webp",
      alt: "Image 15",
    },
    {
      src: "/Gallery/img16.webp",
      alt: "Image 16",
    },
  ];

  return (
   <section className={`w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* Section Heading */}
      <motion.h2
        className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 py-5 transition-colors duration-300 ${theme === 'dark' ? 'text-fresh-green' : 'text-gradient-h2'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Glimpses of Humanity :{" "}
      Stories Through Frames 
      </motion.h2>

      {/* Animated Image Slider */}
      <ImageSlider images={imageList} />
    </section>
  );
};

export default ImageGallery;


