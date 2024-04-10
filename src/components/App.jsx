import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
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
  const scrollRef = useRef(null);
  const textDivRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scrollInstance.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.from(textDivRef.current.children, {
      y: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.25,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
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
            <div id="text-div" ref={textDivRef}>
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
            <div className="project-card"></div>            
          </div>
          <div className="footer-container">
            <div className="foot-msg">
              <h2>Let's Connect</h2>
            </div>
            <footer id="footer">
              <div className="footer-links">
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="footer-link"
                >
                  <RiLinkedinFill />
                </a>
                <a
                  href="https://twitter.com/therajusah"
                  className="footer-link"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://www.facebook.com/therajusah"
                  className="footer-link"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/therajusah"
                  className="footer-link"
                >
                  <RiInstagramFill />
                </a>
                <a href="https://github.com/therajusah" className="footer-link">
                  <RiGithubFill />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
