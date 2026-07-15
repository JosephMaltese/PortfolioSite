import React from 'react'
import DesktopLanding from "@/app/components/DesktopLanding";
import MobileLanding from "@/app/components/MobileLanding";

const LandingContent = () => {
    const bio = "I'm a third-year Computer Science Co-op student at McMaster University with experience in full-stack software development across frontend, backend, and database technologies. I’ve worked on production software in industry, research projects, and personal applications, and I’m particularly interested in machine learning and natural language processing. Looking to continue building software as a software engineer upon graduation.";

    return (
        <>
            <div id="home"></div>
            <div className="hidden md:block">
                <DesktopLanding bio={bio} />
            </div>
            <div className="md:hidden">
                <MobileLanding bio={bio}/>
            </div>
        </>
    );
}


export default LandingContent