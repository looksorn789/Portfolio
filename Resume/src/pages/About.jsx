import React from "react";
import '../components/Styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-header">About</h2>
      <div className="about-container">
        <div className="left-content">
          <p>Welcome to the About page! Here is some information about me.</p>
        </div>
        <div className="right-content">
          <p>This is where you can add additional content or elements.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
