import Newsletter from '../ui/Newsletter';

export default function WaitlistSection() {
  const stats = [
    { number: '500+', label: 'Expected Attendees' },
    { number: '15+', label: 'Expert Speakers' },
    { number: '8+', label: 'Hands-on Workshops' },
    { number: '1', label: 'Unforgettable Day' }
  ];

  return (
    <section id="waitlist" className="py-20 bg-code-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-js-yellow-900/10 to-swiss-red-900/10"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-js-yellow-400 font-medium">Join the Squad! 🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Get on the Waitlist</h2>
            <p className="mt-4 text-xl text-code-slate-200">
              Be the first to know about ticket sales, speaker announcements, and all the exciting updates for HelveticaJS Summit 2026. Early birds get special perks! 🐦
            </p>
          </div>
          
          <Newsletter />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-code-slate-800/50 rounded-lg border border-code-slate-700/50 hover:border-js-yellow-500/30 transition-colors">
                <div className="text-3xl font-bold text-js-yellow-400">{stat.number}</div>
                <div className="text-code-slate-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-alpine-blue-900/20 rounded-lg border border-alpine-blue-800/20 p-6">
            <p className="text-code-slate-200 text-lg">
              Join our awesome JavaScript community! Connect with fellow devs, share knowledge, and be part of the Swiss JS magic! 💛
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}