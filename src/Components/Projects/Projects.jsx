import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ProjectsTab1 from "./ProjectsTab1";
import ProjectsTab2 from "./ProjectsTab2";
import AboutLinesGradient from "../About/AboutLinesGradient";
import "../../Styles/gradient.css";
import InfoLogo from "../InfoLogo";
import GradientColors from "../GradiantColors";
import { ThemeFunction } from "../../App";

const Projects = () => {
  const { theme } = useContext(ThemeFunction);

  const colors = GradientColors;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[currentIndex];

  const lineStyle = {
    background: `linear-gradient(90deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  const [tabsValue, setTabsValue] = useState(0);

  const handleTabsIndex = (index) => {
    setTabsValue(index);
  };

  return (
    <motion.section
      className="Projects-container"
      key={"animatekey"}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4, y: 0, ease: "easeIn" }}
      id={theme}
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
            <ProjectsTab1 tabsValue={tabsValue} lineStyle={lineStyle} />
            <ProjectsTab2 tabsValue={tabsValue} lineStyle={lineStyle} />
          </div>
        </div>
      </section>
      <InfoLogo />
    </motion.section>
  );
};

export default Projects;
