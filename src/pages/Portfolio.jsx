import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🎬' },
    { id: 'storytelling', label: 'Storytelling', icon: '📖' },
    { id: 'effects', label: 'Effects', icon: '✨' },
    { id: 'color', label: 'Color Grading', icon: '🎨' },
    { id: 'transitions', label: 'Transitions', icon: '🔄' }
  ];

  const projects = [
    {
      id: 1,
      title: "Swaroop Vitb Project",
      category: "storytelling",
      type: "Long-form Edit",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
      description: "A comprehensive long-form video edit showcasing storytelling through visual narrative and emotional pacing.",
      mood: "Emotional",
      pace: "Slow",
      tone: "Cinematic",
      duration: "15:30",
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      techniques: [
        "Mood-based color grading",
        "Layered audio storytelling",
        "Emotional rhythm through match cuts",
        "Dynamic sound design"
      ],
      featured: true,
      hero: true,
      scene: "Scene 1: Long-form storytelling"
    },
    {
      id: 2,
      title: "Match Cut Rhythm",
      category: "transitions",
      type: "Technique Showcase",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      description: "How I used match cuts to maintain emotional rhythm and visual continuity.",
      mood: "Dynamic",
      pace: "Medium",
      tone: "Professional",
      duration: "3:45",
      tools: ["Premiere Pro", "After Effects"],
      techniques: [
        "Match cut transitions",
        "Visual continuity",
        "Rhythm-based editing"
      ],
      featured: true,
      scene: "Scene 2: Transitions"
    },
    {
      id: 3,
      title: "Before/After: Mood Grading",
      category: "color",
      type: "Color Grading",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Transforming raw footage through mood-based color grading techniques.",
      mood: "Atmospheric",
      pace: "Slow",
      tone: "Artistic",
      duration: "5:20",
      tools: ["DaVinci Resolve", "Premiere Pro"],
      techniques: [
        "Mood-based color grading",
        "Before/after comparison",
        "Atmospheric enhancement"
      ],
      featured: false,
      scene: "Scene 3: Color grading"
    },
    {
      id: 4,
      title: "Title Animation Masterclass",
      category: "effects",
      type: "After Effects",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      description: "Title animation made entirely in After Effects with custom motion graphics.",
      mood: "Energetic",
      pace: "Fast",
      tone: "Modern",
      duration: "2:15",
      tools: ["After Effects", "Cinema 4D"],
      techniques: [
        "Custom motion graphics",
        "3D text animation",
        "Particle effects"
      ],
      featured: false,
      scene: "Scene 4: Experimental cuts"
    },
    {
      id: 5,
      title: "Audio Storytelling",
      category: "storytelling",
      type: "Audio Design",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
      description: "Layered audio design that enhances narrative and emotional impact.",
      mood: "Immersive",
      pace: "Variable",
      tone: "Cinematic",
      duration: "8:45",
      tools: ["Premiere Pro", "Audition"],
      techniques: [
        "Layered audio storytelling",
        "Dynamic sound design",
        "Emotional audio cues"
      ],
      featured: false,
      scene: "Scene 1: Long-form storytelling"
    },
    {
      id: 6,
      title: "Seamless Transitions",
      category: "transitions",
      type: "Transition Effects",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      description: "Creating seamless transitions that maintain visual flow and narrative continuity.",
      mood: "Smooth",
      pace: "Medium",
      tone: "Professional",
      duration: "4:30",
      tools: ["Premiere Pro", "After Effects"],
      techniques: [
        "Seamless transitions",
        "Visual flow",
        "Narrative continuity"
      ],
      featured: false,
      scene: "Scene 2: Transitions"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Director's Cut - Cinematic storytelling through video editing, effects, and creative visual narratives
          </p>
        </motion.div>

        {/* Hero Project - Full Screen Video Reel */}
        {filteredProjects.find(p => p.hero) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            {(() => {
              const heroProject = filteredProjects.find(p => p.hero);
              if (!heroProject) return null;

              return (
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Hero Background with Glassmorphism */}
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={heroProject.image}
                      alt={heroProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />
                    
                    {/* Hero Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full backdrop-blur-sm">
                          Featured Project
                        </span>
                        <span className="text-white/80 text-sm">{heroProject.duration}</span>
                        <span className="text-white/80 text-sm">•</span>
                        <span className="text-white/80 text-sm">{heroProject.scene}</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {heroProject.title}
                      </h2>
                      
                      <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                        {heroProject.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        {heroProject.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setSelectedProject(heroProject)}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 backdrop-blur-sm"
                      >
                        Watch Project
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scroll Reel */}
        <div className="relative">
          <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
            {filteredProjects.filter(project => !project.hero).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group flex-shrink-0 w-80"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">
                          {project.type}
                        </span>
                        <span className="text-white/80 text-sm">{project.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <span className="text-xs text-gray-400">{project.mood}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{project.pace}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{project.tone}</span>
                      </div>
                      {project.featured && (
                        <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Scene Label */}
                    <div className="mb-3">
                      <span className="text-xs text-purple-300 font-medium">{project.scene}</span>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                          +{project.tools.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Duration: {selectedProject.duration}</span>
                      <span>Mood: {selectedProject.mood}</span>
                      <span>Pace: {selectedProject.pace}</span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-2">Techniques Used</h3>
                      <ul className="space-y-1">
                        {selectedProject.techniques.map((technique, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="text-purple-500 mr-2">•</span>
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-900/20 rounded-2xl p-4 border border-purple-700">
                      <h3 className="font-semibold text-white mb-2">Scene</h3>
                      <p className="text-purple-300">{selectedProject.scene}</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Together?</h2>
            <p className="text-gray-300 mb-6">
              Let's bring your vision to life through compelling video storytelling and creative editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Start a Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                View Showreel
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;