// 'use client';
// import { PropertyIcon } from "@/app/utils/Icons";
// import { Property } from "@/app/utils/type";
// import Image from "next/image";
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa6";
// import star from "../../../../../public/assets/star.png";

// interface PropertyCardProps {
//   property: Property;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
//   const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);

//   const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <div className="overflow-hidden ">
//       <div className="relative rounded-lg">
//         <Image
//         width={100}
//         height={261}
//           src={property.image}
//           alt={property.name}
//           className="w-full h-[261px] rounded-lg object-cover"
//         />
//         <button
//           className="absolute top-3 right-3 bg-white rounded-full p-2"
//           onClick={toggleFavorite}
//         >
//           {isFavorite ? (
//             <FaHeart className="text-red-500" />
//           ) : (
//             <FaRegHeart className="text-gray-600" />
//           )}
//         </button>
//       </div>
//       <div className="flex gap-[22px] mt-3">
//         {property.features.map((feature, index) => (
//           <p
//             key={index}
//             className="text-base text-[#7E8B9C] flex gap-1 items-center"
//           >
//             <Image className="size-[30px]" src={feature?.icon} alt="" />
//             {feature.name}
//           </p>
//         ))}
//       </div>
//       <div>
//         <div className="flex justify-between items-center">
//           <h3 className="font-medium text-black text-xl  mb-2">
//             {property.name}
//           </h3>
//           <PropertyIcon />
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex gap-2 items-center">
//             <span className="text-xl font-medium text-black">
//               ${property.price}
//               <span className="text-[#505F79] text-sm ">/week</span>
//             </span>
//             <span className="text-[#00000080] text-lg font-medium">.</span>
//             <span className="text-[#00000080] text-base font-normal ">
//               New York, USA
//             </span>
//           </div>
//           <div className="flex items-center">
//             <Image src={star} alt="" />
//             <Image src={star} alt="" />
//             <Image src={star} alt="" />
//             <Image src={star} alt="" />
//             <Image src={star} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

'use client';
import { PropertyIcon } from "@/app/utils/Icons";
import { Property } from "@/app/utils/type";
import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import star from "../../../../../public/assets/star.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface PropertyCardProps {
  property: Property;
}

// Image Modal Component - showing only images
const ImageModal = ({ isOpen, onClose, property }: { isOpen: boolean; onClose: () => void; property: Property }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!isOpen) return null;

  // Ensure propertyImages is always an array
  const propertyImages = Array.isArray(property.image)
    ? property.image
    : [property.image, property.image, property.image, property.image, property.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000004D] bg-opacity-75 p-4">
      <div className="relative bg-white rounded-[30px] overflow-hidden" style={{ height: '749px', width: '100%', maxWidth: '900px' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-700 text-xl" />
        </button>
        
        <div className="h-full flex flex-col px-[50px]">
          <div className="flex-grow mt-10">
            <Swiper
              style={{
                '--swiper-pagination-color': '#fff',
                height: '100%'
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 h-full"
            >
              {propertyImages.map((image, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="relative h-[570px]">
                    <Image
                      src={image}
                      alt={`${property.name} - Image ${index + 1}`}
                      fill
                      className="object-cover h-full rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="p-4 image_thumb">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {propertyImages.map((image, index) => (
                <SwiperSlide key={index} className="w-[107px] h-[65px]">
                  <div className="relative w-[107px] h-[65px]">
                    <Image
                      src={image}
                      alt={`${property.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded-lg cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

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