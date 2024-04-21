import  { useEffect, useRef, useState } from "react";
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
        <div className="min-h-screen bg-black">
          <div className="container px-4 mx-auto md:px-10">
            <div className="flex items-center justify-between py-8">
              <h4 className="text-2xl text-white md:text-3xl">Hello</h4>
              <div className="flex gap-6">
                <h4 className="text-2xl text-white md:text-3xl">Project</h4>
                <h4 className="text-2xl text-white md:text-3xl">Contact</h4>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto md:px-10">
            <div className="flex flex-col items-center justify-center md:flex-row">
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
                className="px-4 mt-8 md:w-1/2 md:px-10 md:mt-0"
                ref={textDivRef}
              >
                <h3 className="text-3xl text-white md:text-5xl">Hey,</h3>
                <h3 className="text-3xl text-white md:text-5xl">
                  I am Raju Kumar
                </h3>
                <p className="text-xl text-white md:text-2xl">
                  A Frontend developer
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-xl text-white border-b border-white"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black page-2">
          <div className="container py-24 mx-auto">
            <div className="text-center">
              <div className="mb-8 text-4xl font-medium text-white">
                About me
              </div>
              <p className="text-xl text-white">
                <>
                  <h4 className="mb-5 text-2xl font-medium text-white">
                    HTML, CSS, and JavaScript
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    React, Redux, and GSAP
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    Tailwind CSS styles,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    NodeJS,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    MongoDB,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">Git,</h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    Let's craft something remarkable together.
                  </h4>
                </>
              </p>
            </div>
          </div>
        </div>
        <div className="page-3 h-[90vh] w-[100%] bg-black flex flex-col justify-center items-center">
          <h2 className="mb-8 text-4xl font-bold text-white">
            Languages & Frameworks
          </h2>
          <div className="flex items-center justify-center">
            <SiHtml5 className="mr-8 text-6xl icon html" />
            <SiCss3 className="mr-8 text-6xl icon css" />
            <SiJavascript className="mr-8 text-6xl icon javascript" />
            <SiReact className="mr-8 text-6xl icon react" />
            <SiTypescript className="mr-8 text-6xl icon typescript" />
            <SiTailwindcss className="mr-8 text-6xl icon tailwind" />
            <SiMongodb className="mr-8 text-6xl icon mongodb" />
            <SiGit className="mr-8 text-6xl icon git" />

          </div>
        </div>

        <div className="bg-black">
          <div className="container py-24 mx-auto">
            <div className="flex justify-between">
              <div className="w-1/4 mx-4 bg-blue-500 rounded-lg h-96"></div>
              <div className="w-1/4 mx-4 bg-blue-500 rounded-lg h-96"></div>
              <div className="w-1/4 mx-4 bg-blue-500 rounded-lg h-96"></div>
              <div className="w-1/4 mx-4 bg-blue-500 rounded-lg h-96"></div>
            </div>
            <div className="flex justify-center mt-16">
              <div className="text-4xl font-medium text-white">
                Let&apos;s Connect
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="text-4xl text-white"
                >
                  <RiLinkedinFill />
                </a>
                <a
                  href="https://twitter.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://www.facebook.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://github.com/therajusah"
                  className="text-4xl text-white"
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
