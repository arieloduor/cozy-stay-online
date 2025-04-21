
// Admin Rooms Management Page (basic stub)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { rooms } from "@/data/hotelData";

const AdminRooms = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Manage Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map(room => (
              <div key={room.id} className="p-4 bg-hotel-beige border rounded shadow-sm">
                <div className="font-semibold text-lg mb-2">{room.name}</div>
                <div className="mb-2">Type: {room.type}</div>
                <div className="mb-2">Price: KSH {room.price}</div>
                <div className="mb-2">Capacity: {room.capacity}</div>
                <div className="mb-2">{room.breakfast ? 'Breakfast Included' : 'No Breakfast'}</div>
                <div className="mb-2">{room.pets ? 'Pets Allowed' : 'No Pets'}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRooms;
