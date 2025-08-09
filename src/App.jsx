import React, { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
