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
