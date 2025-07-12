import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Enhanced parallax transforms with more layers
  const parallaxY40 = useTransform(springY, v => v * 40);
  const parallaxX40 = useTransform(springX, v => v * 40);
  const parallaxY32 = useTransform(springY, v => v * 32);
  const parallaxX32 = useTransform(springX, v => v * 32);
  const parallaxY24 = useTransform(springY, v => v * 24);
  const parallaxX24 = useTransform(springX, v => v * 24);
  const parallaxY18 = useTransform(springY, v => v * 18);
  const parallaxX18 = useTransform(springX, v => v * 18);
  const parallaxY12 = useTransform(springY, v => v * 12);
  const parallaxX12 = useTransform(springX, v => v * 12);
  const parallaxY8 = useTransform(springY, v => v * 8);
  const parallaxX8 = useTransform(springX, v => v * 8);
  const parallaxY5 = useTransform(springY, v => v * 5);
  const parallaxX5 = useTransform(springX, v => v * 5);
  const parallaxY3 = useTransform(springY, v => v * 3);
  const parallaxX3 = useTransform(springX, v => v * 3);

  // Enhanced scroll-based transforms
  const heroY = useTransform(scrollY, [0, 800], [0, -200]);
  const brainScale = useTransform(scrollY, [0, 500], [1, 1.3]);
  const neuralOpacity = useTransform(scrollY, [0, 600], [0, 1]);
  const journeyX = useTransform(scrollY, [300, 900], [0, -300]);
  const influencesY = useTransform(scrollY, [600, 1200], [150, 0]);
  const worldviewRotate = useTransform(scrollY, [800, 1400], [0, 360]);
  const trianglePulse = useTransform(scrollY, [1000, 1600], [1, 1.2]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // Track scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollProgress(latest);
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / rect.width - 0.5) * 2);
    mouseY.set((y / rect.height - 0.5) * 2);
  };

  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    "To live fully is to embrace the present without changing the past or future.",
    "Yes, that's Me!",
    "Built 10 AI websites in a day.",
    "Explored water-fuel bikes at age 13.",
    "Sought logic behind path prediction — and wrote one."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Neural Network Background */}
      <motion.div
        style={{ 
          opacity: neuralOpacity,
          scale: backgroundScale,
          x: parallaxX8,
          y: parallaxY8
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.4)" />
              <path d="M10 10 L30 10 M10 10 L10 30" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5" fill="none" />
            </pattern>
            <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          <rect width="100%" height="100%" fill="url(#neural-glow)" />
        </svg>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            x: parallaxX3,
            y: parallaxY3,
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Enhanced Floating Brain Motif */}
      <motion.div
        style={{ 
          y: heroY,
          scale: brainScale,
          x: parallaxX24,
          y: parallaxY24
        }}
        className="fixed top-20 right-20 z-20 pointer-events-none"
      >
        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-xl animate-pulse" />
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center text-4xl"
        >
          🧠
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Panel */}
        <motion.div 
          style={{
            y: parallaxY40,
            x: parallaxX40,
            opacity: textOpacity,
          }}
          className="min-h-screen flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-8xl font-bold text-white mb-8 drop-shadow-[0_2px_24px_rgba(59,130,246,0.5)]"
            >
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </motion.h1>
            
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-gray-300 mb-12 italic"
            >
              "{quotes[currentQuote]}"
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg text-blue-300"
            >
              Neerasa Veda Varshit
            </motion.div>
          </div>
        </motion.div>

        {/* How I Think Section */}
        <motion.div
          style={{
            y: parallaxY18,
            x: parallaxX18,
          }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-white text-center mb-16"
            >
              How I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Think</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { icon: "🤖", label: "AI", color: "from-blue-400 to-cyan-400" },
                { icon: "📚", label: "Books", color: "from-purple-400 to-pink-400" },
                { icon: "⚡", label: "Neurons", color: "from-green-400 to-emerald-400" },
                { icon: "💻", label: "Code", color: "from-yellow-400 to-orange-400" },
                { icon: "🌱", label: "Plants", color: "from-green-500 to-teal-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    y: -10,
                  }}
                  className="text-center group"
                >
                  <motion.div 
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-4xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-white font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Journey Start Section */}
        <motion.div
          style={{
            x: journeyX,
            y: parallaxY12,
            x: parallaxX12,
          }}
          className="py-20 px-4 bg-gradient-to-r from-black via-gray-900 to-black"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              Journey <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Start</span>
            </motion.h2>

            <div className="space-y-6 text-gray-300">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <span className="text-2xl">🚗</span>
                <span className="text-lg">Brotomotive sparked my curiosity</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <span className="text-2xl">💡</span>
                <span className="text-lg">Li-Fi experiments at age 13</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <span className="text-2xl">⚡</span>
                <span className="text-lg">Tesla Coil experiments</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Influences Section */}
        <motion.div
          style={{
            y: influencesY,
            y: parallaxY12,
            x: parallaxX12,
          }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              Mentors <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Without Meeting</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📺</div>
                <h3 className="text-xl font-bold text-white mb-2">Trakin Tech</h3>
                <p className="text-gray-300">Tech reviews that shaped my understanding of innovation</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">🎧</div>
                <h3 className="text-xl font-bold text-white mb-2">Tech Podcasts</h3>
                <p className="text-gray-300">Deep dives into AI, robotics, and future technology</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Worldview Section */}
        <motion.div
          style={{
            y: parallaxY12,
            x: parallaxX12,
          }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              style={{ rotate: worldviewRotate }}
              className="text-6xl mb-8 inline-block"
            >
              🌍
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              Why I Explore <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech, Farming & Learning</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Technology is not just about code—it's about understanding systems, 
              from neural networks to natural ecosystems. I bridge the gap between 
              cutting-edge innovation and sustainable human-centered design.
            </motion.p>
          </div>
        </motion.div>

        {/* Identity Triangle */}
        <motion.div
          style={{
            y: parallaxY5,
            x: parallaxX5,
            scale: trianglePulse,
          }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12"
            >
              Identity <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Triangle</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
              {[
                { icon: "⚙️", label: "Tech", color: "from-blue-400 to-cyan-400" },
                { icon: "🎨", label: "Design", color: "from-purple-400 to-pink-400" },
                { icon: "🌿", label: "Nature", color: "from-green-400 to-emerald-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    y: -10,
                  }}
                  className={`w-32 h-32 rounded-full bg-gradient-to-r ${item.color} flex flex-col items-center justify-center text-4xl shadow-2xl cursor-pointer transition-all duration-300`}
                >
                  <div className="mb-2">{item.icon}</div>
                  <div className="text-white font-bold text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;