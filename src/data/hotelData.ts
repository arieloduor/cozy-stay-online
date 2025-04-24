export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  capacity: number;
  size: number;
  breakfast: boolean;
  pets: boolean;
  featured: boolean;
  type: string;
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Dorm Bed",
    description: "Comfortable bed in our spacious 6-bed dormitory with modern amenities and secure lockers.",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80"
    ],
    capacity: 1,
    size: 4,
    breakfast: true,
    pets: false,
    featured: true,
    type: "Dormitory",
    amenities: ["Personal Light", "Power Socket", "Locker", "AC", "Shared Bathroom", "Fresh Linens"]
  },
  {
    id: 2,
    name: "Private Single Room",
    description: "Cozy private room perfect for solo travelers seeking privacy and comfort.",
    price: 5000,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?auto=format&fit=crop&q=80"
    ],
    capacity: 1,
    size: 12,
    breakfast: true,
    pets: true,
    featured: true,
    type: "Private Room",
    amenities: ["Private Bathroom", "AC", "TV", "Desk", "Wardrobe", "Free WiFi"]
  },
  {
    id: 3,
    name: "Twin Room",
    description: "Spacious room with two single beds, perfect for friends or family members traveling together.",
    price: 7500,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595576508985-7d6d6e0d7f8f?auto=format&fit=crop&q=80"
    ],
    capacity: 2,
    size: 18,
    breakfast: true,
    pets: true,
    featured: true,
    type: "Private Room",
    amenities: ["Twin Beds", "Private Bathroom", "AC", "TV", "Mini Fridge", "Balcony"]
  },
  {
    id: 4,
    name: "Family Room",
    description: "Comfortable room designed for families, featuring a double bed and two single beds.",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
    ],
    capacity: 4,
    size: 25,
    breakfast: true,
    pets: false,
    featured: false,
    type: "Family Room",
    amenities: ["Multiple Beds", "Private Bathroom", "AC", "TV", "Mini Kitchen", "Sitting Area"]
  }
];

export const amenities = [
  {
    title: "Free WiFi",
    description: "High-speed internet access throughout the property",
    icon: "wifi",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
  },
  {
    title: "Communal Kitchen",
    description: "Fully equipped kitchen for guest use",
    icon: "utensils",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
  },
  {
    title: "Lounge Area",
    description: "Comfortable space to relax and meet other travelers",
    icon: "sofa",
    image: "https://images.unsplash.com/photo-1630699144867-37acb899f9fb?auto=format&fit=crop&q=80"
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock security and CCTV surveillance",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
  },
  {
    title: "Laundry Service",
    description: "Washing and drying facilities available",
    icon: "washing-machine",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80"
  },
  {
    title: "Tour Desk",
    description: "Help with booking tours and travel arrangements",
    icon: "map",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
  }
];

export const testimonials = [
  {
    name: "Alice Johnson",
    text: "I had an amazing stay at ZamZam! The staff was incredibly friendly and helpful, and the facilities were top-notch. I especially loved the communal kitchen, where I met travelers from all over the world. Highly recommended!",
    rating: 5
  },
  {
    name: "Bob Williams",
    text: "ZamZam is the perfect place for budget travelers. The dorms are clean and comfortable, and the location is ideal for exploring the city. I also appreciated the 24/7 security, which made me feel safe and secure.",
    rating: 4
  },
  {
    name: "Charlie Brown",
    text: "I stayed in a private room at ZamZam and it was fantastic. The room was spacious and well-equipped, and the breakfast was delicious. I would definitely stay here again.",
    rating: 5
  }
];
