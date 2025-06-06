import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import githubicon from "../../assets/githubicon.png";
import linkicon from "../../assets/linkicon.png";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <li>
            <Link to="/" className={isActive("/") ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active-about-link" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive("/projects") ? "active-projects-link" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/socials" className={isActive("/socials") ? "active-socials-link" : ""}>
              Socials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
