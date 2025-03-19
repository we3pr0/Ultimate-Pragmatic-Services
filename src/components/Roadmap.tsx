import React from 'react';

const Roadmap = () => {
  return (
    <div className="relative py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">
          How It Works
        </h2>
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300" stroke="#4A5568" strokeWidth="4" />
          </svg>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision and Goals</h3>
              <p className="text-gray-600 text-center">
                Define your vision and set clear goals for your business.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scope</h3>
              <p className="text-gray-600 text-center">
                Determine the scope of your project and identify key deliverables.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deliverables</h3>
              <p className="text-gray-600 text-center">
                Outline the deliverables and milestones for your project.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-600 text-center">
                Create a timeline to track progress and ensure timely delivery.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Milestones</h3>
              <p className="text-gray-600 text-center">
                Set key milestones to measure progress and success.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">6</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources</h3>
              <p className="text-gray-600 text-center">
                Allocate resources effectively to achieve your goals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dependencies</h3>
              <p className="text-gray-600 text-center">
                Identify and manage dependencies to avoid delays.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">8</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">KPIs</h3>
              <p className="text-gray-600 text-center">
                Define key performance indicators to measure success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;