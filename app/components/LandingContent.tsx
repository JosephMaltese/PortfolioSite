import React from 'react'

const LandingScreen = () => {
  return (
    <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src="/selfPortrait.jpg"
                className="w-[70%] h-auto max-w-[80%] rounded-lg shadow-2xl md:w-[30%] md:h-[50%]" />
                <div>
                <h1 className="text-5xl font-bold">Hi, I&apos;m <span className="text-sky-300">Joseph Maltese</span></h1>
                <p className="py-6">
                  A second-year Computer Science (BASc) Co-op student at McMaster University with a passion for developing efficient,
                  scalable, and user-friendly software. I thrive on continuous learning and exploring new technologies, with particular
                  interests in full-stack development and artificial intelligence. As a member of the Software Architecture team for McMaster
                  Start Coding, I help develop the STaBL.rocks web application in Haskell, which is used to teach programming fundamentals
                  to K-PhD students. I actively participate in hackathons, where I enjoy collaborating with others to solve challenging problems
                  and build innovative projects. My goal is to create impactful solutions that enhance user experiences and address complex challenges.
                </p>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default LandingScreen
