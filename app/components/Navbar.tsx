import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 900); // Hide navbar if the screen width is <= 480px
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener
    };
  }, []);
  return isVisible && (
        <div className="navbar bg-base-100 justify-center fixed z-20">
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-lg mx-5" href="#home">Home</a></li>
                <li><a className="text-lg mx-5" href="#projects">Projects</a></li>
                <li><a className="text-lg mx-5" href="#Experience">Experience</a></li>
                <li><a className="text-lg mx-5" href="#Technologies">Technologies</a></li>
                <li><a className="text-lg mx-5" href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar
