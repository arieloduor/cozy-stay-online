
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from 'lucide-react';

interface Order {
  id: string;
  room_name: string;
  guests: number;
  check_in_date: string;
  check_out_date: string;
  user_id: string;
  status: string;
}

const AdminGuests = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch active bookings (confirmed status)
    async function fetchActiveBookings() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('status', 'confirmed')
          .order('check_in_date', { ascending: false });

        if (error) {
          console.error("Error fetching bookings:", error);
          return;
        }
        
        if (data) {
          setOrders(data);
        }
      } catch (error) {
        console.error("Exception fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchActiveBookings();
    
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
          // Refetch bookings when orders table changes
          fetchActiveBookings();
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
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Current Guests</CardTitle>
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
            <Users size={20} />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading guest data...</div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8">No active guests at the moment</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room</TableHead>
                  <TableHead>Guest Count</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Check Out</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.room_name}</TableCell>
                    <TableCell>{order.guests}</TableCell>
                    <TableCell>{new Date(order.check_in_date).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(order.check_out_date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGuests;
