import React from 'react';
import { StatsCardProps } from '../../types';

const StatsCard: React.FC<StatsCardProps> = ({ count, label, className = "" }) => {
  return (
    <div className={`text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="text-3xl font-bold text-primary-blue mb-2">{count}</div>
      <div className="text-dark-gray font-medium">{label}</div>
    </div>
  );
};

export default StatsCard; 