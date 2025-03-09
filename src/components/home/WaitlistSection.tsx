import Newsletter from '../ui/Newsletter';

export default function WaitlistSection() {
  const stats = [
    { number: '500+', label: 'Expected Attendees' },
    { number: '15+', label: 'Expert Speakers' },
    { number: '8+', label: 'Hands-on Workshops' },
    { number: '1', label: 'Unforgettable Day' }
  ];

  return (
    <section id="waitlist" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-400 font-medium">Join the Squad! 🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Get on the Waitlist</h2>
            <p className="mt-4 text-xl text-gray-300">
              Be the first to know about ticket sales, speaker announcements, and all the exciting updates for AlpineJS Summit 2026. Early birds get special perks! 🐦
            </p>
          </div>
          
          <Newsletter />
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}