import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import Poshan from "../components/Projects/Poshan";
import Maya from "../components/Projects/Maya";

const Nutrition: React.FC = () => {
  const navigate = useNavigate();

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const overallImpact = [
    { number: "800+", label: "Lives Impacted", icon: "❤️" },
    { number: "25", label: "Communities Served", icon: "🌍" },
    { number: "350", label: "Women Empowered", icon: "👩‍🌾" },
    { number: "2", label: "Major Projects", icon: "🎯" },
  ];

  const getInvolvedOptions = [
    {
      title: "Support",
      description:
        "Partner with us to expand our nutrition programs and reach more communities in need of health and nutrition support.",
      buttonText: "Become a Partner",
      accent: "from-fresh-green to-green-600",
    },
    {
      title: "Volunteer",
      description:
        "Join our nutrition initiatives by offering your expertise in healthcare, nutrition education, or community outreach programs.",
      buttonText: "Join as Volunteer",
      accent: "from-primary-blue to-blue-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-fresh-green via-green-600 to-primary-blue rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Nutrition & Health
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Nutrition
                  <span className="block text-warm-light-blue text-5xl md:text-6xl">
                    Programs
                  </span>
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed capitalize">
                 Transforming lives through nutrition and health support for families during medical crises
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => scrollToSection("project-maya")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Project Maya
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection("project-poshan")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Project Poshan
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/Nutrition hero.jpg"
                    alt="Nutrition Programs"
                    className="rounded-xl shadow-2xl border-4 border-white/20 object-cover w-full h-auto max-h-72 md:max-h-none"
                  />
                </div>
                <div className="absolute md:-bottom-12 md:-left-12 -bottom-6 -left-4 transform -rotate-6">
                  <img
                    src="/Nutrition thumbnail.png"
                    alt="Nutrition thumbnail"
                    className="rounded-lg shadow-lg border-4 border-white/30 object-cover w-full h-full"
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
            Our Nutrition Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Through our comprehensive nutrition programs, we have successfully
            reached hundreds of communities, providing essential health
            services, nutrition education, and sustainable food security
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {overallImpact.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-4xl mb-2">{stat.icon}</div>
              <div className="text-base md:text-2xl font-bold text-primary-blue mb-1">{stat.number}</div>
              <div className="text-xs md:text-base text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Components with IDs */}
      <div id="project-poshan">
        <Poshan />
      </div>
      <div id="project-maya">
        <Maya />
      </div>
      {/* Our Approach */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Approach to Nutrition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-fresh-green to-primary-blue rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Community Assessment",
                description:
                  "We work directly with communities to identify nutrition challenges and understand local dietary patterns and cultural preferences.",
                image: "Community nutrition assessment",
                icon: "🏘️",
              },
              {
                step: "02",
                title: "Education & Training",
                description:
                  "Comprehensive nutrition education programs that empower families with knowledge about healthy eating and practical cooking skills.",
                image: "Nutrition education workshop",
                icon: "📚",
              },
              {
                step: "03",
                title: "Implementation & Support",
                description:
                  "Focus on long-term sustainability through local capacity building, resource development, and ongoing mentorship support.",
                image: "Sustainable nutrition program",
                icon: "🌱",
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-fresh-green to-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <div className="text-4xl">{process.icon}</div>
                      <h3 className="text-xl font-bold text-primary-blue dark:text-warm-light-blue">
                        {process.title}
                      </h3>
                    </div>
                    <p className="text-dark-gray leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ImagePlaceholder
                    text={process.image}
                    width="100%"
                    height="200px"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Join us in creating a healthier future where every child and mother
            has access to proper nutrition and healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {getInvolvedOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 md:p-6"
            >
              <div className={`bg-gradient-to-r ${option.accent} p-6`}>
                <h3 className="text-base md:text-xl font-bold text-white mb-2">
                  {option.title}
                </h3>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-dark-gray leading-relaxed mb-4 md:mb-6">
                  {option.description}
                </p>
                <Button
                  className={`w-full py-2 md:py-3 text-sm md:text-lg font-semibold bg-gradient-to-r ${option.accent} text-white hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 transform`}
                  onClick={() => {
                    if (option.buttonText === "Become a Partner") {
                      navigate("/partner-with-us");
                    } else if (option.buttonText === "Join as Volunteer") {
                      navigate("/get-involved");
                    }
                  }}
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

export default Nutrition;
