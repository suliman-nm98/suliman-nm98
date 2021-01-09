import React from "react";
import "./Home.css";
import Banner from "../banner/Banner";
import About from "../about/About";
import Projects from "../projects/Projects";
import Timeline from "../timeline/Timeline";
function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Banner />
      </div>
      <div className="home__row">
        <Projects />
      </div>
      <div className="home__row">
        <About />
      </div>
      <div className="home__row">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
