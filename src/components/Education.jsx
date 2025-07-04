import React from "react";

const Education = () => (
  <section className="py-10 px-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-[#009063]">Education</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-[#00754b]">Bachelor of Technology in Computer Science</h3>
        <p className="text-gray-700">XYZ University, 2021 - 2025</p>
        <p className="text-gray-600">CGPA: 8.7/10</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#00754b]">High School</h3>
        <p className="text-gray-700">ABC School, 2019 - 2021</p>
        <p className="text-gray-600">Percentage: 92%</p>
      </div>
    </div>
  </section>
);

export default Education;