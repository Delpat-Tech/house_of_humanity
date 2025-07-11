import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useTheme } from "../../shared/contexts/ThemeContext";

type Image = {
  src: string;
  alt?: string;
};

interface ImageGalleryProps {
  theme?: "light" | "dark";
}

const ImageGallery: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<Image | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const imageList: Image[] = [
    { src: "/Gallery/bachpan.jpg", alt: "Bachpan" },
    { src: "/Gallery/blanket.jpg", alt: "Blanket Drive" },
    { src: "/Gallery/concerts.jpg", alt: "Concerts" },
    { src: "/Gallery/cyclothon.jpg", alt: "Cyclothon" },
    { src: "/Gallery/donateNow.webp", alt: "Donate For A cause" },
    { src: "/Gallery/gifting.jpg", alt: "Gifting Toys" },
    { src: "/Gallery/image1.webp", alt: "Bachpan" },
    { src: "/Gallery/image12.webp", alt: "Poshan" },
    { src: "/Gallery/image13.webp", alt: "Nutrition" },
    { src: "/Gallery/image14.webp", alt: "Maya" },
    { src: "/Gallery/image17.webp", alt: "Poshan" },
    { src: "/Gallery/img15.webp", alt: "Sweet Drive" },
    { src: "/Gallery/image18.webp", alt: "Maya" },
    { src: "/Gallery/image19.webp", alt: "Sanskruti" },
    { src: "/Gallery/image20.webp", alt: "SHG Training" },
    { src: "/Gallery/image4.webp", alt: "Joy-Ride" },
    { src: "/Gallery/image6.webp", alt: "Volunteer" },
    { src: "/Gallery/image7.webp", alt: "Our Team" },
    { src: "/Gallery/image8.webp", alt: "image8" },
    { src: "/Gallery/img11.webp", alt: "Team" },
    { src: "/Gallery/img14.webp", alt: "Sweet Drive" },
    { src: "/Gallery/img16.webp", alt: "Nutrition" },
    { src: "/Gallery/img2.webp", alt: "Poshan" },
    { src: "/Gallery/img3.webp", alt: "Gifting Toys" },
    { src: "/Gallery/img4.webp", alt: "Maya" },
    { src: "/Gallery/img5.png", alt: "Joy-Ride" },
    { src: "/Gallery/img7.webp", alt: "Pad House" },
    { src: "/Gallery/joy-ride.jpg", alt: "Joy-Ride" },
    { src: "/Gallery/marathon.jpg", alt: "Marathon" },
    { src: "/Gallery/maya.jpg", alt: "Maya" },
    { src: "/Gallery/pad-house.jpg", alt: "pad-house" },
    {
      src: "/Gallery/Project Sanskruti Impact.jpg",
      alt: "Project Sanskruti Impact",
    },
    { src: "/Gallery/raah.jpg", alt: "Raah" },
    { src: "/Gallery/rakt.jpg", alt: "Rakt Setu" },
    { src: "/Gallery/sahara.jpeg", alt: "Sahara" },
    { src: "/Gallery/SHG Training Session.jpg", alt: "SHG Training Session" },
    { src: "/Gallery/sweetdrive.jpg", alt: "Sweet Drive" },
  ];

  //   // Auto-play functionality

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % imageList.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, imageList.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      previousImage();
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageList.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const openLightbox = (image: Image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    setIsAutoPlay(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    setIsAutoPlay(true);
  };

  // Calculate visible images for different screen sizes
  const getVisibleImages = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    if (isMobile) return 1;
    if (isTablet) return 3;
    return 5;
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  useEffect(() => {
    const handleResize = () => {
      setVisibleImages(getVisibleImages());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageStyle = (index: number) => {
    const offset = index - currentImage;
    const totalImages = imageList.length;

    // Simple offset calculation without complex wrapping
    let adjustedOffset = offset;
    if (adjustedOffset > totalImages / 2) {
      adjustedOffset -= totalImages;
    } else if (adjustedOffset < -totalImages / 2) {
      adjustedOffset += totalImages;
    }

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    let scale, translateX, translateZ, rotateY, opacity, zIndex;

    if (isMobile) {
      // Mobile: Simple side-by-side layout
      scale = adjustedOffset === 0 ? 1 : 0.8;
      translateX = adjustedOffset * 120;
      translateZ = adjustedOffset === 0 ? 0 : -80;
      rotateY = adjustedOffset * 20;
      opacity = Math.abs(adjustedOffset) > 1 ? 0 : 1;
      zIndex = adjustedOffset === 0 ? 10 : 10 - Math.abs(adjustedOffset);
    } else if (isTablet) {
      // Tablet: Medium 3D effect
      scale = adjustedOffset === 0 ? 1 : 0.85;
      translateX = adjustedOffset * 200;
      translateZ = adjustedOffset === 0 ? 0 : -120;
      rotateY = adjustedOffset * 25;
      opacity = Math.abs(adjustedOffset) > 1 ? 0 : 1;
      zIndex = adjustedOffset === 0 ? 10 : 10 - Math.abs(adjustedOffset);
    } else {
      // Desktop: Full 3D carousel with better spacing
      scale = adjustedOffset === 0 ? 1 : 0.8;
      translateX = adjustedOffset * 250;
      translateZ = adjustedOffset === 0 ? 0 : -150;
      rotateY = adjustedOffset * 35;
      opacity = Math.abs(adjustedOffset) > 2 ? 0 : 1;
      zIndex = adjustedOffset === 0 ? 10 : 10 - Math.abs(adjustedOffset);
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      {/* Section Heading */}
      <motion.h2
        className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 py-5 transition-colors duration-300 ${
          theme === "dark"
            ? "text-green-400"
            : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Glimpses of Humanity : <br className="sm:hidden" />
        Stories Through Frames
      </motion.h2>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Carousel */}
        <div
          className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden"
          style={{ perspective: "1000px" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {imageList.map((image, index) => {
              const style = getImageStyle(index);
              const isActive = index === currentImage;

              return (
                <motion.div
                  key={index}
                  className={`absolute transition-all duration-700 ease-out ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  style={style}
                  // Simplified hover effect - only slight scale on active image
                  whileHover={isActive ? { scale: 1.05 } : {}}
                >
                  <div
                    className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-2xl ${
                      isActive ? "ring-4 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        isActive ? "opacity-0" : "opacity-30"
                      }`}
                    />

                    {/* Image title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium truncate">
                        {image.alt || `Image ${index + 1}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 flex-wrap gap-4">
          {/* Previous Button */}
          <motion.button
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-white border border-white/30"
                : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
            }`}
            onClick={previousImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <motion.button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlay
                  ? "bg-blue-500 text-white"
                  : theme === "dark"
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlay ? "Pause" : "Play"} Slideshow
            </motion.button>
          </div>

          {/* Next Button */}
          <motion.button
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-white border border-white/30"
                : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
            }`}
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              <motion.button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ImageGallery;
