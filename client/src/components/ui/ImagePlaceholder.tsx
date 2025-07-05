import React from 'react';

interface ImagePlaceholderProps {
  text: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  text,
  width = "150px",
  height = "100px",
  className = ""
}) => {
  return (
    <div
      className={`bg-warm-light-blue border-2 border-dashed border-primary-blue flex items-center justify-center text-primary-blue font-medium ${className}`}
      style={{ width, height }}
    >
      <span className="text-center text-sm px-2">{text}</span>
    </div>
  );
};

export default ImagePlaceholder; 