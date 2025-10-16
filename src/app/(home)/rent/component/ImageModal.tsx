'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Property } from "@/app/utils/type";

const ImageModal = ({
  isOpen,
  onClose,
  property,
  initialSlide = 0,
}: {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
  initialSlide?: number;
}) => {
  console.log(property,"property from modal")
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Use the images array directly from the property
  const propertyImages = property?.images || [];

  // Set initial slide when the modal opens
  useEffect(() => {
    if (mainSwiper && isOpen) {
      mainSwiper.slideTo(initialSlide);
    }
  }, [mainSwiper, isOpen, initialSlide]);

  // Mark component as ready when it opens
  useEffect(() => {
    if (isOpen) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Only render the swiper content when the component is ready
  if (!isReady) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000004D] bg-opacity-75 p-4">
      <div
        className="relative bg-white rounded-[20px] lg:rounded-[30px] overflow-hidden max-w-[900px] w-full lg:h-[749px] h-[480px] "
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-1 lg:top-4 lg:right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-700 text-xl" />
        </button>

        <div className="flex flex-col px-8 lg:px-[50px]">
          <div className="property_image flex-grow mt-10">
            <Swiper
              onSwiper={setMainSwiper}
              loop={true}
              spaceBetween={10}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 h-full"
              initialSlide={initialSlide}
            >
              {propertyImages.map((image: string, index: number) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="relative h-[300px] lg:h-[570px]">
                    <Image
                      src={image}
                      alt={`${property.name} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      unoptimized // Add this for external images
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-[34px] image_thumb">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              initialSlide={initialSlide}
            >
              {propertyImages.map((image, index) => (
                <SwiperSlide key={index} className="w-[107px] h-[65px]">
                  <div className="relative w-[107px] h-[65px]">
                    <Image
                      src={image}
                      alt={`${property.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded-lg cursor-pointer"
                      unoptimized // Add this for external images
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

export default ImageModal;