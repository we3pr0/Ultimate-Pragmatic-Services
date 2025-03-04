import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-5 w-5 text-green-500" />
      </div>
      <p className="ml-3 text-base text-gray-700">{text}</p>
    </div>
  );
};

export default FeatureItem;