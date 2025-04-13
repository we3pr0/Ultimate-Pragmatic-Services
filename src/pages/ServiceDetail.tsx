import { useParams, Link } from 'react-router-dom';
import { getServiceById, getServicesByCategory } from '../data/services';
import FeatureItem from '../components/FeatureItem';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import LoadingState from '../components/LoadingState';
import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  heading: string;
  features: string[];
  image?: string;
  icon: LucideIcon;
}

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (serviceId) {
        const serviceData = getServiceById(serviceId);
        if (serviceData) {
          setService(serviceData as Service);
        }
        setIsLoading(false);
      }
    }, 500);
  }, [serviceId]);

  if (isLoading) {
    return <LoadingState text="Loading service details..." fullPage />;
  }

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl font-display font-bold text-secondary-900 mb-6">Service Not Found</h1>
        <p className="text-secondary-600 text-lg mb-8">The service you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/services" 
          className="btn-primary"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/services" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          {/* Hero Section */}
          <div className="relative">
            {service.image && (
              <div className="h-64 lg:h-96 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <p className="text-primary-200 font-medium mb-2">{service.category}</p>
                <h1 className="text-4xl font-display font-bold text-white mb-4">{service.title}</h1>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Service Icon and Title */}
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mr-6">
                <service.icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-secondary-900">{service.heading}</h2>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-12">
              <p className="text-secondary-600 text-lg leading-relaxed">{service.description}</p>
            </div>

            {/* Features */}
            <div className="bg-secondary-50 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-6">Key Features & Benefits</h3>
              <div className="grid gap-4">
                {service.features.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn-primary flex-1 justify-center"
              >
                Request a Quote
              </Link>
              <Link 
                to="/samples" 
                className="btn-secondary flex-1 justify-center"
              >
                View Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold text-secondary-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServiceById(serviceId || '')?.category && 
              getServicesByCategory()[getServiceById(serviceId || '')?.category || '']
                .filter(s => s.id !== serviceId)
                .slice(0, 3)
                .map(relatedService => (
                  <div key={relatedService.id} className="group bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {relatedService.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={relatedService.image} 
                          alt={relatedService.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                        <relatedService.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-secondary-600 mb-4 line-clamp-2">
                        {relatedService.description}
                      </p>
                      <Link 
                        to={`/services/${relatedService.id}`} 
                        className="inline-flex items-center text-primary-600 font-medium group/link hover:text-primary-700"
                      >
                        Learn more 
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover/link:translate-x-1" />
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