import logo from "../assets/image.png";
import { useCanvasTexture } from "../hooks/useCanvasTexture";
import FloatingShapes from "../components/FloatingShapes";
import TypewriterSection from "../components/Home/TypewriterSection";
import SocialSidebar from "../components/Home/SocialSidebar";
import RotatingRings from "../components/Home/RotatingRings";
import ProfileSection from "../components/Home/ProfileSection";
import BackgroundElements from "../components/Home/BackgroundElements";
import { PROFILE, COLORS } from "../constants";

export default function Home() {
  const { canvasRef } = useCanvasTexture();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fff8f0]">
      {/* Canvas Texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 pointer-events-none"
      />

      {/* Logo */}
      <div className="flex items-center space-x-3 left-18 top-2 z-50 absolute">
        <img
          src={logo}
          alt={PROFILE.logo}
          className="w-15 h-15 rounded-full object-cover"
        />
      </div>

      {/* Background Elements */}
      <BackgroundElements />

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Rotating Rings */}
      <RotatingRings />

      {/* Profile Section */}
      <ProfileSection />

      {/* Typewriter Section */}
      <TypewriterSection />
    </div>
  );
}
