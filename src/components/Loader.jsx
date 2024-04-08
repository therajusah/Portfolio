import React, { useEffect } from 'react';
import './loader.css';
import gsap from 'gsap';

const Loader = () => {
  useEffect(() => {
    function loadingAnimation() {
      var tl = gsap.timeline();
      tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
      });
      tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
          var h5timer = document.querySelector("#line1-part1 h5");
          var grow = 0;
          setInterval(function () {
            if (grow < 100) {
              h5timer.innerHTML = grow++;
            } else {
              h5timer.innerHTML = grow;
            }
          }, 27);
        },
      });
      tl.to(".line h2", {
        animationName: "loaderAnime",
        opacity: 1,
      });
      tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2.6,
      });
      tl.from("#page1", {
        delay: 0.1,
        y: 1600,
        duration: 0.5,
        ease: "power4.inOut",
      });
      tl.to("#loader", {
        display: "none",
      });
      tl.from("#nav", {
        opacity: 0,
      });
      tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
        y: 140,
        stagger: 0.2,
      });
      tl.from(
        "#hero1, #page2",
        {
          opacity: 0,
        },
        "-=1.2"
      );
    }
    loadingAnimation();
  }, []);

  return (
    <div id="loader">
      <div className="line">
        <div id="line1-part1">
          <h5>00</h5>
          <h6>- 100</h6>
        </div>
        <h1>Your</h1>
      </div>
      <div className="line">
        <h1>Web Experiences</h1>
      </div>
      <div className="line">
        <h1>is loading right</h1>
        <h2>Now</h2>
      </div>
    </div>
  );
};

export default Loader;
