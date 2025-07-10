import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../shared/contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const stats = [
    { number: "180+", label: "Volunteers Empowered", icon: "🙌" },
    {
      number: "200+",
      label: "Meals Served Daily (COVID-19 Start)",
      icon: "🍛",
    },
    { number: "6+", label: "Key Focus Areas", icon: "🎯" },
    { number: "1", label: "Cancer Wellness Center Dream", icon: "🎗️" },
  ];

  return (
    <section
      className={`py-24 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } py-16`}
    >
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary-blue"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h1>
        <p className="text-lg font-medium max-w-3xl mx-auto">
          The <strong>House of Humanity</strong> is a movement of people who
          believe in the power of compassion, action, and dignity — aiming to
          break cycles of poverty, hunger, and inequality through holistic,
          sustainable community-led solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-3xl font-bold text-primary-blue dark:text-fresh-green">
              {item.number}
            </h3>
            <p className="font-medium text-gray-600 dark:text-gray-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg font-medium dark:text-gray-300 mb-6">
            We exist to create long-term, sustainable solutions for underserved
            communities — not just offering aid, but building frameworks for
            empowerment and dignity. Our approach is rooted in empathy,
            inclusion, and community partnership.
          </p>
          <p className="text-lg font-medium dark:text-gray-300">
            From addressing basic needs like hunger and hygiene to enabling
            education, recovery, and livelihoods — we envision a society where
            no one is left behind, and every person has the opportunity to live
            with health, pride, and purpose.
          </p>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 mt-8 rounded-xl p-6 border-l-4 border-green-400 dark:border-green-600">
            <p className="text-lg font-semibold text-primary-blue dark:text-fresh-green">
              “We don’t work for communities. We work with them — hand in hand,
              heart to heart.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* History Timeline */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-10 text-center">
          Our Story
        </h2>
        <div className="space-y-12 border-l-4 border-primary-blue dark:border-fresh-green pl-6">
          {[
            {
              year: "2020",
              title: "The Beginning",
              text: "Amid COVID-19, our founders began feeding 200+ people daily — leading to the foundation of HoH.",
            },
            {
              year: "2021",
              title: "Growth into a Movement",
              text: "Our small team grew rapidly — addressing hunger, hygiene, education, gender empowerment & more.",
            },
            {
              year: "2022–2024",
              title: "Expanding Reach",
              text: "With 180+ volunteers, we evolved from relief to transformation: launching major education, health, and nutrition projects.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary-blue dark:bg-fresh-green border-4 border-white"></div>
              <h3 className="text-xl font-bold mb-1 pl-4">
                {item.year}: {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 pl-4">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Focus Areas */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-10 text-center">
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🍛", title: "Hunger Eradication" },
            { icon: "🚰", title: "Health, Hygiene & Sanitation" },
            { icon: "📚", title: "Education for All" },
            { icon: "🏃‍♂️", title: "Youth & Sports Empowerment" },
            { icon: "💼", title: "Urban Livelihoods" },
            { icon: "👩‍🦰", title: "Women Empowerment" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-primary-blue dark:text-white">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founders */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-10 text-center">
          From the Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              name: "Harsh Rao",
              title: "Founder",
              quote:
                "After surviving cancer, I made it my life’s purpose to build a Cancer Wellness Center and an empowering orphanage for children to dream big.",
            },
            {
              name: "Manthan Shah",
              title: "Co-Founder",
              quote:
                "I believe urban CSR funding can drive deep grassroots impact. My goal is to connect the dots between corporate responsibility and community upliftment.",
            },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 shadow-md border-l-4 border-fresh-green"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-primary-blue dark:text-fresh-green mb-2">
                {person.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {person.title}
              </p>
              <p className="italic text-gray-700 dark:text-gray-300">
                "{person.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
