import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, PresentationIcon, BarChart2, Search, ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import HowItWorks from '../components/HowItWorks';
import Roadmap from '../components/Roadmap';
import '../styles/testimonials.css';
import imageSrc from '../photos/roadmap.png';

const HomePage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Get featured services (one from each category)
  const categories = ['Business Plan', 'Pitch Deck', 'Financial Model', 'Feasibility Study'];
  const featuredServices = categories.map(category => 
    services.find(service => service.category === category)
  ).filter(Boolean);

  // Get featured testimonials
  const featuredTestimonials = testimonials;

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % featuredTestimonials.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-64 text-indigo-800 transform -translate-x-1/2 opacity-20" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <svg className="absolute right-0 top-0 h-full w-64 text-indigo-800 transform translate-x-1/2 opacity-20" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,100 0,100" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 bg-indigo-600 bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm md:text-base font-medium">Trusted by 85+ clients across 5 continents</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              First-rate business plan writers for <span className="text-indigo-300">ingenious entrepreneurs</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-indigo-100">
              We help entrepreneurs and nonprofits achieve positive growth with compelling business plans, pitch decks, and financial models.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white text-indigo-900 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors border border-indigo-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                Get a Free Consultation
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-indigo-800 border-opacity-30">
              <p className="text-sm uppercase tracking-wider mb-4 text-indigo-300">Trusted by businesses worldwide</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center text-indigo-200">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">$38M+</span>
                  <span className="ml-2 text-sm">Funding secured</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">85+</span>
                  <span className="ml-2 text-sm">Satisfied clients</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">10+</span>
                  <span className="ml-2 text-sm">Years experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">5</span>
                  <span className="ml-2 text-sm">Continents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1">
          <svg className="relative block w-full h-12 md:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Professional business documents crafted to help you secure funding and achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              service && (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description.substring(0, 120) + '...'}
                  icon={<service.icon className="h-6 w-6" />}
                />
              )
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
              View all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">$38M+</p>
              <p className="mt-2 text-indigo-200">Funding secured for clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">85+</p>
              <p className="mt-2 text-indigo-200">Clients across 5 continents</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10+</p>
              <p className="mt-2 text-indigo-200">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="mt-2 text-indigo-200">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>
            <br />
            <br />
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Realistic Projection */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Realistic Projection</h3>
            <p className="text-gray-600">
              We provide realistic projections backed by data, ensuring your business plans are both achievable and credible.
            </p>
          </div>

          {/* We Know Your Audience */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">We Know Your Audience</h3>
            <p className="text-gray-600">
              We understand what investors, regulators, and business professionals look for in business plans and presentations.
            </p>
          </div>

          {/* First-Hand Experience */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">First-Hand Experience</h3>
            <p className="text-gray-600">
              Our team members have founded their own businesses and have been in your shoes, giving us unique insights.
            </p>
          </div>

          {/* Free After-Sales Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free After-Sales Services</h3>
            <p className="text-gray-600">
              We offer free after-sales support to ensure your business plans and strategies are implemented successfully.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Don't just take our word for it — hear from some of our satisfied clients.
            </p>
          </div>

          <div className="relative w-full max-w-lg mx-auto">
            <div className="testimonial-flip-container">
              {featuredTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-flip-card ${
                    index === currentTestimonialIndex ? 'visible' : ''
                  }`}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Roadmap */}
      
      <img
                src={imageSrc}
                alt="Our Approach"
                className="w-full h-full object-cover"
              />

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to take your business to the next level?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation and see how our expert business services can help you achieve your goals.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-indigo-700 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;