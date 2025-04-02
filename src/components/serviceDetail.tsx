import React from 'react';
import { getServiceById } from '../data/services';

const ServiceDetail = ({ id }: { id: string }) => {
  const service = getServiceById(id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      {service.image && (
        <img 
          src={service.image} 
          alt={service.title} 
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} 
        />
      )}
      {service.illustrativeImage && (
        <img 
          src={service.illustrativeImage} 
          alt={`${service.title} illustration`} 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '20px' }} 
        />
      )}
      <h2>{service.heading}</h2>
      <p>{service.description}</p>
      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;