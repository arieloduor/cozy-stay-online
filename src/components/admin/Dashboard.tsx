
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Calendar, Hotel, CreditCard, Users, 
  BookCheck, BookX, Clock, TrendingUp, TrendingDown 
} from 'lucide-react';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { useState, useEffect } from 'react';
import { rooms } from '@/data/hotelData';

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

  // Calculate monthly data based on actual orders
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

  // Calculate room occupancy data based on confirmed bookings
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
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Rooms</p>
                <h3 className="text-2xl font-bold">{totalRooms}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <Hotel size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Active Bookings</p>
                <h3 className="text-2xl font-bold">{activeBookings}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                <BookCheck size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pending Bookings</p>
                <h3 className="text-2xl font-bold">{pendingBookings}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                <Clock size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold">KSH {totalRevenue.toLocaleString()}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <CreditCard size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
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
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`KSH ${value}`, 'Revenue']} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#D4AF37" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="bookings" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Monthly Bookings (2025)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={bookingData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}`, 'Bookings']} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8B4513" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="occupancy" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Room Occupancy Rate (%)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={roomOccupancyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, 'Occupancy Rate']} />
                    <Bar dataKey="value" fill="#D4AF37" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest 5 bookings in the system</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading bookings...</div>
            ) : orders.length === 0 ? (
              <div className="text-center py-8">No bookings found</div>
            ) : (
              <div className="space-y-4">
                {orders.slice(0, 5).map((booking) => (
                  <div key={booking.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-md">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-500' : 
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-500' : 
                      'bg-red-100 text-red-500'
                    }`}>
                      {booking.status === 'confirmed' ? <BookCheck size={20} /> : 
                       booking.status === 'pending' ? <Clock size={20} /> : 
                       <BookX size={20} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{booking.room_name}</p>
                      <p className="text-sm text-gray-500 truncate">Guests: {booking.guests}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">KSH {Number(booking.total_price).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(booking.check_in_date).toLocaleDateString()} - {new Date(booking.check_out_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Guest Statistics</CardTitle>
            <CardDescription>Current guest information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Total Guests</p>
                    <p className="text-sm text-gray-500">Currently staying</p>
                  </div>
                </div>
                <p className="text-xl font-bold">{totalGuests}</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <BookCheck size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Average Stay</p>
                    <p className="text-sm text-gray-500">In days</p>
                  </div>
                </div>
                <p className="text-xl font-bold">3.5</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Average Spend</p>
                    <p className="text-sm text-gray-500">Per booking</p>
                  </div>
                </div>
                <p className="text-xl font-bold">
                  {orders.length > 0 
                    ? `KSH ${Math.round(totalRevenue / orders.length).toLocaleString()}`
                    : 'KSH 0'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
