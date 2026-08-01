import React from "react";
import "../components/Styles/Projects.css";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-page">
      <h1 className="projects-header">Projects</h1>

      <div className="projects-content">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-section">
              <h4>Tech Stack</h4>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h4>Key Features</h4>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="button-group">
              <button
                className="project-button"
                onClick={() => window.open(project.github, "_blank")}
              >
                GitHub
              </button>

              {project.demo && (
                <button
                  className="project-button"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;