import React, { useState } from "react";
import {
  FaUserPlus,
  FaGraduationCap,
  FaAward,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";
import type { TeamExpansion as TeamExpansionType } from "../../../entities/about.entity";
import { Recruitment } from "./Recruitment";
import { Training } from "./Training";
import { Culture } from "./Culture";
import { Values } from "./Values";
import { Benefits } from "./Benefits";
import "./TeamExpansion.scss";

interface TeamExpansionProps {
  expansionData?: TeamExpansionType;
}

export const TeamExpansion: React.FC<TeamExpansionProps> = ({
  expansionData,
}) => {
  const [activeTab, setActiveTab] = useState("recruitment");

  if (!expansionData) {
    return null;
  }

  // 标签页配置
  const tabs = [
    {
      id: "recruitment",
      label: "人才招聘",
      icon: FaUserPlus,
    },
    {
      id: "training",
      label: "培训发展",
      icon: FaGraduationCap,
    },
    {
      id: "culture",
      label: "企业文化",
      icon: FaAward,
    },
    {
      id: "values",
      label: "企业价值观",
      icon: FaHeart,
    },
    {
      id: "welfare",
      label: "公司活动",
      icon: FaHandshake,
    },
  ];

  // 渲染标签页内容
  const renderTabContent = () => {
    switch (activeTab) {
      case "recruitment":
        return <Recruitment positions={expansionData.positions} />;
      case "training":
        return <Training trainingPrograms={expansionData.trainingPrograms} />;
      case "culture":
        return <Culture />;
      case "values":
        return <Values values={expansionData.values} />;
      case "welfare":
        return <Benefits activities={expansionData.activities} />;
      default:
        return <Recruitment positions={expansionData.positions} />;
    }
  };

  return (
    <section className="team-expansion">
      <div className="container">
        <div className="expansion-header">
          <h2 className="expansion-title">{expansionData.title}</h2>
          <h3 className="expansion-subtitle">{expansionData.subtitle}</h3>
          <p className="expansion-description">{expansionData.description}</p>
        </div>

        <div className="expansion-content">
          {/* 标签页导航 */}
          <div className="tab-navigation">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="tab-icon" />
                  <span className="tab-label">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 标签页内容 */}
          <div className="tab-content">
            <div className="tab-panel">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
