import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import githubicon from "../../assets/githubicon.png";
import linkicon from "../../assets/linkicon.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">

      <div className="header-left">
        <a
          href="https://github.com/looksorn789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubicon} alt="GitHub" className="header-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/pornthep-bootchot-35401225b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkicon} alt="LinkedIn" className="header-icon" />
        </a>
      </div>

      <div className="header-title">
        <h2>Patrick Bootchot</h2>
        <span>Full Stack Developer</span>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">

          <li>
            <Link
              to="/"
              className={isActive("/") ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={isActive("/projects") ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/socials"
              className={isActive("/socials") ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Socials
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
};

export default Header;