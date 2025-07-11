import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Saharaa: React.FC = () => {
  const saharaStats = [
    { number: "100+", label: "Wheelchairs Provided", icon: "♿" },
    { number: "50+", label: "Medical Beds", icon: "🛏️" },
    { number: "75+", label: "Walkers Distributed", icon: "🚶" },
    { number: "95%", label: "Recovery Support", icon: "💪" },
  ];

  const whatWeDo = [
    {
      title: "Affordable Equipment",
      description:
        "Providing wheelchairs, walkers, and medical beds at low cost so financial limitations don’t hinder recovery.",
      icon: "♿",
    },
    {
      title: "Post-Accident Support",
      description:
        "Assisting individuals who skip necessary equipment due to cost or short-term need perception.",
      icon: "🏥",
    },
    {
      title: "Future Automation",
      description:
        "Working towards offering automated solutions for better comfort and accessibility during recovery.",
      icon: "🤖",
    },
  ];

 ;

  return (
    <section id="sahara" className="mb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  Medical Equipment Access
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Project
                <span className="block text-blue-200 text-5xl md:text-6xl mt-2">
                  Sahara
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Supporting Recovery with Essential Medical Equipment – because
                healing shouldn’t be a luxury.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {saharaStats.slice(0, 3).map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2"
                  >
                    <span className="text-white font-semibold">
                      {stat.number} {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/medical-equipment.jpg"
                  alt="Sahara equipment delivery"
                  className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                />
              </div>
              <div className="absolute -bottom-20 -left-16 transform -rotate-6">
                <img
                  src="/medical-equipment-donate.jpeg"
                  alt="Equipment in use"
                  className="rounded-lg shadow-lg border-4 border-white/30 object-cover h-36"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              About Project Sahara
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                Affordable Recovery Support
              </span>
              <p className="text-lg text-dark-gray leading-relaxed mb-6">
                Sahara addresses a critical gap in healthcare: access to
                recovery equipment. Many patients avoid getting what they need
                due to cost or lack of awareness. We provide wheelchairs,
                walkers, and beds at minimal charges to ease their journey.
                <br />
                Beyond affordability, Sahara promotes dignity during recovery.
                By ensuring access to mobility aids, we not only support
                physical healing but also restore independence and confidence
                for individuals in need—especially those who may otherwise feel
                helpless or overlooked.
              </p>
              <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                <h4 className="font-semibold  mb-2">Our Mission</h4>
                <p className="text-dark-gray font-semibold text-lg">
                  To ensure everyone has access to necessary recovery equipment,
                  enhancing comfort, dignity, and healing during difficult
                  times.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/medical-equipment-1.jpg"
                alt="Sahara beneficiaries"
                className="rounded-xl shadow-lg w-[42rem] h-[20rem]"
              />
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Affordable Access
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            We offer affordable recovery equipment, post-accident support, and
            aim to introduce smart solutions for mobility. Sahara helps people
            heal without financial stress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl md:text-5xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-2 md:mb-4">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-dark-gray text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Sahara has enabled affordable recovery for hundreds. With over 100
            wheelchairs, 50 beds, and 75 walkers distributed, we’ve supported
            95% of our beneficiaries through their toughest times.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {saharaStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-base md:text-lg font-bold text-primary-blue mb-1">{stat.number}</div>
              <div className="text-xs md:text-base text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Saharaa;
