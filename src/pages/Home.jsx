import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-page">
      <div className="intro-section">
        <h1 className="home-header">Welcome to My Portfolio</h1>
        <p className="home-subtext">
          Discover my projects, learn more about me, and explore my world of creativity.
        </p>
        <button className="get-to-know-me" onClick={handleButtonClick}>
          Get to Know Me
        </button>
      </div>
      <div className="floating-elements">
        <div className="circle"></div>
        <div className="square"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Home;
