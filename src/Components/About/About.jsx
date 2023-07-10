import React from "react";
import { motion } from "framer-motion";
import { AboutTextData } from "./AboutTextData";
import AboutSkills from "./AboutSkills";
import AboutSpinner from "./AboutSpinner";
import "../../Styles/gradient.css";
import AboutLinesGradient from "./AboutLinesGradient";
import InfoLogo from "../InfoLogo";

const About = () => {
  const text = AboutTextData;

  return (
    <>
      <motion.section
        className="About-container"
        key={"animatekey"}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, y: 0 , ease: "easeIn"}}
      >
        <section className="about-inner_container">
          <div className="aboutme-header">
            <h1>About Me.</h1>
            <AboutLinesGradient />
          </div>
          <div className="about-flex_container">
            <div className="about-text_container">
              {text.map((item) => (
                <div key={item.id}>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="about-skills_animation">
              <AboutSpinner />
            </div>
          </div>
          <AboutSkills />
        </section>
        <InfoLogo />
      </motion.section>
    </>
  );
};

export default About;
