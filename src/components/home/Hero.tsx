import Button from '../ui/Button';
import SponsorLogos from '../shared/SponsorLogos';

export default function Hero() {
  // Right arrow icon component
  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-code-slate-900">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-6 flex flex-col items-center text-center">
        <span className="bg-zurich-teal-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-6">
          Q1 2026 • Zurich, Switzerland
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          HelveticaJS Summit <span className="text-js-yellow-500">2026</span>
        </h1>
        <p className="text-xl md:text-2xl text-code-slate-300 mb-10 max-w-3xl">
          Switzerland&apos;s premier JavaScript conference arrives in Zurich! One amazing day of JS innovation, workshops, and community. 🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            href="#waitlist" 
            variant="primary" 
            size="lg"
            icon={<ArrowRightIcon />}
            className="bg-swiss-red-600 hover:bg-swiss-red-700 text-white"
          >
            Join the Waitlist
          </Button>
          <Button 
            href="#about" 
            variant="secondary" 
            size="lg"
            className="bg-transparent border border-white hover:border-js-yellow-400 hover:text-js-yellow-400 text-white"
          >
            Learn More
          </Button>
        </div>
        
        <SponsorLogos />
      </div>
    </section>
  );
}