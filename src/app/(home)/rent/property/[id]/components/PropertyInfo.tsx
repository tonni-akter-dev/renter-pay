import { Property } from "@/app/utils/type";
import Image from "next/image";
import React, { useState } from "react";
import InspectionModal from "./InspectionModal";

interface PropertyInfoProps {
  property: Property;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {property?.name}
        </h1>
        <div className="flex gap-5 items-center">
          <button
            className="border border-primary-500  rounded-md text-primary-500 py-2 px-4
           hover:bg-primary-500 hover:text-white font-medium !hover:bg-primary-500"
          >
            Virtual Tour
          </button>
          <button
            onClick={openModal}

            className=" bg_gradient login_btn  login_btn bg_gradient text-primary-50 text-base font-medium rounded-md  transition-colors duration-200 border border-primary-500 !hover:bg-white hover:text-primary-500  py-2 px-4
            !hover:bg-primary-500"
          >
            Inspection Request
          </button>
        </div>
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
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-20 items-center">
          <span className="text-xl font-medium text-black">
            ${property.price}
            <span className="text-[#505F79] text-sm">/week</span>
          </span>
          <span className="text-[#00000080] text-lg font-medium">.</span>
          <span className="text-[#00000080] text-base font-normal">
            {property.location}
          </span>
        </div>
      </div>
      {
        isModalOpen && <InspectionModal closeModal={closeModal} />
      }
    </div>
  );
};

export default PropertyInfo;
