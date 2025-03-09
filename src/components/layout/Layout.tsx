import { useEffect, ReactNode, MouseEvent } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { ANALYTICS_ID } from '../../utils/constants';
import { trackPageView } from '../../utils/analytics';

// Define interface for SEO props
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  [key: string]: unknown;
}

// Define interface for Layout props
interface LayoutProps {
  children: ReactNode;
  seo?: SEOProps;
}

export default function Layout({ children, seo = {} }: LayoutProps) {
  const router = useRouter();
  
  // Track page views
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      trackPageView(url);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent): void => {
      const href = (e.target as Element).closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          history.pushState(null, '', href);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick as unknown as EventListener);
    return () => document.removeEventListener('click', handleAnchorClick as unknown as EventListener);
  }, []);
  
  return (
    <>
      <SEO {...seo} />
      
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
      
      <div className="min-h-screen bg-gradient-to-b from-code-slate-900 to-syntax-plum-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}