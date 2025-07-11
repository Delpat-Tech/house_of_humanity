import React from "react";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({ icon, count, title }) => {
  return (
    <div className="w-96 h-80 mb-12 pt-2 rounded-2xl bg-primary">
      <div className="w-96 h-80 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center  ">
        <div className=" -mt-[2.5rem] text-primary">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-[28px] mb-6 font-bold">{count}</h3>

        {/* icon */}
        <div className="bg-primary p-4 mb-6 rounded-full">
          <img src={icon} alt={title} className="w-16 h-16" />
        </div>

        {/* Description */}
        <p className="text-center mb-1 font-bold text-base ">{title}</p>
      </div>
    </div>
  );
};

export default Card;
