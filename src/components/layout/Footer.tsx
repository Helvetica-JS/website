import Link from 'next/link';
import SocialLinks from '../shared/SocialLinks';
// import Newsletter from '../ui/Newsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Speakers', href: '/speakers' },
        { label: 'Schedule', href: '/schedule' },
        { label: 'Venue', href: '/venue' },
        { label: 'Join Waitlist', href: '/#waitlist' },
      ]
    },
    {
      title: 'Future Updates',
      items: [
        'Call for Speakers',
        'Workshop Registration',
        'Schedule Announcement',
        'Ticket Sales',
        'Event Details'
      ]
    }
  ];

  return (
    <footer className="bg-code-slate-900 py-12 border-t border-code-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-js-yellow-400 to-js-yellow-500 mb-4">HelveticaJS Summit</div>
            <p className="text-code-slate-300 mb-4">
              Switzerland&apos;s premier JavaScript conference coming to Zurich in Q1 2026. Join us for a day packed with JS goodness! ✨
            </p>
            <SocialLinks />
          </div>
          
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} passHref>
                      <span className="text-code-slate-300 hover:text-js-yellow-400 transition-colors duration-200 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                {column.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-code-slate-400">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us! 💬</h3>
            <p className="text-code-slate-300 mb-4">
              Have questions about HelveticaJS Summit? We&apos;d love to hear from you! Our community team is ready to help.
            </p>
            <a 
              href="mailto:info@helveticajs-summit.ch" 
              className="inline-flex items-center text-js-yellow-400 hover:text-js-yellow-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@helveticajs-summit.ch
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-code-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-code-slate-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HelveticaJS Summit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-code-slate-400 hover:text-js-yellow-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-code-slate-400 hover:text-js-yellow-400 text-sm">Code of Conduct</a>
              <a href="#" className="text-code-slate-400 hover:text-js-yellow-400 text-sm">Accessibility</a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-code-slate-500 text-xs">Made with 💛 by the JavaScript community, for the JavaScript community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}