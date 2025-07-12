import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: '📝' },
    { id: 'tech', label: 'Technology', icon: '💻' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'creative', label: 'Creative', icon: '🎨' },
    { id: 'thoughts', label: 'Thoughts', icon: '💭' }
  ];

  // Placeholder blog posts for future content
  const blogPosts = [
    {
      id: 1,
      title: "Coming Soon: Stories About Code, Creativity, and Crazy Late-Night Breakthroughs",
      excerpt: "I'm writing stories about code, creativity, and crazy late-night breakthroughs. Stay tuned for insights into AI/ML, robotics, and the creative process.",
      category: "thoughts",
      readTime: "5 min read",
      date: "Coming Soon",
      featured: true,
      status: "planned"
    },
    {
      id: 2,
      title: "The Future of AI in Creative Industries",
      excerpt: "Exploring how artificial intelligence is transforming video editing, design, and creative workflows.",
      category: "ai",
      readTime: "8 min read",
      date: "Coming Soon",
      featured: false,
      status: "planned"
    },
    {
      id: 3,
      title: "Building Smart Mirrors: A Technical Deep Dive",
      excerpt: "Behind the scenes of developing intelligent mirror systems with speech-to-speech capabilities and RAG integration.",
      category: "tech",
      readTime: "12 min read",
      date: "Coming Soon",
      featured: false,
      status: "planned"
    },
    {
      id: 4,
      title: "ROS2 Navigation: Solving the Go2 Robot's Visibility Problem",
      excerpt: "A detailed look at implementing 'isVisible' logic and solving complex pathfinding issues in dynamic environments.",
      category: "tech",
      readTime: "15 min read",
      date: "Coming Soon",
      featured: false,
      status: "planned"
    },
    {
      id: 5,
      title: "Color Grading for Emotional Storytelling",
      excerpt: "How mood-based color grading can transform raw footage into compelling visual narratives.",
      category: "creative",
      readTime: "10 min read",
      date: "Coming Soon",
      featured: false,
      status: "planned"
    },
    {
      id: 6,
      title: "Natural Farming Meets Technology",
      excerpt: "Exploring sustainable tech solutions and how IoT can revolutionize agricultural practices.",
      category: "tech",
      readTime: "7 min read",
      date: "Coming Soon",
      featured: false,
      status: "planned"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about technology, creativity, and innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured);
              if (!featuredPost) return null;

              return (
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm rounded-full">
                      Featured Post
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      Status: {featuredPost.status === 'planned' ? '🚧 Coming Soon' : 'Published'}
                    </span>
                    <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="capitalize">{post.category}</span>
                  </div>
                </div>
                
                <div className="ml-6 text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === 'planned' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {post.status === 'planned' ? '🚧 Planned' : 'Published'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-green-200">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Get notified when new posts are published. No spam, just quality content about technology and creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Blog Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm writing stories about code, creativity, and crazy late-night breakthroughs. 
              The blog will feature insights into AI/ML, robotics, video editing, and the creative process.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI/ML</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Robotics</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Video Editing</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Technology</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 