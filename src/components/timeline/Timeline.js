import React from "react";
import "./Timeline.css";
function Timeline() {
  return (
    <div className="timeline">
      <h1>Timeline</h1>
      <div className="timeline__itemLeft timeline__item">
        <h5 className="timeline__title">Web Developer</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="timeline__itemRight timeline__item">
        <h5 className="timeline__title">Web Developer</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <ul className="timeline__list">
        {/* <!-- Item 1 --> */}
        <li>
          <div
            className="direction-l"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">Web Developer</span>
              <span className="time-wrapper">
                <span className="time">2020 - present</span>
              </span>
            </div>
            <div className="desc">Helping a company overhaul their website</div>
          </div>
        </li>
        <li>
          <div
            className="direction-r"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">Software Enigneer</span>
              <span className="time-wrapper">
                <span className="time">2019-2020</span>
              </span>
            </div>
            <div className="desc">
              Worked with a skilled friend to help his startup and building a
              platform for young african entreprenours.
            </div>
          </div>
        </li>
        <li>
          <div
            className="direction-l"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">Android Developer Intern</span>
              <span className="time-wrapper">
                <span className="time">2017-2018</span>
              </span>
            </div>
            <div className="desc">
              Built a social media applicaiton with Google Maps.
            </div>
          </div>
        </li>

        <li>
          <div
            className="direction-r"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">Asia Pacific University</span>
              <span className="time-wrapper">
                <span className="time">2016-2019</span>
              </span>
            </div>
            <div className="desc">
              Graduated as a skilled Software Enigneer with outstanding skills.
            </div>
          </div>
        </li>

        <li>
          <div
            className="direction-l"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">High School</span>
              <span className="time-wrapper">
                <span className="time">2001 - 2014</span>
              </span>
            </div>
            <div className="desc">
              Graduated high school with a decision to make it into the Software
              Industry
            </div>
          </div>
        </li>

        <li>
          <div
            className="direction-r"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="flag-wrapper">
              <span className="flag">Birth</span>
              <span className="time-wrapper">
                <span className="time">1998-04-05</span>
              </span>
            </div>
            {/* <div className="desc"></div> */}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
