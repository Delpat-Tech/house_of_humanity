import React from 'react';
import { Variants, motion } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // using cubic bezier easing
    },
  }),
};

const Sitaare = () => {
  return (
    <section className="pt-24 px-6 py-20 bg-gradient-to-br from-pink-50 via-white to-purple-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="text-5xl font-extrabold text-pink-700 drop-shadow-sm"
        >
          A Home Beyond Shelter
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="uppercase tracking-widest text-sm text-gray-500 mt-2"
        >
          P R E S E N T S
        </motion.p>

        <div className="mt-16 grid md:grid-cols-2 gap-12 text-left">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={2}>
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">About Project Sitaare</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Project Sitaare is a one-of-a-kind orphanage and shelter home for girls aged 6 to 18.
              More than just shelter—it's a place where dreams take flight. With full education,
              safety, and holistic development, it's the most empowering space for girls in Gujarat.
            </p>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Why Project Sitaare?</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              <li>Full school support, digital literacy, and career guidance</li>
              <li>Nutritious meals, healthcare & emotional well-being</li>
              <li>Vocational training, sports & self-defense</li>
              <li>Safe and nurturing home environment</li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={3}>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Our Vision</h4>
                <p className="italic text-gray-600">
                  A world where every girl can dream, learn, and succeed—regardless of her past.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Our Mission</h4>
                <p className="text-gray-700">
                  To empower orphaned girls with the tools to become strong, independent women who make a
                  positive difference in the world.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Impact Goals</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Safe, loving home for 30+ girls</li>
                  <li>100% education and career readiness</li>
                  <li>Financial independence through life skills</li>
                  <li>Foster confidence and belief in self</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Corporate CSR',
              text: 'Support infrastructure, sponsor learning programs, provide internships, mentorships, and career guidance.',
            },
            {
              title: 'Individual Giving',
              text: 'Sponsor a child\'s education, healthcare, or donate hygiene kits, meals, and essentials.',
            },
            {
              title: 'Volunteer Opportunities',
              text: 'Mentor, teach, or run workshops—help girls explore digital skills, arts, and STEM. Even virtual adoption is possible.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i + 4}
              whileHover={{ scale: 1.03 }}
              className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h5 className="text-lg font-semibold text-pink-600 mb-2">{card.title}</h5>
              <p className="text-sm text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={8}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-lg font-medium text-gray-700">
            With just <span className="text-pink-700 font-bold">₹11,551/month</span>, you can virtually adopt a child and provide:
          </p>
          <p className="italic text-sm text-gray-500 mb-6">Education • Meals • Healthcare • Life Skills</p>
          <a
            href="https://sitaare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 hover:brightness-110 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Learn More on Sitaare.org
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sitaare;
