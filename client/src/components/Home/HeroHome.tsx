import React from "react";

const HeroHome: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat md:h-[50rem]"
      style={{ backgroundImage: "url('/images/HeroHOH.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-300/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-20 py-10">
        {/* Top Logo */}
        <div>
          <img
            src="/images/HeroSectionLogo.png"
            alt="logo"
            className="w-64 sm:w-96 md:w-[44rem]"
          />
        </div>

        {/* Bottom Row: Heading + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-auto gap-6">
          {/* Heading */}
          <div className="max-w-4xl">
            <p className="text-lg sm:text-2xl md:text-4xl text-blue-500 font-semibold mb-2">
              Building a Better World
            </p>
            <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 bg-clip-text text-transparent lg:leading-snug md:leading-snug tracking-normal">
              Empowering Today for a Healthier Society and a Sustainable Tomorrow.
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <button id="#about-us"
              className="px-6 py-3 rounded-xl bg-black text-white text-base sm:text-lg md:text-xl uppercase font-semibold"
              onClick={() => console.log("Button Clicked")}
            >
              Who We Are
            </button>
            <button id="#contact-us"
              className="px-6 py-3 rounded-xl bg-black text-white text-base sm:text-lg md:text-xl uppercase font-semibold"
              onClick={() => console.log("Button Clicked")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
