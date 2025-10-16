// components/LocalInfo.tsx
import React from 'react';

interface LocalInfoProps {
  location: string;
}

const LocalInfo: React.FC<LocalInfoProps> = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">本地信息</h2>
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-200">
        {/* 这里可以集成地图API，如Google Maps或Mapbox */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600">{location}</p>
            <p className="text-sm text-gray-500 mt-2">地图将在此处显示</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalInfo;