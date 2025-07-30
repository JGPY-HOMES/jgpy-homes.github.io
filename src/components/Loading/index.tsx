import React from 'react';
import './Loading.scss';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'spinner' | 'dots' | 'pulse';
  text?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  type = 'spinner', 
  text = '加载中...',
  className = ''
}) => {
  return (
    <div className={`loading-container ${className}`}>
      <div className={`loading-content loading--${size}`}>
        {type === 'spinner' && (
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
        )}
        
        {type === 'dots' && (
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
        
        {type === 'pulse' && (
          <div className="loading-pulse">
            <div className="pulse-circle"></div>
          </div>
        )}
        
        {text && (
          <div className="loading-text">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};
    