import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Concerts: React.FC = () => {
  const stats = [
    { number: "7,000+", label: "Audience Reached", icon: "🎤" },
    { number: "3", label: "Concert Events", icon: "🎶" },
    { number: "150+", label: "Slum Kids Sponsored", icon: "🧒" },
  ];

  const whatWeDo = [
    {
      title: "Socially Conscious Concerts",
      description: "Organize events that combine entertainment with awareness and social inclusion.",
      icon: "🎭",
    },
    {
      title: "Free Access for Underprivileged",
      description: "Sponsor slum children and families to attend major cultural events.",
      icon: "🎫",
    },
  ];

  return (
    <section id="concerts" className="mb-24 dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl mb-16 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-60" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold backdrop-blur-sm mb-6 dark:bg-gray-800 dark:bg-opacity-40">
                Arts & Inclusion
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-pink-200">
                Project
                <span className="block text-pink-100 text-5xl md:text-6xl mt-2 dark:text-purple-200">Concerts</span>
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed dark:text-purple-100">
                Fusing entertainment with empathy — bringing music, dance, and joy to every corner of the community.
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
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/concerts.jpg"
                      alt="Concerts for kids"
                      width="100%"
                      className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                    />
                  </div>
                 
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16 dark:bg-gray-900 dark:border dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-purple-200">About Project Concerts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-purple-700 dark:to-pink-700" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 dark:text-gray-200">
                Project Concerts creates space for joy, unity, and celebration—by organizing large-scale cultural events and ensuring inclusivity for underprivileged communities.
                Whether it’s a garba night or a hip-hop concert, the goal is to use entertainment as a bridge for social good.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-6 dark:from-gray-800 dark:to-pink-900">
                <h4 className="font-semibold text-purple-800 mb-2 dark:text-purple-200">Our Mission</h4>
                <p className="text-primary-blue font-semibold text-lg dark:text-purple-100">
                  To democratize access to culture and joy through concerts that uplift, unite, and inspire.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                  src="/concerts-about.jpg"
                  alt="Live Concert"
                  className="rounded-xl shadow-lg w-[28rem] object-cover"
                />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-purple-200">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-purple-700 dark:to-pink-700" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {whatWeDo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-xl font-bold text-primary-blue mb-4">{item.title}</h4>
              <p className="text-dark-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-purple-200">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-purple-700 dark:to-pink-700" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto dark:text-gray-200">
            Through 3 major concerts including Garba Night and King Live, we’ve reached over 7,000 people and enabled 150+ slum children to experience world-class performances.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</div>
              <div className="text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
