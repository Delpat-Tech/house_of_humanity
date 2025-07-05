import React from "react";
import HeroHome from "../components/Home/HeroHome";
import WhatWeDo from "../components/Home/WhatWeDo";
import About from "../components/Home/About";
import DonateNow from "../components/Home/DonateNow";
import ImageGallery from "../components/Home/ImageGallery";
import ImpactCarousel from "../components/Home/ImpactCarousel"

const Home: React.FC = () => {
  return (
    <div className="pt-14">
      <HeroHome />
      <WhatWeDo />
      <About />
      <ImageGallery />
      <DonateNow />
      <ImpactCarousel />
    </div>
  );
};

export default Home;
