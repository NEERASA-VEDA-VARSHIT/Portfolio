import React from 'react';

const Portfolio = () => {
  return (
    <div className="page-container py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Project One"
            description="A modern web application built with React and Node.js"
            tags={['React', 'Node.js', 'MongoDB']}
          />
          <ProjectCard
            title="Project Two"
            description="Mobile-first responsive design with advanced animations"
            tags={['Next.js', 'Tailwind CSS', 'Framer Motion']}
          />
          <ProjectCard
            title="Project Three"
            description="Real-time data visualization dashboard"
            tags={['D3.js', 'TypeScript', 'WebSocket']}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;