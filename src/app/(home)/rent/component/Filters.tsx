import { useState } from "react";
import ResetButton from "./ResetButton";
import RentBudget from "./RentBudget";
import Suburb from "./Suburb";
import PropertyType from "./PropertyType";
import { FacilityKey, PropertyTypeKey } from "@/app/utils/type";
import Facilities from "./Facilities";

const Filters = () => {
  const [propertyTypes, setPropertyTypes] = useState<
    Record<PropertyTypeKey, boolean>
  >({
    apartment: true,
    house: false,
    condo: false,
    studio: false,
  });
  const [facilities, setFacilities] = useState<Record<FacilityKey, boolean>>({
    parking: true,
    gym: false,
    pool: false,
    petFriendly: false,
  });

  const handlePropertyTypeChange = (type: PropertyTypeKey) => {
    setPropertyTypes({
      ...propertyTypes,
      [type]: !propertyTypes[type],
    });
  };

  const handleFacilityChange = (facility: FacilityKey) => {
    setFacilities({
      ...facilities,
      [facility]: !facilities[facility],
    });
  };

  return (
    <aside className="w-full md:w-[1/4] lg:w-[339px]  rounded-lg h-fit">
      <ResetButton />
      {/* Rent Budget */}
      <RentBudget />
      {/* Suburbs */}
      <Suburb />
      {/* Property Type */}
      <PropertyType
        propertyTypes={propertyTypes}
        onHandlePropertyTypeChange={handlePropertyTypeChange}
      />
      {/* Facilities */}
      <Facilities
        facilities={facilities}
        onHandleFacilityChange={handleFacilityChange}
      />
    </aside>
  );
};

export default Filters;
