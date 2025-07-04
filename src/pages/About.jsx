import React from 'react';

const About = () => {
  return (
    <div className="page-container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Hi, I'm a passionate developer with expertise in modern web technologies.
            I love creating beautiful and functional applications that solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>Open Source</li>
                <li>AI & Machine Learning</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;