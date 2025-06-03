import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import SocialSidebar from "./components/Layout/SocialSidebar";
import NoiseCanvas from "./components/Home/NoiseCanvas";
import TypewriterEffect from "./components/Home/TypewriterEffect";
import RotatingRings from "./components/Home/RotatingRings";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#fff8f0]">
        <NoiseCanvas />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SocialSidebar />
        <RotatingRings />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <TypewriterEffect text="func App() { return <div>Hello, World!</div>; }" />
      </div>
    </Router>
  );
}

export default App;