import React, { useState, useEffect } from "react";
import { PageLoader } from "../../components/PageLoader";
import { usePageTitle } from "../../hooks";
import {
  AboutHero,
  TeamIntro,
  TeamExpansion,
  DevelopmentHistory,
} from "../../modules/about";
import { AboutApi } from "../../api/about.api";
import type { AboutPageData } from "../../entities/about.entity";
import "./About.scss";

export const About: React.FC = () => {
  // 页面加载状态
  const [isLoading, setIsLoading] = useState(true);
  // 关于我们页面数据
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);
  
  // 设置页面标题
  usePageTitle("关于我们 - 河南交个朋友装饰有限公司");

  // 获取关于我们页面数据
  const fetchAboutData = async () => {
    try {
      const data = await AboutApi.getAboutInfo();
      setAboutData(data);
    } catch (error) {
      console.error("获取关于我们页面数据失败:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 组件挂载时获取数据
  useEffect(() => {
    fetchAboutData();
  }, []);

  // 加载完成回调
  const handleLoadComplete = () => {
    console.log("About 页面加载完成");
  };

  return (
    <PageLoader isLoading={isLoading} onLoadComplete={handleLoadComplete}>
      <div className="about-page">
        {/* 1. 关于我们页面头部轮播 */}
        <AboutHero carousels={aboutData?.carousels} />

        {/* 2. 团队简介 */}
        <TeamIntro teamData={aboutData?.teamIntro} />

        {/* 3. 团队扩展 */}
        <TeamExpansion expansionData={aboutData?.teamExpansion} />

        {/* 4. 发展历程 */}
        <DevelopmentHistory historyData={aboutData?.developmentHistory} />
      </div>
    </PageLoader>
  );
};
