import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import myImage from "../assets/Raju_pass.jpg";

import {
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
} from "react-icons/si";

function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const followerRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to(followerRef.current, {
      x: mousePosition.x,
      y: mousePosition.y,
      ease: "power4.out",
      duration: 0.5,
    });
  }, [mousePosition]);

  return (
    <div
      ref={followerRef}
      className="absolute top-0 left-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
    </div>
  );
}

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
    });
  }, []);

  return (
    <div>
      <style>
        {`
          body {
            cursor: none;
          }
        `}
      </style>
      <MouseFollower />
      <div ref={scrollRef} data-scroll-container>
        <div className="bg-black min-h-screen">
          <div className="container mx-auto px-4 md:px-10">
            <div className="flex justify-between items-center py-8">
              <h4 className="text-white text-2xl md:text-3xl">Hello</h4>
              <div className="flex gap-6">
                <h4 className="text-white text-2xl md:text-3xl">Project</h4>
                <h4 className="text-white text-2xl md:text-3xl">Contact</h4>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2 md:ml-10">
                <img
                  src={myImage}
                  alt=""
                  className="w-full rounded-lg"
                  style={{
                    marginTop: "2.2rem",
                    borderRadius: "20px",
                    maxHeight: "450px",
                    maxWidth: "380px",
                  }}
                />
              </div>
              <div
                className="md:w-1/2 px-4 md:px-10 mt-8 md:mt-0"
                ref={textDivRef}
              >
                <h3 className="text-white text-3xl md:text-5xl">Hey,</h3>
                <h3 className="text-white text-3xl md:text-5xl">
                  I am Raju Kumar
                </h3>
                <p className="text-white text-xl md:text-2xl">
                  A Frontend developer
                </p>
                <a
                  href="#contact"
                  className="text-white text-xl inline-block mt-4 border-b border-white"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black page-2">
          <div className="container mx-auto py-24">
            <div className="text-center">
              <div className="text-white text-4xl font-medium mb-8">
                About me
              </div>
              <p className="text-white text-xl">
                <>
                  <h4 className="text-white text-2xl font-medium mb-5">
                    HTML, CSS, and JavaScript
                  </h4>

                  <h4 className="text-white text-2xl font-medium mb-5">
                    React, Redux, and GSAP
                  </h4>

                  <h4 className="text-white text-2xl font-medium mb-5">
                    Tailwind CSS styles,
                  </h4>

                  <h4 className="text-white text-2xl font-medium mb-5">
                    NodeJS,
                  </h4>

                  <h4 className="text-white text-2xl font-medium mb-5">
                    MongoDB,
                  </h4>

                  <h4 className="text-white text-2xl font-medium mb-5">Git,</h4>

                  <h4 className="text-white text-2xl font-medium mb-5">
                    Let's craft something remarkable together.
                  </h4>
                </>
              </p>
            </div>
          </div>
        </div>
        <div className="page-3 h-[90vh] w-[100%] bg-black flex flex-col justify-center items-center">
          <h2 className="text-white text-4xl font-bold mb-8">
            Languages & Frameworks
          </h2>
          <div className="flex justify-center items-center">
            <SiHtml5 className="icon html text-6xl mr-8" />
            <SiCss3 className="icon css text-6xl mr-8" />
            <SiJavascript className="icon javascript text-6xl mr-8" />
            <SiReact className="icon react text-6xl mr-8" />
            <SiTypescript className="icon typescript text-6xl mr-8" />
            <SiTailwindcss className="icon tailwind text-6xl mr-8" />
            <SiMongodb className="icon mongodb text-6xl mr-8" />
            <SiGit className="icon git text-6xl mr-8" />
          </div>
        </div>

        <div className="bg-black">
          <div className="container mx-auto py-24">
            <div className="flex justify-between">
              <div className="w-1/4 h-96 bg-blue-500 rounded-lg mx-4"></div>
              <div className="w-1/4 h-96 bg-blue-500 rounded-lg mx-4"></div>
              <div className="w-1/4 h-96 bg-blue-500 rounded-lg mx-4"></div>
              <div className="w-1/4 h-96 bg-blue-500 rounded-lg mx-4"></div>
            </div>
            <div className="flex justify-center mt-16">
              <div className="text-white text-4xl font-medium">
                Let&apos;s Connect
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="text-white text-4xl"
                >
                  <RiLinkedinFill />
                </a>
                <a
                  href="https://twitter.com/therajusah"
                  className="text-white text-4xl"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://www.facebook.com/therajusah"
                  className="text-white text-4xl"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/therajusah"
                  className="text-white text-4xl"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://github.com/therajusah"
                  className="text-white text-4xl"
                >
                  <RiGithubFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
