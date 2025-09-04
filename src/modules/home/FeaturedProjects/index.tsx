import React from "react";
import { FaHome, FaBuilding, FaCouch, FaStar } from "react-icons/fa";
import "./FeaturedProjects.scss";

// 导入项目图片
import project1 from "../../../assets/images/hero/3.jpg";
import project2 from "../../../assets/images/hero/4.jpg";
import project3 from "../../../assets/images/hero/6.jpg";
import project4 from "../../../assets/images/hero/7.jpg";
import project5 from "../../../assets/images/hero/11.jpg";
import project6 from "../../../assets/images/hero/12.jpg";

export const FeaturedProjects: React.FC = () => {
  const projectsData = [
    {
      title: "现代简约客厅",
      category: "家装设计",
      image: project1,
      icon: FaHome,
      rating: 5,
      description: "采用现代简约风格，打造温馨舒适的客厅空间",
    },
    {
      title: "开放式厨房",
      category: "家装设计",
      image: project2,
      icon: FaHome,
      rating: 5,
      description: "开放式厨房设计，增加空间通透感",
    },
    {
      title: "温馨卧室",
      category: "家装设计",
      image: project3,
      icon: FaHome,
      rating: 5,
      description: "温馨舒适的卧室设计，营造良好的睡眠环境",
    },
    {
      title: "现代办公室",
      category: "工装设计",
      image: project4,
      icon: FaBuilding,
      rating: 5,
      description: "现代办公空间设计，提升工作效率",
    },
    {
      title: "精品餐厅",
      category: "工装设计",
      image: project5,
      icon: FaBuilding,
      rating: 5,
      description: "精品餐厅装修，营造优雅的用餐环境",
    },
    {
      title: "豪华别墅",
      category: "高端定制",
      image: project6,
      icon: FaCouch,
      rating: 5,
      description: "豪华别墅整体装修，体现品质生活",
    },
  ];

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">精选案例</h2>
          <p className="section-description">
            我们精心打造的每一个项目，都体现了对品质的追求和对细节的关注
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="project-category">
                        <Icon />
                        <span>{project.category}</span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-rating">
                        {[...Array(project.rating)].map((_, i) => (
                          <FaStar key={i} className="star-icon" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
