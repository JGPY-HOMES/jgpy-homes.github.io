import React from "react";
import type { DevelopmentHistory as DevelopmentHistoryType } from "../../../entities/about.entity";
import "./DevelopmentHistory.scss";

interface DevelopmentHistoryProps {
  historyData?: DevelopmentHistoryType;
}

export const DevelopmentHistory: React.FC<DevelopmentHistoryProps> = ({
  historyData,
}) => {
  if (!historyData) {
    return null;
  }

  return (
    <section id="history" className="development-history">
      <div className="container">
        <div className="history-header">
          <h2 className="history-title">{historyData.title}</h2>
          <h3 className="history-subtitle">{historyData.subtitle}</h3>
          <p className="history-description">{historyData.description}</p>
        </div>

        <div className="timeline">
          {historyData.timeline.map((item, index) => (
            <div
              key={item.id || index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-card">
                  <div className="timeline-image">
                    {item.image && <img src={item.image} alt={item.title} />}
                  </div>
                  <div className="timeline-text">
                    <h4 className="timeline-item-title">{item.title}</h4>
                    <p className="timeline-item-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
