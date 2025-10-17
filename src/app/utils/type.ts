import { StaticImageData } from "next/image";

export type SuburbKey = "manhattan" | "brooklyn" | "queens" | "bronx";
export type PropertyTypeKey = "apartment" | "house" | "condo" | "studio";
export type FacilityKey = "parking" | "gym" | "pool" | "petFriendly";

export interface PropertyTypeProps {
  propertyTypes: Record<PropertyTypeKey, boolean>;
  onHandlePropertyTypeChange: (type: PropertyTypeKey) => void;
}

export interface FacilityProps {
  facilities: Record<FacilityKey, boolean>;
  onHandleFacilityChange: (facility: FacilityKey) => void;
}

export type SortOption = "featured" | "price-low-high" | "price-high-low" | "newest";

export interface Address {
  id: number;
  address: string;
  type: "street" | "address";
}
export interface BasicInfo {
  bedrooms: number;
  bathrooms: number;
  size: string;
  price: string;
  period: string;
  location: string;
}


export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  area: number;
  images: string[]; // Changed from single image to array of images
  features: {
    name: string;
    icon: StaticImageData;
  }[];
  isFavorite: boolean;
  // Add property details
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  yearBuilt?: number;
  amenities?: {
    name: string;
    icon: StaticImageData;
  }[];
  address?: string;
  rating?: number;
  reviews?: number;
}
