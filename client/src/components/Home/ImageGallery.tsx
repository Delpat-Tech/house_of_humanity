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
    { src: "/Gallery/bachpan.jpg", alt: "bachpan" },
    { src: "/Gallery/blanket.jpg", alt: "blanket" },
    { src: "/Gallery/concerts.jpg", alt: "concerts" },
    { src: "/Gallery/cyclothon.jpg", alt: "cyclothon" },
    { src: "/Gallery/donateNow.webp", alt: "donateNow" },
    { src: "/Gallery/gifting.jpg", alt: "gifting" },
    { src: "/Gallery/image1.webp", alt: "image1" },
    { src: "/Gallery/image12.webp", alt: "image12" },
    { src: "/Gallery/image13.webp", alt: "image13" },
    { src: "/Gallery/image14.webp", alt: "image14" },
    { src: "/Gallery/image17.webp", alt: "image17" },
    { src: "/Gallery/image18.webp", alt: "image18" },
    { src: "/Gallery/image19.webp", alt: "image19" },
    { src: "/Gallery/image20.webp", alt: "image20" },
    { src: "/Gallery/image4.webp", alt: "image4" },
    { src: "/Gallery/image6.webp", alt: "image6" },
    { src: "/Gallery/image7.webp", alt: "image7" },
    { src: "/Gallery/image8.webp", alt: "image8" },
    { src: "/Gallery/img11.webp", alt: "img11" },
    { src: "/Gallery/img14.webp", alt: "img14" },
    { src: "/Gallery/img15.webp", alt: "img15" },
    { src: "/Gallery/img16.webp", alt: "img16" },
    { src: "/Gallery/img2.webp", alt: "img2" },
    { src: "/Gallery/img3.webp", alt: "img3" },
    { src: "/Gallery/img4.webp", alt: "img4" },
    { src: "/Gallery/img5.png", alt: "img5" },
    { src: "/Gallery/img7.webp", alt: "img7" },
    { src: "/Gallery/joy-ride.jpg", alt: "joy-ride" },
    { src: "/Gallery/marathon.jpg", alt: "marathon" },
    { src: "/Gallery/maya.jpg", alt: "maya" },
    { src: "/Gallery/pad-house.jpg", alt: "pad-house" },
    { src: "/Gallery/Project Sanskruti Impact.jpg", alt: "Project Sanskruti Impact" },
    { src: "/Gallery/raah.jpg", alt: "raah" },
    { src: "/Gallery/rakt.jpg", alt: "rakt" },
    { src: "/Gallery/sahara.jpeg", alt: "sahara" },
    { src: "/Gallery/SHG Training Session.jpg", alt: "SHG Training Session" },
    { src: "/Gallery/sweetdrive.jpg", alt: "sweetdrive" },
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


