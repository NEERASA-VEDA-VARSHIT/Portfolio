import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import SocialSidebar from "./components/Layout/SocialSidebar";
import NoiseCanvas from "./components/Home/NoiseCanvas";
import TypewriterEffect from "./components/Home/TypewriterEffect";
import RotatingRings from "./components/Home/RotatingRings";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="relative w-full h-screen overflow-hidden bg-[#fff8f0]">
        <NoiseCanvas />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SocialSidebar />
        <RotatingRings />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <TypewriterEffect text="func App() { return <div>Hello, World!</div>; }" />
      </div>
    </Router>
  );
}

// Placeholder components for routes
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Education = () => <div>Education Page</div>;
const Portfolio = () => <div>Portfolio Page</div>;
const Experience = () => <div>Experience Page</div>;
const Contacts = () => <div>Contacts Page</div>;

export default App;