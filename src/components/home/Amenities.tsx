
import { 
  Wifi, Coffee, Utensils, Waves, Dumbbell, 
  Car, ShieldCheck, Clock
} from 'lucide-react';

const amenities = [
  {
    icon: <Wifi size={40} />,
    title: 'Free WiFi',
    description: 'Stay connected with high-speed internet throughout the property'
  },
  {
    icon: <Coffee size={40} />,
    title: 'Breakfast',
    description: 'Start your day with our delicious continental breakfast options'
  },
  {
    icon: <Utensils size={40} />,
    title: 'Restaurant & Bar',
    description: 'Enjoy fine dining at our in-house restaurant and relaxing drinks at the bar'
  },
  {
    icon: <Waves size={40} />,
    title: 'Swimming Pool',
    description: 'Take a refreshing dip in our outdoor swimming pool'
  },
  {
    icon: <Dumbbell size={40} />,
    title: 'Fitness Center',
    description: 'Keep up with your fitness routine in our well-equipped gym'
  },
  {
    icon: <Car size={40} />,
    title: 'Free Parking',
    description: 'Complimentary parking for all our guests'
  },
  {
    icon: <ShieldCheck size={40} />,
    title: '24/7 Security',
    description: 'Your safety is our priority with round-the-clock security'
  },
  {
    icon: <Clock size={40} />,
    title: 'Room Service',
    description: '24-hour room service for your convenience'
  }
];

const Amenities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Hotel Amenities</h2>
          <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy our world-class facilities designed for your comfort and convenience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-hotel-light-beige rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="amenity-icon mb-4 inline-block">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
