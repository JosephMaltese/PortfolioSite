import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [canViewMobileMenu, setCanViewMobileMenu] = useState(false);

  const handleMenuClick = () => {
      setCanViewMobileMenu(!canViewMobileMenu);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 700);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener
    };
  }, []);
  return isDesktop ? (
        <div className="flex flex-row shadow-md w-full justify-between fixed z-20 h-16 items-center" style={{ backgroundColor: '#F8F7F3' }}>
            <p className="ser ml-8">JM</p>
            <ul className="flex flex-row px-1">
                <li><a className="text-lg p-5 py-3 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#home">Home</a></li>
                <li><a className="text-lg p-5 py-3 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#education">Education</a></li>
                <li><a className="text-lg p-5 py-3 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#experience">Experience</a></li>
                <li><a className="text-lg p-5 py-3 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#projects">Projects</a></li>
                <li><a className="text-lg p-5 py-3 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#certifications">Certifications</a></li>
            </ul>
        </div>
  ) : canViewMobileMenu ? (
      <div className="fixed inset-0 z-40 flex min-h-screen flex-col bg-[#F8F7F3]">
          <div className="flex flex-row w-full justify-end h-16 items-center">
              <button onClick={handleMenuClick}>
                  <Image src="/burger-menu.svg" alt="menu icon" width={25} height={25} className="mr-8"/>
              </button>
          </div>
          <ul className="flex flex-col items-center my-auto gap-14">
              <li><a onClick={handleMenuClick} className="text-3xl p-5 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#home">Home</a></li>
              <li><a onClick={handleMenuClick} className="text-3xl p-5 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#education">Education</a></li>
              <li><a onClick={handleMenuClick} className="text-3xl p-5 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#experience">Experience</a></li>
              <li><a onClick={handleMenuClick} className="text-3xl p-5 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#projects">Projects</a></li>
              <li><a onClick={handleMenuClick} className="text-3xl p-5 hover:bg-[#eeece6] transition-colors rounded-2xl" href="#certifications">Certifications</a></li>
          </ul>

      </div>
  ) : (
      <div className="flex flex-row shadow-md w-full justify-between fixed z-20 h-16 items-center" style={{ backgroundColor: '#F8F7F3' }}>
          <p className="ser ml-8">JM</p>
          <button onClick={handleMenuClick}>
              <Image src="/burger-menu.svg" alt="menu icon" width={25} height={25} className="mr-8"/>
          </button>
      </div>
  );
}

export default Navbar
