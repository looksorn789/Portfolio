import React from "react";
import "../components/Styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-content">
        {/* CourseHub Project Card */}
        <div className="project-card">
          <h3>CourseHub</h3>
          <p>
            CourseHub is a student-driven forum platform where students can collaborate 
            and assist each other with course materials. Users can join different courses, 
            post discussions, comment, like posts, and follow one another.
          </p>
          <p>
            <strong>Technologies:</strong> Python Flask, React, MongoDB, Supabase
          </p>
          <p>
            <strong>Features:</strong> Authentication, Profiles, Real-time Updates, Course Discussions
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/yourusername/CourseHub", "_blank")}>
            View on GitHub
          </button>
        </div>

        {/* Chatting System Project Card */}
        <div className="project-card">
          <h3>Distributed Chatting System</h3>
          <p>
            A distributed communication system where users can join chat rooms, send messages, and communicate in real time over a network.
            This project implements server-client architecture using Python.
          </p>
          <p>
            <strong>Technologies:</strong> Python, Socket Programming
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Join chat rooms and send messages</li>
              <li>Server broadcasts messages to all clients</li>
              <li>List connected clients</li>
              <li>Server and client stop commands</li>
            </ul>
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/MNRainDrop/CECS-327-Project1", "_blank")}>
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
