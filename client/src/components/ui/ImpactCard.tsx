import React from "react";

type ImpactCardProps = {
  iconName: string; 
  count: string | number;
  title: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ iconName, count, title }) => {
  return (
    <div className="w-96 h-80 mb-12 pt-2 rounded-2xl bg-primary">
      <div className="w-96 h-80 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-t-4 border-teal-600">
        <div className=" -mt-[2.5rem] text-teal-600">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-[28px] mb-6 font-bold">{count}</h3>

        {/* Impact icon */}
        <div className="bg-primary p-4 mb-6 text-4xl rounded-full text-white">
          {iconName} {/* Render the icon component */}
        </div>

        {/* Description */}
        <p className="text-center mb-1 font-bold text-base ">{title}</p>
      </div>
    </div>
  );
};

export default ImpactCard;
