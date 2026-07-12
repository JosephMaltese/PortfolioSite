'use client';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Head from "next/head";
import LandingContent from "@/app/components/LandingContent";
import Education from "@/app/components/Education";
import Certifications from "@/app/components/Certifications";

export default function Home() {
  return (
    <div>
      <Head >
        <link rel="icon" href="/quantum.ico" />
      </Head>
      <Navbar/>
      <LandingContent/>
      <Education/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Footer/>
    </div>
  );
}
