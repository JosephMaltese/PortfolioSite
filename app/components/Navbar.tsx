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
    return (
        <>
            {/* Normal navbar */}
            <nav
                className="fixed z-20 flex h-16 w-full items-center justify-between shadow-md"
                style={{ backgroundColor: '#F8F7F3' }}
            >
                <p className="ser ml-8">JM</p>

                {isDesktop ? (
                    <ul className="flex flex-row px-1">
                        <li><a className="rounded-2xl p-5 text-lg transition-colors hover:bg-[#eeece6]" href="#home">Home</a></li>
                        <li><a className="rounded-2xl p-5 text-lg transition-colors hover:bg-[#eeece6]" href="#education">Education</a></li>
                        <li><a className="rounded-2xl p-5 text-lg transition-colors hover:bg-[#eeece6]" href="#experience">Experience</a></li>
                        <li><a className="rounded-2xl p-5 text-lg transition-colors hover:bg-[#eeece6]" href="#projects">Projects</a></li>
                        <li><a className="rounded-2xl p-5 text-lg transition-colors hover:bg-[#eeece6]" href="#certifications">Certifications</a></li>
                    </ul>
                ) : (
                    <button
                        onClick={handleMenuClick}
                        aria-label={canViewMobileMenu ? 'Close menu' : 'Open menu'}
                    >
                        <Image
                            src="/burger-menu.svg"
                            alt=""
                            width={25}
                            height={25}
                            className="mr-8"
                        />
                    </button>
                )}
            </nav>

            {/* Mobile menu — always mounted, so it can animate closed */}
            <div
                className={`fixed inset-0 z-30 flex min-h-screen flex-col bg-[#F8F7F3]
        transition-all duration-300 ease-in-out
        ${canViewMobileMenu
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : '-translate-y-4 opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex h-16 w-full items-center justify-end">
                    <button
                        onClick={handleMenuClick}
                        aria-label="Close menu"
                    >
                        <Image
                            src="/burger-menu.svg"
                            alt=""
                            width={25}
                            height={25}
                            className="mr-8"
                        />
                    </button>
                </div>

                <ul className="my-auto flex flex-col items-center gap-14">
                    <li><a onClick={() => setCanViewMobileMenu(false)} className="rounded-2xl p-5 text-3xl transition-colors hover:bg-[#eeece6]" href="#home">Home</a></li>
                    <li><a onClick={() => setCanViewMobileMenu(false)} className="rounded-2xl p-5 text-3xl transition-colors hover:bg-[#eeece6]" href="#education">Education</a></li>
                    <li><a onClick={() => setCanViewMobileMenu(false)} className="rounded-2xl p-5 text-3xl transition-colors hover:bg-[#eeece6]" href="#experience">Experience</a></li>
                    <li><a onClick={() => setCanViewMobileMenu(false)} className="rounded-2xl p-5 text-3xl transition-colors hover:bg-[#eeece6]" href="#projects">Projects</a></li>
                    <li><a onClick={() => setCanViewMobileMenu(false)} className="rounded-2xl p-5 text-3xl transition-colors hover:bg-[#eeece6]" href="#certifications">Certifications</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar
