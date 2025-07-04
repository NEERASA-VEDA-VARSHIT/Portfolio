function FloatingShapes() {
  return (
    <div>
      {/* Floating Orb */}
      <div
        className="w-16 h-16 rounded-full opacity-90"
        style={{
          background: "radial-gradient(circle, #ff7eb3, #ff758c, #ff6a6a)",
          boxShadow: "0 20px 50px rgba(255, 105, 135, 0.5)",
          animation: "floatOrb 15s ease-in-out infinite",
        }}
      ></div>

      

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatOrb {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

    
      `}</style>
    </div>
  );
}

export default FloatingShapes;