
export interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  capacity: number;
  description: string;
  size: number;
  amenities: string[];
  images: string[];
  featured: boolean;
  breakfast: boolean;
  pets: boolean;
}

export interface Booking {
  id: number;
  roomId: number;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe King Suite",
    type: "Deluxe",
    price: 299,
    capacity: 2,
    description: "Experience luxury in our spacious Deluxe King Suite featuring a plush king-sized bed, elegant furnishings, and a spa-inspired bathroom with a deep soaking tub. Enjoy stunning city views and premium amenities for an unforgettable stay.",
    size: 45,
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Mini-bar", "Coffee maker", "In-room safe", "Bathrobes", "Slippers", "Rainfall shower"],
    images: ["/room-1.jpg", "/room-1b.jpg", "/room-1c.jpg"],
    featured: true,
    breakfast: true,
    pets: false
  },
  {
    id: 2,
    name: "Premium Ocean View",
    type: "Premium",
    price: 399,
    capacity: 2,
    description: "Wake up to breathtaking ocean views in our Premium Ocean View room. This luxurious accommodation features a king-sized bed, a private balcony, and a spacious bathroom with premium toiletries. Perfect for a romantic getaway.",
    size: 50,
    amenities: ["Ocean view", "Private balcony", "Free WiFi", "Air conditioning", "Flat-screen TV", "Mini-bar", "Coffee maker", "In-room safe", "Bathrobes", "Slippers"],
    images: ["/room-2.jpg", "/room-2b.jpg", "/room-2c.jpg"],
    featured: true,
    breakfast: true,
    pets: false
  },
  {
    id: 3,
    name: "Family Suite",
    type: "Suite",
    price: 499,
    capacity: 4,
    description: "Our spacious Family Suite is perfect for families or small groups. It features a master bedroom with a king-sized bed, a second bedroom with two twin beds, a living area, and two bathrooms. Enjoy all the comforts of home with hotel luxuries.",
    size: 75,
    amenities: ["Two bedrooms", "Two bathrooms", "Living area", "Free WiFi", "Air conditioning", "Flat-screen TVs", "Mini-bar", "Coffee maker", "In-room safe", "Kitchenette"],
    images: ["/room-3.jpg", "/room-3b.jpg", "/room-3c.jpg"],
    featured: true,
    breakfast: true,
    pets: true
  },
  {
    id: 4,
    name: "Standard Queen Room",
    type: "Standard",
    price: 199,
    capacity: 2,
    description: "Our comfortable Standard Queen Room offers excellent value without compromising on quality. Featuring a queen-sized bed, modern amenities, and a well-appointed bathroom, it's perfect for a business trip or weekend getaway.",
    size: 30,
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Coffee maker", "In-room safe"],
    images: ["/room-4.jpg", "/room-4b.jpg"],
    featured: false,
    breakfast: false,
    pets: false
  },
  {
    id: 5,
    name: "Executive Business Suite",
    type: "Suite",
    price: 349,
    capacity: 2,
    description: "Designed with the business traveler in mind, our Executive Business Suite offers a comfortable king-sized bed, a separate work area with a desk, and a seating area for meetings. High-speed WiFi and business amenities ensure productivity during your stay.",
    size: 55,
    amenities: ["Business desk", "Ergonomic chair", "High-speed WiFi", "Air conditioning", "Flat-screen TV", "Mini-bar", "Coffee maker", "In-room safe", "Bathrobes"],
    images: ["/room-5.jpg", "/room-5b.jpg"],
    featured: false,
    breakfast: true,
    pets: false
  },
  {
    id: 6,
    name: "Honeymoon Suite",
    type: "Luxury",
    price: 599,
    capacity: 2,
    description: "Celebrate your special occasion in our romantic Honeymoon Suite. This luxurious suite features a king-sized canopy bed, a private balcony with panoramic views, a whirlpool tub for two, and a bottle of champagne upon arrival. Create memories to last a lifetime.",
    size: 65,
    amenities: ["Panoramic views", "Private balcony", "Whirlpool tub", "Champagne service", "Free WiFi", "Air conditioning", "Flat-screen TV", "Mini-bar", "Coffee maker", "In-room safe", "Bathrobes", "Slippers", "Premium toiletries"],
    images: ["/room-6.jpg", "/room-6b.jpg", "/room-6c.jpg"],
    featured: true,
    breakfast: true,
    pets: false
  }
];

export const bookings: Booking[] = [
  {
    id: 1,
    roomId: 1,
    guestName: "John Smith",
    email: "john.smith@example.com",
    phone: "+1-555-123-4567",
    checkIn: "2025-05-10",
    checkOut: "2025-05-15",
    adults: 2,
    children: 0,
    totalPrice: 1495,
    status: "confirmed",
    createdAt: "2025-04-01T10:30:00Z"
  },
  {
    id: 2,
    roomId: 3,
    guestName: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "+1-555-234-5678",
    checkIn: "2025-05-12",
    checkOut: "2025-05-18",
    adults: 2,
    children: 2,
    totalPrice: 2994,
    status: "confirmed",
    createdAt: "2025-04-02T14:45:00Z"
  },
  {
    id: 3,
    roomId: 2,
    guestName: "Robert Johnson",
    email: "robert.johnson@example.com",
    phone: "+1-555-345-6789",
    checkIn: "2025-05-15",
    checkOut: "2025-05-20",
    adults: 2,
    children: 0,
    totalPrice: 1995,
    status: "pending",
    createdAt: "2025-04-05T09:15:00Z"
  },
  {
    id: 4,
    roomId: 5,
    guestName: "Jennifer Williams",
    email: "jennifer.williams@example.com",
    phone: "+1-555-456-7890",
    checkIn: "2025-05-20",
    checkOut: "2025-05-25",
    adults: 1,
    children: 0,
    totalPrice: 1745,
    status: "confirmed",
    createdAt: "2025-04-08T16:30:00Z"
  },
  {
    id: 5,
    roomId: 4,
    guestName: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1-555-567-8901",
    checkIn: "2025-05-22",
    checkOut: "2025-05-24",
    adults: 2,
    children: 0,
    totalPrice: 398,
    status: "cancelled",
    createdAt: "2025-04-10T11:00:00Z"
  }
];
