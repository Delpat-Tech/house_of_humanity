import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
