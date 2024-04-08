import React, { useState, useEffect } from 'react';
import Shery from "sheryjs";
import './style.css'
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="follower" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
  );
};

export default MouseFollower;
