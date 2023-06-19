import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/jom-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt={Logo} className="logo" />
      </Link>
      <ul>
        <Link className="Link-color" to="About">
          <li className="line line-color">About</li>
        </Link>
        <Link className="Link-color" to="Projects">
          <li className="line line-color">Projects</li>
        </Link>
        <Link className="Link-color" to="Contacts">
          <li className="line line-color">Contacts</li>
        </Link>
        <Link className="Link-color" to="Resume">
          <li className="line line-color">Resume</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
