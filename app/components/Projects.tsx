import React from 'react'
import Card from "./Card";
import HorizontalRule from "@/app/components/HorizontalRule";

const Projects = () => {
  return (
    <div className="ml-[7%] mr-[7%] mb-10" id="projects">
        <h2 className="font-bold text-2xl mb-3 mt-5">Recent Work</h2>

        <div className='flex flex-col items-center'>
            <Card imageName="formTracker.gif" title="FormTracker" description="An AI-powered full-stack fitness platform that analyzes uploaded workout videos to estimate repetitions and evaluate exercise form using computer vision and pose estimation." link="https://github.com/JosephMaltese/FormTracker"/>
            <Card imageName='stabl.rocks.png' title='STaBL.rocks' description="An online Elm IDE used by McMaster Start Coding (MSC) to teach over 50,000 students the fundamentals of programming. Developed in Haskell using the IHP full-stack framework alongside a team of volunteer software developers." link='https://stabl.rocks/' />
            <Card imageName='gdscSite.png' title='GDSC McMaster U site' description="The official site for McMaster's Google Developer Student Club (GDSC). Developed in NextJS alongside a team of Software Developers on the GDSC's Marketing & Branding Team." link='https://gdscmcmasteru.ca/' />
            <Card imageName="uoft_hacks_demo.gif" title="Moodify" description="Moodify is an AI-powered journaling platform developed at UofTHacks 12, designed to help users reflect, articulate their thoughts, and foster positive thinking. It uses generative AI technologies to summarize journal entries and offer unique perspectives." link="https://github.com/JosephMaltese/Moodify"/>
            <Card imageName="homePage.png" title="Wedding RSVP Site" description="A full-stack web application made for my brother's wedding to monitor guest attendance and allow guests to RSVP virtually" link="https://github.com/JosephMaltese/WeddingSite-Frontend"/>
            <Card imageName="Sudoku2.png" title="Sudoku Solver GUI" description="A GUI developed in C using the GTK toolkit to create an interactive application that solves Sudoku puzzles using a recursive backtracking algorithm." link="https://github.com/JosephMaltese/Sudoku-Solver"/>
        </div>
        <HorizontalRule/>
    </div>
  )
}

export default Projects