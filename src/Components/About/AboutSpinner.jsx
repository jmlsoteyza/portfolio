import React from "react";
import { logoSpinner } from "./AboutTextData";

const AboutSpinner = () => {
  return (
    <div className="cubespinner">
      {logoSpinner.map((dataspinner) => (
        <div key={dataspinner.id} className={dataspinner.class}>
          <img
            src={dataspinner.img}
            alt={dataspinner.img}
            className="logo-languages"
          />
        </div>
      ))}
    </div>
  );
};

export default AboutSpinner;
