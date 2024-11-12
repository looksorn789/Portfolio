import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import githubicon from "../../assets/githubicon.png";
import linkicon from "../../assets/linkicon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="https://github.com/looksorn789" target="_blank" rel="noopener noreferrer">
          <img src={githubicon} alt="GitHub" className="header-icon" />
        </a>
        <a href="https://www.linkedin.com/in/pornthep-bootchot-35401225b/" target="_blank" rel="noopener noreferrer">
          <img src={linkicon} alt="External Link" className="header-icon" />
        </a>
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/socials">Socials</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
