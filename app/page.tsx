'use client';
import Navbar from "./components/Navbar";
import LandingScren from "./components/LandingScreen";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingScren/>
      <Projects/>
    </div>
  );
}
