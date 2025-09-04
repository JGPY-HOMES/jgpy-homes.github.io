import React, { useState, useEffect } from "react";
import { PageLoader } from "../../components/PageLoader";
import { usePageTitle } from "../../hooks";
import {
  HomeHero,
  CompanyIntro,
  Services,
  CoreAdvantages,
  AboutUs,
  FeaturedProjects,
  ContactUs,
} from "../../modules/home";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 设置页面标题
  usePageTitle("河南交个朋友装饰有限公司 - 专业家装服务");

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadComplete = () => {
    console.log("页面加载完成");
  };

  return (
    <PageLoader isLoading={isLoading} onLoadComplete={handleLoadComplete}>
      <div className="home-page">
        {/* 1. 头部轮播图 */}
        <HomeHero />

        {/* 2. 公司简介 - 白色背景 */}
        <CompanyIntro />

        {/* 3. 核心优势 - 主题色背景 */}
        <CoreAdvantages />

        {/* 4. 服务项目 - 白色背景 */}
        <Services />

        {/* 5. 精选案例 - 主题色背景 */}
        <FeaturedProjects />

        {/* 7. 关于我们 - 白色背景 */}
        <AboutUs />

        {/* 8. 联系我们 - 主题色背景 */}
        <ContactUs />
      </div>
    </PageLoader>
  );
};
