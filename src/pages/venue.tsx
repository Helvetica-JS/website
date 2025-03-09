import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

export default function VenuePage() {
  const seo = {
    title: 'Venue | HelveticaJS Summit 2026',
    description: 'Learn about the stunning venue for HelveticaJS Summit 2026 in Zurich, Switzerland, and plan your visit with our accommodation and transportation tips.',
    url: 'https://HelveticaJS-summit.ch/venue'
  };

  const accommodations = [
    {
      name: 'Conference Hotel',
      distance: '0 min (on-site)',
      priceRange: '€€€',
      description: 'The official conference hotel with special rates for attendees.',
      buttonText: 'Book with discount code'
    },
    {
      name: 'River View Hotel',
      distance: '5 min walk',
      priceRange: '€€€',
      description: 'Upscale rooms with stunning views of the Limmat River.',
      buttonText: 'View hotel'
    },
    {
      name: 'Central Inn',
      distance: '10 min walk',
      priceRange: '€€',
      description: 'Mid-range hotel with excellent access to public transport.',
      buttonText: 'View hotel'
    },
    {
      name: 'Alpine Hostel',
      distance: '15 min walk',
      priceRange: '€',
      description: 'Budget-friendly option with private and shared rooms.',
      buttonText: 'View hostel'
    }
  ];

  const transportOptions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: 'From Zurich Airport',
      description: '20 minutes by direct train (runs every 10 minutes). Get off at Zurich HB, then a 5-minute tram ride to the venue.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'From Zurich Main Station',
      description: '5 minutes by tram (lines 3, 8, or 15) or a pleasant 15-minute walk along the river.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'By Car',
      description: 'Limited parking available at the venue (reservation required). We recommend using public transport where possible.'
    }
  ];

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-indigo-900/50 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Epic Venue 🏢</h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience JavaScript magic in a stunning Zurich setting!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Tech Hub Zurich 🚀</h2>
                <p className="text-xl text-gray-300 mb-6">
                  We&apos;re thrilled to host HelveticaJS Summit at the incredible Tech Hub Zurich, a state-of-the-art venue where innovation meets functionality!
                </p>
                <p className="text-xl text-gray-300 mb-6">
                  Located in the heart of Zurich&apos;s tech district, this amazing space features cutting-edge facilities, perfect acoustics, and a stunning rooftop terrace with panoramic views of the Alps. 🏔️
                </p>
                <div className="bg-indigo-900/30 rounded-lg p-6 border border-indigo-800/30">
                  <h3 className="text-xl font-semibold mb-3">Venue Highlights:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>600-seat main auditorium with perfect sight lines</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>8 workshop rooms for hands-on coding sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Massive networking space with killer coffee ☕</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Ultra-fast WiFi for all your dev needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Easy access from public transport</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gray-700"></div>
                  <div className="p-4">
                    <p className="text-gray-400 text-sm">Main auditorium at Tech Hub Zurich</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-xl overflow-hidden">
                    <div className="aspect-square bg-gray-700"></div>
                    <div className="p-4">
                      <p className="text-gray-400 text-sm">Workshop spaces</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl overflow-hidden">
                    <div className="aspect-square bg-gray-700"></div>
                    <div className="p-4">
                      <p className="text-gray-400 text-sm">Rooftop networking area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Getting Here is a Breeze! 🚆</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {transportOptions.map((option, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-gray-300">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Sweet Places to Stay 🛌</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {accommodations.map((acc, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-xl font-bold">{acc.name}</h3>
                      <span className="text-gray-400">{acc.priceRange}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">{acc.distance}</span>
                    </div>
                    <p className="text-gray-300 mb-6 flex-grow">{acc.description}</p>
                    <Button 
                      variant="secondary" 
                      className="self-start"
                      href="#"
                    >
                      {acc.buttonText}
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-gray-300">
                <p>
                  All accommodations are within easy reach of the venue and city attractions. 
                  <br />More options will be available closer to the event date! ✨
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to join the JS party? 🎉</h2>
              <p className="text-xl text-gray-300 mb-8">
                Secure your spot at HelveticaJS Summit 2026 now!
              </p>
              <Button 
                href="/#waitlist" 
                variant="primary" 
                size="lg"
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}