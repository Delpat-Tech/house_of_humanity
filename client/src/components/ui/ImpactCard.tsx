import React from "react";
import { Triangle } from "lucide-react";
import { IoMdBicycle, IoMdSchool } from "react-icons/io";
import { BiSolidBlanket } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import {
  FaHandsHelping,
  FaHeartbeat,
  FaBookReader,
  FaLeaf,
  FaGift,
  FaUsers,
  FaTint,
  FaHospitalAlt,
  FaSchool,
  FaCar,
  FaRunning,
  FaMusic,
  FaFemale,
} from "react-icons/fa";

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
  const iconMap: { [key: string]: React.ComponentType<any> } = {
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

  const IconComponent = iconMap[icon.toLowerCase()] || FaGift;

  return (
    <div className="w-[22rem] h-84 mb-12 pt-2 rounded-2xl bg-primary">
      <div className="w-[22rem] h-84 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-t-4 border-teal-600">
        <div>
          <Triangle
            size={16}
            fill="currentColor"
            className="rotate-180 -mt-[1.7rem] text-teal-600"
          />
        </div>

        {/* Heading */}
        <h3 className="text-[28px] text-dark-gray dark:text-gray-200 mb-6 font-bold">
          {count}
        </h3>

        {/* Impact icon */}
        <div className="bg-teal-600 p-3 mb-6 text-4xl  rounded-full text-white">
          <IconComponent />
        </div>

        {/* Project Title */}
        <p className="text-center mb-1 font-bold text-base text-dark-gray dark:text-gray-200">
          {title}
        </p>

        {/* description */}
        <div className="rounded-lg p-4 w-full">
          <p className="text-center text-smt text-dark-gray dark:text-gray-200leading-relaxed">
            {impact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
