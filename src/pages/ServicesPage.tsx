import React from 'react';
import { getServicesByCategory, services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const servicesByCategory = getServicesByCategory();
  const categories = Object.keys(servicesByCategory);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Professional business documents and consulting services to help you achieve your business goals.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesByCategory[category].map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description.substring(0, 150) + '...'}
                  icon={<service.icon className="h-6 w-6" />}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Service?</h2>
          <p className="text-gray-600 mb-6">
            Don't see exactly what you're looking for? We offer customized services tailored to your specific business needs. Contact us to discuss your requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;