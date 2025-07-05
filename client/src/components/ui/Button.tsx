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
  // If the className already contains a bg-*, don't apply the default bg-primary or bg-primary-dark
  const hasBg = /bg-\w+(-\d+)?/.test(className);
  // Use primary and primary-dark from tailwind config
  const baseClasses = `px-5 py-2 rounded-lg text-white transition duration-200 cursor-pointer ${hasBg ? '' : 'bg-primary hover:bg-primary-dark'}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
