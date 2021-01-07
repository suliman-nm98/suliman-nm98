import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <img
          src="https://avatars0.githubusercontent.com/u/34018201?s=400&u=e61f7958d14d15ab64aed18c576929d636cb75a6&v=4"
          alt=""
        />
        <h1>SULIMAN NOOR</h1>
        <h3>Developer, Designer, Athletic</h3>
        <div className="socialmedia__links">
          <a href="null">{/* <img src="_"> */}</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
