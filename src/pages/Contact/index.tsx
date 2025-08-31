import React, { useState, useEffect } from 'react';
import { Carousel } from '../../modules/home/Carousel';
import { ContactForm, ContactInfo } from '../../modules/contact';
import { BaiduMap } from '../../components/BaiduMap';
import { PageLoader } from '../../components/PageLoader';
import './Contact.scss';

export const Contact: React.FC = () => {
  // 页面加载状态
  const [isLoading, setIsLoading] = useState(true);

  // 联系我们页面的轮播图数据，使用src/images目录中的图片
  const carouselItems = [
    {
      id: 1,
      image: '/src/images/bg/1.jpg',
      title: '专业装修服务',
      description: '为您提供一站式装修解决方案',
      link: '/services'
    },
    {
      id: 2,
      image: '/src/images/bg/2.jpg',
      title: '品质保证',
      description: '严格的质量控制，确保装修品质',
      link: '/about'
    },
    {
      id: 3,
      image: '/src/images/bg/3.jpg',
      title: '贴心服务',
      description: '从设计到施工，全程贴心服务',
      link: '/contact'
    },
    {
      id: 4,
      image: '/src/images/bg/4.jpg',
      title: '创新设计',
      description: '融合现代美学与实用功能',
      link: '/services'
    },
    {
      id: 5,
      image: '/src/images/bg/6.jpg',
      title: '精工细作',
      description: '每一个细节都精心打造',
      link: '/about'
    }
  ];

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
        <section className="contact-hero">
          <Carousel 
            items={carouselItems}
            autoPlay={true}
            interval={4000}
            showArrows={true}
            showIndicators={true}
            className="contact-hero__carousel"
          />
        </section>

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
