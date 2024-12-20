import React from 'react'
import LandingContent from "./LandingContent";
import { BackgroundBeams } from "./ui/background-beams";

const LandingScreen = () => {
  return (
    <div id="home">
        <LandingContent/>
        <BackgroundBeams/>
    </div>
  )
}

export default LandingScreen
