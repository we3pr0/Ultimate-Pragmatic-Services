import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, rating }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-soft p-8">
      {/* Quote icon */}
      <div className="absolute -top-4 left-6">
        <div className="bg-primary-500 rounded-full p-2 shadow-lg">
          <Quote className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-lg text-secondary-600 italic leading-relaxed mb-6">
          "{quote}"
        </p>
        
        <div>
          <div className="font-display font-semibold text-secondary-900">
            {author}
          </div>
          <div className="text-sm text-secondary-500">
            {company}
          </div>
          <div className="mt-2 flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? 'text-yellow-400' : 'text-secondary-200'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.274l-6.364 3.346 1.216-7.09L.31 7.044l7.098-1.031L10 0l2.592 6.013 7.098 1.031-4.542 4.486 1.216 7.09z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;