import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Heart, Gift } from 'lucide-react';

const FloatingActionButtons = () => {
  const buttons = [
    {
      label: 'Volunteer',
      icon: <Users size={24} color="white" />,
      link: '/get-involved',
      bgColor: 'bg-fresh-green',
      hoverColor: 'hover:bg-green-700',
    },
    {
      label: 'Donate',
      icon: <Heart size={24} color="white" />,
      link: '/donate-for-a-cause',
      bgColor: 'bg-primary-blue',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      label: 'Support',
      icon: <Gift size={24} color="white" />,
      link: '/contribute-materials',
      bgColor: 'bg-dark-gray',
      hoverColor: 'hover:bg-gray-600',
    },
  ];

  return (
    <div className="fixed left-4 bottom-4 z-50 flex flex-col gap-3">
      {buttons.map((button, index) => (
        <Link to={button.link} key={index} title={button.label}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${button.bgColor} ${button.hoverColor}`}
            aria-label={button.label}
          >
            {button.icon}
          </motion.button>
        </Link>
      ))}
    </div>
  );
};

export default FloatingActionButtons; 