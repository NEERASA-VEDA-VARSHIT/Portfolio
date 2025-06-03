import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="fixed top-0 left-120 right-0 z-50 px-8 py-4">
      <div className="flex items-center space-x-3 left-18 top-2 z-50 absolute">
        <img src={logo} alt="Emma" className="w-15 h-15 rounded-full object-cover" />
      </div>

      <div className="flex items-center justify-between left-18">
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>

        <div className="hidden md:block">
          <DownloadButton />
        </div>

        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </Link>
);

const DownloadButton = () => (
  <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2">
    <span>Download CV</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  </button>
);

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => (
  <button className="md:hidden p-2" onClick={toggleMenu}>
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isMenuOpen ? (
        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

const MobileMenu = ({ isMenuOpen }) => (
  isMenuOpen && (
    <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="flex flex-col space-y-3">
        <MobileNavLink to="/about">About me</MobileNavLink>
        <MobileNavLink to="/education">Education</MobileNavLink>
        <MobileNavLink to="/portfolio">Portfolio</MobileNavLink>
        <MobileNavLink to="/experience">Experience</MobileNavLink>
        <MobileNavLink to="/contacts">Contacts</MobileNavLink>
        <DownloadButton />
      </div>
    </div>
  )
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
  >
    {children}
  </Link>
);

export default Navbar;