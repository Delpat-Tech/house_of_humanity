import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const BlanketDrive: React.FC = () => {
  const stats = [
    { number: "3,000+", label: "Individuals Reached", icon: "🧣" },
    { number: "3", label: "Years of Operation", icon: "📅" },
    { number: "7", label: "Nights of Giving (Dec 25–31)", icon: "🌙" },
  ];

  return (
    <section id="blanket-drive" className="mb-24">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-700 via-orange-500 to-red-600 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold uppercase backdrop-blur-sm">
                  Winter Relief Drive
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Project
                <span className="block text-yellow-100 text-5xl md:text-6xl mt-2">
                  Blanket Drive
                </span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Spreading warmth and dignity to Vadodara’s homeless during the
                coldest nights of the year.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2"
                  >
                    <span className="text-white font-semibold">
                      {s.number} {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/blanket-hero.jpg"
                  alt="Blanket distribution"
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
              About Project Blanket Drive
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                  Running for 3 Years
                </span>
              </div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6">
                At House of Humanity, our mission is simple: to ensure that no
                one sleeps cold during the harsh winter nights. Every year from
                December 25th to 31st, our volunteers become Santa for the
                night, distributing blankets to those sleeping on the streets of
                Vadodara. We believe in a community where kindness and care
                thrive, ensuring that the most vulnerable are not forgotten.
              </p>
              <p className="text-lg text-dark-gray leading-relaxed mb-6">
                For the past three years, we've reached over 1,000 people
                annually, providing warmth and hope between 12:00 AM and 2:00 AM
                each night, spreading comfort and dignity to those who need it
                most.
              </p>
              <div className="bg-gradient-to-r from-orange-100/50 to-red-100/30 rounded-lg p-6">
                <h4 className="font-bold mb-2 text-primary-blue">
                  Our Mission
                </h4>
                <p className="text-dark-gray font-semibold text-lg">
                  To ensure that no one sleeps cold during winter nights by
                  providing blankets and spreading warmth, comfort, and hope to
                  Vadodara's most vulnerable during the coldest time of the
                  year.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/blanket.jpg"
                alt="Blanket distribution to homeless individuals"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                3,000+ People Reached
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
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Over 3,000 individuals reached in 3 years, receiving not just
            blankets but dignity and care during cold nights.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlanketDrive;
