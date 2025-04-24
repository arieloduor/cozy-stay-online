import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hotel-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">About ZamZam</h1>
            <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our story, mission, and the team behind your perfect stay
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to provide comfortable and affordable accommodation in Nairobi, ZamZam began as a small hostel that quickly grew into a beloved destination for travelers from all corners of the world.
                </p>
                <p className="text-gray-600 mb-4">
                  Our commitment to exceptional hospitality and creating a welcoming environment has made us a preferred choice for both local and international guests looking for a memorable stay in Nairobi.
                </p>
                <p className="text-gray-600">
                  Today, ZamZam continues to grow while maintaining its core values of affordability, comfort, and genuine Kenyan hospitality.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" 
                  alt="ZamZam Hostel" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-hotel-light-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Mission & Values</h2>
              <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-hotel-gold/20 rounded-full flex items-center justify-center text-hotel-gold mb-4 mx-auto">
                  <span className="text-2xl font-serif font-bold">1</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-center mb-3">Excellence in Service</h3>
                <p className="text-gray-600 text-center">
                  We are committed to providing exceptional service that exceeds expectations, with careful attention to every detail of our guests' experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-hotel-gold/20 rounded-full flex items-center justify-center text-hotel-gold mb-4 mx-auto">
                  <span className="text-2xl font-serif font-bold">2</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-center mb-3">Comfort & Luxury</h3>
                <p className="text-gray-600 text-center">
                  We believe in creating spaces that offer both luxury and comfort, ensuring our guests feel pampered while also feeling completely at home.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-hotel-gold/20 rounded-full flex items-center justify-center text-hotel-gold mb-4 mx-auto">
                  <span className="text-2xl font-serif font-bold">3</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-center mb-3">Sustainability</h3>
                <p className="text-gray-600 text-center">
                  We are dedicated to sustainable practices that minimize our environmental impact while maintaining the highest standards of luxury and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-hotel-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The dedicated professionals working to make your stay exceptional
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                    alt="Staff Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold">Sarah Kimani</h3>
                <p className="text-hotel-gold mb-2">General Manager</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years in hospitality, Sarah ensures every guest feels at home.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                    alt="Staff Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold">James Omondi</h3>
                <p className="text-hotel-gold mb-2">Guest Relations</p>
                <p className="text-gray-600 text-sm">
                  James makes sure your stay is comfortable and memorable.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
                    alt="Staff Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold">Lucy Wanjiku</h3>
                <p className="text-hotel-gold mb-2">Housekeeping Manager</p>
                <p className="text-gray-600 text-sm">
                  Lucy maintains our high standards of cleanliness and comfort.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                    alt="Staff Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold">David Mutua</h3>
                <p className="text-hotel-gold mb-2">Security Manager</p>
                <p className="text-gray-600 text-sm">
                  David ensures the safety and security of all our guests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
