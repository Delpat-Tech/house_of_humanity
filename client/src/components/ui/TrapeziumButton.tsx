import React from 'react';
import { TrapeziumButtonProps } from '../../types';

const TrapeziumButton: React.FC<TrapeziumButtonProps> = ({ 
  label, 
  onClick, 
  className = '',
  variant = 'default'
}) => {
  const baseClasses = "font-semibold transition-all duration-300 relative overflow-hidden";
  
  const variantClasses = {
    default: "text-white px-8 py-3 bg-blue-500 hover:bg-blue-700",
    sitaare: "text-white px-6 py-3 text-sm font-semibold rounded-xl shadow-lg bg-fresh-green hover:bg-fresh-green"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={variant === 'default' ? {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'
      } : undefined}
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default TrapeziumButton;


