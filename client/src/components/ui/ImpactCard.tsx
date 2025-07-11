import React from "react";
import { IconType } from "react-icons";
import {
  FaLeaf,
  FaFemale,
  FaTint,
  FaHandsHelping,
  FaGift,
  FaHospitalAlt,
  FaBookReader,
  FaCar,
  FaUsers,
  FaRunning,
  FaMusic,
} from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { IoMdSchool, IoMdBicycle } from "react-icons/io";
import { BiSolidBlanket } from "react-icons/bi";
import { Triangle } from "lucide-react"; // Add this import if Triangle is used

type ImpactCardProps = {
  icon: string;
  count: string | number;
  title: string;
  impact: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({
  icon,
  count,
  title,
  impact,
}) => {
  const iconMap: { [key: string]: IconType } = {
    leaf: FaLeaf,
    female: FaFemale,
    tint: FaTint,
    foodbank: MdFoodBank,
    handshelping: FaHandsHelping,
    gift: FaGift,
    hospitalalt: FaHospitalAlt,
    bookreader: FaBookReader,
    school: IoMdSchool,
    bicycle: IoMdBicycle,
    car: FaCar,
    users: FaUsers,
    blanket: BiSolidBlanket,
    running: FaRunning,
    music: FaMusic,
  };

  const IconComponent = iconMap[icon.toLowerCase()];

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:w-[22rem] h-auto mb-8 pt-2 rounded-2xl bg-primary mx-auto">
      <div className="w-full bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col items-center border-t-4 border-teal-600 relative">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <Triangle
            size={16}
            fill="currentColor"
            className="rotate-180 text-teal-600"
          />
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl text-primary-blue dark:text-gray-200 mb-4 font-bold mt-2">
          {count}
        </h3>

        {/* Impact icon */}
        <div className="bg-teal-600 p-2 sm:p-3 mb-4 text-3xl sm:text-4xl rounded-full text-white">
          {IconComponent
            ? React.createElement(IconComponent as React.ComponentType)
            : null}
        </div>

        {/* Project Title */}
        <p className="text-center mb-1 font-bold text-base sm:text-lg text-primary-blue dark:text-gray-200">
          {title}
        </p>

        {/* description */}
        <div className="rounded-lg p-2 sm:p-4 w-full">
          <p className="text-center text-sm sm:text-base text-dark-gray dark:text-gray-200 leading-relaxed">
            {impact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;