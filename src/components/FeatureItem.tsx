import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 p-1">
        <div className="rounded-full bg-primary-100 text-primary-600 p-1 transition-colors duration-200 group-hover:bg-primary-200">
          <Check className="h-4 w-4" />
        </div>
      </div>
      <p className="ml-3 text-secondary-600 group-hover:text-secondary-900 transition-colors duration-200">
        {text}
      </p>
    </div>
  );
};

export default FeatureItem;