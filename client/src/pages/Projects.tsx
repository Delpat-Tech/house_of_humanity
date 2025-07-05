import React from "react";
import { motion } from "framer-motion";
import { projects } from "../components/data/projectsData";

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-20 my-16 px-4 md:px-20  bg-white mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-5xl md:text-8xl font-bold text-gradient-h2 text-center uppercase mb-8"
      >
        our journey so far
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-gradient-h1 text-center mb-8"
      >
        Building communities, empowering people <br /> our projects are more
        than initiatives, they are movements.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-4/5 mx-auto text-xl md:text-2xl font-semibold text-slate-700 text-center mb-20"
      >
        At House of Humanity, we are committed to change, powered by purpose.
        Each endeavor reflects our mission to create lasting impact — from
        healthcare and education to sustainability and dignity. Together, we
        craft solutions that lead to a better tomorrow — one project, one life
        at a time..
      </motion.p>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`md:max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full h-full flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg w-full max-w-[32rem] h-[22rem] sm:h-[26rem] md:h-[28rem] object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
                {project.title}
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <div>
                  <h3 className="font-semibold text-2xl text-teal-600 mb-1">
                    Our Vision
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    {project.content.vision}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-teal-600 mb-1">
                    Our Mission
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    {project.content.mission}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-teal-600 mb-1">
                    What We Do
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    {project.content.whatWeDo}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-teal-600 mb-1">
                    Impact Created
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    {project.content.impact}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-teal-600 mb-1">
                    Get Involved
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl">
                    {project.content.getInvolved}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
