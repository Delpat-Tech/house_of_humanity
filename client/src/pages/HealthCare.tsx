import React from "react";
import PadHouse from "../components/Projects/PadHouse";
import RaktSetu from "../components/Projects/RaktSetu";
import Saharaa from "../components/Projects/Saharaa";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
const HealthCare: React.FC = () => {
  
  const handleNavigation = (route: string) => {
   navigate(route);
  };

  const projects = [
    {
      id: "pad-house",
      title: "Pad House",
      subtitle: "Breaking the Stereotype, Ensuring Menstrual Hygiene",
      description:
        "Dedicated to ending the silence around menstruation and providing free sanitary pads to girls in rural areas.",
      image: "/Gallery/pad-house-session.jpg",
      color: "from-pink-500 to-rose-600",
      stats: [
        { number: "75+", label: "Government Schools", icon: "🏫" },
        { number: "8,000+", label: "Households Reached", icon: "🏠" },
        { number: "28,000+", label: "Girls Helped", icon: "👧" },
        { number: "70%", label: "Adoption Rate", icon: "📈" },
      ],
    },
    {
      id: "rakt-setu",
      title: "Rakt Setu",
      subtitle: "Bridging the Lifeline in Times of Need",
      description:
        "Emergency blood support network with 230 volunteers ensuring no one faces blood shortage during crises.",
      image: "/Gallery/blood-donation-camp.jpg",
      color: "from-red-500 to-red-700",
      stats: [
        { number: "230", label: "Volunteers", icon: "🤝" },
        { number: "8", label: "Blood Camps", icon: "🩸" },
        { number: "2,500+", label: "Blood Units", icon: "💉" },
        { number: "24/7", label: "Emergency Support", icon: "🚨" },
      ],
    },
    {
      id: "sahara",
      title: "Sahara",
      subtitle: "Supporting Recovery with Essential Medical Equipment",
      description:
        "Providing affordable wheelchairs, walkers, and medical beds to those who need them for recovery.",
      image: "/Gallery/medical-equipment.jpg",
      color: "from-blue-500 to-blue-700",
      stats: [
        { number: "100+", label: "Wheelchairs Provided", icon: "♿" },
        { number: "50+", label: "Medical Beds", icon: "🛏️" },
        { number: "75+", label: "Walkers Distributed", icon: "🚶" },
        { number: "95%", label: "Recovery Support", icon: "💪" },
      ],
    },
  ];

  const overallImpact = [
    { number: "36,000+", label: "Lives Touched", icon: "❤️" },
    { number: "83", label: "Healthcare Facilities", icon: "🏥" },
    { number: "2,500+", label: "Blood Units Saved", icon: "🩸" },
    { number: "75+", label: "Institutions Covered", icon: "🏢" },
  ];

  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 via-teal-400 to-blue-600 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  Healthcare & Wellness
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Caring for
                <span className="block text-blue-100">Community Health</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 font-semibold leading-relaxed max-w-3xl mx-auto">
                From menstrual hygiene to emergency blood support and medical
                equipment - we're committed to making healthcare accessible to
                all.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {projects.map((project) => (
                  <Button
                    key={project.id}
                    onClick={() => scrollToProject(project.id)}
                    className="bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 transition-all duration-300 px-6 py-3 rounded-full border border-white/20"
                  >
                    {project.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {overallImpact.map((stat, index) => (
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
      <PadHouse />
      <RaktSetu />
      <Saharaa />

      {/* Get Involved Section */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Get Involved in Healthcare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Join us in making healthcare accessible to all. From menstrual hygiene to life-saving blood donations and recovery support - your involvement can make healthcare accessible to those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
