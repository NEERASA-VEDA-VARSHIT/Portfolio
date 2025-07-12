import React from 'react';

const SkillItem = ({ skill, level }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-gray-700">{skill}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillItem; 