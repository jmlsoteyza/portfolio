import React from "react";
import { TabsData2 } from "./ProjectsData";
import "../../Styles/gradient.css";

const ProjectsTab2 = ({ tabsValue, lineStyle }) => {
  return (
    <div className={`tabs-transition ${tabsValue === 1 ? "tab active" : ""}`}>
      {tabsValue === 1 && (
        <div>
          {TabsData2.map((tabs, key) => (
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
                  <h2>VISIT THE WEBSITE</h2>
                  <span className="projects_line" style={lineStyle}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab2;
