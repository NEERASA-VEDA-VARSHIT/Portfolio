import React from 'react';

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative h-48">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-gray-500 text-sm">{post.readTime}</span>
        <span className="text-gray-500 text-sm">{post.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors duration-300 cursor-pointer">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            NV
          </div>
          <span className="text-sm font-medium text-gray-800">{post.author}</span>
        </div>
        <div className="flex space-x-2">
          {post.tags.slice(0, 2).map((tag, index) => (
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
);

export default BlogCard; 