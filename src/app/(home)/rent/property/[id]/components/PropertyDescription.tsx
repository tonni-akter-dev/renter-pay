// components/PropertyDetails.tsx
import React from 'react';

interface PropertyDetailsProps {
  description: string;
}

const PropertyDescription: React.FC<PropertyDetailsProps> = ({ description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">房产详情</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PropertyDescription;

