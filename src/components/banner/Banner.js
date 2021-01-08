import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <img
          src="https://avatars0.githubusercontent.com/u/34018201?s=400&u=e61f7958d14d15ab64aed18c576929d636cb75a6&v=4"
          alt=""
        />
        <h1>Hi, I'm Suliman🤝</h1>
        <h3>Developer, Designer & Athletic</h3>
        <div className="socialMedia__links">
          <a href="https://www.linkedin.com/in/suliman-nm98" target="_blank">
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
          <a href="https://www.instagram.com/suliman_code98/" target="_blank">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a href="https://www.github.com/suliman-nm98/" target="_blank">
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a href="https://twitter.com/Suliman_Guzran" target="_blank">
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
