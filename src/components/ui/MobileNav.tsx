import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    navItems: {
        label: string;
        path: string;
    }[];
}

export default function MobileNav({ navItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // Close mobile menu when navigating or resizing to desktop
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isOpen, router.events]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="text-white p-2"
      >
        {!isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <Link 
                href={item.path} 
                key={item.path}
                passHref
              >
                <span 
                  className={`py-2 block ${
                    router.pathname === item.path ? 'text-blue-400' : 'hover:text-blue-400'
                  } transition-colors duration-300 cursor-pointer`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            <Link href="/#waitlist" passHref>
              <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-medium transition text-center mt-2 block cursor-pointer">
                Join Waitlist
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}