import React from "react";
import "./Timeline.css";
function Timeline() {
  var job_timeline = [
    {
      position: "Senior Sofware Engineer",
      from: "July-2020",
      to: "Present",
      description: `Developed a cross-platform application using flutter, Developed back-end with Node.js & firebase, Implemented Design techniques, Created a consistent and cross platform UI, Responsible for managing project execution, Ensure software quality and testing
`,
    },
    {
      position: "Web Developer",
      from: "May-2020",
      to: "July-2020",
      description: `Testing and documenting system for bugs and errors,review code for enhanced performance and security, implement 3rd party API's and merge software flow and design, educated junior developers on software architecture and developing techniques
      `,
    },
    {
      position: "Software Engineer",
      from: "Oct-2019",
      to: "May-2020",
      description: `Developed a full-stack e-commerce web application "Sellox.io", using React that allows
        small businesses to sell their products online. 
        Develop backend using Node.js and Firebase to store data.
        Communicating with clients and brainstorming ideas to enhance platform user
        experience.Project task management and version controlling using Git, Bitbucket and Jira.`,
    },
    {
      position: "Software Engineer (Intern)",
      from: "Nov-2017",
      to: "Feb-2018",
      description: `Responsible for developing a native android social media application using Java, that
was a mashup of Instagram and Google Maps to helped users find accurate locations for
activities that were happening around them.Developed and implemented image compressing to reduce database cost. Implement UI changes. Develop white-box and black-box testing to improve quality and avoid bugs and errors in
the future.`,
    },
    {
      position: "Asia Pacific University",
      from: "Jan-2016",
      to: "May-2019",
      description: `Bsc (Hons) Software Engineering,`,
    },
    {
      position: "High School",
      from: "Jan-2001",
      to: "Dec-2013",
      description: "",
    },
    {
      position: "Birthday",
      from: "May-04-1998",
      to: "",
      description: "",
    },
  ];
  return (
    <ul className="timeline">
      {job_timeline.map((job, i) => {
        if (i % 2 == 0) {
          return (
            <li key={i}>
              <div
                className="direction-l"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="flag-wrapper">
                  <span className="flag">{job.position}</span>
                  <span className="time-wrapper">
                    <span className="time">
                      {job.from} - {job.to}
                    </span>
                  </span>
                </div>
                <div className="desc">{job.description}</div>
              </div>
            </li>
          );
        }
        return (
          <li key={i}>
            <div
              className="direction-r"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="flag-wrapper">
                <span className="flag">{job.position}</span>
                <span className="time-wrapper">
                  <span className="time">
                    {job.from} - {job.to}
                  </span>
                </span>
              </div>
              <div className="desc">{job.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Timeline;
