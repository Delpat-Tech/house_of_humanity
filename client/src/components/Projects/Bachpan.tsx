import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Bachpan: React.FC = () => {
  const navigate = useNavigate();

  const bachpanStats = [
    { number: "98", label: "Anganwadis Reached", icon: "🏠" },
    { number: "950+", label: "Children Touched", icon: "👶" },
    { number: "1000", label: "Target Students", icon: "🎯" },
    { number: "2022", label: "Started Year", icon: "📅" },
  ];

  const bachpanData = {
    hero: {
      title: "Project Bachpan",
      subtitle: "Unleashing Creativity and Education in Anganwadis",
      description:
        "Fostering creativity and enhancing educational opportunities for children in Anganwadis across Vadodara region through comprehensive educational and creative development programs.",
      badge: "Education & Creativity",
      image: "/bachpaan-hero.jpg",
    },
    about: {
      title: "About Project Bachpan",
      content:
        "Project Bachpan is our flagship education initiative designed to transform the learning experience of children in Anganwadis across the Vadodara region. We believe that every child deserves access to quality education and creative development opportunities, regardless of their socio-economic background. Through specially designed educational kits, creative activities, and sustained engagement, we're nurturing young minds and building a foundation for lifelong learning.",
      highlights: [
        "Educational kit distribution to 98 Anganwadis",
        "Creative development through art and craft activities",
        "Teacher training and capacity building",
        "Regular monitoring and assessment of progress",
      ],
    },
    whatWeDo: [
      {
        title: "Educational Kits Distribution",
        description:
          "Comprehensive kits containing books, stationery, puzzles, and learning aids designed to enhance foundational learning skills.",
        icon: "📚",
      },
      {
        title: "Creative Development Programs",
        description:
          "Art supplies, creative games, and hands-on activities that encourage self-expression and artistic exploration.",
        icon: "🎨",
      },
      {
        title: "Teacher Training",
        description:
          "Capacity building workshops for Anganwadi workers to enhance their teaching methodologies and child engagement techniques.",
        icon: "👩‍🏫",
      },
      {
        title: "Progress Monitoring",
        description:
          "Regular assessments and tracking of children's development to ensure effective learning outcomes.",
        icon: "📊",
      },
    ],
    vision: {
      title: "Our Vision for Bachpan",
      content:
        "We envision a future where every child in Anganwadis has access to quality early childhood education and creative development opportunities. Our goal is to create an environment where children can explore, learn, and grow while developing essential life skills that will serve them throughout their educational journey.",
      goals: [
        "Reach 1000+ children across 100 Anganwadis",
        "Establish sustainable education programs",
        "Train 200+ Anganwadi workers",
        "Create replicable models for other regions",
      ],
    },
    journey: {
      title: "Our Journey So Far",
      milestones: [
        {
          year: "2022",
          title: "Project Launch",
          description:
            "Initiated Project Bachpan with 10 Anganwadis in Vadodara",
          icon: "🚀",
        },
        {
          year: "2023",
          title: "Expansion Phase",
          description: "Scaled to 50 Anganwadis and reached 500+ children",
          icon: "📈",
        },
        {
          year: "2024",
          title: "Program Enhancement",
          description:
            "Reached 98 Anganwadis and introduced teacher training programs",
          icon: "🎯",
        },
        {
          year: "2025",
          title: "Sustainability Focus",
          description:
            "Working towards 1000 children target and program sustainability",
          icon: "🌱",
        },
      ],
    },
  };

  return (
    <section id="bachpan" className="mb-24">
      <div>
        {/* Bachpan Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-primary-blue rounded-2xl mb-16">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                      {bachpanData.hero.badge}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Project
                    <span className="block text-pink-200 text-5xl md:text-6xl mt-2">
                      Bachpan
                    </span>
                  </h1>
                  <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                    {bachpanData.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        98 Anganwadis
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        950+ Children
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        Creative Learning
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/bachpan-hero.png"
                      alt="Children in learning activities"
                      className="rounded-xl shadow-2xl  h-[17rem] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-8 transform -rotate-6">
                    <img
                      src="/thumbnail-1.png"
                      alt="Educational activities"
                      className="rounded-xl shadow-2xl w-[14rem] object-cover"
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
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 my-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-6">
                {bachpanData.about.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-dark-gray dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  {bachpanData.about.content}
                </p>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-4 text-primary-blue dark:text-white">
                    Key Highlights
                  </h4>
                  <div className="space-y-3">
                    {bachpanData.about.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-dark-gray dark:text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/bachpan-about.png"
                  alt="Children learning activities"
                  className="rounded-xl shadow-2xl w-full h-[350px] object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  98 Anganwadis Reached
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do section */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray dark:text-gray-300 max-w-2xl mx-auto text-justify">
              Through comprehensive educational programs, creative development
              activities, and sustained support, we're transforming early
              childhood education in Anganwadis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            {bachpanData.whatWeDo.map((activity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-blue mb-4">
                  {activity.title}
                </h4>
                <p className="text-dark-gray dark:text-gray-300 text-justify">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray dark:text-gray-300 max-w-3xl mx-auto text-justify">
              Fostering creativity and enhancing educational opportunities for
              children in Anganwadis across Vadodara region through educational
              and creative kits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {bachpanStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-blue  mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-gray dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-blue mb-8 text-center">
              {bachpanData.vision.title}
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-dark-gray dark:text-gray-300 leading-relaxed mb-8 text-justify">
                {bachpanData.vision.content}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bachpanData.vision.goals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-dark-gray dark:text-gray-300">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="md:mb-36 mb-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-blue mb-12 text-center">
              {bachpanData.journey.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {bachpanData.journey.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-3">{milestone.icon}</div>
                  <div className="text-2xl font-bold text-primary-blue mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-semibold text-primary-blue dark:text-white mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-dark-gray dark:text-gray-300 text-sm leading-relaxed text-justify">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bachpan;
