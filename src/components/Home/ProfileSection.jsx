import pic from "../../assets/pic.png";
import { PROFILE, COLORS } from "../../constants";

const ProfileSection = () => {
  return (
    <div
      className="absolute bottom-[20px] left-8/17 transform -translate-x-1/2 w-130 h-100"
      style={{
        background: COLORS.profileBackground,
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
              fill: COLORS.primary,
              letterSpacing: "0.2em",
            }}
          >
            <textPath href="#upperCurve">{PROFILE.name}</textPath>
          </text>

          {/* VEDA VRASHIT text on lower curve */}
          <text
            style={{
              fontSize: "clamp(28px, 5vw, 43px)",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              fill: COLORS.primary,
            }}
          >
            <textPath href="#rectangleCurve" startOffset="0%">
              {PROFILE.fullName}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ProfileSection; 