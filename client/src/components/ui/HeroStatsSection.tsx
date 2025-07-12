import React from 'react';
import { motion } from 'framer-motion';

// Animation variants (can be customized or passed as props if needed)
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Count up animation for stats
const CountUpAnimation: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

// Types for stats
export interface HeroStat {
  label: string;
  value: number;
  duration?: number;
  suffix?: string;
  description?: string;
  icon?: React.ReactNode;
  cardClassName?: string;
}

export interface HeroStatsSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  stats: HeroStat[];
  backgroundClassName?: string; // e.g. bg-gradient-to-r from-blue-600 to-indigo-600
  overlayClassName?: string; // e.g. bg-black opacity-10
  badge?: React.ReactNode;
  className?: string;
  children?: React.ReactNode; // for extra content
}

const HeroStatsSection: React.FC<HeroStatsSectionProps> = ({
  title,
  subtitle,
  stats,
  backgroundClassName = 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90 dark:opacity-80',
  overlayClassName = 'bg-black opacity-10',
  badge,
  className = '',
  children,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 ${backgroundClassName}`}></div>
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
      {/* Animated background elements (optional, can be customized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {badge && <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">{badge}</div>}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">{subtitle}</p>}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px] ${stat.cardClassName || ''}`}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-blue mb-2">
                  <CountUpAnimation end={stat.value} duration={stat.duration || 2} />{stat.suffix}
                </div>
                <div className="text-dark-gray dark:text-gray-200 font-medium">{stat.label}</div>
                {stat.description && <div className="text-gray-500 text-sm mt-1">{stat.description}</div>}
              </div>
            ))}
          </motion.div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection; 