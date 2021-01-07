import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects__container">
        <div className="projects__project">
          <div className="projects__project__thumbnail">
            <img
              alt="project"
              src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <div className="projects__project__overlay">
              <div class="projects__project__overlayBtns">
                <a
                  href="https://static.live.templately.com/2020/08/c881dc8e-project-2.jpg"
                  class="eael-magnific-link"
                  data-elementor-open-lightbox="no"
                >
                  <span class="fg-item-icon-inner">Github</span>
                </a>
                <a href="#">
                  <span class="fg-item-icon-inner">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
          <div className="project__project__description">
            <h3>Project Title</h3>
          </div>
          <div className="project__tags"></div>
        </div>
        <div className="projects__project">
          <div className="projects__project__thumbnail">
            <img
              alt="project"
              src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <div className="projects__project__overlay">
              <a></a>
            </div>
          </div>
          <div className="project__project__description">
            <h3>Project Title</h3>
          </div>
          <div className="project__tags"></div>
        </div>
        <div className="projects__project">
          <div className="projects__project__thumbnail">
            <img
              alt="project"
              src="https://images.pexels.com/photos/4818188/pexels-photo-4818188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <div className="projects__project__overlay">
              <a></a>
            </div>
          </div>
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
