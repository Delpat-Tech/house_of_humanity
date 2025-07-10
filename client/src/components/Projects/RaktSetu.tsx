import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const RaktSetu: React.FC = () => {
  const raktSetuStats = [
    { number: "230", label: "Volunteers", icon: "🤝" },
    { number: "8", label: "Blood Camps", icon: "🩸" },
    { number: "2,500+", label: "Blood Units", icon: "💉" },
    { number: "24/7", label: "Emergency Support", icon: "🚨" },
  ];

  const whatWeDo = [
    {
      title: "Emergency Blood Support",
      description:
        "Immediate assistance through our volunteer network for patients in critical conditions, reducing delays in treatment.",
      icon: "🚨",
    },
    {
      title: "Blood Donation Camps",
      description:
        "Organizing regular blood donation camps in Vadodara and nearby colleges in collaboration with certified blood banks.",
      icon: "🩸",
    },
    {
      title: "Volunteer Network",
      description:
        "Maintaining a trained network of 230+ volunteers for prompt emergency response and assistance.",
      icon: "👥",
    },
    {
      title: "Adoption of Blood-Related Cases",
      description:
        "Supporting children and elders suffering from diseases like thalassemia and sickle cell anemia needing regular transfusions.",
      icon: "🤝",
    },

    {
      title: "Healthcare Providers Network",
      description:
        "Collaborate with hospitals, clinics, and blood banks to streamline donation, storage, and emergency distribution of safe blood.",
      icon: "👥",
    },
    {
      title: "Awareness and Education",
      description:
        "Raise awareness on blood donation through community outreach, workshops & digital campaigns encourage lifelong donors.",
      icon: "🎗️",
    },
  ];

  return (
    <section id="rakt-setu" className="mb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  Blood Donation & Emergency Support
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Project
                <span className="block text-red-200 text-5xl md:text-6xl mt-2">
                  Rakt Setu
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Bridging the Lifeline in Times of Need – Connecting donors with
                those in urgent need of blood.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {raktSetuStats.slice(0, 3).map((stat, idx) => (
                  <div
                    key={idx}
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
                  src="/IMG_1334.png "
                  alt="Rakt Setu volunteers"
                  className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                <img
                  src="/blood-donate.jpg"
                  alt="Blood camp"
                  className="rounded-lg shadow-lg border-4 border-white/30 object-cover h-36"
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
              About Project Rakt Setu
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-6">
                Started in 2021
              </span>
              <p className="text-lg text-dark-gray leading-relaxed mb-6">
                Rakt Setu was launched to eliminate delays and shortages in
                emergency blood supply. With hundreds of volunteers and
                consistent donation drives, we ensure no one is left helpless in
                times of crisis.
                <br />
                Over time, Rakt Setu has evolved into a structured support
                system—connecting donors, hospitals, and patients through an
                efficient volunteer network. Alongside emergency response, we
                focus on education, chronic case adoption, and building
                long-term partnerships with healthcare providers to strengthen
                the city’s blood ecosystem.
              </p>
              <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-dark-gray font-semibold text-lg">
                  To save lives by connecting voluntary blood donors with
                  patients in need, fostering awareness and community readiness
                  for emergencies.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/IMG_1476.png"
                alt="Blood donation impact"
                className="rounded-xl shadow-lg w-[50rem] object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                2,500+ Units Collected
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
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Rakt Setu ensures timely blood access by organizing donation drives,
            training volunteers, and supporting chronic care patients through
            community engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-primary-blue mb-2 md:mb-4">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-dark-gray text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6" />
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            We’ve facilitated 8 major blood camps, collected over 2,500 units,
            and formed a 230-member active volunteer base – ready for action
            round the clock.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {raktSetuStats.map((stat, index) => (
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
    </section>
  );
};

export default RaktSetu;
