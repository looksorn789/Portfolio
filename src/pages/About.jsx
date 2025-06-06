import React from "react";
import "../components/Styles/About.css";
import pic from "../assets/pic.jpg"; // Importing the test picture
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/socials");
  };

  return (
    <div className="about-page">
      <h2 className="about-header">About</h2>
      <div className="about-container">
        <div className="left-content">
          <p>
            Hi everyone! My name is Pornthep Bootchot, you can also just call
            me Patrick or Pat. I am an aspiring full-stack developer. I want to
            create your websites, make cool animations, and build amazing
            things!<br />
            <br />
            I have been coding for 5 years, including my time at school. I have graduated with 
            my bachelor's degree in computer science at
            California State University of Long Beach. My preferred programming
            languages are Python, C#, and JavaScript. I’ve worked with
            frameworks like Django, Angular, Node.js, React, Flask, and more.
            This website was built using React Vite! <br />
            <br />
            If you want to contact me, here’s a little cool button for
            you:
          </p>
          <button className="socials" onClick={handleButtonClick}>
            My Socials
          </button>
        </div>
        <div className="right-content">
          <div
            className="avatar-placeholder"
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
