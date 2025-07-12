import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';

const Education = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Enhanced parallax transforms
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
  const timelineHeight = useTransform(scrollY, [0, 2000], [0, 100]);
  const headerY = useTransform(scrollY, [0, 500], [0, -100]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Track scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollProgress(latest);
  });

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / rect.width - 0.5) * 2);
    mouseY.set((y / rect.height - 0.5) * 2);
  };

  const educationData = [
    {
      id: 1,
      institution: "DAV Public School, Ukkunagaram",
      period: "Grades 1-10",
      board: "CBSE",
      percentage: "86.6%",
      icon: "🏫",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue",
      achievements: [
        "Word Building Competition Winner 🧠",
        "Best Out of Waste Award ♻️",
        "Early experiments: LiFi, Tesla Coil, IR sensors",
        "Inspired by Trakin Tech, Brotomotive 🚀"
      ],
      projects: [
        "LiFi transmission circuit",
        "Tesla Coil experiments",
        "IR sensor circuits"
      ],
      description: "Early tech fascination and hands-on experimentation",
      mindset: "Curiosity-driven learning",
      visualEffect: "circuit-lines",
      year: "2010-2020"
    },
    {
      id: 2,
      institution: "Ascent Junior College",
      period: "Grades 11-12",
      board: "State Board",
      percentage: "94%",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      achievements: [
        "Learned programming fundamentals 💻",
        "Started 'podcast → blog' experiments ✍️",
        "Built Arduino motion sensor light project 💡",
        "Explored visual storytelling 🎥"
      ],
      projects: [
        "Arduino motion sensor project",
        "Blog writing inspired by tech podcasts",
        "Explored video editing and photography"
      ],
      description: "Developed coding skills and hands-on electronics experience",
      mindset: "Building practical solutions",
      visualEffect: "motion-light",
      year: "2020-2022"
    },
    {
      id: 3,
      institution: "BITS (BSc CS)",
      period: "Online | Ongoing till 2027",
      board: "Computer Science",
      percentage: "In Progress",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
      achievements: [
        "Building strong CS foundations",
        "Online learning platform",
        "Shaping academic foundations"
      ],
      projects: [
        "Placeholder for future projects"
      ],
      description: "Building strong academic foundations through online education",
      mindset: "Foundational knowledge building",
      visualEffect: "progress-pulse",
      year: "2024-2027"
    },
    {
      id: 4,
      institution: "Woolf (MS CS)",
      period: "Online | Planned 2027-2028",
      board: "European Standards",
      percentage: "Future",
      icon: "🎯",
      color: "from-orange-500 to-red-500",
      glowColor: "orange",
      achievements: [
        "Mastering AI Principles",
        "European education standards",
        "Advanced AI/ML research"
      ],
      projects: [
        "Advanced AI/ML research"
      ],
      description: "Future specialization in artificial intelligence and machine learning",
      mindset: "AI/ML mastery",
      visualEffect: "european-code",
      year: "2027-2028"
    },
    {
      id: 5,
      institution: "Scaler School of Tech",
      period: "Parallel Learning",
      board: "Tech Education",
      percentage: "Active",
      icon: "⚡",
      color: "from-pink-500 to-purple-500",
      glowColor: "pink",
      achievements: [
        "Food Committee Member",
        "Event Manager (Ganesh Chaturthi)",
        "Learned: RL, RAG, ML",
        "Built 10 AI apps in 1 day"
      ],
      projects: [
        "Smart Mirror",
        "Go2 Path Prediction",
        "Complaint Dashboard",
        "Arduino Light",
        "Virtual Vision Pro Environment"
      ],
      description: "Hands-on tech education with focus on modern technologies",
      mindset: "Rapid prototyping & innovation",
      visualEffect: "ai-glow",
      year: "2023-Present"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Animated Background */}
      <motion.div 
        style={{
          scale: backgroundScale,
          x: parallaxX8,
          y: parallaxY8,
        }}
        className="absolute inset-0"
      >
        {/* Floating Particles */}
        {[...Array(60)].map((_, i) => (
                      <motion.div
              key={i}
              style={{
                x: parallaxX3,
                y: parallaxY3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Enhanced Brainwave Pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              animate={{
                d: [
                  "M0,50 Q10,40 20,50 T40,50 T60,50 T80,50 T100,50",
                  "M0,50 Q10,60 20,50 T40,50 T60,50 T80,50 T100,50",
                  "M0,50 Q10,40 20,50 T40,50 T60,50 T80,50 T100,50",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-blue-400"
            />
            <motion.path
              animate={{
                d: [
                  "M0,60 Q10,50 20,60 T40,60 T60,60 T80,60 T100,60",
                  "M0,60 Q10,70 20,60 T40,60 T60,60 T80,60 T100,60",
                  "M0,60 Q10,50 20,60 T40,60 T60,60 T80,60 T100,60",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-purple-400"
            />
          </svg>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          style={{
            y: headerY,
            opacity: textOpacity,
            x: parallaxX24,
            y: parallaxY24,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My tech journey from early fascination to AI/ML mastery
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Enhanced Timeline Spine */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400">
            <motion.div
              style={{ height: timelineHeight + '%' }}
              className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  x: parallaxX12,
                  y: parallaxY12,
                }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Enhanced Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    whileHover={{ 
                      scale: 1.4, 
                      rotate: 360,
                      y: -5,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} shadow-2xl flex items-center justify-center text-white text-xl font-bold relative`}
                    style={{
                      boxShadow: `0 0 25px ${item.glowColor === 'blue' ? '#3B82F6' : 
                                    item.glowColor === 'purple' ? '#8B5CF6' : 
                                    item.glowColor === 'green' ? '#10B981' : 
                                    item.glowColor === 'orange' ? '#F59E0B' : '#EC4899'}`
                    }}
                  >
                    {item.icon}
                    
                    {/* Enhanced Glow Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-40 blur-md`}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700 transition-all duration-300 ${
                      hoveredItem === item.id ? 'border-blue-500 shadow-blue-500/30' : ''
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} text-white`}>
                        {item.percentage}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <p className="text-gray-400">
                        <span className="font-semibold text-blue-400">Period:</span> {item.period}
                      </p>
                      <p className="text-gray-400">
                        <span className="font-semibold text-purple-400">Board:</span> {item.board}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Mindset */}
                    <div className="mb-4 p-3 bg-gray-800/50 rounded-xl border border-gray-600">
                      <h4 className="font-semibold text-green-400 mb-1">Mindset Evolution</h4>
                      <p className="text-gray-300 text-sm">{item.mindset}</p>
                    </div>

                    {/* Achievements */}
                    {item.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">🏆 Key Achievements</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="text-sm text-gray-300 flex items-center"
                            >
                              <span className="text-green-400 mr-2">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Projects */}
                    {item.projects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">🔧 Projects</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.projects.map((project, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-blue-400 transition-all duration-200"
                            >
                              {project}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual Effect Indicator */}
                    <div className="mt-4 text-center">
                      <span className="text-gray-500 text-xs italic">{item.visualEffect}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Evolution Section */}
        <motion.div
          style={{
            x: parallaxX18,
            y: parallaxY18,
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Skills Evolution Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { era: "Early Years", skills: ["Electronics", "Curiosity"], color: "from-blue-500 to-blue-600" },
                { era: "High School", skills: ["Programming", "Arduino"], color: "from-purple-500 to-purple-600" },
                { era: "College", skills: ["CS Foundations", "Online Learning"], color: "from-green-500 to-green-600" },
                { era: "Graduate", skills: ["AI/ML", "Research"], color: "from-orange-500 to-orange-600" },
                { era: "Professional", skills: ["RL", "RAG", "Innovation"], color: "from-pink-500 to-pink-600" }
              ].map((era, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                  }}
                  className="text-center"
                >
                  <motion.div 
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${era.color} flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {index + 1}
                  </motion.div>
                  <h4 className="font-semibold text-white mb-2">{era.era}</h4>
                  <div className="space-y-1">
                    {era.skills.map((skill, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">{skill}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;