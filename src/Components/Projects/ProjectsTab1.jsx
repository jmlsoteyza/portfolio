import React from "react";
import { TabsData1 } from "./ProjectsData";
import "../../Styles/gradient.css";

const ProjectsTab1 = ({ tabsValue, lineStyle }) => {
  return (
    <div className={`tabs-transition ${tabsValue === 0 ? "tab active" : ""}`}>
      {tabsValue === 0 && (
        <div>
          {TabsData1.map((tabs, key) => (
            <div className={tabs.class} key={key}>
              <div className="project-info_img">
                <img src={tabs.img} alt={tabs.img} />
              </div>
              <div className="projects-info_container">
                <div className="projects-title_header">
                  <h1>{tabs.title}</h1>
                  <span
                    className="projects-title_lineHeader"
                    style={lineStyle}
                  ></span>
                </div>
                <div className="projects_desc">
                  <p>{tabs.desc}</p>
                </div>
                <div className="projects_languages">
                  {tabs.languages.map((languages, key) => (
                    <span key={key}>{languages}</span>
                  ))}
                </div>
                <div className="projects_live-site">
                  <a href={tabs.link}>
                    <h2>VISIT THE WEBSITE</h2>
                    <span className="projects_line" style={lineStyle}></span>
                  </a>
                </div>
                <a href={tabs.githubLink} className="github_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill=""
                    stroke="#e1e1e1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab1;
