import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWeixin, FaQq } from 'react-icons/fa';
import './ContactUs.scss';

export const ContactUs: React.FC = () => {
  const contactData = {
    title: '联系我们',
    subtitle: '如果您有任何装修需求或疑问，欢迎随时联系我们',
    contactMethods: [
      {
        icon: FaPhone,
        title: '联系电话',
        value: '400-123-4567',
        color: '#2196F3'
      },
      {
        icon: FaEnvelope,
        title: '邮箱地址',
        value: 'contact@hnjygpzs.com',
        color: '#FF9800'
      },
      {
        icon: FaClock,
        title: '工作时间',
        value: '周一至周日 9:00-18:00',
        color: '#9C27B0'
      },
      {
        icon: FaWeixin,
        title: '微信咨询',
        value: '扫码添加微信',
        color: '#07C160'
      },
      {
        icon: FaQq,
        title: 'QQ咨询',
        value: '扫码添加QQ',
        color: '#12B7F5'
      }
    ],
    companyAddress: {
      icon: FaMapMarkerAlt,
      title: '公司地址',
      value: '河南省郑州市金水区花园路126号',
      color: '#4CAF50'
    }
  };

  return (
    <section className="contact-us">
      <div className="container">
        <div className="contact-content">
          <div className="section-header">
            <h2 className="section-title">{contactData.title}</h2>
            <p className="section-description">{contactData.subtitle}</p>
          </div>
          
          <div className="contact-grid">
            {/* 左侧列 */}
            <div className="contact-column">
              {contactData.contactMethods.slice(0, 3).map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: item.color }}>
                    <item.icon />
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-label">{item.title}</h4>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 中间列 */}
            <div className="contact-column">
              {contactData.contactMethods.slice(3, 5).map((item, index) => (
                <div key={index + 3} className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: item.color }}>
                    <item.icon />
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-label">{item.title}</h4>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 右侧地图 */}
            <div className="map-section">
              <div className="map-placeholder">
                <div className="map-info">
                  <FaMapMarkerAlt className="map-icon" />
                  <div className="map-details">
                    <h4 className="map-title">地图位置</h4>
                    <p className="map-address">点击查看详细位置</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 