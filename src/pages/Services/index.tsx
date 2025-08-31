import React, { useState, useEffect } from 'react';
import { PageLoader } from '../../components/PageLoader';
import { 
  ServiceHero,
  HomeDecoration,
  CommercialDecoration,
  SoftFurnishing,
  LandscapeDesign,
  ConstructionServices
} from '../../modules/services';

export const Services: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 处理锚点滚动
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // 延迟滚动，确保页面完全渲染
          setTimeout(() => {
            // 动态计算头部高度
            const header = document.querySelector('.header');
            const headerHeight = header ? header.getBoundingClientRect().height : 80;
            
            // 考虑服务模块的padding和视觉空间
            const servicePadding = 64; // $spacing-3xl = 64px
            const additionalOffset = 30; // 额外的视觉空间，确保标题完全可见
            
            // 计算目标滚动位置，让锚点位置在视窗中更合适
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - additionalOffset;
            
            // 平滑滚动到目标位置
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }
  }, [isLoading]);

  const handleLoadComplete = () => {
    console.log('Services 页面加载完成');
  };

  return (
    <PageLoader isLoading={isLoading} onLoadComplete={handleLoadComplete}>
      <div className="services-page">
        {/* 1. 服务页面头部 */}
        <ServiceHero />
        
        {/* 2. 家装设计 */}
        <HomeDecoration />
        
        {/* 3. 工装设计 */}
        <CommercialDecoration />
        
        {/* 4. 软装搭配 */}
        <SoftFurnishing />
        
        {/* 5. 园林景观 */}
        <LandscapeDesign />
        
        {/* 6. 装修施工 */}
        <ConstructionServices />
      </div>
    </PageLoader>
  );
};
