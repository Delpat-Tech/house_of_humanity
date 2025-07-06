import React from 'react';


const Education: React.FC = () => {
  const navigate = (path: string) => {
    console.log('Navigate to:', path);
    // Navigation logic would be implemented here
  };

  const projects = [
    {
      title: "Project Raah",
      subtitle: "Empowering the Children of Migrant Workers",
      description: "Supporting the education of children from migrant worker families in villages of Mallu, Waghodia, and Chhota Udaipur talukas who face unique challenges due to their families' relocation.",
      icon: "🛤️",
      stats: [
        { number: "50", label: "Students Supported", icon: "👦" },
        { number: "2", label: "Schools Adopted", icon: "🏫" },
        { number: "100%", label: "Migrant Children", icon: "🏃‍♂️" },
        { number: "3", label: "Villages Covered", icon: "🏘️" }
      ],
      image: "/Gallery/project-raah-children.jpg"
    },
    {
      title: "Project Bachpaan",
      subtitle: "Unleashing Creativity and Education in Anganwadis",
      description: "Fostering creativity and enhancing educational opportunities for children in Anganwadis across Vadodara region through educational and creative kits.",
      icon: "🎨",
      stats: [
        { number: "98", label: "Anganwadis Reached", icon: "🏠" },
        { number: "950+", label: "Children Touched", icon: "👶" },
        { number: "1000", label: "Target Students", icon: "🎯" },
        { number: "2022", label: "Started Year", icon: "📅" }
      ],
      image: "/Gallery/project-bachpaan-activities.jpg"
    }
  ];

  const whatWeDoItems = [
    {
      title: "Educational Kits",
      description: "Distribute specially designed kits containing books, stationery, and learning aids to help young minds develop foundational skills.",
      icon: "📚"
    },
    {
      title: "Creative Development",
      description: "Provide art supplies, puzzles, and games that encourage children to express themselves and explore their artistic talents.",
      icon: "🎨"
    },
    {
      title: "School Adoption",
      description: "Adopt schools in underserved areas, providing bicycles, school kits, and monitoring academic progress of students.",
      icon: "🏫"
    }
  ];

  const impactStats = [
    { number: "1,000+", label: "Children Empowered", icon: "👥" },
    { number: "100+", label: "Educational Institutions", icon: "🏫" },
    { number: "100%", label: "Academic Support", icon: "📖" },
    { number: "5", label: "Districts Covered", icon: "🗺️" }
  ];

  const getInvolvedOptions = [
    {
      title: "Support Education",
      description: "Partner with us to expand our educational programs and empower more children through quality education and creative development.",
      buttonText: "Become a Partner",
      accent: "from-blue-500 to-purple-600"
    },
    {
      title: "Volunteer with Us",
      description: "Join our educational volunteers to provide direct support in teaching, mentoring, and creative activities for children in need.",
      buttonText: "Join as Volunteer",
      accent: "from-green-500 to-blue-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-green-600 rounded-2xl mb-16">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                    Education & Development
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Education
                  <span className="block text-purple-200 text-5xl md:text-6xl">Initiatives</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Unleashing Potential Through Quality Education and Creative Development
                </p>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl shadow-2xl border-4 border-white/20 flex items-center justify-center text-gray-600 font-semibold">
                    Education initiative main image
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                  <div className="w-48 h-36 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg shadow-lg border-4 border-white/30 flex items-center justify-center text-gray-600 text-sm font-semibold">
                    Children learning activities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Projects Overview */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Our Education Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            From supporting migrant children to fostering creativity in anganwadis, our education initiatives ensure every child has access to quality learning opportunities.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-cols-2'}`}>
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}`}>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{project.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-blue">{project.title}</h3>
                        <p className="text-purple-600 font-semibold">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-dark-gray leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="text-2xl font-bold text-primary-blue">{stat.number}</div>
                          <div className="text-sm text-dark-gray">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}`}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-600 font-semibold">
                    {project.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do Section
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            What We Do */}
    </div>
  );
};

export default Education; 