import { ANALYTICS_ID } from './constants';

// Define types for window with Google Analytics
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    GA_INITIALIZED?: boolean;
  }
}

// Helper function to track events with Google Analytics
export const trackEvent = (eventName: string, eventParams: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams
    });
  }
};

// Helper function to track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_ID, {
      page_path: url
    });
  }
};

// Helper function to track waitlist signups
export const trackWaitlistSignup = (source: string = 'waitlist') => {
  trackEvent('signup', {
    'event_category': 'engagement',
    'event_label': source
  });
};

// Helper function to track outbound links
export const trackOutboundLink = (url: string, label: string = 'outbound') => {
  trackEvent('click', {
    'event_category': 'outbound',
    'event_label': label,
    'transport_type': 'beacon',
    'event_callback': () => {
      document.location = url;
    }
  });
  
  return false;
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.GA_INITIALIZED && ANALYTICS_ID) {
    // Insert GA script code here when needed
    window.GA_INITIALIZED = true;
  }
};