import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNav from '../ui/MobileNav';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { trackEvent } from '../../utils/analytics';

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // Handle scroll event to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (label: string): void => {
    trackEvent('navigation_click', {
      section: label,
      page: router.pathname
    });
  };
  
  return (
    <header className={`sticky top-0 z-10 transition-colors duration-300 ${
      scrolled ? 'bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <span 
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
            onClick={() => handleNavClick('Logo')}
          >
            AlpineJS Summit
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {NAVIGATION_ITEMS.map(item => (
            <Link 
              href={item.path} 
              key={item.path}
              passHref
            >
              <span 
                className={`transition-colors duration-300 ${
                  router.pathname === item.path ? 'text-blue-400' : 'hover:text-blue-400'
                } cursor-pointer`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link href="/#waitlist" passHref>
            <span 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-medium transition cursor-pointer inline-block"
              onClick={() => handleNavClick('Waitlist')}
            >
              Join Waitlist
            </span>
          </Link>
        </div>
        
        <MobileNav navItems={NAVIGATION_ITEMS} />
      </nav>
    </header>
  );
}