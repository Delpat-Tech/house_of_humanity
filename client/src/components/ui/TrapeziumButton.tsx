import React from 'react';

type TrapeziumButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const TrapeziumButton: React.FC<TrapeziumButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white font-semibold px-8 py-3 bg-blue-500 hover:bg-blue-700 transition-all duration-300 ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'
      }}
    >
      {label}
    </button>
  );
};

export default TrapeziumButton;


