import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWeixin, FaQq } from 'react-icons/fa';
import './info.scss';

export const ContactInfo: React.FC = () => {
  const contactData = {
    title: '联系信息',
    subtitle: '多种联系方式，随时为您服务',
    contactMethods: [
      {
        icon: FaPhone,
        title: '联系电话',
        value: '400-123-4567',
        description: '24小时服务热线',
        color: '#2196F3'
      },
      {
        icon: FaEnvelope,
        title: '邮箱地址',
        value: 'contact@hnjygpzs.com',
        description: '发送邮件咨询',
        color: '#FF9800'
      },
      {
        icon: FaClock,
        title: '工作时间',
        value: '周一至周日 9:00-18:00',
        description: '全年无休，随时服务',
        color: '#9C27B0'
      },
      {
        icon: FaWeixin,
        title: '微信咨询',
        value: '扫码添加微信',
        description: '在线即时沟通',
        color: '#07C160'
      },
      {
        icon: FaQq,
        title: 'QQ咨询',
        value: '扫码添加QQ',
        description: '专业客服在线',
        color: '#12B7F5'
      }
    ],
    companyAddress: {
      icon: FaMapMarkerAlt,
      title: '公司地址',
      value: '河南省郑州市金水区花园路126号',
      description: '交通便利，欢迎来访',
      color: '#4CAF50'
    }
  };

  return (
    <section className="contact-info-section">
      <div className="contact-info">
        <div className="contact-info__header">
          <h2 className="contact-info__title">{contactData.title}</h2>
          <p className="contact-info__subtitle">{contactData.subtitle}</p>
        </div>
        
        <div className="contact-info__content">
          <div className="contact-info__grid">
            {/* 联系方式 */}
            {contactData.contactMethods.map((item, index) => (
              <div key={index} className="contact-method">
                <div className="contact-method__icon" style={{ backgroundColor: item.color }}>
                  <item.icon />
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
              <div className="contact-method__icon" style={{ backgroundColor: contactData.companyAddress.color }}>
                <contactData.companyAddress.icon />
              </div>
              <div className="contact-method__content">
                <h4 className="contact-method__title">{contactData.companyAddress.title}</h4>
                <p className="contact-method__value">{contactData.companyAddress.value}</p>
                <p className="contact-method__description">{contactData.companyAddress.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
