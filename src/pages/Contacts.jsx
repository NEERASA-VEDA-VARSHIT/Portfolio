import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: "📧",
      link: "mailto:neerasa.veda@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/in/neerasa-veda",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      icon: "🐙",
      link: "https://github.com/neerasa-veda",
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "YouTube",
      icon: "📺",
      link: "https://youtube.com/@neerasa-veda",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's build something remarkable together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-3xl">🧠</div>
                <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="text-center">
                <div className="text-4xl mb-4">💭</div>
                <blockquote className="text-xl text-gray-700 italic">
                  "Let's build something remarkable together."
                </blockquote>
                <p className="text-gray-600 mt-4">— Neerasa Veda Varshit</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white text-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="font-medium">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Neural Network Background */}
            <div className="relative h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {/* Neural Network Pattern */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-400"/>
                      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-purple-300"/>
                      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-purple-300"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#neural)"/>
                </svg>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-gray-700 font-medium">Always Learning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Response</h3>
                <p className="text-gray-600">I typically respond within 24 hours</p>
              </div>
              <div>
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration Ready</h3>
                <p className="text-gray-600">Open to exciting new projects and partnerships</p>
              </div>
              <div>
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation Focus</h3>
                <p className="text-gray-600">Passionate about cutting-edge technology and creative solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;