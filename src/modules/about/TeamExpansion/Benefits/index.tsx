import React from "react";
import type { Activity } from "../../../../entities/about.entity";
import "./Benefits.scss";

interface ActivitiesProps {
  activities: Activity[];
}

export const Benefits: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <>
      <h3 className="panel-title">公司活动</h3>
      <p className="panel-description">
        我们定期组织各种团队活动，促进员工交流，增强团队凝聚力，营造积极向上的工作氛围。
      </p>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <h4 className="activity-title">{activity.title}</h4>
              </div>
              <div className="activity-meta">
                <span className="activity-date">📅 {activity.date}</span>
                {activity.participants && (
                  <span className="activity-participants">
                    👥 {activity.participants}人参与
                  </span>
                )}
              </div>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
