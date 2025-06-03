import React from 'react';

const Education = () => {
  return (
    <div className="page-container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Education</h1>
        <div className="space-y-8">
          <EducationItem
            degree="Master of Science in Computer Science"
            institution="University Name"
            year="2020-2022"
            description="Specialized in Artificial Intelligence and Machine Learning"
          />
          <EducationItem
            degree="Bachelor of Technology"
            institution="University Name"
            year="2016-2020"
            description="Major in Computer Science and Engineering"
          />
        </div>
      </div>
    </div>
  );
};

const EducationItem = ({ degree, institution, year, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
    <p className="text-gray-600 mt-2">{institution}</p>
    <p className="text-gray-500 text-sm mt-1">{year}</p>
    <p className="text-gray-700 mt-4">{description}</p>
  </div>
);

export default Education;