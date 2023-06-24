import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/jom-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt={Logo} className="logo" />
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
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link-color active" : "Link-color"
          }
          to="Resume"
        >
          <li className="line line-color">Resume</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
