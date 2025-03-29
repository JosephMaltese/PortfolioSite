import React from 'react'
import { Timeline } from './ui/timeline';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div id="Experience">
      <div className="flex justify-center items-center">
        <h2 className="text-sky-300 text-4xl sm:text-5xl font-bold mt-3">My Experience</h2>
      </div>
        <Timeline data={[
          {
            title: "2025", content: (
              <div>
                <ExperienceItem organizationName='Google Developer Student Club | McMaster University' role="Software Developer - Marketing & Branding Team" description='Works with a team of software developers and designers to build and maintain the club&apos;s new website for its 2025 rebranding. Uses the Next.js framework to deliver a modern and performant web experience.' date="January 2025 - Present" imageName='gdsc_logo.png'/>
              </div>
            )
          },
          { title:"2024", content: (
            <div>
              <ExperienceItem organizationName='McMaster Start Coding | McMaster University' role="Software Architecture Team Member" description='Works with a team of volunteer software developers to maintain and develop the STaBL.rocks web application, which is used by McMaster Start Coding to teach K-PhD students the fundamentals of programming. Utilizes scrum methodologies. Uses the full-stack Haskell web framework, IHP.' date="September 2024-Present" imageName='mcmasterStartCoding.jpg'/>
              <ExperienceItem organizationName='HammerHacks | McMaster University' role="Technical Mentor" description='Helped students brainstorm creative project ideas which fit the theme of the hackathon. Gave suggestions for which technologies could help them achieve their goals. Assisted with any technical issues that students faced throughout the course of the competition.' date="November 23, 2024" imageName='hammerHacks.webp'/>
            </div>
          ) },
        ]} />
    </div>
  )
}

export default Experience
