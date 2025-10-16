'use client';
import { PropertyIcon } from "@/app/utils/Icons";
import { Property } from "@/app/utils/type";
import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import star from "../../../../../public/assets/star.png";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ImageModal from "./ImageModal";

interface PropertyCardProps {
  property: Property;
}
// Updated PropertyCard Component
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="relative rounded-lg cursor-pointer" onClick={openModal}>
          <Image
            width={100}
            height={261}
            src={property.image}
            alt={property.name}
            className="w-full h-[261px] rounded-lg object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-white rounded-full p-2"
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>
        <div className="flex gap-[22px] mt-3">
          {property.features.map((feature, index) => (
            <p
              key={index}
              className="text-base text-[#7E8B9C] flex gap-1 items-center"
            >
              <Image className="size-[30px]" src={feature?.icon} alt="" />
              {feature.name}
            </p>
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-black text-xl  mb-2">
              {property.name}
            </h3>
            <PropertyIcon />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="text-xl font-medium text-black">
                ${property.price}
                <span className="text-[#505F79] text-sm ">/week</span>
              </span>
              <span className="text-[#00000080] text-lg font-medium">.</span>
              <span className="text-[#00000080] text-base font-normal ">
                New York, USA
              </span>
            </div>
            <div className="flex items-center">
              <Image src={star} alt="" />
              <Image src={star} alt="" />
              <Image src={star} alt="" />
              <Image src={star} alt="" />
              <Image src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <ImageModal isOpen={isModalOpen} onClose={closeModal} property={property} />
    </>
  );
};

export default PropertyCard;