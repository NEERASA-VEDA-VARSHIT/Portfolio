import React, { useState } from 'react';

const RotatingRing = ({ text, size, borderColor, opacity, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${size} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-full rounded-full border-8 ${borderColor} ${opacity}`}
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
              id={`ring-path-${text.replace(/\s+/g, '-')}`}
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
            <textPath href={`#ring-path-${text.replace(/\s+/g, '-')}`}>
              {`${text} • ${text} • ${text} •`}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

const RotatingRings = () => {
  return (
    <>
      <div className="absolute bottom-120 right-1/5 transform -translate-x-1/2">
        <RotatingRing
          text="LET'S WORK TOGETHER"
          size="w-20 h-20"
          borderColor="border-blue-300"
          opacity="opacity-40"
        />
      </div>

      <div className="absolute bottom-110 left-[19%] transform -translate-x-1/2">
        <RotatingRing
          text="CREATIVE SOLUTIONS"
          size="w-15 h-15"
          borderColor="border-teal-500"
          opacity="opacity-10"
        />
      </div>

      <div className="absolute bottom-145 left-[27%] transform -translate-x-1/2">
        <RotatingRing
          text=""
          size="w-20 h-20"
          borderColor="border-gray-500"
          opacity="opacity-10"
        />
      </div>
    </>
  );
};

export default RotatingRings;