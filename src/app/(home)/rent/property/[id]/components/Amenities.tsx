import Image, { StaticImageData } from "next/image";
import React from "react";

interface Amenity {
  name: string;
  icon: StaticImageData;
}

interface AmenitiesProps {
  amenity: Amenity;
}

const Amenities: React.FC<AmenitiesProps> = ({ amenity }) => {
  return (
    <div
      className="flex bg-primary-50 rounded-lg h-[56px] px-[18px] 
                 transition-all duration-300 ease-in-out 
                 hover:bg-primary-100 hover:shadow-md hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <Image
          src={amenity?.icon}
          alt={amenity.name}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-gray-700 transition-colors duration-300 group-hover:text-primary-700">
          {amenity.name}
        </span>
      </div>
    </div>
  );
};

export default Amenities;
