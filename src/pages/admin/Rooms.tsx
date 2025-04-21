
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { rooms } from "@/data/hotelData";
import { supabase } from '@/integrations/supabase/client';
import { Badge } from "@/components/ui/badge";

const AdminRooms = () => {
  const [bookedRoomIds, setBookedRoomIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch currently booked rooms
    async function fetchBookedRooms() {
      setLoading(true);
      try {
        const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const { data, error } = await supabase
          .from('orders')
          .select('room_id, check_in_date, check_out_date, status')
          .in('status', ['pending', 'confirmed']);
        
        if (error) {
          console.error("Error fetching booked rooms:", error);
          setLoading(false);
          return;
        }
        
        if (data) {
          // Find rooms that are currently booked for today
          const booked = data.filter(
            (order: any) =>
              order.check_in_date <= now &&
              order.check_out_date >= now
          ).map((order: any) => order.room_id);
          
          setBookedRoomIds(booked);
        }
      } catch (err) {
        console.error("Exception fetching booked rooms:", err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchBookedRooms();
    
    // Set up a subscription for real-time updates
    const channel = supabase
      .channel('public:orders')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'orders'
        }, 
        () => {
          // Refetch booked rooms when orders table changes
          fetchBookedRooms();
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Manage Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading room status...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map(room => {
                const isBooked = bookedRoomIds.includes(room.id);
                
                return (
                  <div key={room.id} className="p-4 bg-hotel-beige border rounded shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-lg">{room.name}</div>
                      <Badge className={isBooked ? "bg-red-500" : "bg-green-500"}>
                        {isBooked ? "Occupied" : "Available"}
                      </Badge>
                    </div>
                    <div className="mb-2">Type: {room.type}</div>
                    <div className="mb-2">Price: KSH {room.price.toLocaleString()}</div>
                    <div className="mb-2">Capacity: {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}</div>
                    <div className="mb-2">{room.breakfast ? 'Breakfast Included' : 'No Breakfast'}</div>
                    <div className="mb-2">{room.pets ? 'Pets Allowed' : 'No Pets'}</div>
                    <div className="text-sm mt-3">
                      <span className="font-medium">Amenities:</span> {room.amenities.slice(0, 4).join(', ')}
                      {room.amenities.length > 4 && '...'}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRooms;
