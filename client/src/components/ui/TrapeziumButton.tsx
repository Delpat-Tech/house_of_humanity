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
      className={`text-white font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'
      }}
    >
      {label}
    </button>
  );
};

export default TrapeziumButton;

// import React from 'react';
// import TrapeziumButton from './components/TrapeziumButton';

// const App = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <TrapeziumButton
//         label="Donate Now"
//         onClick={() => alert('Thank you for donating!')}
//       />
//     </div>
//   );
// };

// export default App;
