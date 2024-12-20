import React from 'react'
import Card from "./Card";

const Projects = () => {
  return (
    <div className="h-96" id="projects">
        <div className="flex justify-center">
            <h2 className="text-sky-300 text-5xl font-bold mt-20">Here's Some Of My Recent Projects</h2>
        </div>

        <div>
            <div className='flex flex-row justify-around mt-5'>
                <Card imageName="homePage.png" title="Wedding RSVP Site" description="A full-stack web application for my brother's upcoming wedding to monitor guest attendance and allow guests to RSVP virtually." link="https://github.com/JosephMaltese/WeddingSite"/>
                <Card imageName="stablit.png" title="STaBLit" description="A reddit clone created using the IHP framework for Haskell. Includes features for user authentication and login, creating and editing posts, recursive comments, and post reactions." link="https://github.com/JosephMaltese/STaBLit"/>
            </div>
            <div className='flex flex-row justify-around mt-12'>
                <Card imageName="homePage.png" title="Wedding RSVP site" description="description" link="https://github.com/JosephMaltese/WeddingSite"/>
                <Card imageName="homePage.png" title="Wedding RSVP site" description="description" link="https://github.com/JosephMaltese/WeddingSite"/>
            </div>
        </div>
    </div>
  )
}

export default Projects
