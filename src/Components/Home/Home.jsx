import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeSideLines from "./HomeSideLines";
import HomeNameSvg from "./HomeNameSvg";
import "../../Styles/gradient.css";
import HomeLinesGrad from "./HomeLinesGrad";
import HomeLogo from "./HomeLogo";
import GradientColors from "../GradiantColors";
import { NavLink } from "react-router-dom";

const Home = () => {
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
    background: `linear-gradient(180deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  const lineStyle = {
    background: `linear-gradient(90deg, ${currentColor.grad2} 0%, ${currentColor.grad1} 100%)`,
  };

  return (
    <motion.main
      className="Home-container"
      key={"animatekey"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.40 }}
      style={{ width: "99.23%" }}
    >
      <section className="home">
        <HomeSideLines currentColor={currentColor} />
        <section className="inner-container">
          <div className="inner-container-text">
            <HomeNameSvg />
            <div className="inner-container-pgraph">
              <div className="test2">
                <HomeLinesGrad containerStyle={containerStyle} />
                <div className="display-text">
                  <span className="inner-text text-width">
                    An aspiring front-end developer who is passionate about
                    creating beautiful web interfaces, web applications, and
                    intuitively implemented UX.
                  </span>
                  <span className="inner-text-2 text-width">
                    You can also see my work on the following pages:
                    <NavLink to="Projects">
                      <button className="bn5">Projects</button>,
                    </NavLink>
                    <NavLink to="About">
                      <button className="bn5">About</button>,
                    </NavLink>
                    <br />
                    <NavLink to="Contacts">
                      <button className="bn5">Contact me</button>
                    </NavLink>
                    <span>, or send me an email or message to</span>
                    <a href="mailto:jmlsoteyza.dev@gmail.com">
                      <button className="bn5">Jmlsoteyza.dev@gmail.com</button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <HomeLogo lineStyle={lineStyle} />
          <p className="credit-portfolio-link">©jmlsoteyza.vercel.app</p>
        </section>
      </section>
    </motion.main>
  );
};
export default Home;
