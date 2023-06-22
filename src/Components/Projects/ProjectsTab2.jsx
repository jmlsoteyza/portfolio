import React from "react";
import { TabsData2 } from "./ProjectsData";

const ProjectsTab2 = ({tabsValue}) => {
  return (
    <div className={`tabs-transition ${tabsValue === 1 ? "tab active" : ""}`}>
      {tabsValue === 1 && (
        <div>
          {TabsData2.map((tabs, index) => (
            <div className="tabs-container_flex" key={index}>
              <p>{tabs.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab2;
