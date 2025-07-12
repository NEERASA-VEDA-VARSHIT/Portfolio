import React, { useState } from "react";
import logo from "../assets/image.png";
import pic from "../assets/pic.png";
import { useCanvasTexture } from "../hooks/useCanvasTexture";

export default function MobileHome() {
  const { canvasRef } = useCanvasTexture();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fff8f0]">
      {/* Canvas Texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 pointer-events-none"
      />

      {/* Logo */}
      <div className="flex items-center space-x-3 left-4 top-4 z-50 absolute">
        <img
          src={logo}
          alt="Emma"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 right-0 z-50 px-4 py-4">
        <button className="p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-12 right-0 mt-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[200px]">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
              >
                About me
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
              >
                Education
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
              >
                Experience
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium py-2"
              >
                Contacts
              </a>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center space-x-2 mt-2">
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
        )}
      </nav>

      {/* Rectangle Curve with Image */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-60"
        style={{
          background: `rgb(255, 206, 109)`,
          borderTopLeftRadius: "200px",
          borderTopRightRadius: "200px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <img
          src={pic}
          alt="Description"
          className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 scale-75 w-20 h-32 object-cover"
        />

        {/* Text Following Rectangle Curve */}
        <div
          className="absolute top-[-20px] left-[-40px] z-40"
          style={{
            width: "280px",
            height: "auto",
          }}
        >
          <svg
            width="280"
            height="250"
            viewBox="0 0 280 250"
            className="overflow-visible"
          >
            <defs>
              <path
                id="mobileRectangleCurve"
                d="M 50, 230 L 50, 170 Q 45, 80 130, 30 Q 200, 80 200, 170"
                fill="none"
              />
              <path
                id="mobileUpperCurve"
                d="M 25, 230 L 25, 150 Q 20, 80 100, 20 Q 175, 75 175, 150"
                fill="none"
              />
            </defs>

            {/* NEERASA text on upper curve */}
            <text
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                fill: "#6B46C1",
                letterSpacing: "0.1em",
              }}
            >
              <textPath href="#mobileUpperCurve">NEERASA</textPath>
            </text>

            {/* VEDA VRASHIT text on lower curve */}
            <text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                fill: "#6B46C1",
              }}
            >
              <textPath href="#mobileRectangleCurve" startOffset="0%">
                VEDA VARSHIT
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
