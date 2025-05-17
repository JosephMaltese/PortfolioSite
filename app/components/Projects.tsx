import React from 'react'
import Card from "./Card";

const Projects = () => {
  return (
    <div className="mb-32" id="projects">
        <div className="flex justify-center">
            <h2 className="text-sky-300 text-4xl sm:text-5xl font-bold mt-20 text-center max-w-[80%]">What I&apos;ve Been Working On Recently</h2>
        </div>

        <div className='flex flex-col items-center'>
            <div className='flex sm:flex-row flex-col justify-center mt-5'>
                <Card imageName='stabl.rocks.png' title='STaBL.rocks' description="An online ELM IDE used by McMaster Start Coding (MSC) to teach K-PhD students the fundamentals of programming. Developed in Haskell using the IHP full-stack framework alongside a team of volunteer software developers." link='https://stabl.rocks/' />
                <Card imageName='gdscSite.png' title='GDSC McMaster U site' description="The official site for McMaster's Google Developer Student Club (GDSC). Developed in NextJS alongside a team of Software Developers on the GDSC's Marketing & Branding Team." link='https://gdscmcmasteru.ca/' />
            </div>
            <div className='flex sm:flex-row flex-col justify-center mt-5'>
                <Card imageName="uoft_hacks_demo.gif" title="Moodify" description="Moodify is an AI-powered journaling platform developed at UofTHacks 12, designed to help users reflect, articulate their thoughts, and foster positive thinking. It uses generative AI technologies to summarize journal entries and offer unique perspectives." link="https://github.com/JosephMaltese/Moodify"/>
                <Card imageName="homePage.png" title="Wedding RSVP Site" description="A full-stack web application for my brother's upcoming wedding to monitor guest attendance and allow guests to RSVP virtually. Deployed on Vercel!" link="https://github.com/JosephMaltese/WeddingSite-Frontend"/>
            </div>
            <div className='flex sm:flex-row flex-col justify-center mt-5'>
                <Card imageName="Sudoku2.png" title="Sudoku Solver GUI" description="A GUI developed in C using the GTK toolkit to create an interactive application that solves Sudoku puzzles using a recursive backtracking algorithm." link="https://github.com/JosephMaltese/WeddingSite"/>
                <Card imageName="Traffic2.png" title="Traffic Sign Classification AI" description="A neural network that identifies road signs (stop signs, yield signs, etc.) from images using the Keras, TensorFlow, and scikit-learn Libraries. Trained on the German Traffic Sign Recognition Benchmark (GTSRB) dataset." link="https://github.com/me50"/>
            </div>
        </div>
    </div>
  )
}

export default Projects


// Use this for a single card on the bottom
{/* <div className='flex justify-center mt-5 px-[20%]'>
                <Card imageName='stabl.rocks.png' title='STaBL.rocks' description="An online ELM IDE used by McMaster Start Coding (MSC) to teach K-PhD students the fundamentals of programming. Developed in Haskell using the IHP full-stack framework alongside a team of volunteer software developers." link='https://stabl.rocks/' />
</div> */}