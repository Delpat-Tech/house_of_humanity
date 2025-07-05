import React, { useEffect, useRef, useState } from "react";
import './Orb.css';

interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  className?: string;
  size?: number;
}

export default function Orb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
}: OrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const rotationSpeed = 0.3;

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);
      const deltaTime = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;

      if (rotateOnHover && isHovered) {
        setRotation(prev => prev + deltaTime * rotationSpeed);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, rotateOnHover]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef} 
      className="orb-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="orb-background"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `linear-gradient(45deg, hsl(${hue}, 70%, 60%), hsl(${hue + 60}, 70%, 60%))`,
          transform: `rotate(${rotation}rad)`,
          transition: 'transform 0.1s ease-out',
          filter: isHovered ? `brightness(${1 + hoverIntensity})` : 'brightness(1)',
        }}
      />
              <img
          ref={imgRef}
          src="/images/we-fight-for-humanity.png"
          alt="We Fight For Humanity"
          className="orb-image"
          style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '50%', 
            width: '60%', 
            height: '60%', 
            borderRadius: '50%',
            transition: 'transform 0.2s ease-out',
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.1 : 1})`,
          }}
        />
    </div>
  );
} 