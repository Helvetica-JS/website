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
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">AlpineJS Summit</div>
            <p className="text-gray-400 mb-4">
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
                      <span className="text-gray-400 hover:text-blue-400 transition cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                {column.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Have questions about AlpineJS Summit? We&apos;d love to hear from you!
            </p>
            <a 
              href="mailto:info@alpinejs-summit.ch" 
              className="text-blue-400 hover:text-blue-300 transition"
            >
              info@alpinejs-summit.ch
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} AlpineJS Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}