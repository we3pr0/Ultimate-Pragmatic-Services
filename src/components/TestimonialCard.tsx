import React from 'react';

const TestimonialCard = ({ quote, author, company, rating }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <p className="text-lg italic text-gray-600 mb-4">"{quote}"</p>
      <div className="text-gray-900 font-bold">{author}</div>
      <div className="text-gray-500 text-sm">{company}</div>
      <div className="mt-2 text-yellow-500">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;