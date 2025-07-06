import React, { useEffect, useRef } from "react";
import HeroHome from "../components/Home/HeroHome";
import About from "../components/Home/About";
import WhatWeDo from "../components/Home/WhatWeDo";
import ImageGallery from "../components/Home/ImageGallery";
import ImpactCarousel from "../components/Home/ImpactCarousel";
import DonateNow from "../components/Home/DonateNow";
import Loader from "../components/ui/Loader";
import gsap from "gsap";

interface HomeProps {
  showLoader: boolean;
  loaderGone: boolean;
  onFadeOut: () => void;
}

const Home: React.FC<HomeProps> = ({ showLoader, loaderGone, onFadeOut }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderGone && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [loaderGone]);

  return (
    <>
      {!loaderGone && (
        <Loader show={showLoader} onFadeOut={onFadeOut} />
      )}
      <div
        ref={mainRef}
        className="pt-14 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen"
        style={{
          opacity: loaderGone ? 1 : 0,
          pointerEvents: loaderGone ? "auto" : "none",
          transform: loaderGone ? "none" : "translateY(20px) scale(0.98)",
        }}
      >
        <HeroHome />
        <About />
        <WhatWeDo />
        <ImageGallery />
        <DonateNow />
        <ImpactCarousel />
      </div>
    </>
  );
};

export default Home;