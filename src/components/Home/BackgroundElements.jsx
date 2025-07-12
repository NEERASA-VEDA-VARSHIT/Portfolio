import { COLORS } from "../../constants";

const BackgroundElements = () => {
  return (
    <>
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

      {/* Arrow with text */}
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
          stroke={COLORS.arrowStroke}
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
            <polygon points="0 0, 10 3.5, 0 7" fill={COLORS.arrowFill} />
          </marker>
        </defs>

        <text fontSize="18" fill={COLORS.arrowFill} fontFamily="sans-serif">
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
    </>
  );
};

export default BackgroundElements; 