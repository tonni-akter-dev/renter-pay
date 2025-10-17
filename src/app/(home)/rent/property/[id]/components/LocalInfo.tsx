// components/LocalInfo.tsx
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface LocalInfoProps {
  location: string;
}

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const LocalInfo: React.FC<LocalInfoProps> = () => {
  // Fixed location for testing
  const center = { lat: 40.7128, lng: -74.0060 }; 
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  if (loadError) {
    return <div>Error loading map: {loadError.message}</div>;
  }

  return (
    <div className="mb-[64px]">
      <h2 className="text-h3 font-semibold text-primary-900 mb-6">Local Informations</h2>
      <div className="relative h-64 md:h-[490px] rounded-lg overflow-hidden bg-gray-200">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LocalInfo;