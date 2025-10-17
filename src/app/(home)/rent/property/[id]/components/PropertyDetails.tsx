import React from "react";
import ImageGallery from "./ImageGallery";
import PropertyInfo from "./PropertyInfo";
import Amenities from "./Amenities";
import LocalInfo from "./LocalInfo";
import Reviews from "./Reviews";
import PropertyDescription from "./PropertyDescription";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { properties } from "@/app/utils/data";
import { Property } from "@/app/utils/type";
import Container from "@/components/shared/Container";
import Consultation from "./Consultation";

interface IProps {
  id: string;
}

const PropertyDetails: React.FC<IProps> = ({ id }) => {
  const propertyData: Property | undefined = properties.find(
    (property) => property.id === parseInt(id)
  );

  if (!propertyData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-gray-600">
            {` The property you're looking for doesn't exist or has been removed.`}
          </p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Rent", href: "/rent" },
    { label: propertyData.name, isActive: true },
  ];

  return (
    <div className="">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="mt-6">
        <Container>
          <ImageGallery property={propertyData} />
          <PropertyInfo property={propertyData} />
          <PropertyDescription description={propertyData.description || ""} />
          <div className="mb-7">
            <h2 className="text-h4 font-semibold text-gray-800 mb-6">
              Key Features & Amenities
            </h2>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-2">
              {propertyData?.amenities?.map((data) => (
                <Amenities key={data.name} amenity={data} />
              ))}
            </div>
          </div>
          <LocalInfo location={propertyData.location} />
        </Container>
        <Reviews />
        <Consultation />
      </div>
    </div>
  );
};

export default PropertyDetails;
