import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Newsletter from '../components/ui/Newsletter';

export default function SchedulePage() {
  const seo = {
    title: 'Schedule | AlpineJS Summit 2026',
    description: 'Check out the exciting schedule for AlpineJS Summit 2026 - workshops, keynotes, and networking events all packed into an amazing JavaScript experience.',
    url: 'https://alpinejs-summit.ch/schedule'
  };

  // Sample schedule data - this would be populated with real data closer to the event
  const workshopDay = [
    {
      time: '09:00 - 12:30',
      title: 'Modern React Patterns Workshop',
      speaker: 'Alexandra Chen',
      type: 'workshop',
      room: 'Workshop Room A'
    },
    {
      time: '09:00 - 12:30',
      title: 'Building with Vue 5.0',
      speaker: 'Marco Delgado',
      type: 'workshop',
      room: 'Workshop Room B'
    },
    {
      time: '09:00 - 12:30',
      title: 'Next.js Mastery',
      speaker: 'Priya Sharma',
      type: 'workshop',
      room: 'Workshop Room C'
    },
    {
      time: '12:30 - 13:30',
      title: 'Lunch Break',
      type: 'break'
    },
    {
      time: '13:30 - 17:00',
      title: 'Full-Stack TypeScript',
      speaker: 'James Wilson',
      type: 'workshop',
      room: 'Workshop Room A'
    },
    {
      time: '13:30 - 17:00',
      title: 'Web Performance Optimization',
      speaker: 'Sophie Martin',
      type: 'workshop',
      room: 'Workshop Room B'
    },
    {
      time: '13:30 - 17:00',
      title: 'Testing JavaScript Applications',
      speaker: 'Mohammed Al-Farsi',
      type: 'workshop',
      room: 'Workshop Room C'
    },
    {
      time: '18:00 - 21:00',
      title: 'Pre-Conference Meetup & Registration',
      type: 'social',
      location: 'Main Hall & Rooftop Terrace'
    }
  ];

  const conferenceDay = [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Breakfast',
      type: 'break'
    },
    {
      time: '09:00 - 09:15',
      title: 'Welcome & Opening Remarks',
      speaker: 'Conference Organizers',
      type: 'session',
    },
    {
      time: '09:15 - 10:00',
      title: 'Keynote: The Future of JavaScript in 2026 and Beyond',
      speaker: 'Renowned JS Expert',
      type: 'keynote',
    },
    {
      time: '10:00 - 10:30',
      title: 'Coffee Break',
      type: 'break'
    },
    {
      time: '10:30 - 11:15',
      title: 'Building Islands of Interactivity',
      speaker: 'Lisa Baumann',
      type: 'session',
    },
    {
      time: '11:15 - 12:00',
      title: 'WebGPU: The Next Frontier',
      speaker: 'Carlos Mendez',
      type: 'session',
    },
    {
      time: '12:00 - 13:30',
      title: 'Lunch & Networking',
      type: 'break'
    },
    {
      time: '13:30 - 14:15',
      title: 'JavaScript at Scale: Lessons from Serving Billions',
      speaker: 'Dana Kim',
      type: 'session',
    },
    {
      time: '14:15 - 15:00',
      title: 'The Modern CSS Revolution',
      speaker: 'Thomas Fischer',
      type: 'session',
    },
    {
      time: '15:00 - 15:30',
      title: 'Coffee Break',
      type: 'break'
    },
    {
      time: '15:30 - 16:15',
      title: 'AI-Driven Development: Friend or Foe?',
      speaker: 'Olivia Patel',
      type: 'session',
    },
    {
      time: '16:15 - 17:00',
      title: 'Lightning Talks (5 speakers)',
      type: 'lightning',
    },
    {
      time: '17:00 - 17:45',
      title: 'Closing Keynote: The Human Side of JavaScript',
      speaker: 'Community Leader',
      type: 'keynote',
    },
    {
      time: '17:45 - 18:00',
      title: 'Closing Remarks & Prizes',
      type: 'session',
    },
    {
      time: '18:00 - 22:00',
      title: 'After-Party',
      type: 'social',
      location: 'Rooftop Terrace'
    }
  ];

  const getSessionTypeClass = (type: string) => {
    switch(type) {
      case 'keynote':
        return 'border-blue-500 bg-blue-900/20';
      case 'session':
        return 'border-purple-500 bg-purple-900/20';
      case 'workshop':
        return 'border-green-500 bg-green-900/20';
      case 'lightning':
        return 'border-amber-500 bg-amber-900/20';
      case 'social':
        return 'border-cyan-500 bg-cyan-900/20';
      case 'break':
      default:
        return 'border-gray-600 bg-gray-800/50';
    }
  };

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-indigo-900/50 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule Sneak Peek! 🗓️</h1>
            <p className="text-xl text-gray-300 mb-8">
              Here&apos;s our preliminary lineup for AlpineJS Summit 2026! This schedule will be updated as we confirm more amazing speakers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-16">
              <div className="md:col-span-2">
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6">What to Expect 🤩</h2>
                  <p className="text-gray-300 mb-6">
                    AlpineJS Summit 2026 is jam-packed with JavaScript goodness! We&apos;ve got a full day of workshops before the main event, plus a community meetup to kick things off right.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                      <span>Inspiring Keynotes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-purple-500 mr-3"></div>
                      <span>Technical Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                      <span>Hands-on Workshops</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-500 mr-3"></div>
                      <span>Lightning Talks</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-500 mr-3"></div>
                      <span>Networking Events</span>
                    </div>
                  </div>
                  <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-800/30 mb-8">
                    <h3 className="font-bold text-xl mb-3">Want to speak? 🎤</h3>
                    <p className="text-gray-300 mb-4">
                      Our Call for Papers will open in Q2 2025! We&apos;d love to hear your JavaScript stories and insights!
                    </p>
                    <Button
                      href="/#waitlist"
                      variant="secondary"
                    >
                      Get notified when CFP opens
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400">
                    * This schedule is preliminary and subject to change. Final schedule with confirmed speakers will be announced closer to the event.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full mr-3">
                      Day 1
                    </span>
                    <span>Workshop Day</span>
                  </h2>
                  <div className="space-y-4">
                    {workshopDay.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border-l-4 rounded-r-lg ${getSessionTypeClass(item.type)}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                          <span className="font-bold">{item.time}</span>
                          {item.type === 'workshop' && (
                            <span className="text-sm text-gray-400">{item.room}</span>
                          )}
                          {item.type === 'social' && (
                            <span className="text-sm text-gray-400">{item.location}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-gray-300">{item.speaker}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mr-3">
                      Day 2
                    </span>
                    <span>Conference Day</span>
                  </h2>
                  <div className="space-y-4">
                    {conferenceDay.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border-l-4 rounded-r-lg ${getSessionTypeClass(item.type)}`}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-bold">{item.time}</span>
                          {item.type === 'social' && (
                            <span className="text-sm text-gray-400">{item.location}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-gray-300">{item.speaker}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">Don&apos;t Miss Out! 🚀</h2>
              <p className="text-center text-gray-300 mb-8">
                Join our waitlist to be the first to know when tickets become available!
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}