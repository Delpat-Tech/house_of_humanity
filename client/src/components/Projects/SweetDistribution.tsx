import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const SweetDistribution: React.FC = () => {
  const stats = [
    { number: "2,500+", label: "Individuals Reached Every Year", icon: "🍬" },
    { number: "1", label: "Night of Celebration", icon: "🪔" },
    { number: "100+", label: "Volunteers Participating", icon: "🙏" },
  ];

  return (
    <section id="sweet-distribution" className="mb-24">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-yellow-500 to-orange-500 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold uppercase backdrop-blur-sm">
                  Diwali Drive
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-yellow-200">
                Project
                <span className="block text-yellow-100 text-5xl md:text-6xl mt-2">
                  Sweet Distribution
                </span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Spreading joy to Vadodara’s unsung heroes on Diwali night
                through thoughtful gestures and sweets.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 dark:bg-gray-800 dark:bg-opacity-40">
                    <span className="text-white font-semibold">{s.number} {s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="sweet-drive-hero.webp"
                  alt="sweet distribution"
                  width="100%"
                  className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About project */}

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 my-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-6">
              About Project Sweet Distribution
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-dark-gray dark:text-gray-300 leading-relaxed mb-6">
                Festivals are a time of joy — and with Sweet Distribution, we
                make sure everyone shares in it. Our initiative focuses on
                bringing festive cheer to underprivileged children by
                distributing sweets like ladoos and chocolates during major
                festivals, especially Diwali.
              </p>
              <div className="bg-gradient-to-r from-yellow-100/60 to-pink-100/40 dark:from-yellow-900/20 dark:to-pink-900/20 rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-primary-blue dark:text-white">
                  Why It Matters
                </h4>
                <p className="text-primary-blue dark:text-pink-300 font-medium text-lg">
                  Many children in slum communities don't get to enjoy simple
                  joys like sweets during festivals. With this project, we
                  ensure they feel seen, valued, and celebrated.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Gallery/sweetdrive.jpg"
                alt="Sweet Distribution"
                className="rounded-xl shadow-2xl w-full h-[300px] object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Diwali Sweet Drive
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-orange-200">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-orange-700 dark:to-yellow-700" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {[
            {
              title: "Diwali Sweet Distribution",
              description:
                "Distribute sweet boxes to night watchmen, cobblers, and rag pickers on Diwali night.",
              icon: "🍱",
            },
            {
              title: "Recognizing Unsung Heroes",
              description:
                "Celebrate and honor those who work quietly behind the scenes during festivities.",
              icon: "🌟",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group dark:bg-gray-900 dark:border dark:border-gray-700"
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
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Since inception, the drive has brought smiles to over 2,500
            individuals every year, spreading joy and Diwali cheer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-base md:text-2xl font-bold text-primary-blue mb-1">{stat.number}</div>
              <div className="text-xs md:text-base text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweetDistribution;
