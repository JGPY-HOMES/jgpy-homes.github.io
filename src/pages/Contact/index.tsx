import React, { useState, useEffect } from 'react';
import { ContactForm, ContactInfo, ContactHero, ContactHeader, ContactMapSection } from '../../modules/contact';
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
          <ContactHeader />

          {/* 联系信息部分 - 上方 */}
          <ContactInfo />

          {/* 百度地图部分 - 中间 */}
          <ContactMapSection />

          {/* 留言表单部分 - 下方 */}
          <ContactForm />
        </div>
      </div>
    </PageLoader>
  );
};
