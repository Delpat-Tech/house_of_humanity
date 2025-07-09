import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Cyclothon: React.FC = () => {
  const stats = [
    { number: "2", label: "Events Conducted - We have inspired a wave of excitememnt around fitness and active living", icon: "🚴‍♂️" },
    { number: "1,800+", label: "Youth Participants - Bringing together the youth of vadodara in a positive and energetic environment ", icon: "👥" },
  ];

  const whatWeDo = [
    {
      title: "Cycling Events",
      description:
        "We organize large-scale cycling events that promote fitness and fun.",
      icon: "🚲",
    },
    {
      title: "Community Building",
      description:
        "Our events foster unity and excitement around health and fitness.",
      icon: "🤝",
    },
  ];

  return (
    <section id="cyclothon" className="mb-24">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-blue-500 to-cyan-600 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold backdrop-blur-sm mb-6">
                Youth Fitness Drive
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Project
                <span className="block text-cyan-100 text-5xl md:text-6xl mt-2">
                  Cyclothon
                </span>
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Encouraging healthy living and active lifestyles among
                Vadodara's youth.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((stat, i) => (
                  <div
                    key={i}
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
                  src="/cyclothon-hero.png"
                  alt="Cyclothon"
                  width="100%"
                  className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              About Project Cyclothon
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6">
                Cyclothon is our city-wide fitness initiative aimed at promoting
                health and unity among young people. Through fun, large-scale
                cycling events, we offer youth an exciting way to stay fit and
                connect with their community.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-100 rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-green-800">
                  Our Vision
                </h4>
                <p className="text-primary-blue font-semibold text-lg">
                  To inspire a generation of fitness-first, community-focused
                  youth through cycling.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                  src="/cyclothon-about.jpg"
                  alt="Cyclothon Riders"
                  className="rounded-xl shadow-lg w-[28rem] object-cover"
                />
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
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {whatWeDo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-4">
                {item.title}
              </h4>
              <p className="text-dark-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20  rounded-2xl p-8 md:p-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Cyclothon has energized over 1,800 young individuals across 2
            events, sparking a movement of fun, fitness, and fellowship.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-dark-gray px-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cyclothon;
