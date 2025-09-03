import React, { useState, useEffect } from "react";
import {
  ContactForm,
  ContactInfo,
  ContactHero,
  ContactHeader,
  ContactMapSection,
} from "../../modules/contact";
import { PageLoader } from "../../components/PageLoader";
import { ContactApi } from "../../api/contact.api";
import type { ContactPageData } from "../../entities/contact.entity";
import "./Contact.scss";

export const Contact: React.FC = () => {
  // 页面加载状态
  const [isLoading, setIsLoading] = useState(true);
  // 联系页面数据
  const [contactData, setContactData] = useState<ContactPageData | null>(null);

  // 获取联系页面数据
  const fetchContactData = async () => {
    try {
      const data = await ContactApi.getContactInfo();
      setContactData(data);
    } catch (error) {
      console.error("获取联系页面数据失败:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 组件挂载时获取数据
  useEffect(() => {
    fetchContactData();
  }, []);

  // 加载完成回调
  const handleLoadComplete = () => {
    console.log("Contact 页面加载完成");
  };

  return (
    <PageLoader isLoading={isLoading} onLoadComplete={handleLoadComplete}>
      <div className="contact-page">
        {/* 轮播图部分 */}
        <ContactHero carousels={contactData?.carousels} />

        <div className="container">
          {/* 页面标题 */}
          <ContactHeader />

          {/* 联系信息部分 - 上方 */}
          <ContactInfo contactInfo={contactData?.contact} />

          {/* 百度地图部分 - 中间 */}
          <ContactMapSection />

          {/* 留言表单部分 - 下方 */}
          <ContactForm />
        </div>
      </div>
    </PageLoader>
  );
};
