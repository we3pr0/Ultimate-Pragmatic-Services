import { getServicesByCategory } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const servicesByCategory = getServicesByCategory();
  const categories = Object.keys(servicesByCategory);

  return (
    <div className="bg-secondary-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900" />
          <div className="absolute inset-0 bg-grid-white/[0.1]" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-100">
            Professional business documents and consulting services to help you achieve your business goals.
          </p>
        </div>
      </div>

      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="space-y-24">
          {categories.map((category) => (
            <div key={category} className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-secondary-900 sm:text-4xl">
                  {category}
                </h2>
                <p className="mt-4 text-lg text-secondary-600">
                  {getCategoryDescription(category)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesByCategory[category].map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description.substring(0, 150) + '...'}
                    icon={service.icon}
                    image={service.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-soft p-8 lg:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-secondary-900 sm:text-3xl mb-6">
              Need a Custom Service?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Don't see exactly what you're looking for? We offer customized services tailored to your specific business needs. Contact us to discuss your requirements.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get category descriptions
const getCategoryDescription = (category: string): string => {
  switch (category) {
    case 'Business Plan':
      return 'Expert business plan writing services for investors, banks, nonprofits, and more. Get funding-ready documents tailored to your needs.';
    case 'Pitch Deck':
      return 'Compelling pitch decks that help you tell your story and secure investment. Stand out with professional presentations.';
    case 'Financial Model':
      return 'Robust financial models and forecasts that demonstrate viability and growth potential to stakeholders.';
    case 'Feasibility Study':
      return 'Comprehensive feasibility studies to validate your business concept and minimize risk.';
    case 'General Consulting':
      return 'Strategic business consulting services to help you overcome challenges and achieve sustainable growth.';
    default:
      return '';
  }
};

export default ServicesPage;