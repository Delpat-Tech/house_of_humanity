import React from "react";

const JoyOfRide: React.FC = () => {
  const stats = [
    { number: "12", label: "Joyrides Conducted", icon: "🚗" },
    { number: "8", label: "Slums Reached", icon: "🏘️" },
    { number: "600+", label: "Children Impacted", icon: "👧🏽👦🏽" },
  ];

  return (
    <section id="joy-of-ride" className="mb-24 dark:text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-red-400 to-yellow-300 rounded-2xl mb-16">
        <div className="absolute inset-0" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold uppercase backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-40">
                Joy of Ride
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight dark:text-yellow-200">
              Project
              <span className="block text-yellow-100 text-5xl md:text-6xl mt-2 dark:text-orange-200">
                Joy of Ride
              </span>
            </h1>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Bringing smiles and new experiences to slum children—one joyful
              ride at a time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-white font-semibold">
                    {s.number} {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              About Joy of Ride
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto mb-6"></div>
          </div>
          <div className="mb-12">
            <div className="mb-6 text-center">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                Creating Joyful Moments
              </span>
            </div>
            <p className="text-lg text-dark-gray leading-relaxed mb-6 max-w-3xl mx-auto">
              Joy of Ride is a heartfelt initiative designed to give children
              from Vadodara's slums a unique and memorable experience. What
              starts as a simple car ride turns into an inspiring
              journey—through city streets, fast food spots, and moments of
              joy.
            </p>
            <p className="text-lg text-dark-gray leading-relaxed mb-6 max-w-3xl mx-auto">
              Each ride includes a convoy of 15 cars, volunteer-driven, giving
              50–60 children a chance to feel seen, included, and celebrated.
              These rides not only introduce them to new environments but also
              spark dreams and build confidence.
            </p>
            <div className="bg-gradient-to-r from-yellow-100/50 to-red-100/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-bold mb-2 text-primary-blue dark:text-warm-light-blue text-center">
                Our Mission
              </h4>
              <p className="text-dark-gray font-semibold text-lg text-center">
                To inspire, uplift, and include underprivileged children
                through new experiences that broaden their horizons and ignite
                hope.
              </p>
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
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto mb-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "City Joyrides",
              description:
                "Volunteer-led convoys give slum children their first experience of riding through the city.",
              icon: "🚗",
            },
            {
              title: "Cafe & Resort Visits",
              description:
                "Children visit popular spots like McDonald’s or resorts for meals and fun.",
              icon: "🍔",
            },
            {
              title: "Building Confidence",
              description:
                "Every ride inspires dreams and creates lasting memories of joy and belonging.",
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
      <div className="bg-gradient-to-br from-pink-100/50 to-yellow-100/40 rounded-2xl p-8 md:p-12 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Joy of Ride has touched hundreds of lives—bringing joy, new
            experiences, and a sense of inclusion to children from 8 slums
            across Vadodara.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-base md:text-2xl font-bold text-primary-blue mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-dark-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoyOfRide;
