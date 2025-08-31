import React, { useState, useEffect } from 'react';
import { ContactForm, ContactInfo, ContactHero } from '../../modules/contact';
import { BaiduMap } from '../../components/BaiduMap';
import { PageLoader } from '../../components/PageLoader';
import './Contact.scss';

export const Contact: React.FC = () => {
  // 页面加载状态
  const [isLoading, setIsLoading] = useState(true);

  // 模拟页面加载过程
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2秒后完成加载

    return () => clearTimeout(timer);
  }, []);

  // 加载完成回调
  const handleLoadComplete = () => {
    console.log('Contact 页面加载完成');
  };

  return (
    <PageLoader 
      isLoading={isLoading} 
      onLoadComplete={handleLoadComplete}
    >
      <div className="contact-page">
        {/* 轮播图部分 */}
        <ContactHero />

        <div className="container">
          {/* 页面标题 */}
          <div className="page-header">
            <h1 className="page-title">联系我们</h1>
            <p className="page-description">
              如果您有任何装修需求或疑问，欢迎随时联系我们，我们期待为您提供专业的服务
            </p>
          </div>

          {/* 联系信息部分 - 上方 */}
          <section className="contact-info-section">
            <ContactInfo />
          </section>

          {/* 百度地图部分 - 中间 */}
          <section className="contact-map-section">
            <BaiduMap />
          </section>

          {/* 留言表单部分 - 下方 */}
          <section className="contact-form-section">
            <ContactForm />
          </section>
        </div>
      </div>
    </PageLoader>
  );
};
