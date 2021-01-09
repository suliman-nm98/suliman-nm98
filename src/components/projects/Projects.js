import React from "react";
import "./Projects.css";
function Projects() {
  var projects = [
    {
      title: "Company business portfolio",
      image: "assets/images/roco.JPG",
      live_demo: "https://roco.ooo/roco/index.html",
      github: "",
    },
    {
      title: "Event Managment Application",
      image: "assets/images/eve.PNG",
      live_demo: "",
      github: "https://github.com/suliman-nm98/EVE",
    },
    {
      title: "E-commerce platfrom",
      image: "assets/images/sellox_io.PNG",
      live_demo: "https://sellox.app/category",
      github: "",
    },
    {
      title: "E-commerce platfrom",
      image: "assets/images/sellox_io.PNG",
      live_demo: "https://sellox.app/category",
      github: "",
    },
  ];
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects__container">
        {projects.map((project, i) => {
          return (
            <div key={i} className="projects__project">
              <div className="projects__project__thumbnail">
                <img alt="project" src={project.image} />
                <div className="projects__project__overlay"></div>
                <div className="projects__project__overlayBtns">
                  {!project.github ? (
                    ""
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="fg-item-icon-inner">Github</span>
                    </a>
                  )}
                  {project.live_demo ? (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="fg-item-icon-inner">Lives Demo</span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="project__project__description">
                <h3>{project.title}</h3>
              </div>
              <div className="project__tags"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
