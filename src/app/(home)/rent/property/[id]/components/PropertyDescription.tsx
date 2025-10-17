import React from "react";
import wavyCheck from "../../../../../../../public/assets/icons/wavy-check.png";
import Image from "next/image";

interface PropertyDetailsProps {
  description: string;
}

const PropertyDescription: React.FC<PropertyDetailsProps> = ({
  description,
}) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-h4 font-semibold text-neutral-500 mb-2.5">
          Property Details
        </h2>
        <p className="text-[#00000080] text-xl font-medium">{description}</p>
      </div>

      {/* list */}
      <div className="grid grid-cols-2">
        <div className="py-2.5 mb-2 flex gap-2.5 items-center">
          <Image src={wavyCheck} alt="" />
          <p className="text-xl text-black font-medium">
            Open floor plan with natural lighting
          </p>
        </div>
        <div className="py-2.5 mb-2 flex gap-2.5 items-center">
          <Image src={wavyCheck} alt="" />
          <p className="text-xl text-black font-medium">
            Large balcony with scenic views
          </p>
        </div>
        <div className="py-2.5 flex gap-2.5 items-center">
          <Image src={wavyCheck} alt="" />
          <p className="text-xl text-black font-medium">
            Fully equipped modern kitchen
          </p>
        </div>
        <div className="py-2.5 flex gap-2.5 items-center">
          <Image src={wavyCheck} alt="" />
          <p className="text-xl text-black font-medium">
            Gated community with 24/7 security
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
