import React from 'react';

const Experience = () => {
  return (
    <div className="page-container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Experience</h1>
        <div className="space-y-8">
          <ExperienceItem
            position="Senior Developer"
            company="Company Name"
            period="2020 - Present"
            description="Led development of multiple web applications using React and Node.js"
            achievements={[
              "Improved application performance by 40%",
              "Implemented CI/CD pipeline",
              "Mentored junior developers"
            ]}
          />
          <ExperienceItem
            position="Full Stack Developer"
            company="Company Name"
            period="2018 - 2020"
            description="Developed and maintained various web applications"
            achievements={[
              "Built RESTful APIs",
              "Implemented responsive designs",
              "Optimized database queries"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ position, company, period, description, achievements }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
    <p className="text-gray-600 mt-2">{company}</p>
    <p className="text-gray-500 text-sm mt-1">{period}</p>
    <p className="text-gray-700 mt-4">{description}</p>
    <ul className="mt-4 space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <span className="mr-2">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;