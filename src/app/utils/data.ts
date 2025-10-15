import { Address, Property } from "./type";
import bed from "../../../public/bed.png";
import bath from "../../../public/bath.png";
import size from "../../../public/bed.png";

export const propertyType = [
  { key: "house" as const, label: "House" },
  { key: "land" as const, label: "Land" },
  { key: "apartment" as const, label: "Apartment" },
  { key: "Town house" as const, label: "Town House" },
  { key: "vila" as const, label: "Vila" },
  { key: "acreage" as const, label: "Acreage" },
];
export const facilities = [
  { key: "Pet-friendly" as const, label: "Pet-friendly" },
  { key: "Parking" as const, label: "Parking" },
  { key: "Private Pool" as const, label: "Private Pool" },
  { key: "Gym / Fitness Center" as const, label: "Gym / Fitness Center" },
  { key: "Garden / Outdoor Space" as const, label: "Garden / Outdoor Space" },
  { key: "24/7 Security" as const, label: "24/7 Security" },
];

export const allAddresses: Address[] = [
  { id: 1, address: "Eshelby Drive, Cranbrook", type: "street" },
  { id: 2, address: "2-6 Eshelby Dr, Cannonvale", type: "address" },
  { id: 3, address: "59/3 Eshelby Drive Cannonvale", type: "address" },
  { id: 4, address: "123 Main Street, Springfield", type: "address" },
  { id: 5, address: "456 Oak Avenue, Riverside", type: "street" },
  { id: 6, address: "789 Pine Road, Hillside", type: "street" },
];

export const properties: Property[] = [
  {
    id: 1,
    name: "Maple Grove Garden House",
    location: "Manhattan, New York",
    price: 280,
    area: 850,
    image: "https://picsum.photos/seed/property1/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: false,
  },
  {
    id: 2,
    name: "Riverside Retreat",
    location: "Brooklyn, New York",
    price: 350,
    area: 1200,
    image: "https://picsum.photos/seed/property2/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: false,
  },
  {
    id: 3,
    name: "Urban Loft",
    location: "Manhattan, New York",
    price: 420,
    area: 950,
    image: "https://picsum.photos/seed/property3/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: true,
  },
  {
    id: 4,
    name: "Suburban Haven",
    location: "Queens, New York",
    price: 320,
    area: 1100,
    image: "https://picsum.photos/seed/property4/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: false,
  },
  {
    id: 5,
    name: "City View Apartment",
    location: "Manhattan, New York",
    price: 480,
    area: 750,
    image: "https://picsum.photos/seed/property5/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: false,
  },
  {
    id: 6,
    name: "Garden Oasis",
    location: "Bronx, New York",
    price: 260,
    area: 900,
    image: "https://picsum.photos/seed/property6/400/250.jpg",
    features: [
      {
        name: "Bed- 04",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "6500sft",
        icon: size,
      },
    ],
    isFavorite: false,
  },
];
