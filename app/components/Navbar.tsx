import React from 'react'

const Navbar = () => {
  return (
        <div className="navbar bg-base-100 justify-center fixed z-20">
            <div className="navbar-center hidden lg:flex">
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
