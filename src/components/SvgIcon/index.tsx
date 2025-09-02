import React from 'react';
import './SvgIcon.scss';

interface SvgIconProps {
  name: string;
  className?: string;
  color?: string;
  size?: string | number;
  onClick?: () => void;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ 
  name,
  className = '', 
  color,
  size = '1em',
  onClick
}) => {
  const svgStyle: React.CSSProperties = {
    width: size,
    height: size,
    ...(color && { color })
  };

  return (
    <svg
      style={svgStyle}
      className={`svg-icon ${className}`}
      aria-hidden="true"
      onClick={onClick}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};
