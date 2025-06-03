import React from 'react';

const Home = () => {
  return (
    <div className="relative h-full">
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
          opacity: 0.69,
        }}
      />

      {/* Curved border container */}
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
      />

      {/* Name Display */}
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
        <div className="absolute top-[-30px] left-[-65px] z-40">
          <div className="text-4xl font-bold text-purple-800">
            <div>NEERASA</div>
            <div className="mt-2 text-6xl">VEDA VRASHIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;