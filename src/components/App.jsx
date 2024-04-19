import React, { useEffect, useRef } from "react";
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
      <div className="bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-8 px-10">
            <h4 className="text-white">Hello</h4>
            <div className="flex gap-6">
              <h4 className="text-white">Project</h4>
              <h4 className="text-white">Contact</h4>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
          <div className="w-1/2 ml-10">
              <img src={myImage} alt="" className="w-full rounded-lg" style={{ borderRadius: "20px", maxHeight: "500px", maxWidth: "400px" }} />
            </div>
            <div className="w-1/2 px-10" ref={textDivRef}>
              <h3 className="text-white text-4xl">Hey,</h3>
              <h3 className="text-white text-4xl">I am Raju Kumar</h3>
              <p className="text-white text-xl">A Frontend developer</p>
              <a href="#contact" className="text-white text-xl inline-block mt-4 border-b border-white">Get In Touch!</a>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-black page-2">
        <div className="container mx-auto py-24">
          <div className="text-center">
            <div className="text-white text-4xl font-medium mb-8">About me</div>
            <p className="text-white text-xl">
              Hey, everyone I use HTML, CSS, and JavaScript form the base. React, Redux, and GSAP
              animate. Tailwind CSS styles. NodeJS powers the backend. MongoDB
              stores data. Git ensures smooth collaboration. Let&apos;s craft
              something remarkable together.
            </p>
          </div>
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
            <div className="text-white text-4xl font-medium">Let&apos;s Connect</div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/therajusah" className="text-white text-4xl"><RiLinkedinFill /></a>
              <a href="https://twitter.com/therajusah" className="text-white text-4xl"><RiTwitterFill /></a>
              <a href="https://www.facebook.com/therajusah" className="text-white text-4xl"><RiFacebookFill /></a>
              <a href="https://www.instagram.com/therajusah" className="text-white text-4xl"><RiInstagramFill /></a>
              <a href="https://github.com/therajusah" className="text-white text-4xl"><RiGithubFill /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
