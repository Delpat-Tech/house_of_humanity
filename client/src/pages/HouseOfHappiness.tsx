import React from "react";
import BlanketDrive from "../components/Projects/BlanketDrive";
import SweetDistribution from "../components/Projects/SweetDistribution";
import Cyclothon from "../components/Projects/Cyclothon";
import Marathon from "../components/Projects/Marathon";
import Grooming from "../components/Projects/Grooming";
import Concerts from "../components/Projects/Concerts";
import GiftingToy from "../components/Projects/GiftingToy";

const overallImpact = [
  { number: "10,000+", label: "Smiles Shared", icon: "😊" },
  { number: "1,000+", label: "Gifts & Toys Distributed", icon: "🎁" },
  { number: "7,000+", label: "Concert Attendees", icon: "🎤" },
  { number: "2,800+", label: "Marathon Participants", icon: "🏃‍♂️" },
];

const HouseOfHappiness = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-24 dark:bg-gray-950 dark:text-gray-100">
      {/* 🌈 Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 rounded-2xl mb-16 dark:from-yellow-700 dark:via-pink-700 dark:to-red-700">
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-black dark:bg-opacity-30"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm dark:bg-white dark:bg-opacity-10">
                Celebrating Community Joy
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight dark:text-yellow-100">
              House of Happiness
              <span className="block text-yellow-100 dark:text-pink-200">
                Spreading Smiles & Festive Cheer
              </span>
            </h1>
            <p className="text-xl text-yellow-100 mb-8 font-medium leading-relaxed max-w-3xl mx-auto dark:text-yellow-100">
              From sweet distribution and blanket drives to concerts and
              gift-giving — we build moments of joy for underserved communities.
            </p>
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse dark:bg-pink-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 dark:bg-yellow-700"></div>
      </div>

      <div className="bg-gradient-to-br from-yellow-100/50 to-pink-100/50 rounded-2xl p-8 md:p-12 mb-16 dark:from-gray-900/70 dark:to-gray-800/70">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6 dark:text-yellow-300">
            Our Happiness Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-6 dark:from-yellow-700 dark:to-pink-700"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto dark:text-gray-200">
            Through joyful initiatives like gifting, concerts, and celebrations,
            we've touched thousands of lives—spreading warmth, smiles, and
            unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {overallImpact.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-yellow-600 mb-2 dark:text-yellow-300">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium dark:text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 💡 Projects Section */}
      <BlanketDrive />
      <SweetDistribution />
      <Cyclothon />
      <Marathon />
      <Grooming />
      <Concerts />
      <GiftingToy />

      {/* 🤝 Get Involved Section */}
      <div className="bg-gradient-to-br from-yellow-100 via-rose-100 to-orange-100 rounded-xl p-8 md:p-12 my-16 shadow-xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 dark:text-yellow-200">
            Be Part of the Happiness
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-6 dark:from-yellow-700 dark:to-pink-700"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-medium dark:text-gray-200">
            Join us in creating joy-filled experiences — volunteer, donate gifts
            or sweets, or sponsor a celebration. Every act of kindness counts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Volunteer",
              description:
                "Help organize events, distribute sweets, or assist at concerts and gifting drives.",
              buttonText: "Become a Volunteer",
              color: "from-yellow-400 to-orange-500 dark:from-yellow-700 dark:to-orange-700",
              route: "/get-involved",
            },
            {
              title: "Donate Gifts or Food",
              description:
                "Contribute new toys, sweets, or festival items to bring smiles to children and families.",
              buttonText: "Donate Now",
              color: "from-pink-500 to-red-500 dark:from-pink-700 dark:to-red-700",
              route: "/donate",
            },
            {
              title: "Sponsor a Celebration",
              description:
                "Support a full-scale concert, gifting drive, or festive event for underprivileged communities.",
              buttonText: "Sponsor Now",
              color: "from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700",
              route: "/partner-with-us",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border dark:border-gray-700"
            >
              <div className={`bg-gradient-to-r ${option.color} p-6`}>
                <h3 className="text-xl font-bold text-white mb-2">
                  {option.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-dark-gray leading-relaxed mb-6 dark:text-gray-200">
                  {option.description}
                </p>
                <button
                  onClick={() => (window.location.href = option.route)}
                  className={`w-full py-3 text-lg font-semibold bg-gradient-to-r ${option.color} text-white hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 transform rounded-lg`}
                >
                  {option.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseOfHappiness;
