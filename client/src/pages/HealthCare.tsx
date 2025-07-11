import React from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import PadHouse from "../components/Projects/PadHouse";
import RaktSetu from "../components/Projects/RaktSetu";
import Saharaa from "../components/Projects/Saharaa";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const HealthCare: React.FC = () => {
  const scrollToProject = (projectId: string) => {
    // Add a small delay to ensure component is fully rendered
    setTimeout(() => {
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } else {
        console.warn(`Element with id "${projectId}" not found`);
      }
    }, 100);
  };

  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  const overallImpact = [
    { number: "36,000+", label: "Lives Touched", icon: "❤️" },
    { number: "83", label: "Healthcare Facilities", icon: "🏥" },
    { number: "2,500+", label: "Blood Units Saved", icon: "🩸" },
    { number: "75+", label: "Institutions Covered", icon: "🏢" },
  ];

  const projects = [
    { name: "Pad House", id: "pad-house" },
    { name: "Rakt Setu", id: "rakt-setu" },
    { name: "Sahara", id: "sahara" },
  ];

  const whyItMatters = [
    {
      step: "01",
      title: "Poor Health",
      description:
        "Lack of access to menstrual hygiene products and education can lead to poor health among girls.",
      image: "Health impact illustration",
    },
    {
      step: "02",
      title: "Educational Barriers for Girls",
      description:
        "Girls miss school and even drop out due to lack of proper menstrual hygiene products and education.",
      image: "Educational impact on girls",
    },
    {
      step: "03",
      title: "Cultural Taboos & Social Isolation",
      description:
        "Long-held taboos around menstruation and health issues lead to social isolation and delayed medical interventions.",
      image: "Cultural barriers in healthcare",
    },
    {
      step: "04",
      title: "Emergency Blood Shortages",
      description:
        "Patients in emergencies often suffer due to lack of access to immediate blood supply.",
      image: "Emergency need illustration",
    },
    {
      step: "05",
      title: "Awareness Gap",
      description:
        "There's limited awareness around regular blood donation and its life-saving importance.",
      image: "Awareness campaign visual",
    },
    {
      step: "06",
      title: "Chronic Illness Burden",
      description:
        "Chronic conditions like thalassemia demand frequent transfusions, which can be life-threatening without timely supply.",
      image: "Chronic illness support needs",
    },
    {
      step: "07",
      title: "Limited Recovery Mobility",
      description:
        "Injured individuals without proper support equipment face limited movement, significantly delaying their recovery process.",
      image: "Recovery mobility challenges",
    },
    {
      step: "08",
      title: "Financial Strain on Families",
      description:
        "Recovering families often can't afford essential equipment like beds and walkers, impacting their healing journey.",
      image: "Healthcare financial burden",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section - match Nutrition */}
      <div className="relative overflow-hidden bg-gradient-to-br from-fresh-green via-green-600 to-primary-blue rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Healthcare & Wellness
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Healthcare
                  <span className="block text-warm-light-blue text-5xl md:text-6xl">
                    Initiatives
                  </span>
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed capitalize">
                  Making healthcare accessible for all: menstrual hygiene, emergency blood support, and medical equipment for those in need.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => scrollToProject("pad-house")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Pad House
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToProject("rakt-setu")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Rakt Setu
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToProject("sahara")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Sahara
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/medical-equipment-donate.jpeg"
                    alt="Healthcare Initiatives"
                    className="rounded-xl shadow-2xl border-4 border-white/20 object-cover w-full h-auto max-h-72 md:max-h-none"
                  />
                </div>
                <div className="absolute md:-bottom-12 md:-left-12 -bottom-6 -left-4 transform -rotate-6">
                  <img
                    src="/medical-equipment.jpg"
                    alt="Healthcare thumbnail"
                    className="rounded-lg shadow-lg border-4 border-white/30 object-cover w-44 h-28 md:w-56 md:h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-warm-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Overall Impact */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Healthcare Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-br from-green-500 via-teal-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-medium">
            Through our comprehensive healthcare initiatives, we've touched
            thousands of lives, providing essential services from menstrual
            hygiene to emergency medical support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {overallImpact.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-4xl mb-2">{stat.icon}</div>
              <div className="text-lg md:text-2xl font-bold text-primary-blue mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-dark-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* projects under healthcare */}
      <section id="pad-house" className="scroll-mt-24">
        <PadHouse />
      </section>
      <section id="rakt-setu" className="scroll-mt-24">
        <RaktSetu />
      </section>
      <section id="sahara" className="scroll-mt-24">
        <Saharaa />
      </section>

      {/* Why It Matters Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Why It Matters
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Understanding the critical healthcare challenges that drive our
            mission to create lasting impact in communities.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-fresh-green to-primary-blue rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {whyItMatters.map((matter, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-fresh-green to-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                        {matter.step}
                      </div>
                      <h3 className="text-xl font-bold text-primary-blue dark:text-warm-light-blue">
                        {matter.title}
                      </h3>
                    </div>
                    <p className="text-dark-gray leading-relaxed">
                      {matter.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ImagePlaceholder
                    text={matter.image}
                    width="100%"
                    height="200px"
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="p-4 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Every Life Matters
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Join us in making healthcare accessible to all. From menstrual
            hygiene to life-saving blood donations and recovery support - your
            involvement can make healthcare accessible to those who need it
            most.
          </p>
        </div>
        <div className="grid grid:cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Volunteer",
              description:
                "Join our healthcare initiatives as a volunteer. Help with counseling, blood drives, or equipment distribution.",
              buttonText: "Become a Volunteer",
              color: "from-pink-500 to-rose-600",
              route: "/get-involved",
            },
            {
              title: "Donate",
              description:
                "Support our healthcare projects with monetary donations, medical equipment, or sanitary products.",
              buttonText: "Make a Donation",
              color: "from-red-500 to-red-600",
              route: "/donate-for-a-cause",
            },
            {
              title: "Partner",
              description:
                "Partner with us to expand our healthcare reach and impact more lives in underserved communities.",
              buttonText: "Partner With Us",
              color: "from-blue-500 to-blue-600",
              route: "/partner-with-us",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${option.color} p-6`}>
                <h3 className="text-xl font-bold text-white mb-2">
                  {option.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-dark-gray leading-relaxed mb-6">
                  {option.description}
                </p>
                <Button
                  className={`w-full py-3 text-lg font-semibold bg-gradient-to-r ${option.color} text-white hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 transform`}
                  onClick={() => handleNavigation(option.route)}
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
