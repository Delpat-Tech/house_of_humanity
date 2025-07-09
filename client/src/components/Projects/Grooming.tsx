import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Grooming: React.FC = () => {
  const stats = [
    { number: "400+", label: "Girls Groomed", icon: "👧" },
    { number: "30+", label: "Volunteers Involved", icon: "🙋‍♀️" },
    { number: "4", label: "Festive Seasons Covered", icon: "🎉" },
  ];

  const whatWeDo = [
    {
      title: "Festive Grooming Sessions",
      description: "Offer grooming, hygiene, and self-care support to underprivileged girls during festivals.",
      icon: "💅",
    },
    {
      title: "Self-Confidence Building",
      description: "Boost confidence through makeovers, education, and celebration of dignity.",
      icon: "🌸",
    },
  ];

  return (
    <section id="grooming" className="mb-24 dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-purple-500 rounded-2xl mb-16 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-60" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold backdrop-blur-sm mb-6 dark:bg-gray-800 dark:bg-opacity-40">
                Hygiene & Dignity
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-pink-200">
                Project
                <span className="block text-rose-100 text-5xl md:text-6xl mt-2 dark:text-purple-200">Grooming with Dignity</span>
              </h1>
              <p className="text-xl text-rose-100 mb-8 leading-relaxed dark:text-purple-100">
                Helping girls feel seen, celebrated, and confident through festive hygiene and grooming initiatives.
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
              <ImagePlaceholder text="Grooming Session Image" width="100%" height="300px" className="rounded-xl shadow-xl border-4 border-white/20 dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16 dark:bg-gray-900 dark:border dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-pink-200">About Project Grooming</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-pink-700 dark:to-purple-700" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 dark:text-gray-200">
                Project Grooming with Dignity was launched to uplift underprivileged girls through self-care, grooming, and hygiene support. 
                We believe dignity begins with how one feels about themselves — especially during festivals when everyone deserves to feel beautiful and confident.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-100 rounded-lg p-6 dark:from-gray-800 dark:to-purple-900">
                <h4 className="font-semibold text-rose-800 mb-2 dark:text-pink-200">Our Mission</h4>
                <p className="text-primary-blue font-semibold text-lg dark:text-pink-100">
                  To nurture confidence and dignity in girls from underprivileged backgrounds through grooming and festive self-care.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder text="Girls Grooming Session" width="100%" height="250px" className="rounded-xl shadow-lg dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-pink-200">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-pink-700 dark:to-purple-700" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {whatWeDo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-xl font-bold text-pink-700 mb-4 dark:text-pink-200">{item.title}</h4>
              <p className="text-dark-gray dark:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl p-8 md:p-12 mb-12 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-pink-200">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 dark:from-pink-700 dark:to-purple-700" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto dark:text-gray-200">
            More than 400 girls have experienced festive grooming and self-care with dignity, supported by over 30 compassionate volunteers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-pink-700 mb-2 dark:text-pink-200">{stat.number}</div>
              <div className="text-dark-gray font-medium dark:text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grooming;
