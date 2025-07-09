import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const BlanketDrive: React.FC = () => {
  const stats = [
    { number: "3,000+", label: "Individuals Reached", icon: "🧣" },
    { number: "3", label: "Years of Operation", icon: "📅" },
    { number: "7", label: "Nights of Giving (Dec 25–31)", icon: "🌙" },
  ];

  return (
    <section id="sweet-distribution" className="mb-24 dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600 rounded-2xl mb-16 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-60" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold uppercase backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-40">
                  Sweet Distribution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-yellow-200">
                Project
                <span className="block text-yellow-100 text-5xl md:text-6xl mt-2 dark:text-orange-200">
                  Sweet Distribution
                </span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed dark:text-orange-100">
                Spreading sweetness and joy to communities during festive seasons.
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
              <ImagePlaceholder text="Sweet Distribution Image" width="100%" height="300px" className="rounded-xl shadow-2xl border-4 border-white/20 dark:border-gray-700" />
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
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Blanket Distribution",
              description:
                "Provide blankets to those sleeping on the streets during winter nights.",
              icon: "🧤",
            },
            {
              title: "Volunteer Engagement",
              description:
                "Volunteers act as Santas, spreading festive cheer and warmth.",
              icon: "🎅",
            },
            {
              title: "Focus on Vulnerable",
              description:
                "Identify and reach the most exposed and vulnerable across the city.",
              icon: "❤️",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-red-600 mb-4 dark:text-orange-300">{item.title}</h4>
              <p className="text-dark-gray dark:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 md:p-12 mb-12 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-orange-200">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-orange-700 dark:to-yellow-700" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto dark:text-gray-200">
            Over 3,000 individuals reached in 3 years, receiving not just sweets but dignity and care during festive times.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-red-700 mb-2 dark:text-orange-300">{stat.number}</div>
              <div className="text-dark-gray font-medium dark:text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlanketDrive;
