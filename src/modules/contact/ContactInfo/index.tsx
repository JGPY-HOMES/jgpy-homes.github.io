import React from 'react';
import type { ContactInfo as ContactInfoType } from '@/entities/contact.entity';
import { Icon } from '@/components/Icon';
import './info.scss';

interface ContactInfoProps {
  contactInfo?: ContactInfoType;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  // 如果没有数据则不渲染
  if (!contactInfo) {
    return null;
  }

  return (
    <section className="contact-info-section">
      <div className="contact-info">
        <div className="contact-info__header">
          <h2 className="contact-info__title">{contactInfo.title}</h2>
          <p className="contact-info__subtitle">{contactInfo.subtitle}</p>
        </div>
        
        <div className="contact-info__content">
          <div className="contact-info__grid">
            {/* 联系方式 */}
            {contactInfo.methods.map((item, index) => (
              <div key={index} className="contact-method">
                <div className="contact-method__icon" style={{ backgroundColor: item.color }}>
                  <Icon name={item.icon} size={24} color="white" />
                </div>
                <div className="contact-method__content">
                  <h4 className="contact-method__title">{item.title}</h4>
                  <p className="contact-method__value">{item.value}</p>
                  <p className="contact-method__description">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* 公司地址 */}
            <div className="contact-method contact-method--address">
              <div className="contact-method__icon" style={{ backgroundColor: contactInfo.address.color }}>
                <Icon name={contactInfo.address.id} size={24} color="white" />
              </div>
              <div className="contact-method__content">
                <h4 className="contact-method__title">{contactInfo.address.title}</h4>
                <p className="contact-method__value">{contactInfo.address.value}</p>
                <p className="contact-method__description">{contactInfo.address.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
