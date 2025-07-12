import { useState } from "react";
import { RING_CONTENT, ANIMATION_SPEEDS } from "../../constants";
import FloatingShapes from "../FloatingShapes";

const RotatingRings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
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
              animation: `rotate ${ANIMATION_SPEEDS.ring1} linear infinite`,
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
                  {RING_CONTENT.workTogether}
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
              animation: `rotate2 ${ANIMATION_SPEEDS.ring2} linear infinite`,
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
                  {RING_CONTENT.creativeSolutions}
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
          {/* FloatingShapes component would be imported here */}
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
    </>
  );
};

export default RotatingRings;