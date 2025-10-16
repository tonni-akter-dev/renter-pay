import React, { useState } from "react";
import Image from "next/image";
import explore_image from "../../../../../../../public/assets/explore_image.png";
import ImageModal from "../../../component/ImageModal";
import { Property } from "@/app/utils/type";

interface ImageGalleryProps {
  property: Property;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract images from property data
  const images = property?.images || [];

  if (!images || images.length === 0) {
    return <div className="text-center py-8">No images available</div>;
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mb-8">
      <div className="parent grid grid-cols-12 grid-rows-5 gap-4 h-[500px] md:h-[600px]">
        {/* Main large image */}
        <div className="div1 col-span-6 row-span-5 relative overflow-hidden cursor-pointer rounded-lg">
          <Image
            src={images[0]}
            alt={`${property.name} - Main image`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority // Load the main image with priority
          />
        </div>

        {/* Top right small image 1 */}
        {images.length > 1 && (
          <div className="div3 col-span-3 row-span-2 relative overflow-hidden cursor-pointer rounded-lg">
            <Image
              src={images[1]}
              alt={`${property.name} - Image 2`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Top right small image 2 */}
        {images.length > 2 && (
          <div className="col-span-3 row-span-2 relative overflow-hidden cursor-pointer rounded-lg">
            <Image
              src={images[2]}
              alt={`${property.name} - Image 3`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Bottom large image with explore button */}
        {images.length > 3 && (
          <div className="relative col-span-6 row-span-3 overflow-hidden cursor-pointer rounded-lg">
            <Image
              src={images[3]}
              alt={`${property.name} - Image 4`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Explore Button */}
            <div className="absolute right-6 bottom-6">
              <button
                onClick={openModal}
                className="px-4 py-2.5 flex gap-2.5 items-center text-sm font-medium bg-white text-primary-900 rounded-[100px] transition-colors"
                style={{ boxShadow: "0px 24px 53px 0px #0000001A" }}
              >
                <Image src={explore_image} alt="" /> Explore all photos (
                {images.length})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal integration - passing activeImage index */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        property={{
          ...property,
          images: images, // explicitly ensure images is passed correctly
        }}
      />
    </div>
  );
};

export default ImageGallery;
