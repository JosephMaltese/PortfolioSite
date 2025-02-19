import React from 'react'
import Card from "./Card";

const Projects = () => {
  return (
    <div className="mb-32" id="projects">
        <div className="flex justify-center">
            <h2 className="text-sky-300 text-5xl font-bold mt-20 text-center max-w-[80%]">Here&apos;s Some Of My Recent Projects</h2>
        </div>

        <div>
            <div className='flex flex-row justify-center mt-5'>
                <Card imageName="homePage.png" title="Wedding RSVP Site" description="A full-stack web application for my brother's upcoming wedding to monitor guest attendance and allow guests to RSVP virtually." link="https://github.com/JosephMaltese/WeddingSite-Frontend"/>
                <Card imageName="uoft_hacks_demo.gif" title="Moodify" description="Moodify is an AI-powered journaling platform developed at UofTHacks 12, designed to help users reflect, articulate their thoughts, and foster positive thinking. It uses generative AI technologies to summarize journal entries and offer unique perspectives." link="https://github.com/JosephMaltese/Moodify"/>
            </div>
            <div className='flex flex-row justify-center mt-12'>
                <Card imageName="Sudoku2.png" title="Sudoku Solver GUI" description="A GUI developed in C using the GTK toolkit to create an interactive application that solves Sudoku puzzles using a recursive backtracking algorithm." link="https://github.com/JosephMaltese/WeddingSite"/>
                <Card imageName="Traffic2.png" title="Traffic Sign Classification AI" description="A neural network that identifies road signs (stop signs, yield signs, etc.) from images using the Keras, TensorFlow, and scikit-learn Libraries. Trained on the German Traffic Sign Recognition Benchmark (GTSRB) dataset." link="https://github.com/me50"/>
            </div>
            <div className='flex justify-center mt-5 px-[20%]'>
                <Card imageName='musicAppUI.png' title='Concert Tracker' description="A NextJS Web app that uses the Spotify API to find nearby concerts based on a user's favourite artists!" link='https://github.com/JosephMaltese/ConcertTracker' />
            </div>
        </div>
    </div>
  )
}

export default Projects
