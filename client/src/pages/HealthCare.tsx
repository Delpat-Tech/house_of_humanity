import React from 'react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HealthCare: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Pad House",
      subtitle: "Breaking the Stereotype, Ensuring Menstrual Hygiene",
      description: "Breaking the silence around menstruation and making sure girls in government schools have access to hygiene products and knowledge they need to manage their periods with dignity.",
      icon: "🩸",
      stats: [
        { number: "75+", label: "Schools Reached", icon: "🏫" },
        { number: "8,000+", label: "Households", icon: "🏠" },
        { number: "28,000+", label: "Girls Helped", icon: "👧" },
        { number: "70%", label: "Adoption Rate", icon: "📈" }
      ],
      image: "/Gallery/pad-house-session.jpg"
    },
    {
      title: "Rakt Setu",
      subtitle: "Bridging the Lifeline in Times of Need",
      description: "Bridging the gap between those in urgent need of blood and the necessary resources to save lives through a committed network of 230 volunteers.",
      icon: "🩸",
      stats: [
        { number: "230", label: "Volunteers", icon: "👥" },
        { number: "8", label: "Blood Camps", icon: "⛺" },
        { number: "2,500+", label: "Units Collected", icon: "💉" },
        { number: "100%", label: "Emergency Response", icon: "🚨" }
      ],
      image: "/Gallery/blood-donation-camp.jpg"
    },
    {
      title: "Sahara",
      subtitle: "Supporting Recovery with Essential Medical Equipment",
      description: "Providing wheelchairs, walkers, and medical beds at nominal costs to ensure everyone has access to the medical equipment they need for recovery.",
      icon: "♿",
      stats: [
        { number: "500+", label: "People Assisted", icon: "🏥" },
        { number: "3", label: "Equipment Types", icon: "⚕️" },
        { number: "24/7", label: "Availability", icon: "🕐" },
        { number: "90%", label: "Cost Reduction", icon: "💰" }
      ],
      image: "/Gallery/medical-equipment.jpg"
    }
  ];

  const whatWeDoItems = [
    {
      title: "Menstrual Hygiene",
      description: "Providing education, counseling, and free sanitary pads to girls in rural areas while addressing cultural taboos.",
      icon: "🌸"
    },
    {
      title: "Blood Donation",
      description: "Organizing blood donation camps and maintaining emergency blood support network for critical medical situations.",
      icon: "❤️"
    },
    {
      title: "Medical Equipment",
      description: "Providing affordable access to wheelchairs, walkers, and medical beds for post-accident recovery support.",
      icon: "🏥"
    }
  ];

  const impactStats = [
    { number: "36,000+", label: "Lives Touched", icon: "❤️" },
    { number: "75+", label: "Institutions Covered", icon: "🏢" },
    { number: "2,500+", label: "Blood Units Saved", icon: "💉" },
    { number: "100%", label: "Health Impact", icon: "🏥" }
  ];

  const getInvolvedOptions = [
    {
      title: "Support Health Initiatives",
      description: "Partner with us to expand our health programs and empower more communities through comprehensive healthcare support.",
      buttonText: "Become a Partner",
      accent: "from-red-500 to-pink-600"
    },
    {
      title: "Volunteer with Us",
      description: "Join our health volunteers to provide direct support in blood donation camps, menstrual hygiene education, and medical equipment distribution.",
      buttonText: "Join as Volunteer",
      accent: "from-primary-blue to-blue-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-500 via-pink-600 to-primary-blue rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Health & Wellness
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Health
                  <span className="block text-pink-200 text-5xl md:text-6xl">Initiatives</span>
                </h1>
                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                  Comprehensive Healthcare Support for Communities in Need
                </p>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-80 bg-gradient-to-br from-red-200 to-pink-200 rounded-xl shadow-2xl border-4 border-white/20 flex items-center justify-center text-gray-600 font-semibold">
                    Health initiative main image
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                  <div className="w-48 h-36 bg-gradient-to-br from-pink-200 to-red-200 rounded-lg shadow-lg border-4 border-white/30 flex items-center justify-center text-gray-600 text-sm font-semibold">
                    Blood donation camp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Projects Overview */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Health Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            From menstrual hygiene to blood donation and medical equipment support, our health initiatives address critical healthcare needs across communities.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-cols-2'}`}>
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}`}>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{project.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-blue dark:text-blue-300">{project.title}</h3>
                        <p className="text-red-600 dark:text-pink-300 font-semibold">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-dark-gray dark:text-gray-100 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center bg-gradient-to-br from-red-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg p-4">
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="text-2xl font-bold text-primary-blue dark:text-blue-300">{stat.number}</div>
                          <div className="text-sm text-dark-gray dark:text-gray-200">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}`}>
                  <ImagePlaceholder 
                    text={project.image} 
                    width="100%" 
                    height="500px" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Our comprehensive health approach addresses critical healthcare needs through education, emergency support, and accessible medical resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whatWeDoItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-blue dark:text-blue-300 mb-4">
                  {item.title}
                </h3>
                <p className="text-dark-gray dark:text-gray-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Health Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Through our comprehensive health initiatives, we have created lasting impact across communities, ensuring access to essential healthcare services and promoting health awareness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-blue dark:text-blue-300 mb-2">{stat.number}</div>
              <div className="text-dark-gray dark:text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary-blue mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Join us in creating healthier communities where everyone has access to essential healthcare services and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {getInvolvedOptions.map((option, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`bg-gradient-to-r ${option.accent} p-6`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {option.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-dark-gray dark:text-gray-100 leading-relaxed mb-6">
                  {option.description}
                </p>
                <Button 
                  className={`w-full py-3 text-lg font-semibold bg-gradient-to-r ${option.accent} text-white hover:shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 transform`}
                  onClick={() => {
                    if (option.buttonText === "Become a Partner") {
                      navigate('/partner-with-us');
                    } else if (option.buttonText === "Join as Volunteer") {
                      navigate('/get-involved');
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

export default HealthCare;