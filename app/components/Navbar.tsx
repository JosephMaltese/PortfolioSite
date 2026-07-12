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
        <div className="flex flex-row w-full justify-between fixed z-20 h-16 items-center" style={{ backgroundColor: '#F8F7F3' }}>
            <p className="ser ml-8">JM</p>
            <ul className="flex flex-row px-1">
                <li><a className="text-lg mx-5" href="#home">Home</a></li>
                <li><a className="text-lg mx-5" href="#education">Education</a></li>
                <li><a className="text-lg mx-5" href="#experience">Experience</a></li>
                <li><a className="text-lg mx-5" href="#projects">Projects</a></li>
                <li><a className="text-lg mx-5" href="#certifications">Certifications</a></li>
            </ul>
        </div>
  )
}

export default Navbar
