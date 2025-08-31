import React from 'react';
import './ContactHeader.scss';

export const ContactHeader: React.FC = () => {
  return (
    <div className="page-header">
      <h1 className="page-title">联系我们</h1>
      <p className="page-description">
        如果您有任何装修需求或疑问，欢迎随时联系我们，我们期待为您提供专业的服务
      </p>
    </div>
  );
};
