
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomFilters, { FilterValues } from '@/components/rooms/RoomFilters';
import RoomList from '@/components/rooms/RoomList';
import { rooms } from '@/data/hotelData';

const Rooms = () => {
  const [filters, setFilters] = useState<FilterValues>({
    priceRange: [0, 600],
    capacity: 1,
    breakfast: false,
    pets: false
  });
  
  const filteredRooms = useMemo(() => {
    return rooms.filter(room => {
      const matchesPrice = room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1];
      const matchesCapacity = room.capacity >= filters.capacity;
      const matchesBreakfast = !filters.breakfast || room.breakfast;
      const matchesPets = !filters.pets || room.pets;
      
      return matchesPrice && matchesCapacity && matchesBreakfast && matchesPets;
    });
  }, [filters]);
  
  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hotel-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Our Luxurious Rooms</h1>
            <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our selection of comfortable and elegant rooms designed for your perfect stay
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12 bg-hotel-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <RoomFilters onFilterChange={handleFilterChange} />
            </div>
            
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                {filteredRooms.length} {filteredRooms.length === 1 ? 'Room' : 'Rooms'} Available
              </h2>
              
              <RoomList rooms={filteredRooms} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rooms;
