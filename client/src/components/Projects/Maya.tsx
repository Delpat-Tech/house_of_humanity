import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Maya: React.FC = () => {
  const navigate = useNavigate();

  const mayaStats = [
    { number: "200+", label: "Children Supported Daily", icon: "👶" },
    { number: "100%", label: "Government Hospitals", icon: "🏥" },
    { number: "365", label: "Days of Care", icon: "📅" },
    { number: "∞", label: "Hope & Healing", icon: "💫" },
  ];

  return (
    <section id="maya" className="mb-24">
      <div>
        {/* Maya Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-primary-blue rounded-2xl mb-16">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="mt-20 md:mt-0">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                      Child Care
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Project
                    <span className="block text-pink-200 text-5xl md:text-6xl mt-2">
                      Maya
                    </span>
                  </h1>
                  <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                    Nurturing Hope and Healing for Hospitalized Children
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        200+ Children Daily
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        365 Days Care
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white font-semibold">
                        Hope & Healing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    {"/maya-hero.jpg" ? (
                      <img
                        src="/maya-hero.jpg"
                        alt="Children receiving care"
                        className="rounded-xl shadow-2xl w-full h-auto max-h-72 md:max-h-none object-cover"
                        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.appendChild(document.createElement('div')); }}
                      />
                    ) : (
                      <ImagePlaceholder text="Maya Hero" width="100%" height="288px" className="rounded-xl shadow-2xl" />
                    )}
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:-bottom-12 md:-left-12 md:translate-x-0 transform -rotate-6 w-24 h-16 md:w-1/2 md:h-auto">
                    {"/maya-thumbnail.png" ? (
                      <img
                        src="/maya-thumbnail.png"
                        alt="Children receiving care"
                        className="rounded-xl shadow-2xl w-full h-full object-cover"
                        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.appendChild(document.createElement('div')); }}
                      />
                    ) : (
                      <ImagePlaceholder text="Maya Thumbnail" width="100%" height="64px" className="rounded-xl shadow-2xl" />
                    )}
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
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                About Project Maya
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-dark-gray text-justify">
                  Providing holistic care for children in pediatric wards of
                  government hospitals. We provide milk, biscuits, fruits, and
                  other nutritious items to over 200 children daily in pediatric
                  wards, ensuring they receive proper nutrition during their
                  recovery journey while also offering emotional support and
                  engaging activities.
                </p>
                <div className="bg-gradient-to-r from-warm-light-blue/20 to-fresh-green/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Our Mission</h4>
                  <p className="text-primary-blue font-semibold text-lg dark:text-gray-100">
                    At Project Maya, our mission is to provide holistic care for
                    children in pediatric wards by addressing their nutritional,
                    emotional, and psychological needs. We believe that every
                    child deserves not only proper medical treatment but also
                    compassion, joy, and support throughout their recovery.
                  </p>
                </div>
              </div>
              <div className="relative">
                {"/maya-about.jpg" ? (
                  <img
                    src="/maya-about.jpg"
                    alt="Children receiving care"
                    className="rounded-xl shadow-2xl w-full h-auto max-h-72 md:max-h-[400px] object-cover"
                    onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.appendChild(document.createElement('div')); }}
                  />
                ) : (
                  <ImagePlaceholder text="Maya About" width="100%" height="288px" className="rounded-xl shadow-2xl" />
                )}
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  200+ Children Daily
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do section */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6"></div>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              We provide comprehensive care for hospitalized children through
              nutrition, emotional support, and engaging activities, while also
              supporting their families during challenging times.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Daily Nutritional Support",
                description:
                  "We provide milk, biscuits, fruits, and other nutritious items to over 200 children daily in pediatric wards, ensuring they receive proper nutrition during their recovery journey.",
                icon: "🥛",
              },
              {
                title: "Engaging Activities & Emotional Support",
                description:
                  "Our volunteers engage with children through games, storytelling, and creative activities, providing much-needed emotional support and bringing joy to their hospital stay.",
                icon: "🎭",
              },
              {
                title: "Parental Counseling",
                description:
                  "We offer counseling and support to parents, helping them cope with the emotional stress of having a hospitalized child and providing guidance on care practices.",
                icon: "👨‍👩‍👧‍👦",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-blue mb-4">
                  {activity.title}
                </h4>
                <p className="text-dark-gray">{activity.description}</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-green to-primary-blue mx-auto mb-6 font-medium"></div>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              We provide daily nutritional support and emotional care to over
              200 children in pediatric wards of government hospitals, ensuring
              they receive proper nutrition and emotional support 365 days a
              year.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {mayaStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maya;
