import React from "react";
import "../components/Styles/About.css";
import pic from "../assets/pic.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about-page">
      <h1 className="about-header">About Me</h1>
      <div className="about-container">
        <div className="about-content">
          <p>
            Hi! I'm <strong>Patrick (Pornthep Bootchot)</strong>, a full-stack
            software developer with a Bachelor's degree in Computer Science from
            California State University, Long Beach. I enjoy building modern,
            responsive web applications that combine clean design with practical
            functionality.
          </p>

          <p>
            Throughout my academic and personal projects, I've gained experience
            developing both front-end and back-end applications using
            <strong> React, ASP.NET Core, Flask, Node.js,</strong> and
            <strong> Django</strong>, along with databases such as
            <strong> MongoDB</strong> and <strong> PostgreSQL</strong>. My
            primary programming languages are
            <strong> C#, Python,</strong> and <strong>JavaScript</strong>.
          </p>

          <p>
            I enjoy learning new technologies, solving challenging problems, and
            creating software that delivers real value. I'm currently seeking an
            entry-level software engineering opportunity where I can continue
            growing as a developer while contributing to meaningful projects.
          </p>

          <p>
            Thanks for visiting my portfolio! Feel free to explore my projects,
            and if you'd like to connect, I'd love to hear from you.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/socials")}
        >
            View My Socials
        </button>
        </div>

        <div className="about-image">
          <h2 className="about-subtitle">
            Full-Stack Software Developer
          </h2>
          <h2 className="about-subtitle-sub">
          React • ASP.NET Core • Python • C#
          </h2>

          <p className="about-location">
            Computer Science Graduate • CSULB
          </p>
          

          <img
            src={pic}
            alt="Patrick"
            className="avatar-placeholder"
          />
        </div>
      </div>
    </section>
  );
};

export default About;