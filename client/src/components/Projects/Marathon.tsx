import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Marathon: React.FC = () => {
  const stats = [
    { number: "3", label: "Marathons Organized", icon: "🏃‍♂️" },
    { number: "2,800+", label: "Total Participants", icon: "👟" },
    { number: "500+", label: "Specially-abled Runners", icon: "♿" },
  ];

  const whatWeDo = [
    {
      title: "Inclusive Marathons",
      description:
        "Host marathons that welcome runners of all backgrounds, including specially-abled participants.",
      icon: "🏁",
    },
    {
      title: "City-wide Engagement",
      description:
        "Encourage Vadodara’s citizens to embrace fitness and community participation through public runs.",
      icon: "🏙️",
    },
  ];

  return (
    <section id="marathon" className="mb-24 dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-red-600 rounded-2xl mb-16 dark:from-gray-900 dark:via-pink-900 dark:to-red-900">
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-60" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold backdrop-blur-sm mb-6 dark:bg-gray-800 dark:bg-opacity-40">
                Community Fitness
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-orange-200">
                Project
                <span className="block text-orange-100 text-5xl md:text-6xl mt-2 dark:text-pink-200">Marathon</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed dark:text-pink-100">
                Spreading the joy of fitness while creating space for every runner—including the specially-abled.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 dark:bg-gray-800 dark:bg-opacity-40">
                    <span className="text-white font-semibold">{stat.number} {stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder text="Marathon Event" width="100%" height="300px" className="rounded-xl shadow-xl border-4 border-white/20 dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16 dark:bg-gray-900 dark:border dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-orange-200">
              About Project Marathon
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-orange-700 dark:to-pink-700" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 dark:text-gray-200">
                Our Marathon initiative encourages a culture of movement and inclusion.
                We host runs that bring together thousands—from fitness enthusiasts to specially-abled citizens—
                making fitness events more accessible and community-driven.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-pink-100 rounded-lg p-6 dark:from-gray-800 dark:to-pink-900">
                <h4 className="font-semibold text-red-800 mb-2 dark:text-orange-200">Our Mission</h4>
                <p className="text-primary-blue font-semibold text-lg dark:text-orange-100">
                  To inspire city-wide participation in inclusive fitness events that celebrate health, spirit, and unity.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder text="Inclusive running group" width="100%" height="250px" className="rounded-xl shadow-lg dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-orange-200">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-orange-700 dark:to-pink-700" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {whatWeDo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-xl font-bold text-orange-700 mb-4 dark:text-orange-200">{item.title}</h4>
              <p className="text-dark-gray dark:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-orange-50 to-pink-100 rounded-2xl p-8 md:p-12 mb-12 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-orange-200">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-orange-700 dark:to-pink-700" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto dark:text-gray-200">
            We've hosted 3 major marathons, engaging over 2,800 participants—including 500+ specially-abled runners—bringing the joy of movement to all.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-700 mb-2 dark:text-orange-200">{stat.number}</div>
              <div className="text-dark-gray font-medium dark:text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marathon;
