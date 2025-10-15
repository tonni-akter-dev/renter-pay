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


export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  area: number;
  image: string;
  features:{
    name: string;
    icon: StaticImageData;
  }[]
  isFavorite: boolean;
}

