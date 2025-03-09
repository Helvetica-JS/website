// import Link from 'next/link';
import Button from '../ui/Button';

export default function LocationSection() {
  const features = [
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Tech Innovation Hub',
      description: 'Home to Google\'s largest engineering office outside the US and numerous tech startups.'
    },
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Central European Location',
      description: 'Easily accessible from anywhere in Europe with excellent transport connections.'
    },
    {
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Stunning Scenery',
      description: 'Alpine views, a pristine lake, and a charming Old Town make for an unforgettable visit.'
    }
  ];

  return (
    <section id="location" className="py-20 bg-indigo-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/zurich-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium">Zurich, Switzerland 🏔️</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">An Exceptional Location</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <div className="h-full w-full bg-gray-700"></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <div className="h-full w-full bg-gray-700"></div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <div className="h-full w-full bg-gray-700"></div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <div className="h-full w-full bg-gray-700"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Zurich? 🇨🇭</h3>
            <p className="text-xl text-gray-300 mb-6">
              Zurich is not just one of Europe&apos;s most beautiful cities—it&apos;s also a thriving tech hub at the heart of Switzerland&apos;s innovation ecosystem. Get ready for an incredible backdrop to your JavaScript adventure! ✨
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/30">
              <p className="text-blue-300 font-medium">
                Want to make the most of your trip? Extend your stay to enjoy world-class skiing in the nearby Alps or explore Switzerland&apos;s picturesque cities! 🏔️
              </p>
            </div>
            
            <div className="mt-6 text-center md:text-left">
              <Button 
                href="/venue" 
                variant="primary"
              >
                Discover the Venue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}