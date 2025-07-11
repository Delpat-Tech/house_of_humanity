import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const PadHouse: React.FC = () => {
  const padHouseStats = [
    { number: "75+", label: "Government Schools", icon: "🏫" },
    { number: "8,000+", label: "Households Reached", icon: "🏠" },
    { number: "28,000+", label: "Girls Helped", icon: "👧" },
    { number: "70%", label: "Adoption Rate", icon: "📈" },
  ];

  return (
    <section id="pad-house" className="mb-24">
      <div>
        {/* Pad House Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-primary-blue rounded-2xl mb-16">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                      Menstrual Hygiene
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Project
                    <span className="block text-pink-200 text-5xl md:text-6xl mt-2">
                      Pad House
                    </span>
                  </h1>
                  <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                    Breaking the Stereotype, Ensuring Menstrual Hygiene for
                    Every Girl
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        75+ Schools
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        28,000+ Girls
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        8,000+ Households
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/Gallery/pad-house.jpg"
                      alt="Girls receiving menstrual hygiene education"
                      width="100%"
                      className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                    <img
                      src="/Gallery/123.png"
                      alt="Menstrual hygiene awareness session"
                      className="rounded-lg shadow-lg border-4 border-white/30 object-cover md:h-32 h-24 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                About Project Pad House
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">
                    Started in 2022
                  </span>
                </div>
                <p className="text-lg text-dark-gray dark:text-gray-200 leading-relaxed mb-6">
                  Menstrual hygiene is an important but often ignored part of
                  health, especially in rural and underprivileged communities.
                  Under Pad House, we are dedicated towards ending the silence
                  around menstruation, clearing up myths, and making sure girls
                  in government schools have access to hygiene products and
                  knowledge they need to manage their periods with dignity.
                </p>
                <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Our Mission</h4>
                  <p className="text-dark-gray font-semibold text-lg">
                    To improve menstrual hygiene by providing education,
                    counseling, and free sanitary pads to girls in rural areas,
                    helping them understand and embrace their bodies while
                    staying in school
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/pad-house-about.png"
                  alt="Pad House counseling session"
                  className="rounded-xl shadow-lg w-[28rem] object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  28,000+ Girls Helped
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do section */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              We break the silence around menstruation by providing education,
              counseling, and free sanitary pads to girls in rural government
              schools. Through interactive sessions, we dispel myths while
              working with communities to challenge cultural taboos around
              menstrual health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              {
                title: "Counseling & Education",
                description:
                  "Interactive sessions teaching girls about menstrual health and hygiene through volunteers and health professionals.",
                icon: "👩‍🏫",
              },
              {
                title: "Sanitary Pad Distribution",
                description:
                  "Regular access to free sanitary pads to reduce school dropouts and ensure girls can manage their periods safely.",
                icon: "🎒",
              },
              {
                title: "Community Outreach",
                description:
                  "Working with households and communities to challenge cultural taboos and create acceptance around menstrual health.",
                icon: "🤝",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary-blue mb-2 md:mb-4">
                  {activity.title}
                </h4>
                <p className="text-sm md:text-base text-dark-gray text-justify">{activity.description}</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 font-medium"></div>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              We have reached more than 75 government schools and connected with
              over 8,000 households to spread menstrual hygiene awareness. Our
              efforts have helped more than 28,000 girls, with 70% of them and
              their families now using sanitary pads regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {padHouseStats.map((stat, index) => (
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
      </div>
    </section>
  );
};

export default PadHouse;
