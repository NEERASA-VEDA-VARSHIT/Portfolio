import React from 'react';

const ExperienceItem = ({ position, company, period, description, achievements, technologies }) => (
  <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent rounded-r-xl">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
        {period}
      </span>
    </div>
    <p className="text-purple-600 font-medium mb-1">{company}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
      <ul className="space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div>
      <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceItem; 