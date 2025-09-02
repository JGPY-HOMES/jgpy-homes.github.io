import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import './AnimatedNumber.scss';

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  delay = 0,
  className = ''
}) => {
  // 提取数字部分
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, ''); // 获取非数字部分（如 +, % 等）
  
  const { count, startAnimation, reset } = useCountUp(numericValue, { duration, delay });

  const handleMouseEnter = () => {
    reset();
    startAnimation();
  };

  return (
    <span 
      className={`animated-number ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {count}{suffix}
    </span>
  );
};
