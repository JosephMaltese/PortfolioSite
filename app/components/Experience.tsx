import React from 'react'
import { Timeline } from './ui/timeline';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div id="Experience">
      <div className="flex justify-center items-center">
        <h2 className="text-sky-300 text-5xl font-bold mt-3">My Experience</h2>
      </div>
        <Timeline data={[
          { title:"2024", content: (
            <div>
              <ExperienceItem organizationName='McMaster Start Coding | McMaster University' role="Software Engineer" description='Works with a team of volunteer software developers to maintain and develop the STaBL.rocks web application, which is used by McMaster Start Coding to teach K-PhD students the fundamentals of programming. Utilizes scrum methodologies. Uses the full-stack Haskell web framework, IHP.' date="September 2024-Present" imageName='mcmasterStartCoding.jpg'/>
              <ExperienceItem organizationName='HammerHacks | McMaster University' role="Technical Mentor" description='Helped students brainstorm creative project ideas which fit the theme of the hackathon. Gave suggestions for which technologies could help them achieve their goals. Assisted with any technical issues that students faced throughout the course of the competition.' date="November 23, 2024" imageName='hammerHacks.webp'/>
            </div>
          ) },
          { title:"2023", content: (
            <div>
              <ExperienceItem organizationName='Costco Wholesale' role="Meat Department Staff" description='Produced, packaged, and stocked meat-related products to meet the daily demands of Costco shoppers. Performed mandatory opening and closing shift operations. Communicated with co-workers to solve any problems during daily operations. Delivered excellent customer service that met Costco’s standards of putting the member first. Always worked to improve the efficiency of tasks.' date="July 2023 - May 2024" imageName='costco_wholesale_canada_logo.jpeg'/>
              <ExperienceItem organizationName='Effort Trust' role="Summer Student" description='Worked alongside another student as part of a two-week work contract to organize and clean storage rooms at Effort Square. Sorted through boxes of files to put them back into the correct order and prepared old documents for shredding. Worked in the main office to organize and box lease documents to be brought to storage rooms. Always finished tasks on time and with minimal required supervision.' date="June 2023" imageName='effortTrust.png'/>
            </div>
          ) },

        ]} />
    </div>
  )
}

export default Experience
