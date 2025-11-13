import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experties from "./components/Experties";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experties />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
