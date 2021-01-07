import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects__container">
        <div className="projects__project">
          <img
            alt="project"
            src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="project__project__description">
            <h3>Project Title</h3>
          </div>
          <div className="project__tags"></div>
        </div>
        <div className="projects__project">
          <img
            alt="project"
            src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="project__project__description">
            <h3>Project Title</h3>
          </div>
          <div className="project__tags"></div>
        </div>
        <div className="projects__project">
          <img
            alt="project"
            src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="project__project__description">
            <h3>Project Title</h3>
          </div>
          <div className="project__tags"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
