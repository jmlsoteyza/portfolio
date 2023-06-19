import React, { useState, useEffect } from "react";
import GradientColors from "../GradiantColors";
import "../../Styles/gradient.css";

const AboutLinesGradient = () => {
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

  const containerStyle = {
    background: `linear-gradient(90deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  return (
    <>
      <span className="aboutme-line" style={ containerStyle }></span>
    </>
  );
};

export default AboutLinesGradient;
