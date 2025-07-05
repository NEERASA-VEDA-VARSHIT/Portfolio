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
    </div>
  );
}

export default FloatingShapes;