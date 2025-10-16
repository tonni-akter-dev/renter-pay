import { Address, Property } from "./type";
import bed from "../../../public/assets/bed.png";
import bath from "../../../public/assets/bath.png";
import size from "../../../public/assets/bed.png";

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

export const bioData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    date: "10 Oct, 2025",
    readTime: "2 min read",
    title: "Understanding Your Rental Agreement",
    description: "Before signing, know your rights and responsibilities as a tenant.",
    author: "RenterPay Team"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    date: "12 Oct, 2025",
    readTime: "3 min read",
    title: "5 Things to Check Before Renting an Apartment",
    description: "From neighborhood safety to hidden fees — here's what to look for.",
    author: "RenterPay Team"
  },

  {
    id: 3,
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    date: "20 Oct, 2025",
    readTime: "3 min read",
    title: "How Security Deposits Really Work",
    description: "Know when and how you can get your deposit back legally.",
    author: "RenterPay Team"
  },

  {
    id: 4,
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    date: "24 Oct, 2025",
    readTime: "2 min read",
    title: "Understanding Rent Increases",
    description: "Learn why your rent might go up and what you can do about it.",
    author: "RenterPay Team"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    date: "25 Oct, 2025",
    readTime: "3 min read",
    title: "The Importance of Reading the Fine Print",
    description: "Don’t skip the small text — it could cost you big time later.",
    author: "RenterPay Team"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    date: "28 Oct, 2025",
    readTime: "4 min read",
    title: "How to Handle Rental Disputes Peacefully",
    description: "Simple steps to resolve issues with your landlord or neighbors.",
    author: "RenterPay Team"
  },

  {
    id: 7,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    date: "02 Nov, 2025",
    readTime: "3 min read",
    title: "How to Move Out Without Losing Your Deposit",
    description: "Follow this checklist before handing over your keys.",
    author: "RenterPay Team"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    date: "05 Nov, 2025",
    readTime: "2 min read",
    title: "What Makes a Lease Agreement Legal?",
    description: "Understand the essential clauses that make your lease valid.",
    author: "RenterPay Team"
  },

  {
    id: 9,
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    date: "09 Nov, 2025",
    readTime: "3 min read",
    title: "How to Break a Lease the Right Way",
    description: "Leaving early? Here’s how to do it without legal trouble.",
    author: "RenterPay Team"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    date: "12 Nov, 2025",
    readTime: "2 min read",
    title: "Understanding Utility Bills in Rentals",
    description: "Learn which utilities are your responsibility and how to save.",
    author: "RenterPay Team"
  }
];