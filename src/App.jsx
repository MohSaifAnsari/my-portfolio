import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experties from "./components/Experties";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="text-white">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experties />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
