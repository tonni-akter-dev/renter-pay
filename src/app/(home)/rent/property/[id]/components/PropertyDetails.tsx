import React from "react";
import ImageGallery from "./ImageGallery";
import PropertyInfo from "./PropertyInfo";
import Amenities from "./Amenities";
import LocalInfo from "./LocalInfo";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import PropertyDescription from "./PropertyDescription";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { properties } from "@/app/utils/data"; // Import the properties array
import { Property } from "@/app/utils/type";

interface IProps {
  id: string;
}

const PropertyDetails: React.FC<IProps> = ({ id }) => {
  // Find the property with the matching ID
  const propertyData: Property | undefined = properties.find(
    (property) => property.id === parseInt(id)
  );

  // If property not found, show a message
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

  // Create reviews array in the expected format
  const reviews = [
    {
      id: 1,
      name: "James Carter",
      rating: 5,
      date: "2023年5月15日",
      comment:
        "非常棒的住宿体验！房子宽敞明亮，设施齐全，位置便利。强烈推荐给计划来纽约旅游的朋友们。",
    },
    {
      id: 2,
      name: "Emily Johnson",
      rating: 4,
      date: "2023年4月22日",
      comment:
        "房子很漂亮，社区环境也很好。唯一的小问题是WiFi信号在某些区域不太稳定。总体来说还是很满意的。",
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      date: "2023年3月10日",
      comment:
        "完美的家庭度假选择！孩子们特别喜欢泳池和花园。房东非常友好，对我们的问题回应迅速。",
      },
  ];

  // Create amenities array in the expected format
  const amenities = propertyData?.amenities.map((amenity) => ({
    name: amenity,
    icon: amenity.toLowerCase().replace(/\s+/g, "_"),
  }));

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Rent", href: "/rent" },
    { label: propertyData.name, isActive: true },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="mt-6">
        <ImageGallery property={propertyData} />

        <PropertyInfo
          name={propertyData.name}
          basicInfo={{
            bedrooms: propertyData.bedrooms || 0,
            bathrooms: propertyData.bathrooms || 0,
            size: propertyData.size || "",
            price: `$${propertyData.price}`,
            period: "每周",
            location: propertyData.location,
          }}
        />

        <PropertyDescription description={propertyData.description || ""} />
        <Amenities amenities={amenities} />

        <LocalInfo location={propertyData.location} />
        <Reviews reviews={reviews} />

        <ContactSection propertyId={propertyData.id.toString()} />
      </div>
    </div>
  );
};

export default PropertyDetails;