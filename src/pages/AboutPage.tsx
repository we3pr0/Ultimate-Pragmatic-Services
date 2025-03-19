import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import imageSrc from '../photos/sean-pollock-PhYq704ffdA-unsplash.jpg';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}

        {/* About Us Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
              At Ultimate Pragmatic Services (UPS), we don’t just offer consulting—we drive business success. Since our inception in 2018, we have been a trusted partner for businesses worldwide, delivering expert business management consulting and financial advisory services that transform visions into reality.
              </p>
              <p className="mb-4">
              Our team of seasoned business strategists and financial experts is dedicated to one goal: helping you achieve sustainable growth through pragmatic, results-driven solutions. We specialize in supporting small and medium enterprises (SMEs), ensuring they navigate complex regulatory landscapes, secure crucial funding, and optimize operations for long-term success.
              </p>
              <p className="mb-4">
              With an unwavering commitment to excellence, we have helped hundreds of businesses across diverse industries obtain regulatory approvals and raise essential capital—two vital pillars of business expansion.
              </p>
              <p className="mb-4">
              At UPS, we are more than consultants—we are growth architects. Whether you're a startup looking to establish a strong foundation or an existing business seeking to scale, our deep industry expertise, strategic insight, and hands-on approach will empower you to thrive in today’s competitive market.
              </p>
              <p className="mb-4">
              Let us help you turn challenges into opportunities and drive your business to new heights. Your success is our mission.
              </p>
              </div>
    </div>

    {/* Image */}
    <div className="relative">
      

      <img
        src={imageSrc}
        alt="Our Story"
        className="w-full h-full object-cover"
      />
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <img
                src="src/photos/randy-fath-G1yhU1Ej-9A-unsplash.jpg" // Replace with your image URL
                alt="Our Approach"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
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
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 rounded-lg shadow-lg overflow-hidden text-white">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">TRUST THE EXPERTS AT ULTIMATE PRAGMATIC SERVICES</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Your trusted partner for business plans and financial advisory needs.
            </p>
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