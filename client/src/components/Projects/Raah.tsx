import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Raah: React.FC = () => {
  const navigate = useNavigate();

  const raahStats = [
    { number: "50", label: "Students Supported", icon: "👦" },
    { number: "2", label: "Schools Adopted", icon: "🏫" },
    { number: "100%", label: "Migrant Children", icon: "🏃‍♂️" },
    { number: "3", label: "Villages Covered", icon: "🏘️" },
  ];

  const raahData = {
    hero: {
      title: "Project Raah",
      subtitle: "Empowering the Children of Migrant Workers",
      description:
        "Supporting the education of children from migrant worker families who face unique challenges due to their families' relocation, ensuring no child is left behind in their educational journey.",
      badge: "Migrant Education Support",
      image: "/Gallery/project-raah-hero.jpg",
    },
    about: {
      title: "About Project Raah",
      content:
        "Project Raah addresses the critical educational needs of children from migrant worker families in villages of Mallu, Waghodia, and Chhota Udaipur talukas. These children face unique challenges due to frequent relocations, language barriers, and disrupted schooling. Our comprehensive approach includes school adoption, educational support, and ensuring continuity in their learning journey.",
      highlights: [
        "Direct support to 50 migrant children",
        "Adoption of 2 schools in target villages",
        "Language and cultural integration support",
        "Continuous academic monitoring and mentorship",
      ],
    },
    whatWeDo: [
      {
        title: "School Adoption Program",
        description:
          "Comprehensive support to schools in migrant-heavy areas including infrastructure, learning materials, and teacher training.",
        icon: "🏫",
      },
      {
        title: "Educational Support",
        description:
          "Personalized learning support, school kits, and academic assistance to help children catch up and stay on track.",
        icon: "📖",
      },
      {
        title: "Language Integration",
        description:
          "Specialized programs to help children adapt to local language and cultural contexts while maintaining their identity.",
        icon: "🗣️",
      },
      {
        title: "Family Engagement",
        description:
          "Working with migrant families to emphasize the importance of education and provide necessary support systems.",
        icon: "👨‍👩‍👧‍👦",
      },
    ],
    vision: {
      title: "Our Vision for Raah",
      content:
        "We envision a future where children of migrant workers receive uninterrupted, quality education regardless of their geographical mobility. Our goal is to create a support system that travels with these families, ensuring educational continuity and breaking the cycle of educational disadvantage.",
      goals: [
        "Support 100+ migrant children annually",
        "Establish mobile education units",
        "Create network of supporting schools",
        "Develop digital learning resources",
      ],
    },
    impact: {
      title: "Our Impact",
      achievements: [
        {
          number: "50",
          label: "Children Supported",
          description: "Direct educational support to migrant children",
          icon: "👦",
        },
        {
          number: "2",
          label: "Schools Adopted",
          description: "Comprehensive support to schools in target areas",
          icon: "🏫",
        },
        {
          number: "3",
          label: "Villages Covered",
          description: "Mallu, Waghodia, and Chhota Udaipur talukas",
          icon: "🏘️",
        },
        {
          number: "100%",
          label: "Retention Rate",
          description: "Children continuing their education",
          icon: "🎯",
        },
      ],
      stories: [
        {
          title: "Breaking Barriers",
          description:
            "Children who previously struggled with language barriers are now actively participating in classroom activities.",
        },
        {
          title: "Academic Progress",
          description:
            "Significant improvement in learning outcomes and academic performance among supported children.",
        },
        {
          title: "Community Integration",
          description:
            "Enhanced integration of migrant families into local communities through educational participation.",
        },
      ],
    },
    journey: {
      title: "Our Journey So Far",
      milestones: [
        {
          year: "2023",
          title: "Project Launch",
          description:
            "Initiated Project Raah with focus on migrant children in Mallu village",
          icon: "🚀",
        },
        {
          year: "2024",
          title: "School Adoption",
          description:
            "Adopted 2 schools and expanded to Waghodia and Chhota Udaipur",
          icon: "🏫",
        },
        {
          year: "2024",
          title: "Community Integration",
          description:
            "Implemented language support and family engagement programs",
          icon: "🤝",
        },
        {
          year: "2025",
          title: "Expansion Goals",
          description:
            "Working towards supporting 100+ children and mobile education units",
          icon: "🌱",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <section id="raah" className="mb-24">
        <div>
          {/* Raah Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-primary-blue rounded-2xl mb-16">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 px-8 py-16 md:py-20">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                        {raahData.hero.badge}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                      Project
                      <span className="block text-orange-200 text-5xl md:text-6xl mt-2">
                        Raah
                      </span>
                    </h1>
                    <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                      {raahData.hero.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-white font-semibold">
                          50 Students Supported
                        </span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-white font-semibold">
                          2 Schools Adopted
                        </span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-white font-semibold">
                          3 Villages Covered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/Raah-hero.png"
                        alt="Migrant children in educational activities"
                        className="rounded-xl shadow-2xl w-[32rem] object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-8 -left-32 transform -rotate-6">
                      <img
                        src="/education-thumbnail.webp"
                        alt="Educational support activities"
                        className="rounded-xl shadow-2xl h-[10rem] w-[15rem] object-cover"
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 my-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-6">
                  {raahData.about.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg text-dark-gray dark:text-gray-200 leading-relaxed mb-6">
                    {raahData.about.content}
                  </p>
                  <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 text-primary-blue dark:text-white">
                      Key Highlights
                    </h4>
                    <div className="space-y-3">
                      {raahData.about.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                          <span className="text-dark-gray dark:text-gray-200">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/raah-about.jpg"
                    alt="Migrant children learning"
                    className="rounded-xl shadow-2xl w-full object-cover"
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    50 Students Supported
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do section */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue  mb-6">
                What We Do
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
              <p className="text-lg text-dark-gray dark:text-gray-200 max-w-2xl mx-auto">
                Through comprehensive support systems, we ensure migrant
                children receive quality education and maintain continuity in
                their learning despite geographical mobility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {raahData.whatWeDo.map((activity, index) => (
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
                  <p className="text-dark-gray dark:text-gray-200">
                    {activity.description}
                  </p>
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
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
              <p className="text-lg text-dark-gray dark:text-gray-200 max-w-3xl mx-auto">
                Supporting the education of children from migrant worker
                families across villages of Mallu, Waghodia, and Chhota Udaipur
                talukas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {raahStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-blue  mb-2">
                    {stat.number}
                  </div>
                  <div className="text-dark-gray dark:text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue  mb-6">
                  {raahData.vision.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
              </div>
              <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-8 md:p-12">
                <p className="text-lg text-dark-gray dark:text-gray-200 leading-relaxed mb-8">
                  {raahData.vision.content}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {raahData.vision.goals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                      <span className="text-dark-gray dark:text-gray-200">
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                {raahData.journey.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {raahData.journey.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-6xl mb-6">{milestone.icon}</div>
                  <div className="text-2xl font-bold text-primary-blue mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-semibold text-primary-blue mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-dark-gray dark:text-gray-200 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stories */}
          <div className="bg-gradient-to-br from-warm-light-blue/20 to-fresh-green/20 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Success Stories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {raahData.impact.stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-primary-blue mb-3">
                    {story.title}
                  </h4>
                  <p className="text-dark-gray dark:text-gray-200 text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-fresh-green to-primary-blue rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Support Migrant Children's Education Today
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Every child deserves quality education, regardless of their
                family's mobility. Join Project Raah in creating educational
                opportunities that travel with migrant families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => navigate("/donate-for-a-cause")}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-blue transition-colors duration-300"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Raah;
