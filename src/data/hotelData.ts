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
    name: "8-Bed Mixed Dorm",
    type: "Dorm",
    price: 2500,
    capacity: 8,
    description: "Comfortable 8-bed mixed dormitory with individual lockers, reading lights, and power outlets for each bed. Shared bathroom facilities are located nearby.",
    size: 40,
    amenities: ["Free WiFi", "Linens Included", "Personal Lockers", "Reading Light", "Power Outlet", "Shared Bathroom", "Air Conditioning"],
    images: ["/hostel-dorm-1.jpg", "/hostel-dorm-2.jpg", "/hostel-dorm-3.jpg", "/hostel-common-1.jpg"],
    featured: true,
    breakfast: true,
    pets: false
  },
  {
    id: 2,
    name: "4-Bed Female Dorm",
    type: "Dorm",
    price: 3200,
    capacity: 4,
    description: "Female-only dormitory with 4 comfortable beds, individual lockers, and a more private atmosphere. Perfect for solo female travelers looking for a safe and friendly environment.",
    size: 30,
    amenities: ["Female Only", "Free WiFi", "Linens Included", "Personal Lockers", "Reading Light", "Power Outlet", "Shared Bathroom", "Air Conditioning"],
    images: ["/hostel-female-1.jpg", "/hostel-female-2.jpg", "/hostel-bathroom-1.jpg", "/hostel-locker-1.jpg"],
    featured: true,
    breakfast: true,
    pets: false
  },
  {
    id: 3,
    name: "Private Twin Room",
    type: "Private",
    price: 6500,
    capacity: 2,
    description: "Private room with two single beds, ideal for friends or travelers who prefer more privacy. Includes a small workspace and private bathroom.",
    size: 20,
    amenities: ["Free WiFi", "Linens Included", "Private Bathroom", "Workspace", "Air Conditioning", "Towels", "Daily Housekeeping"],
    images: ["/hostel-private-1.jpg", "/hostel-private-2.jpg", "/hostel-private-3.jpg"],
    featured: true,
    breakfast: true,
    pets: true
  },
  {
    id: 4,
    name: "Budget Single Room",
    type: "Private",
    price: 4500,
    capacity: 1,
    description: "Cozy single room perfect for solo travelers who want privacy on a budget. Features a comfortable single bed and shared bathroom facilities.",
    size: 12,
    amenities: ["Free WiFi", "Linens Included", "Reading Light", "Shared Bathroom", "Air Conditioning"],
    images: ["/hostel-single-1.jpg", "/hostel-single-2.jpg"],
    featured: false,
    breakfast: false,
    pets: false
  },
  {
    id: 5,
    name: "6-Bed Mixed Dorm",
    type: "Dorm",
    price: 2800,
    capacity: 6,
    description: "Mixed dormitory with 6 beds, offering a balance between socializing and comfort. Each bed has privacy curtains, a reading light, and a power outlet.",
    size: 35,
    amenities: ["Free WiFi", "Linens Included", "Personal Lockers", "Privacy Curtains", "Reading Light", "Power Outlet", "Shared Bathroom"],
    images: ["/hostel-mixed-1.jpg", "/hostel-mixed-2.jpg"],
    featured: false,
    breakfast: true,
    pets: false
  },
  {
    id: 6,
    name: "Deluxe Private Double",
    type: "Private",
    price: 7500,
    capacity: 2,
    description: "Our premium private room featuring a comfortable double bed, private ensuite bathroom, and a small balcony. Perfect for couples or travelers seeking extra comfort.",
    size: 25,
    amenities: ["Free WiFi", "Linens Included", "Private Bathroom", "Balcony", "Air Conditioning", "Towels", "Daily Housekeeping", "Mini Fridge"],
    images: ["/hostel-deluxe-1.jpg", "/hostel-deluxe-2.jpg", "/hostel-deluxe-3.jpg"],
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
    adults: 1,
    children: 0,
    totalPrice: 125,
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
    children: 0,
    totalPrice: 390,
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
    adults: 1,
    children: 0,
    totalPrice: 160,
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
    totalPrice: 140,
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
    adults: 1,
    children: 0,
    totalPrice: 90,
    status: "cancelled",
    createdAt: "2025-04-10T11:00:00Z"
  }
];
