import { useState, useEffect } from 'react';
import { Hotel, BookCheck, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from '@/integrations/supabase/client';
import { rooms } from '@/data/hotelData';
import StatsCard from './dashboard/StatsCard';
import RevenueChart from './dashboard/RevenueChart';
import BookingsChart from './dashboard/BookingsChart';
import OccupancyChart from './dashboard/OccupancyChart';
import RecentBookings from './dashboard/RecentBookings';
import GuestStats from './dashboard/GuestStats';

interface Order {
  id: string;
  room_name: string;
  user_id: string;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  total_price: number;
  status: string;
  created_at: string;
  room_id: number; // Add this missing property to fix the type error
}

const Dashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Calculate dashboard metrics
  const totalRooms = rooms.length;
  const activeBookings = orders.filter(b => b.status === 'confirmed').length;
  const pendingBookings = orders.filter(b => b.status === 'pending').length;
  const totalGuests = orders.filter(b => b.status === 'confirmed')
    .reduce((acc, booking) => acc + booking.guests, 0);
  const totalRevenue = orders.reduce((acc, booking) => acc + Number(booking.total_price), 0);
  
  useEffect(() => {
    // Fetch bookings from Supabase
    async function fetchOrders() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Error fetching orders:", error);
          return;
        }
        
        if (data) {
          setOrders(data);
        }
      } catch (error) {
        console.error("Exception fetching orders:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchOrders();
    
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
          // Refetch orders when orders table changes
          fetchOrders();
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const calculateMonthlyData = () => {
    const monthlyRevenue: { [key: string]: number } = {};
    const monthlyBookings: { [key: string]: number } = {};
    
    // Initialize all months with 0
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months.forEach(month => {
      monthlyRevenue[month] = 0;
      monthlyBookings[month] = 0;
    });

    // Calculate actual revenue and bookings
    orders.forEach(order => {
      const date = new Date(order.created_at);
      const month = months[date.getMonth()];
      monthlyRevenue[month] += Number(order.total_price);
      monthlyBookings[month] += 1;
    });

    // Convert to array format for charts
    const revenueData = months.map(month => ({
      name: month,
      value: monthlyRevenue[month]
    }));

    const bookingData = months.map(month => ({
      name: month,
      value: monthlyBookings[month]
    }));

    return { revenueData, bookingData };
  };

  const { revenueData, bookingData } = calculateMonthlyData();

  const calculateRoomOccupancy = () => {
    const occupancyMap = new Map();
    
    // Initialize occupancy for all room types
    const roomTypes = Array.from(new Set(rooms.map(room => room.type)));
    roomTypes.forEach(type => {
      occupancyMap.set(type, {
        total: rooms.filter(r => r.type === type).length,
        booked: 0
      });
    });

    // Count current bookings
    const now = new Date().toISOString().slice(0, 10);
    orders
      .filter(order => 
        order.status === 'confirmed' &&
        order.check_in_date <= now &&
        order.check_out_date >= now
      )
      .forEach(order => {
        const room = rooms.find(r => r.id === order.room_id);
        if (room) {
          const data = occupancyMap.get(room.type);
          data.booked += 1;
          occupancyMap.set(room.type, data);
        }
      });

    // Calculate percentages
    return Array.from(occupancyMap.entries()).map(([name, data]) => ({
      name,
      value: Math.round((data.booked / data.total) * 100) || 0
    }));
  };

  const roomOccupancyData = calculateRoomOccupancy();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Rooms"
          value={totalRooms}
          icon={Hotel}
          iconColorClass="bg-blue-100 text-blue-500"
        />
        <StatsCard
          title="Active Bookings"
          value={activeBookings}
          icon={BookCheck}
          iconColorClass="bg-green-100 text-green-500"
        />
        <StatsCard
          title="Pending Bookings"
          value={pendingBookings}
          icon={Clock}
          iconColorClass="bg-yellow-100 text-yellow-500"
        />
        <StatsCard
          title="Total Revenue"
          value={`KSH ${totalRevenue.toLocaleString()}`}
          icon={CreditCard}
          iconColorClass="bg-purple-100 text-purple-500"
        />
      </div>
      
      <Tabs defaultValue="revenue">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-serif font-bold">Analytics</h2>
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
          </TabsList>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <TabsContent value="revenue" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Monthly Revenue (2025)</h3>
              <RevenueChart data={revenueData} />
            </TabsContent>
            
            <TabsContent value="bookings" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Monthly Bookings (2025)</h3>
              <BookingsChart data={bookingData} />
            </TabsContent>
            
            <TabsContent value="occupancy" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Room Occupancy Rate (%)</h3>
              <OccupancyChart data={roomOccupancyData} />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBookings orders={orders} loading={loading} />
        <GuestStats 
          totalGuests={totalGuests}
          averageStay={3.5}
          averageSpend={orders.length > 0 ? totalRevenue / orders.length : 0}
          totalOrders={orders.length}
        />
      </div>
    </div>
  );
};

export default Dashboard;
