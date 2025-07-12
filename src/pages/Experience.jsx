import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Mirror",
      team: "3 people, 3 months",
      role: "Web Development Lead",
      icon: "🪞",
      color: "from-blue-500 to-cyan-500",
      description: "Led web development for an intelligent mirror system with speech-to-speech capabilities",
      technologies: ["React", "Whisper", "OpenAI", "Vector DBs", "RAG"],
      achievements: [
        "HTML/CSS → React Conversion",
        "Built speech-to-speech model",
        "Integrated OpenAI APIs",
        "Implemented vector database for context"
      ],
      details: "Developed a smart mirror interface that converts speech to text, processes it through AI, and responds with synthesized speech. Used advanced RAG techniques for contextual responses.",
      simulation: "Globe with voice waves around it",
      quote: "Voice becomes the interface between human and machine."
    },
    {
      id: 2,
      title: "Go2 Robot Navigation",
      team: "Individual Project",
      role: "ROS2 Developer",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      description: "Forked and enhanced ROS2 navigation for Go2 robot with visibility detection",
      technologies: ["ROS2", "Python", "C++", "Isaac Sim"],
      achievements: [
        "Forked repo: Zhefan-Xu/isaac-go2-ros2",
        "Implemented 'isVisible' logic",
        "Solved wall-goal navigation",
        "ROS patching and visibility detection"
      ],
      details: "Enhanced the Go2 robot's navigation system by implementing sophisticated visibility detection algorithms. Solved complex pathfinding issues in dynamic environments.",
      simulation: "Mesh of a maze + wall",
      quote: "If the goal was hidden, we stopped — intelligently."
    },
    {
      id: 3,
      title: "Motion Sensor Light",
      team: "Individual Project",
      role: "Hardware Developer",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      description: "Arduino-based motion sensor for natural farming light systems",
      technologies: ["Arduino", "C++", "IR Sensors", "Relay"],
      achievements: [
        "Basic Arduino sensor + relay project",
        "Practical application for natural farming",
        "Automated lighting system"
      ],
      details: "Created an automated lighting system using Arduino and motion sensors. Designed specifically for natural farming applications to optimize energy usage.",
      simulation: "Table with Arduino board rendered in 3D",
      quote: "Simple sensors, profound impact on sustainable living."
    },
    {
      id: 4,
      title: "Complaint Dashboard",
      team: "Ongoing Project",
      role: "Full Stack Developer",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      description: "Smart UI with escalation logic and complaint clustering",
      technologies: ["React", "Node.js", "ML", "Data Visualization"],
      achievements: [
        "Smart UI with escalation logic",
        "Complaint clustering & priority highlighting",
        "Real-time dashboard updates",
        "Automated priority assignment"
      ],
      details: "Building an intelligent complaint management system that automatically categorizes, prioritizes, and escalates issues based on severity and patterns.",
      simulation: "Floating 'Coming Soon' orb with pulsing effect",
      quote: "Data-driven decisions for better user experiences."
    },
    {
      id: 5,
      title: "Virtual Vision Pro Environment",
      team: "Ongoing Project",
      role: "3D Developer",
      icon: "🌊",
      color: "from-indigo-500 to-blue-500",
      description: "Realistic ocean waves and clouds with scene transitions",
      technologies: ["Unity", "C#", "3D Modeling", "VR/AR"],
      achievements: [
        "Realistic ocean waves simulation",
        "Dynamic cloud systems",
        "Scene transitions (mirror to virtual sea)",
        "Immersive VR experience"
      ],
      details: "Creating an immersive virtual environment for Vision Pro with realistic ocean simulations, dynamic weather systems, and seamless scene transitions.",
      simulation: "Floating 'Coming Soon' orb with pulsing effect",
      quote: "Where reality meets virtuality in perfect harmony."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Central Light Source */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
      />

      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Science Lab Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enter the lab - exploring the digital frontier through innovative projects and cutting-edge technology
          </p>
        </motion.div>

        {/* 3D Project Grid - Floating Orbs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className="cursor-pointer group"
            >
              {/* Project Orb */}
              <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${project.color} p-6 shadow-2xl overflow-hidden group`}>
                {/* Orb Rotation Animation */}
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="w-full h-full rounded-full border-2 border-white/30"></div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 text-4xl opacity-80"
                >
                  {project.icon}
                </motion.div>

                {/* Content */}
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-100 text-sm mb-2">{project.team}</p>
                    <p className="text-blue-200 text-sm mb-4">{project.role}</p>
                    <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Simulation Hint */}
                  <div className="mt-4 text-center">
                    <span className="text-white/60 text-xs italic">{project.simulation}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">👆</div>
                    <p className="text-sm">Click for details</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900/95 backdrop-blur-sm rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`text-4xl bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                          <p className="text-gray-400">{project.team} • {project.role}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                          <p className="text-gray-300 leading-relaxed">{project.details}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Key Achievements</h3>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-300">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Simulation</h3>
                          <p className="text-gray-300">{project.simulation}</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                          <h3 className="text-xl font-semibold text-white mb-3">Project Quote</h3>
                          <blockquote className="text-gray-300 italic text-lg">
                            "{project.quote}"
                          </blockquote>
                        </div>

                        {project.id === 2 && (
                          <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-700">
                            <h3 className="text-xl font-semibold text-white mb-3">GitHub Repository</h3>
                            <a 
                              href="https://github.com/Zhefan-Xu/isaac-go2-ros2"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              Zhefan-Xu/isaac-go2-ros2
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
            <p className="text-gray-300 mb-6">
              Let's build something extraordinary together. I'm always excited to work on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Start a Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                View GitHub
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;