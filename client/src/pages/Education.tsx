import React from "react";
import { useNavigate } from "react-router-dom";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import Bachpan from "../components/Projects/Bachpan";
import Raah from "../components/Projects/Raah";

const Education: React.FC = () => {
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
    { number: "1000+", label: "Children Reached", icon: "👶" },
    { number: "98", label: "Anganwadis Served", icon: "🏠" },
    { number: "200+", label: "Teachers Trained", icon: "👩‍🏫" },
    { number: "2", label: "Major Projects", icon: "🎯" },
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
                    Education & Development
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Education
                  <span className="block text-yellow-200 text-5xl md:text-6xl">
                    Programs
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed capitalize">
                  Transforming lives through quality education, creative
                  development, and comprehensive support systems for children
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => scrollToSection("project-bachpan")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Project Bachpan
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection("project-raah")}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="text-white font-semibold">
                      Project Raah
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/education-hero.jpg"
                    alt="Education Programs"
                    className="h-[30rem] rounded-xl shadow-2xl border-4 border-white/20 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-12 md:-left-16 transform -rotate-6">
                  <img
                    src="/thumbnail.jpeg"
                    alt="Education thumbnail"
                    className="rounded-lg shadow-lg border-4 border-white/30 object-cover h-[8rem] md:h-[11rem] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              Turning Anganwadis into <br />
              Gateways of Growth
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          </div>

          {/* Education background */}

          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 text-justify">
                very great story begins with a strong foundation. But for many
                children in Anganwadis across Vadodara, early learning starts
                with a struggle—limited resources, minimal exposure, and
                untapped creativity.
              </p>
              <p className="text-lg text-dark-gray leading-relaxed mb-6 text-justify">
                Because education should not be a privilege—it is a right. And
                through Project Raah, we are making sure that right is upheld,
                one child at a time.
              </p>
              <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6 dark:bg-gray-800">
                <p className="text-primary-blue font-semibold text-lg dark:text-gray-100">
                  Project Raah transforms under-resourced Anganwadis into
                  vibrant learning spaces. By nurturing creativity and curiosity
                  early on, we help children take confident first steps toward
                  education—ensuring every child begins their journey with
                  dignity, opportunity, and hope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Impact */}
      <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Changing Lives Through Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-br from-green-500 via-teal-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Through our comprehensive education programs, we have successfully
            reached hundreds of children, providing quality education, creative
            development, and sustainable learning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {overallImpact.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-4xl mb-2">{stat.icon}</div>
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

      {/* Project Components with IDs */}
      <div id="project-bachpan">
        <Bachpan />
      </div>
      <div id="project-raah">
        <Raah />
      </div>

      {/* Our Approach */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Our Approach to Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Community Assessment",
                description:
                  "We work directly with communities to identify educational challenges and understand local learning needs and cultural contexts.",
                image: "Community education assessment",
                icon: "🏘️",
              },
              {
                step: "02",
                title: "Program Development",
                description:
                  "Comprehensive educational programs that include creative kits, teacher training, and age-appropriate learning materials.",
                image: "Educational program development",
                icon: "📚",
              },
              {
                step: "03",
                title: "Implementation & Support",
                description:
                  "Focus on long-term sustainability through local capacity building, teacher training, and ongoing monitoring and support.",
                image: "Sustainable education program",
                icon: "🔄 ",
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20  rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-fresh-green to-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <h3 className="text-xl font-bold text-primary-blue  dark:text-warm-light-blue">
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
            Bridging Gaps, Building Futures
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
          <p className="max-w-4xl mx-auto text-lg text-dark-gray dark:text-gray-200 leading-relaxed">
            Join us in supporting migrant children's education. Together, we can
            ensure no child is left behind due to geographical mobility.
            Together we can create a brighter futrue where every child has
            access to quality education and opportunities for creative
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
