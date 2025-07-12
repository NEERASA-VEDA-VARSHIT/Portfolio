import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 ${
      isHomePage 
        ? 'bg-transparent' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="flex items-center justify-between">
        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" isHomePage={isHomePage}>Home</NavLink>
          <NavLink to="/about" isHomePage={isHomePage}>About</NavLink>
          <NavLink to="/education" isHomePage={isHomePage}>Education</NavLink>
          <NavLink to="/experience" isHomePage={isHomePage}>Experience</NavLink>
          <NavLink to="/portfolio" isHomePage={isHomePage}>Portfolio</NavLink>
          <NavLink to="/blog" isHomePage={isHomePage}>Blog</NavLink>
          <NavLink to="/contacts" isHomePage={isHomePage}>Contact</NavLink>
        </div>

        {/* Download CV Button - Right aligned */}
        <div className="hidden md:block ml-auto">
          <DownloadButton isHomePage={isHomePage} />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isHomePage={isHomePage} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} isHomePage={isHomePage} />
    </nav>
  );
};

const NavLink = ({ to, children, isHomePage }) => (
  <Link
    to={to}
    className={`transition-colors duration-300 text-sm font-medium ${
      isHomePage 
        ? 'text-gray-400 hover:text-gray-700' 
        : 'text-gray-400 hover:text-gray-700'
    }`}
    title={`Navigate to ${children}`}
  >
    {children}
  </Link>
);

const DownloadButton = ({ isHomePage }) => (
  <button
    className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
    style={{
      background: `
        linear-gradient(135deg, #00c896 5%, #00754b 70%, #474747 110%)
      `,
      filter: "blur(0.5px)",
      opacity: 0.9,
      boxShadow: "0 4px 20px rgba(71, 71, 71, 0.3)",
    }}
    title="Download CV"
    aria-label="Download CV"
  >
    <span>Download CV</span>
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </button>
);

const MobileMenuButton = ({ isMenuOpen, toggleMenu, isHomePage }) => (
  <button 
    className="md:hidden p-2" 
    onClick={toggleMenu}
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    title={isMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={isMenuOpen}
  >
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {isMenuOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

const MobileMenu = ({ isMenuOpen, isHomePage }) => (
  isMenuOpen && (
    <div className={`md:hidden mt-4 rounded-lg shadow-lg p-4 ${
      isHomePage 
        ? 'bg-white/90 backdrop-blur-sm' 
        : 'bg-white/90 backdrop-blur-sm'
    }`} role="menu">
      <div className="flex flex-col space-y-3">
        <MobileNavLink to="/" isHomePage={isHomePage}>Home</MobileNavLink>
        <MobileNavLink to="/about" isHomePage={isHomePage}>About</MobileNavLink>
        <MobileNavLink to="/education" isHomePage={isHomePage}>Education</MobileNavLink>
        <MobileNavLink to="/experience" isHomePage={isHomePage}>Experience</MobileNavLink>
        <MobileNavLink to="/portfolio" isHomePage={isHomePage}>Portfolio</MobileNavLink>
        <MobileNavLink to="/blog" isHomePage={isHomePage}>Blog</MobileNavLink>
        <MobileNavLink to="/contacts" isHomePage={isHomePage}>Contact</MobileNavLink>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center space-x-2 mt-4">
          <span>Download CV</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
);

const MobileNavLink = ({ to, children, isHomePage }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
    title={`Navigate to ${children}`}
    role="menuitem"
  >
    {children}
  </Link>
);

export default Navbar;