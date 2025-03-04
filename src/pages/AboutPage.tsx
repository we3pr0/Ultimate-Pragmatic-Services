import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            TRUST THE EXPERTS AT ULTIMATE PRAGMATIC SERVICES
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for business plans and financial advisory needs
          </p>
        </div>

        {/* About Us Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                ULTIMATE PRAGMATIC SERVICES officially began operations in 2018. We render business management consulting services and financial advisory for our clients from across the globe. We have a team of highly-experienced business professionals who are pragmatic in ensuring your ultimate business goals are achieved.
              </p>
              <p className="mb-4">
                We give rare attention to details and focus on providing the highest quality support to small and medium scale enterprises as they achieve their business objectives. UPS has a track record of helping hundreds of businesses across all industries in procuring approval from regulatory bodies and raising financing which is absolutely crucial to achieving and maintaining business growth.
              </p>
              <p>
                We are a team of consummate project management and business administration professionals with a focus on helping startups and existing businesses achieve upward mobility. Over the years, our team of expert consultants have built up vast wealth of experience serving a broad spectrum of clientele with widely varying business needs across both private and public sector establishments.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Analysis</h3>
              <p className="text-gray-600">
                Our business plans make sense by calculating reliable estimates, outlining feasible plans, and supporting claims with data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Know Your Audience</h3>
              <p className="text-gray-600">
                We understand what investors, regulators, and business professionals look for in business plans and presentations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">First-Hand Experience</h3>
              <p className="text-gray-600">
                Our team members have founded their own businesses and have been in your shoes, giving us unique insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Business plan and pitch deck consulting is our full-time job, and your project is our priority.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Our team of young, vibrant professionals work very closely with our clients to bring fresh perspectives and new insights to your projects and businesses. This enables business owners and potential investors to make adequate plans and correctly evaluate the long and short-term economic viability of their business ventures.
              </p>
              <p>
                At ULTIMATE PRAGMATIC SERVICES, we hold our clients in high esteem as they are the cornerstone of our business and we do not stop working until our clients are 100% satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 rounded-lg shadow-lg overflow-hidden text-white">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and see how our expert business services can help you achieve your goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;