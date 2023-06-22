import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsTab1 from "./ProjectsTab1";
import ProjectsTab2 from "./ProjectsTab2";
import AboutLinesGradient from "../About/AboutLinesGradient";
import "../../Styles/gradient.css";
import InfoLogo from "../InfoLogo";

const Projects = () => {
  const [tabsValue, setTabsValue] = useState(0);

  const handleTabsIndex = (index) => {
    setTabsValue(index);
  };

  return (
    <motion.section
      className="Projects-container"
      key={"animatekey"}
      initial={{ height: "auto", opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.125 }}
      style={{ position: "absolute", width: "99.5%" }}
    >
      <section className="Projects-inner_container">
        <div className="Projects_header">
          <h1>Projects.</h1>
          <AboutLinesGradient />
        </div>
        <div className="Projects-tabs_container">
          <div className="tabs_btn">
            <button
              className={tabsValue === 0 ? "btn active" : "btn"}
              onClick={() => handleTabsIndex(0)}
            >
              Projects
            </button>
            <button
              className={tabsValue === 1 ? "btn active" : "btn"}
              onClick={() => handleTabsIndex(1)}
            >
              Mini Projects
            </button>
          </div>
          <div className="Projects-tabs">
            <ProjectsTab1 tabsValue={tabsValue} />
            <ProjectsTab2 tabsValue={tabsValue} />
          </div>
        </div>
      </section>
      <InfoLogo />
    </motion.section>
  );
};

export default Projects;
