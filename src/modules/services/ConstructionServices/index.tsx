import React from 'react';
import { SERVICES } from '../../../constants';

export const ConstructionServices: React.FC = () => {
  const service = SERVICES[5]; // 获取装修施工服务信息

  return (
    <section id="construction-services" className="service-section construction-services">
      <div className="container">
        <div className="service-content">
          <div className="service-text">
            <div className="service-header">
              <h2 className="service-title">
                <span className="icon-text">{service.icon}</span>
                {service.name}
              </h2>
              <h3 className="service-subtitle">{service.subtitle}</h3>
            </div>
            
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <span className="feature-icon-text">✓</span>
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-image">
            <img 
              src={service.image} 
              alt={service.name}
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>{service.name}</h3>
                <p>{service.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
