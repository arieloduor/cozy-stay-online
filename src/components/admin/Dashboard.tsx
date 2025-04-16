
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
import { rooms, bookings } from '@/data/hotelData';
import { 
  Calendar, Hotel, CreditCard, Users, 
  BookCheck, BookX, Clock, TrendingUp, TrendingDown 
} from 'lucide-react';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', value: 12500 },
  { name: 'Feb', value: 14200 },
  { name: 'Mar', value: 18400 },
  { name: 'Apr', value: 16800 },
  { name: 'May', value: 19500 },
  { name: 'Jun', value: 23000 },
  { name: 'Jul', value: 25600 },
  { name: 'Aug', value: 26800 },
  { name: 'Sep', value: 22400 },
  { name: 'Oct', value: 20100 },
  { name: 'Nov', value: 16800 },
  { name: 'Dec', value: 19200 },
];

const bookingData = [
  { name: 'Jan', value: 42 },
  { name: 'Feb', value: 38 },
  { name: 'Mar', value: 65 },
  { name: 'Apr', value: 58 },
  { name: 'May', value: 75 },
  { name: 'Jun', value: 88 },
  { name: 'Jul', value: 95 },
  { name: 'Aug', value: 102 },
  { name: 'Sep', value: 78 },
  { name: 'Oct', value: 68 },
  { name: 'Nov', value: 55 },
  { name: 'Dec', value: 70 },
];

const roomOccupancyData = [
  { name: 'Deluxe King Suite', value: 85 },
  { name: 'Premium Ocean View', value: 92 },
  { name: 'Family Suite', value: 78 },
  { name: 'Standard Queen Room', value: 65 },
  { name: 'Executive Business Suite', value: 72 },
  { name: 'Honeymoon Suite', value: 88 },
];

const Dashboard = () => {
  // In a real application, these would be calculated from actual data
  const totalRooms = rooms.length;
  const activeBookings = bookings.filter(b => b.status === 'confirmed').length;
  const pendingBookings = bookings.filter(b => b.status === 'pending').length;
  const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
  
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
                <h3 className="text-2xl font-bold">${totalRevenue.toLocaleString()}</h3>
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
                    <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
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
            <div className="space-y-4">
              {bookings.slice(0, 5).map((booking) => {
                const room = rooms.find(r => r.id === booking.roomId);
                return (
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
                      <p className="font-medium truncate">{booking.guestName}</p>
                      <p className="text-sm text-gray-500 truncate">{room?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${booking.totalPrice}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Quick stats compared to last month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Bookings</p>
                    <p className="text-sm text-gray-500">+12% from last month</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-500">+12%</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Revenue</p>
                    <p className="text-sm text-gray-500">+8% from last month</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-500">+8%</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <TrendingDown size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Cancellations</p>
                    <p className="text-sm text-gray-500">-3% from last month</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-500">-3%</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Occupancy Rate</p>
                    <p className="text-sm text-gray-500">+5% from last month</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-500">+5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
