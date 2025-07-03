import React from "react";
import TrapeziumButton from "./TrapeziumButton";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
};

const WorkCard: React.FC<CardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="w-[27rem] h-[25rem] bg-white border-b-4 border-primary shadow-2xl rounded-lg overflow-hidden flex flex-col items-center p-6">
      {/* Title */}
      <h2 className="text-[24px] font-bold text-center mt-4 mb-2">{title}</h2>

      {/* Subtitle */}
      <p className="text-blue-500 font-semibold text-center mb-3 px-2 uppercase">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-700 font-bold text-center mb-4 px-2">
        {description}
      </p>

      {/*  Button */}
      <div className="mt-auto mb-3">
        <TrapeziumButton
          className="uppercase"
          label="Read More"
          onClick={() => console.log("Button clicked")}
        />
      </div>
    </div>
  );
};

export default WorkCard;
