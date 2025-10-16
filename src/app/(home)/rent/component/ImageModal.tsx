import { useState } from "react";
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
}: {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!isOpen) return null;

  const propertyImages = Array.isArray(property.image)
    ? property.image
    : [
        property.image,
        property.image,
        property.image,
        property.image,
        property.image,
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000004D] bg-opacity-75 p-4">
      <div
        className="relative bg-white rounded-[30px] overflow-hidden"
        style={{ height: "749px", width: "100%", maxWidth: "900px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-700 text-xl" />
        </button>

        <div className="flex flex-col px-[50px]">
          <div className="property_image flex-grow mt-10">
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 h-full"
            >
              {propertyImages.map((image: string, index: number) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
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

export default ImageModal;
