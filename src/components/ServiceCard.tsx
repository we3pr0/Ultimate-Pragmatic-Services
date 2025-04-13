import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon: Icon, image }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Link 
      to={`/services/${id}`}
      className="group block bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-primary-100 flex items-center justify-center transition-opacity duration-300 ${
            imageLoading ? 'opacity-100' : 'opacity-0'
          }`}>
            <LoadingSpinner size="md" />
          </div>
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4 transition-colors group-hover:bg-primary-100">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-lg font-display font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-4">
          {description}
        </p>
        
        <div className="inline-flex items-center text-primary-600 font-medium group/link">
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;