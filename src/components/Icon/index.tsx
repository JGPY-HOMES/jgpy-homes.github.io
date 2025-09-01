import React from 'react';
import './Icon.scss';

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => {
  return (
    <div 
      className={`icon ${className}`}
      style={{ 
        width: size, 
        height: size,
        color: color 
      }}
    >
      <img 
        src={`/src/assets/icons/${name}.svg`} 
        alt={name}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
