import React from 'react';

const FeaturedPost = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-64 lg:h-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-center">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-green-600 transition-colors duration-300 cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              NV
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{post.author}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedPost; 