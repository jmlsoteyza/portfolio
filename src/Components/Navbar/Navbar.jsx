import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/jom-logo.svg";
import Logo1 from "../../assets/images/jom-logo1.svg";
import light from "../../assets/images/light.svg";
import dark from "../../assets/images/dark.svg";
import { ThemeFunction } from "../../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeFunction);
  return (
    <nav>
      <Link to="/">
        {theme === "dark" ? (
          <img src={Logo} alt={Logo} className="logo" />
        ) : (
          <img src={Logo1} alt={Logo1} className="logo" />
        )}
      </Link>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-color active" : "Link-color"
          }
          to="About"
        >
          <li className="line line-color">About</li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-color active" : "Link-color"
          }
          to="Projects"
        >
          <li className="line line-color">Projects</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-color active" : "Link-color"
          }
          to="Contacts"
        >
          <li className="line line-color">Contacts</li>
        </NavLink>
        <div className="toggle-mode">
          {theme === "dark" ? (
            <img src={light} alt="moon" onClick={toggleTheme} />
          ) : (
            <img
              src={dark}
              alt="sun"
              onClick={toggleTheme}
              className="second-img"
            />
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
