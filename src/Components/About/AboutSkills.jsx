import React from "react";
import { skillsLogo } from "./AboutTextData";

const AboutSkills = () => {
  return (
    <div className="About-skills_container">
      <div className="About-skills_header">
        <h1>Tech Stack</h1>
      </div>
      <div className="About-skills_logo">
        {skillsLogo.map((data) => (
          <div className="About-skills_img" key={data.id}>
            <img src={data.img} alt={data.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
