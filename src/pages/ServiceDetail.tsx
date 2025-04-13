import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceById } from '../data/services';
import { getServicesByCategory } from '../data/services';
import FeatureItem from '../components/FeatureItem';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : null;

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/services" 
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/services" 
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-indigo-600 font-medium">{service.category}</p>
                <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
              </div>
            </div>

            {/* Add illustrative image */}
            {service.image && (
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}

            <h2 className="text-xl font-semibold text-gray-900 mb-4">{service.heading}</h2>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">{service.description}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors text-center"
              >
                Request a Quote
              </Link>
              <Link 
                to="/samples" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Request a Sample
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Show other services in the same category */}
            {getServiceById(serviceId || '')?.category && 
              getServicesByCategory()[getServiceById(serviceId || '')?.category || '']
                .filter(s => s.id !== serviceId)
                .slice(0, 3)
                .map(relatedService => (
                  <div key={relatedService.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Add illustrative image for related services */}
                    {relatedService.image && (
                      <img 
                        src={relatedService.image} 
                        alt={relatedService.title} 
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                        <relatedService.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedService.description.substring(0, 100)}...</p>
                      <Link 
                        to={`/services/${relatedService.id}`} 
                        className="text-indigo-600 font-medium hover:text-indigo-800"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;