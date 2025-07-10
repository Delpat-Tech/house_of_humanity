import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Poshan: React.FC = () => {
  const navigate = useNavigate();

  const poshanStats = [
    { number: "300+", label: "Daily Beneficiaries", icon: "👨‍👩‍👧‍👦" },
    { number: "100%", label: "Free Meals", icon: "🍽️" },
    { number: "7", label: "Days Weekly Menu", icon: "📅" },
    { number: "24/7", label: "Support Available", icon: "🏥" },
  ];

  return (
    <section id="poshan" className="mb-24">
      <div>
        {/* Poshan Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-primary-blue rounded-2xl mb-16">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                      Nutrition Support
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Project
                    <span className="block text-orange-200 text-5xl md:text-6xl mt-2">
                      Poshan
                    </span>
                  </h1>
                  <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                    Nourishing Families During Medical Crises
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        300+ Daily Beneficiaries
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        100% Free Meals
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/Poshan-hero-1.jpg"
                      alt="Children receiving care"
                      className="rounded-xl shadow-2xl w-full h-auto max-h-72 md:max-h-none object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-0 md:-bottom-12 md:-left-28 transform -rotate-6 w-32 h-20 md:w-[16rem] md:h-[10rem]">
                    <img
                      src="/poshan-thumbnail.jpeg"
                      alt="Children receiving care"
                      className="rounded-xl shadow-2xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                About Project Poshan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-dark-gray text-justify">
                  Providing nutritious meals to families supporting patients in
                  government hospitals. We serve rice-based meals daily to over
                  300 individuals supporting patients in government hospitals,
                  completely free of charge. Each meal is carefully planned to
                  meet nutritional needs, with a rotating weekly menu to ensure
                  variety and balance.
                </p>
                <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Our Mission</h4>
                  <p className="text-primary-blue font-semibold text-lg">
                    At Poshan, we are committed to ensuring that no family
                    supporting a patient in a government hospital goes hungry.
                    We offer balanced, nutritious meals to these individuals at
                    no cost, helping them maintain their strength and well-being
                    during times of medical emergency.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/poshan-about.jpg"
                  alt="Children receiving care"
                  className="rounded-xl shadow-2xl w-full h-auto max-h-72 md:max-h-[400px] object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  300+ Daily Beneficiaries
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
              We provide nutritious meals and emotional support to families
              during medical crises, ensuring they don't skip meals or rely on
              unhealthy options while caring for their loved ones.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Providing Nutritious Meals",
                description:
                  "We serve rice-based meals daily to over 300 individuals supporting patients in government hospitals, completely free of charge. Each meal is carefully planned to meet nutritional needs, with a rotating weekly menu to ensure variety and balance.",
                icon: "🍚",
              },
              {
                title: "Addressing Food Insecurity",
                description:
                  "Many of those we serve are daily wage earners who lose their income during medical emergencies. We ensure they don't skip meals or rely on unhealthy, inexpensive snacks by providing wholesome meals that ease the financial burden.",
                icon: "💝",
              },
              {
                title: "Mental and Emotional Support",
                description:
                  "In addition to meals, we offer counseling to ease the emotional strain these families face. Our program provides not just physical nourishment but also emotional support in times of uncertainty.",
                icon: "🤗",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-blue mb-4">
                  {activity.title}
                </h4>
                <p className="text-dark-gray">{activity.description}</p>
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
              We provide daily nutritious meals to over 300 families supporting
              patients in government hospitals, ensuring they maintain their
              strength during medical emergencies with 100% free support
              available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {poshanStats.map((stat, index) => (
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
      </div>
    </section>
  );
};

export default Poshan;
