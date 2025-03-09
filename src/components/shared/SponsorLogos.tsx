// import Image from 'next/image';

export default function SponsorLogos() {
  const sponsors = [
    {
      name: 'Tech Company 1',
      logo: '/images/sponsors/sponsor1.png', // Replace with actual logo path
      website: 'https://example.com'
    },
    {
      name: 'Tech Company 2',
      logo: '/images/sponsors/sponsor2.png', // Replace with actual logo path
      website: 'https://example.com'
    },
    {
      name: 'Tech Company 3',
      logo: '/images/sponsors/sponsor3.png', // Replace with actual logo path
      website: 'https://example.com'
    }
  ];
  
  return (
    <div className="mt-16 flex flex-wrap gap-8 justify-center items-center opacity-70">
      <span className="text-sm uppercase tracking-wider text-gray-400">In collaboration with</span>
      <div className="flex flex-wrap gap-8 justify-center">
        {sponsors.map((sponsor) => (
          // For placeholder, we're using div instead of Image until real logos are available
          <a 
            key={sponsor.name}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${sponsor.name} website`}
            className="h-8 w-32 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {/* Uncomment when actual logos are available
            <Image 
              src={sponsor.logo} 
              alt={sponsor.name} 
              width={120} 
              height={30}
              objectFit="contain"
            />
            */}
          </a>
        ))}
      </div>
    </div>
  );
}