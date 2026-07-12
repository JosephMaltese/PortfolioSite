import React from 'react'
import ExperienceItem from './ExperienceItem';
import {ExperienceData} from "@/app/types/ExperienceData";
import HorizontalRule from "@/app/components/HorizontalRule";

const experienceDataList = [
    new ExperienceData(
        'Soti・Co-op',
        'Software Developer Intern',
        'Worked on the Android For Work team to deliver a major feature for the MobiControl platform, developing frontend functionality in Angular and collaborating with engineers and product managers from implementation to release. Also resolved high-priority backend issues in .NET through root cause analysis and targeted fixes.',
        'January 2026 - Present',
        '/soti.jpg',
    ),
    new ExperienceData(
        'McMaster Start Coding・School Club',
        "Jr. VP Software Architecture",
        'Worked alongside fellow executives to manage and organize the software architecture team, leading weekly scrum meetings, reviewing pull requests, driving project initiatives, and contributing to the full-stack development of the STaBL.rocks site.',
        "September 2025 - August 2026",
        '/mcmasterStartCoding.jpg'
    ),
    new ExperienceData(
        'Fondation STaBL Foundation・Internship',
        'Research & Development Intern',
        'Collaborated on Music Creator 2.0 under Dr. Christopher Anand (Department of Computing & Software, McMaster University), an accessible educational tool that teaches programming through music for visually impaired students. Contributed full-stack development using JavaScript for the frontend, Node.js for the backend, and PostgreSQL for data management.',
        'April 2025 - August 2025',
        '/fondation_stabl_foundation_logo.jpeg'
    ),
    new ExperienceData(
        'Google Developer Student Club・School Club',
        'Frontend Developer',
        'Worked with a team of software developers and designers to build and maintain the club\'s new website for its 2025 rebranding. Used the Next.js framework to deliver a modern and performant web experience.',
        'January 2025 - April 2025',
        '/gdsc_logo.png'
    ),
    new ExperienceData(
        'McMaster Start Coding・School Club',
        'Full-Stack Developer',
        'Worked with a team of software developers to maintain and develop the STaBL.rocks web application, which is used by McMaster Start Coding to teach over 50,000 K-PhD students the fundamentals of programming. Used the full-stack Haskell web framework, IHP.',
        'September 2024 - August 2025',
        '/mcmasterStartCoding.jpg'
    ),
    new ExperienceData(
        'HammerHacks・Hackathon',
        'Technical Mentor',
        'Helped students brainstorm creative project ideas which fit the theme of the hackathon. Gave suggestions for which technologies could help them achieve their goals. Assisted with any technical issues that students faced throughout the course of the competition.',
        'November 23, 2024',
        '/hammerHacks.webp'
    )
]
const Experience = () => {
    return (
        <div className="pl-[7%] pr-[7%] mt-6" id="experience">
            <h2 className="font-bold text-2xl mb-3">Experience</h2>
            <ul>
                {experienceDataList.map((experienceDataItem, index) => {
                    return <li key={index}>
                        <ExperienceItem experienceData={experienceDataItem}/>
                    </li>
                })}
            </ul>
            <HorizontalRule/>
        </div>
    );
}

export default Experience
