import { useRef, useEffect, useCallback, useState } from "react";
import logo from "../assets/image.png";
import pic from "../assets/pic.png";
import FloatingShapes from "../components/FloatingShapes";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import MobileHome from "./MobileHome";

export default function Home() {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Typewriter effect state
  const [text, setText] = useState("");
  const [showAuthor, setShowAuthor] = useState(false); // State to control author visibility
  const indexRef = useRef(0);

  const fullText = `" To live fully is to embrace 
  the present without 
  changing the past or future."`;

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length - 1) {
        setText((prev) => prev + fullText[indexRef.current]);
        indexRef.current++;
      } else {
        clearInterval(interval);
        setShowAuthor(true); // Show author after typing is complete
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const generateTexture = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 60 + 165;
      const alpha = Math.random() * 0.3 + 0.15;
      data[i] = noise + 15;
      data[i + 1] = noise + 10;
      data[i + 2] = noise - 5;
      data[i + 3] = alpha * 220;
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.requestAnimationFrame(generateTexture);
  }, [generateTexture]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = useIsMobile();

  const typewriterRef = useRef();
  const authorRef = useRef();
  const curveRef = useRef();
  const [typewriterRight, setTypewriterRight] = useState("4vw");
  const [authorRight, setAuthorRight] = useState("5vw");

  useEffect(() => {
    function checkOverlap() {
      if (!typewriterRef.current || !curveRef.current) return;
      const typeRect = typewriterRef.current.getBoundingClientRect();
      const curveRect = curveRef.current.getBoundingClientRect();
      // If the left edge of the typewriter text is less than the right edge of the curve, they overlap
      if (typeRect.left < curveRect.right) {
        setTypewriterRight("12vw");
        setAuthorRight("13vw");
      } else {
        setTypewriterRight("4vw");
        setAuthorRight("5vw");
      }
    }
    window.addEventListener("resize", checkOverlap);
    checkOverlap();
    return () => window.removeEventListener("resize", checkOverlap);
  }, []);

  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fff8f0]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 pointer-events-none"
      />

      <div className="flex items-center space-x-3 left-18 top-2 z-50 absolute">
        <img
          src={logo}
          alt="Emma"
          className="w-15 h-15 rounded-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
            >
              About me
            </a>
            <Link
              to="/education"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
            >
              Education
            </Link>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
            >
              Experience
            </a>
            <a
              href="#contacts"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
            >
              Contacts
            </a>
          </div>

          {/* Download CV Button - Right aligned */}
          <div className="hidden md:block ml-auto">
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
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
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
        )}
      </nav>

      {/* Curved Top Left Section with Logo */}
      <div
        className="absolute top-0 left-0 w-12 h-22 z-10"
        style={{
          borderBottomRightRadius: "200px",
          border: "2px solid rgba(180, 180, 180, 0.2)",
        }}
      ></div>

      {/* Dark Skin Color Layer Below Curve */}
      <div
        className="absolute top-[120px] left-[-40px] w-60 h-60 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(139, 111, 90, 0.25) 0%, rgba(139, 111, 90, 0.15) 40%, transparent 70%),
            radial-gradient(circle at center, rgba(110, 86, 68, 0.20) 0%, rgba(110, 86, 68, 0.10) 45%, transparent 75%),
            radial-gradient(circle at center, rgba(78, 59, 46, 0.15) 0%, rgba(78, 59, 46, 0.08) 50%, transparent 80%)
          `,
          filter: "blur(2px)",
          opacity: 0.2,
          borderRadius: "100% 100% 100% 100%",
          transform: "scaleY(1.2)",
        }}
      />

      {/* Vertical Social Media Sidebar */}
      <div className="fixed left-1/19 top-4/6 transform -translate-y-1/2 z-20 opacity-60">
        <div className="flex flex-col items-center space-y-6">
          {/* Vertical Line */}
          <div className="w-px h-22 bg-gradient-to-b from-transparent to-gray-400 opacity-40"></div>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-gray-300/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 fill-gray-600 group-hover:fill-pink-500 transition-colors duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-gray-300/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 fill-gray-600 group-hover:fill-black transition-colors duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-gray-300/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 fill-gray-600 group-hover:fill-blue-600 transition-colors duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Vertical Text */}
          <div className="text-gray-500 text-xs font-medium tracking-wider">
            <span
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                letterSpacing: "0.25em",
              }}
            >
              FOLLOW ME
            </span>
          </div>
        </div>
      </div>

      {/* Cyan diffusion with layered blur effect in top right corner */}
      <div
        className="absolute top-0 right-0 w-1/6 h-full pointer-events-none"
        style={{
          background: `
                radial-gradient(ellipse 380px 900px at top right, #b0f5ff 0%, transparent 65%),
                radial-gradient(ellipse 260px 640px at top right, #8aefff 0%, transparent 75%),
                radial-gradient(ellipse 180px 450px at top right, #6be8cb 0%, transparent 85%)
                `,
          filter: "blur(1.5px)",
          opacity: 0.9,
        }}
      ></div>

      <div
        className="absolute top-0 right-0 w-[200px] h-[460px] pointer-events-none opacity-60"
        style={{
          borderLeft: "2px solid rgba(180, 180, 180, 0.25)",
          borderBottom: "2px solid rgba(180, 180, 180, 0.25)",
          borderBottomLeftRadius: "12rem",
          borderTopRightRadius: "0.75rem",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          boxShadow: "0 2px 10px rgba(100, 100, 100, 0.05)",
        }}
      ></div>

      <svg
        className="absolute bottom-[330px] left-[calc(100%-220px)] w-15 h-20 opacity-50 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="#bcd7d5"
        style={{ transform: "scaleX(-1) scaleY(-1)" }}
      >
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
      </svg>

      {/* Ring 1 - Original Blue Ring */}
      <div
        className="absolute bottom-120 right-1/5 transform -translate-x-1/2 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-20 h-20">
          <div
            className="w-full h-full rounded-full border-12px opacity-60 border-solid border-blue-300"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              animation: "rotate 20s linear infinite",
              transform: "scale(1.4)",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 96 96">
              <defs>
                <path
                  id="outer-ring-path-1"
                  d="M 48, 48 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                />
              </defs>
              <text
                className="fill-gray-600 tracking-wide uppercase"
                style={{
                  fontSize: "7px",
                  fontWeight: "500",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  opacity: isHovered ? 1 : 0.5,
                }}
              >
                <textPath href="#outer-ring-path-1">
                  LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK
                  TOGETHER •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Ring 2 - Teal Ring */}
      <div
        className="absolute bottom-110 left-[19%] transform -translate-x-1/2"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className="relative w-15 h-15">
          <div
            className="w-full h-full rounded-full border-4 border-solid border-teal-500 opacity-40"
            style={{
              transform: isHovered2 ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              animation: "rotate2 90s linear infinite",
              transform: "scale(1.4)",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 96 96">
              <defs>
                <path
                  id="outer-ring-path-2"
                  d="M 48, 48 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                />
              </defs>
              <text
                className="fill-teal-600 tracking-wide uppercase"
                style={{
                  fontSize: "7px",
                  fontWeight: "500",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  opacity: isHovered2 ? 1 : 0.5,
                  wordSpacing: "0.25em",
                }}
              >
                <textPath href="#outer-ring-path-2">
                  CREATIVE SOLUTIONS • CREATIVE SOLUTIONS • CREATIVE SOLUTIONS •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Ring 3 - Gray Ring with Low Opacity */}
      <div
        className="absolute bottom-145 left-[27%] transform -translate-x-1/2"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className="absolute top-2.5 left-2 w-full h-full">
          <FloatingShapes />
        </div>

        <div className="relative w-20 h-20">
          <div
            className="w-full h-full rounded-full border-2 opacity-10 border-solid border-gray-500"
            style={{
              transform: isHovered3 ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>

      <div
        className="absolute bottom-[20px] left-8/17 transform -translate-x-1/2 w-130 h-100"
        style={{
          background: `rgb(255, 206, 109)`,
          borderTopLeftRadius: "280px",
          borderTopRightRadius: "280px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <img
          src={pic}
          alt="Description"
          className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 scale-100 w-100 h-150 object-cover"
        />

        {/* Text Following Exact Rectangle Curve */}
        <div
          className="absolute top-[-30px] left-[-65px] z-40"
          style={{
            width: "clamp(250px, 40vw, 500px)",
            height: "auto",
          }}
        >
          <svg
            width="500"
            height="450"
            viewBox="0 0 500 450"
            className="overflow-visible"
          >
            <defs>
              <path
                id="rectangleCurve"
                d="M 80, 420 L 80, 300 Q 70, 140 240, 55 Q 360, 150 360, 300"
                fill="none"
              />
              <path
                id="upperCurve"
                d="M 38, 420 L 38, 280 Q 33, 140 180, 40 Q 323, 135 323, 280"
                fill="none"
              />
            </defs>

            {/* NEERASA text on upper curve */}
            <text
              style={{
                fontSize: "clamp(18px, 3vw, 32px)",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                fill: "#6B46C1",
                letterSpacing: "0.2em",
              }}
            >
              <textPath href="#upperCurve">NEERASA</textPath>
            </text>

            {/* VEDA VRASHIT text on lower curve */}
            <text
              style={{
                fontSize: "clamp(32px, 6vw, 50px)",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                fill: "#6B46C1",
              }}
            >
              <textPath href="#rectangleCurve" startOffset="0%">
                VEDA VARSHIT
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <svg
        width="400"
        height="600"
        viewBox="0 0 400 600"
        className="absolute top-[50px] left-[230px] z-50"
      >
        <path
          id="loopArrowPath"
          d="M 180,460
   C 130,420 80,180 180,190
   C 300,210 190,400 150,250
   C 140,120 300,140 350,180"
          fill="none"
          stroke="#fcd9c4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#arrowhead)"
        />

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#f5d76e" />
          </marker>
        </defs>

        <text fontSize="18" fill="#f5d76e" fontFamily="sans-serif">
          <textPath
            href="#loopArrowPath"
            startOffset="85%"
            dominantBaseline=""
            textAnchor=""
          >
            Yes, that's Me!
          </textPath>
        </text>
      </svg>

      {/* Typewriter Effect Text */}
      <pre
        ref={typewriterRef}
        className="absolute text-right font-mono text-gray-500 opacity-70 max-w-[32vw] whitespace-pre-wrap
          right-[2vw] sm:right-[4vw] md:right-[6vw]
          bottom-[10vh] sm:bottom-[10vh] md:bottom-[12vh] z-50 custom-typewriter"
        style={{ lineHeight: 1.5, right: typewriterRight }}
      >
        {text}
      </pre>

      {/* Author Text */}
      {showAuthor && (
        <div
          ref={authorRef}
          className="absolute text-right font-mono text-gray-500 opacity-60 mt-2
            right-[3vw] sm:right-[5vw] md:right-[7vw]
            bottom-[8vh] sm:bottom-[6vh] md:bottom-[8vh] z-50 custom-typewriter"
          style={{ right: authorRight }}
        >
          — Eckhart Tolle
        </div>
      )}

      <style>{`
        .custom-typewriter {
          font-size: clamp(15px, 1.5vw, 21px) !important;
        }
      `}</style>
    </div>
  );
}
