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
    location: "New York, USA",
    price: 280,
    area: 2500,
    images: [
      "https://z-cdn-media.chatglm.cn/files/53a67b99-5e29-4399-a01a-508fc17eb2bb_pasted_image_1760628432032.png?auth_key=1792164468-77d9f34faf6d43a19b83771b396c5f27-0-3a81259a14921d417d1c840dac1b4e92",
      "https://picsum.photos/seed/maple-grove-1/800/600.jpg",
      "https://picsum.photos/seed/maple-grove-2/800/600.jpg",
      "https://picsum.photos/seed/maple-grove-3/800/600.jpg",
      "https://picsum.photos/seed/maple-grove-4/800/600.jpg",
    ],
    features: [
      {
        name: "Bed- 07",
        icon: bed,
      },
      {
        name: "Bathroom- 04",
        icon: bath,
      },
      {
        name: "2500sft",
        icon: size,
      },
    ],
    isFavorite: false,
    description: "A beautiful garden house offering modern facilities and convenience, perfect for families looking for comfort and luxury.",
    bedrooms: 7,
    bathrooms: 4,
    size: "2500sft",
    yearBuilt: 2018,
    amenities: ["Pool", "Gym", "24/7 Security", "Garden", "Parking", "Terrace"],
    address: "Maple Grove District, New York, USA",
    rating: 4.6,
    reviews: 28,
  },
  {
    id: 2,
    name: "Riverside Retreat",
    location: "Brooklyn, New York",
    price: 350,
    area: 1200,
    images: [
      "https://picsum.photos/seed/property2/400/250.jpg",
      "https://picsum.photos/seed/property2-1/400/250.jpg",
      "https://picsum.photos/seed/property2-2/400/250.jpg",
      "https://picsum.photos/seed/property2-3/400/250.jpg",
      "https://picsum.photos/seed/property2-4/400/250.jpg",
    ],
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
    description: "A serene riverside property with breathtaking views and luxurious living spaces.",
    bedrooms: 4,
    bathrooms: 4,
    size: "6500sft",
    yearBuilt: 2018,
    amenities: ["River View", "Terrace", "Wine Cellar", "Home Theater"],
    address: "456 River Rd, Brooklyn, NY 11201",
    rating: 4.8,
    reviews: 31,
  },
  {
    id: 3,
    name: "Urban Loft",
    location: "Manhattan, New York",
    price: 420,
    area: 950,
    images: [
      "https://picsum.photos/seed/property3/400/250.jpg",
      "https://picsum.photos/seed/property3-1/400/250.jpg",
      "https://picsum.photos/seed/property3-2/400/250.jpg",
      "https://picsum.photos/seed/property3-3/400/250.jpg",
      "https://picsum.photos/seed/property3-4/400/250.jpg",
    ],
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
    description: "A modern urban loft with industrial design elements and high-end finishes.",
    bedrooms: 4,
    bathrooms: 4,
    size: "6500sft",
    yearBuilt: 2020,
    amenities: ["Rooftop Terrace", "Smart Home", "Concierge", "Fitness Center"],
    address: "789 Urban St, Manhattan, NY 10002",
    rating: 4.7,
    reviews: 42,
  },
  {
    id: 4,
    name: "Suburban Haven",
    location: "Queens, New York",
    price: 320,
    area: 1100,
    images: [
      "https://picsum.photos/seed/property4/400/250.jpg",
      "https://picsum.photos/seed/property4-1/400/250.jpg",
      "https://picsum.photos/seed/property4-2/400/250.jpg",
      "https://picsum.photos/seed/property4-3/400/250.jpg",
      "https://picsum.photos/seed/property4-4/400/250.jpg",
    ],
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
    description: "A peaceful suburban home with spacious rooms and a beautiful backyard.",
    bedrooms: 4,
    bathrooms: 4,
    size: "6500sft",
    yearBuilt: 2012,
    amenities: ["Garden", "Patio", "Fireplace", "Storage"],
    address: "321 Suburban Dr, Queens, NY 11375",
    rating: 4.3,
    reviews: 18,
  },
  {
    id: 5,
    name: "City View Apartment",
    location: "Manhattan, New York",
    price: 480,
    area: 750,
    images: [
      "https://picsum.photos/seed/property5/400/250.jpg",
      "https://picsum.photos/seed/property5-1/400/250.jpg",
      "https://picsum.photos/seed/property5-2/400/250.jpg",
      "https://picsum.photos/seed/property5-3/400/250.jpg",
      "https://picsum.photos/seed/property5-4/400/250.jpg",
    ],
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
    description: "A luxurious apartment with panoramic city views and premium amenities.",
    bedrooms: 4,
    bathrooms: 4,
    size: "6500sft",
    yearBuilt: 2019,
    amenities: ["City View", "Balcony", "Doorman", "Lounge"],
    address: "555 City View Ave, Manhattan, NY 10003",
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 6,
    name: "Garden Oasis",
    location: "Bronx, New York",
    price: 260,
    area: 900,
    images: [
      "https://picsum.photos/seed/property6/400/250.jpg",
      "https://picsum.photos/seed/property6-1/400/250.jpg",
      "https://picsum.photos/seed/property6-2/400/250.jpg",
      "https://picsum.photos/seed/property6-3/400/250.jpg",
      "https://picsum.photos/seed/property6-4/400/250.jpg",
    ],
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
    description: "A tranquil property surrounded by lush gardens and peaceful scenery.",
    bedrooms: 4,
    bathrooms: 4,
    size: "6500sft",
    yearBuilt: 2014,
    amenities: ["Garden", "Pond", "Greenhouse", "Workshop"],
    address: "777 Garden Path, Bronx, NY 10451",
    rating: 4.4,
    reviews: 22,
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