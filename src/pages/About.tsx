
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-hotel-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">About CozyStay</h1>
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
                  Founded in 2010, CozyStay began with a simple vision: to create a hotel experience that combines luxury with the warmth and comfort of home. Our founder, Elizabeth Harper, recognized a gap in the hospitality industry where hotels either offered luxury without comfort or comfort without elegance.
                </p>
                <p className="text-gray-600 mb-4">
                  Starting with a single location in the heart of the city, CozyStay quickly gained a reputation for exceptional service and attention to detail. Our unique approach to hospitality attracted guests from around the world, leading to our expansion to multiple locations while maintaining our commitment to personalized service.
                </p>
                <p className="text-gray-600">
                  Today, CozyStay is known for creating memorable experiences for both business and leisure travelers, with a focus on combining luxurious amenities with the warmth and comfort that makes guests feel truly at home.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/about-hotel.jpg" alt="CozyStay Hotel" className="w-full h-auto" />
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
                  <img src="/team-1.jpg" alt="Elizabeth Harper" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Elizabeth Harper</h3>
                <p className="text-hotel-gold mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in luxury hospitality, Elizabeth founded CozyStay with a vision of combining comfort with elegance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img src="/team-2.jpg" alt="Michael Chen" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Michael Chen</h3>
                <p className="text-hotel-gold mb-2">General Manager</p>
                <p className="text-gray-600 text-sm">
                  Michael ensures the smooth operation of all hotel services, bringing his expertise from managing top hotels worldwide.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img src="/team-3.jpg" alt="Sophia Rodriguez" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Sophia Rodriguez</h3>
                <p className="text-hotel-gold mb-2">Head Chef</p>
                <p className="text-gray-600 text-sm">
                  A renowned culinary expert, Sophia creates memorable dining experiences with her innovative approach to classic cuisine.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img src="/team-4.jpg" alt="James Wilson" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif font-semibold">James Wilson</h3>
                <p className="text-hotel-gold mb-2">Customer Experience Director</p>
                <p className="text-gray-600 text-sm">
                  James is dedicated to ensuring every guest has an exceptional experience, overseeing all aspects of customer service.
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
