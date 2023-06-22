import React from "react";
import { TabsData1 } from "./ProjectsData";

const ProjectsTab1 = ({ tabsValue }) => {
  return (
    <div className={`tabs-transition ${tabsValue === 0 ? "tab active" : ""}`}>
      {tabsValue === 0 && (
        <div>
          {TabsData1.map((tabs, key) => (
            <div className="tabs-container_flex" key={key}>
              <p style={{ color: "#fff" }}>{tabs.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab1;
