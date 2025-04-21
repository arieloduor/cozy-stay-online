
// Admin Guests Management Page (stub)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { bookings } from "@/data/hotelData";

const AdminGuests = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Guests</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Guest Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Room</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td className="px-4 py-2">{b.guestName}</td>
                  <td className="px-4 py-2">{b.email}</td>
                  <td className="px-4 py-2">{b.phone}</td>
                  <td className="px-4 py-2">{b.roomId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGuests;
