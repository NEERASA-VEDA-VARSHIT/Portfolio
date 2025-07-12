import React from 'react';

const EducationItem = ({ degree, institution, year, description, gpa, highlights }) => (
  <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent rounded-r-xl">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
        {gpa}
      </span>
    </div>
    <p className="text-blue-600 font-medium mb-1">{institution}</p>
    <p className="text-gray-500 text-sm mb-3">{year}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="space-y-1">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <span className="text-blue-500 mr-2">✓</span>
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);

export default EducationItem; 