import React from "react";
import WorkCard from "../ui/WorkCard";
import TrapeziumButton from "../ui/TrapeziumButton";

const CardData = [
  {
    title: "Project पोषण",
    subtitle: "Hunger eradication",
    description:
      "Many people across the globe find it difficult to feed their stomachs even one meal a day. In a world where 1/3 of the food produced goes into waste, 821",
  },
  {
    title: "Pad House",
    subtitle: "Health and Sanitation",
    description:
      "Making menstrual hygiene accessible Menstrual hygiene is one of the most important yet hushed problems. Of 336 million menstruating women in India, more than half of those women don’t have",
  },
  {
    title: "Project Rakt",
    subtitle: "Blood Donation Drives",
    description:
      "Your little effort can give others a second chance to live life. We conduct blood donation drives twice a year and assure that no patient faces the problem of blood",
  },
  {
    title: "Education of FLu",
    subtitle: "Health and Sanitation",
    description:
      "On shivering winter nights where the people staying on the footpath usually get affected through common flu. Due to excessive cold. We the team of the house of humanity planned",
  },
  {
    title: "Project Naari",
    subtitle: "Women Empowerment",
    description:
      "Your little effort can give others a second chance to live life. We conduct blood donation drives twice a year and assure that no patient faces the problem of blood",
  },
  {
    title: "Project Sanskruti",
    subtitle: "Women Empowerment",
    description:
      "In this project, we are planning to divert the toxic agriculture practice towards organic one. Further details will be uploaded soon.",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="px-6 md:px-20 mt-10 py-20 bg-gray-50">
      <h1 className="text-center text-3xl md:text-6xl font-bold text-slate-600 py-8 mb-12">
        Our Commitment to Communities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {CardData.map((card, index) => (
          <WorkCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>

      <div className="md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between mt-32 gap-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-500 to-red-600 bg-clip-text text-transparent">
  Empowering with Purpose
</h1>
        <p className="text-xl w-2/3 font-semibold">
          We believe true change begins with empowerment — not temporary aid,
          but lasting impact. Rather than offering one-time support, we strive
          to equip individuals with the tools to build a life of dignity,
          self-respect, and independence. Everyone deserves the chance to
          thrive, not just survive.
        </p>
      </div>
      <button id="#about" className="flex px-6 py-3 mt-20 mx-auto rounded-xl text-white font-semibold uppercase bg-blue-500 hover:bg-blue-600">
        {" "}
        Know More
      </button>
    </section>
  );
};

export default WhatWeDo;
