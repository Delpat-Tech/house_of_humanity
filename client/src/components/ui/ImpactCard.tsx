import React from "react";
import { ImpactCardProps } from "../../types";

const ImpactCard: React.FC<ImpactCardProps> = ({ iconName, count, title }) => {
  return (
    <div className="w-full max-w-sm mx-auto md:w-96 h-64 md:h-80 mb-8 md:mb-12 pt-2 rounded-2xl bg-primary">
      <div className="w-full h-full bg-white rounded-xl shadow-xl p-4 md:p-6 flex flex-col items-center border-t-4 border-teal-600">
        {/* Decorative top element */}
        <div className="-mt-6 md:-mt-[2.5rem] text-teal-600">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="md:w-10 md:h-10"
          >
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>

        {/* Count/Number */}
        <h3 className="text-xl md:text-[28px] mb-4 md:mb-6 font-bold text-center">
          {count}
        </h3>

        {/* Impact icon */}
        <div className="bg-primary p-3 md:p-4 mb-4 md:mb-6 text-2xl md:text-4xl rounded-full text-white flex items-center justify-center">
          {iconName}
        </div>

        {/* Title/Description */}
        <p className="text-center mb-1 font-bold text-sm md:text-base leading-tight px-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;