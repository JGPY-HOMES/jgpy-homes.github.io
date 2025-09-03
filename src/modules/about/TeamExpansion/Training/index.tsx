import React from "react";
import type { TeamExpansion as TeamExpansionType } from "../../../../entities/about.entity";
import "./Training.scss";

interface TrainingProps {
  trainingPrograms: TeamExpansionType["trainingPrograms"];
}

export const Training: React.FC<TrainingProps> = ({ trainingPrograms }) => {
  return (
    <>
      <h3 className="panel-title">持续学习，共同成长</h3>
      <p className="panel-description">
        我们为员工提供全方位的培训和发展机会，帮助每个人在职业生涯中不断进步。
      </p>
      <div className="training-programs">
        {trainingPrograms.map((program, index) => (
          <div key={program.id || index} className="program-card">
            <div className="program-header">
              <h4 className="program-title">{program.title}</h4>
              <span className="program-duration">{program.duration}</span>
            </div>
            <p className="program-description">{program.description}</p>
            <ul className="program-content">
              {program.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
