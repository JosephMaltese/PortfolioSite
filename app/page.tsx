'use client';
import Navbar from "./components/Navbar";
import LandingScren from "./components/LandingScreen";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head >
        <link rel="icon" href="/quantum.ico" />

      </Head>
      <Navbar/>
      <LandingScren/>
      <Projects/>
      <Experience/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  );
}
