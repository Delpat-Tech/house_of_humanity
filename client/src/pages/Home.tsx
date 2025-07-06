import React from "react";
import HeroHome from "../components/Home/HeroHome";
import About from "../components/Home/About";
import WhatWeDo from "../components/Home/WhatWeDo";
import ImageGallery from "../components/Home/ImageGallery";
import ImpactCarousel from "../components/Home/ImpactCarousel";
import DonateNow from "../components/Home/DonateNow";

const Home: React.FC = () => {
  return (
    <div className="pt-14">
      <HeroHome />
      <About />
      <WhatWeDo />
      <ImageGallery />
      <DonateNow />
      <ImpactCarousel />
    </div>
  );
};

export default Home;
