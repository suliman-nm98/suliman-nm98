import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

function Banner() {
  var socialMedia_links = [
    "https://www.linkedin.com/in/suliman-nm98",
    "https://www.instagram.com/suliman_code98/",
    "https://www.github.com/suliman-nm98/",
    "https://twitter.com/Suliman_Guzran",
  ];
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__container__background">
          <img
            src="https://avatars0.githubusercontent.com/u/34018201?s=400&u=e61f7958d14d15ab64aed18c576929d636cb75a6&v=4"
            alt=""
          />
        </div>
        <h1>
          Hi, I'm Suliman
          <span role="img" aria-label="handshake">
            🤝
          </span>
        </h1>
        <h3>Developer, Designer & Athletic</h3>
        <div className="socialMedia__links">
          <a
            href={socialMedia_links[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
          <a
            href={socialMedia_links[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a
            href={socialMedia_links[2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a
            href={socialMedia_links[3]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
          <a
            href="mailto:suliman.nm98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
