"use client";
import { PropertyIcon } from "@/app/utils/Icons";
import { Property } from "@/app/utils/type";
import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import star from "../../../../../public/assets/star.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ImageModal from "./ImageModal";
import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}

// Updated PropertyCard Component
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  console.log(property, "propartycard");
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

  // Use the first image from the images array for the card display
  const mainImage = property.images && property.images.length > 0 ? property.images[0] : "";

  // Generate star rating based on property.rating
  const renderStars = () => {
    const stars = [];
    const rating = property.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image key={i} src={star} alt="star" className="w-4 h-4" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Image src={star} alt="star" className="w-4 h-4 opacity-30" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Image src={star} alt="star" className="w-4 h-4" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image key={`empty-${i}`} src={star} alt="star" className="w-4 h-4 opacity-30" />
      );
    }

    return stars;
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="relative rounded-lg cursor-pointer" onClick={openModal}>
          <Image
            width={400}
            height={261}
            src={mainImage}
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
            <h3 className="font-medium text-black text-xl mb-2">
              <Link href={`/rent/property/${property?.id}`}>{property?.name}</Link>
            </h3>
            <PropertyIcon />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="text-xl font-medium text-black">
                ${property.price}
                <span className="text-[#505F79] text-sm">/week</span>
              </span>
              <span className="text-[#00000080] text-lg font-medium">.</span>
              <span className="text-[#00000080] text-base font-normal">
                {property.location}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {renderStars()}
              {property.reviews && (
                <span className="text-xs text-gray-500 ml-1">({property.reviews})</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        property={property}
      />
    </>
  );
};

export default PropertyCard;