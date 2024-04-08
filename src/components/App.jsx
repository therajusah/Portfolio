import React from "react";
import "./style.css";
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";
import myImage from "../assets/Raju_pass.jpg";

function App() {
  return (
    <div id="main">
      <div id="page1">
        <div id="nav">
          <h4>Hello</h4>
          <div id="nav-items">
            <h4>Project</h4>
            <h4>Contact</h4>
          </div>
        </div>
        <div id="page1-content">
          <div id="img-div">
            <img src={myImage} alt="" />
          </div>
          <div id="text-div">
            <h3>Hey,</h3>
            <h3>I am Raju Kumar</h3>
            <p>A Frontend developer</p>
            <a href="#contact">Get In Touch!</a>
          </div>
        </div>
        <div id="arrow"></div>
      </div>
      <div id="page2">
        <div id="page2-main">
          <div id="skills">About me</div>
          <h4>
            Welcome to my world. HTML, CSS, and JavaScript lay the foundation,
            while React, Redux, and GSAP bring it to life. Tailwind CSS adds
            style, NodeJS powers the backend, MongoDB stores the data, and Git
            ensures a seamless journey. Let's craft something extraordinary
            together.
          </h4>
        </div>
        <div id="arrow"></div>
      </div>
      <div id="page3">
        <div id="projct-div">
          <div className="project-card"></div>
          <div className="project-card"></div>
          <div className="project-card"></div>
        </div>
        <div id="foot-msg">Let's connect</div>
        <footer>
          <RiLinkedinFill />
          <RiTwitterFill />
          <RiFacebookFill />
          <RiInstagramFill />
          <RiGithubFill />
        </footer>
      </div>
    </div>
  );
}

export default App;
