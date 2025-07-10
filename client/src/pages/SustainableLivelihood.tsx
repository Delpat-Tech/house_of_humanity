import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ui/ImageSlider";
import Button from "../components/ui/Button";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const SustainableLivelihood: React.FC = () => {
  const navigate = useNavigate();
  const whatWeDoItems = [
    {
      title: "Develop SHGs",
      description:
        "Organize women into self-help groups, providing them with the tools and training to work collaboratively.",
      icon: "👥",
    },
    {
      title: "Vermi-Compost Unit",
      description:
        "Establish and manage a vermi-compost production unit, offering a sustainable source of income and supporting eco-friendly farming practices.",
      icon: "🌱",
    },
    {
      title: "Capacity Building",
      description:
        "Provide training on financial literacy, compost production, and entrepreneurship, empowering women to take control of their livelihoods.",
      icon: "💡",
    },
  ];

  const impactStats = [
    { number: "30", label: "Women Empowered", icon: "👩‍🌾" },
    { number: "1", label: "Taluka Covered", icon: "🏘️" },
    { number: "100%", label: "Sustainable Practices", icon: "♻️" },
    { number: "1", label: "Vermi-Compost Unit", icon: "🌿" },
  ];

  const getInvolvedOptions = [
    {
      title: "Support",
      description:
        "Partner with us to expand Project Sanskruti and empower more women through sustainable livelihood projects.",
      buttonText: "Become a Partner",
      accent: "from-fresh-green to-green-600",
    },
    {
      title: "Volunteer",
      description:
        "Offer your expertise in training, entrepreneurship, or sustainability to help us further support these women in their journey towards financial independence.",
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Sustainable Livelihoods
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Project
                  <span className="block text-warm-light-blue text-5xl md:text-6xl">
                    Sanskruti
                  </span>
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Empowering Women Through Sustainable Livelihoods in Halol
                  Taluka
                </p>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/Gallery/vermi-compost unit.jpg"
                    alt="Women working in vermi-compost unit"
                    width="100%"
                    height="300px"
                    className="rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                  <img
                    src="/Gallery/SHG Training Session.jpg"
                    alt="SHG Training Session"
                    width="200px"
                    height="150px"
                    className="rounded-lg shadow-lg border-4 border-white/30 object-cover"
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

      {/* Project Overview */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              About Project Sanskruti
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 text-justify">
                Project Sanskruti is an initiative focused on empowering women
                in the Halol Taluka by developing Self-Help Groups (SHGs) and
                promoting sustainable livelihoods. Supported by Grasim
                Industries Limited and in collaboration with the Taluka
                Panchayat, this project has brought together 30 women to create
                a vermi-compost unit.
              </p>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 text-justify">
                By equipping these women with the skills and resources needed to
                manage and operate the vermi-compost unit, Project Sanskruti
                helps them achieve financial independence, fosters community
                development, and promotes sustainable agricultural practices.
              </p>
              <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6 dark:bg-gray-800">
                <p className="text-primary-blue font-semibold text-lg dark:text-gray-100">
                  "This project is not just about creating income opportunities
                  but also about building confidence and leadership among the
                  women involved."
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Gallery/Project Sanskruti Impact.jpg"
                alt="Project Sanskruti Impact"
                width="100%"
                height="350px"
                className="rounded-xl shadow-lg object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-fresh-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                30 Women Empowered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Banner */}
      <div className="bg-gradient-to-r from-primary-blue to-fresh-green rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Supported by Grasim Industries Limited
          </h3>
          <p className="text-white/90 mb-6">
            In collaboration with Taluka Panchayat, Halol
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <img
                src="/Gallery/Grasim Industries Logo.jpeg"
                alt="Grasim Industries Logo"
                width="150px"
                height="80px"
                className="rounded-md"
              />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <ImagePlaceholder
                text="Taluka Panchayat Logo"
                width="150px"
                height="80px"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Our comprehensive approach focuses on building sustainable
            livelihoods through community empowerment and environmental
            stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whatWeDoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Through Project Sanskruti, we have successfully brought together 30
            women in Halol Taluka, providing them with meaningful employment
            opportunities while promoting sustainable practices. The project has
            fostered economic independence and strengthened the role of women in
            their communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-dark-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-fresh-green to-primary-blue rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Community Identification",
                description:
                  "Identify and engage with women in Halol Taluka who can benefit from sustainable livelihood opportunities.",
                image: "Community outreach session",
              },
              {
                step: "02",
                title: "SHG Formation",
                description:
                  "Organize women into self-help groups and provide foundational training on collaboration and group dynamics.",
                image: "SHG formation meeting",
              },
              {
                step: "03",
                title: "Skill Development",
                description:
                  "Provide comprehensive training on vermi-compost production, financial literacy, and entrepreneurship.",
                image: "Skills training workshop",
              },
              {
                step: "04",
                title: "Unit Establishment",
                description:
                  "Set up the vermi-compost production unit and provide ongoing support and mentorship.",
                image: "Vermi-compost unit setup",
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
                      <h3 className="text-xl font-bold text-primary-blue">
                        {process.title}
                      </h3>
                    </div>
                    <p className="text-dark-gray leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
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
            Join us in creating a future where women in rural communities are
            empowered to lead sustainable livelihoods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {getInvolvedOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${option.accent} p-6`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {option.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-dark-gray leading-relaxed mb-6">
                  {option.description}
                </p>
                <Button
                  className={`w-full py-3 text-lg font-semibold bg-gradient-to-r ${option.accent} text-white hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 transform`}
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

export default SustainableLivelihood;
