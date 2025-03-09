import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Newsletter from '../components/ui/Newsletter';

export default function SpeakersPage() {
  const seo = {
    title: "Speakers | AlpineJS Summit 2026",
    description: "Meet our amazing lineup of speakers for AlpineJS Summit 2026 in Zurich - JavaScript experts from around the world sharing their knowledge and passion!",
    url: "https://alpinejs-summit.ch/speakers"
  };

  // Sample speaker data - this would be populated with real speakers closer to the event
  const featuredSpeakers = [
    {
      name: "Alexandra Chen",
      role: "Principal Engineer",
      company: "TechGiant Inc.",
      bio: "Alexandra leads frontend architecture at TechGiant and is a core contributor to several major open source projects. She specializes in performance optimization and component design systems.",
      talk: "Modern React Patterns for 2026 and Beyond",
      image: "/images/speakers/placeholder-1.jpg",
      social: {
        twitter: "https://twitter.com/alexandrachen",
        github: "https://github.com/alexandrachen"
      }
    },
    {
      name: "Mohammed Al-Farsi",
      role: "JavaScript Architect",
      company: "DevScale",
      bio: "Mohammed has been building JavaScript applications for over 15 years and is the author of \"Testing JavaScript at Scale\". He specializes in developer tooling and large-scale JS architecture.",
      talk: "The Future of JavaScript Testing",
      image: "/images/speakers/placeholder-2.jpg",
      social: {
        twitter: "https://twitter.com/mohammedalfarsi",
        github: "https://github.com/mohammedalfarsi"
      }
    }
  ];

  const speakers = [
    {
      name: "Priya Sharma",
      role: "Open Source Maintainer",
      company: "NextJS Core Team",
      bio: "Core maintainer of Next.js and passionate about developer experience.",
      talk: "Next.js in 2026: What's New and Exciting",
      image: "/images/speakers/placeholder-3.jpg"
    },
    {
      name: "James Wilson",
      role: "Senior Developer Advocate",
      company: "TypeScript Team",
      bio: "Helping developers build better TypeScript applications through education and tooling.",
      talk: "Full-Stack Type Safety: The Holy Grail",
      image: "/images/speakers/placeholder-4.jpg"
    },
    {
      name: "Sophie Martin",
      role: "Web Performance Consultant",
      company: "SpeedMetrics",
      bio: "Specializing in making web apps lightning fast and accessible to all users.",
      talk: "Core Web Vitals: The 2026 Edition",
      image: "/images/speakers/placeholder-5.jpg"
    },
    {
      name: "Carlos Mendez",
      role: "Graphics Engineer",
      company: "Render Inc.",
      bio: "Pushing the boundaries of what's possible with WebGPU and browser graphics.",
      talk: "Unlocking the Power of WebGPU",
      image: "/images/speakers/placeholder-6.jpg"
    },
    {
      name: "Lisa Baumann",
      role: "Frontend Architect",
      company: "Swiss Digital",
      bio: "Working on enterprise-scale JavaScript applications with modern architecture patterns.",
      talk: "Islands Architecture: The Evolution",
      image: "/images/speakers/placeholder-7.jpg"
    },
    {
      name: "Marco Delgado",
      role: "Vue Core Team Member",
      company: "Vue.js",
      bio: "Helping shape the future of Vue and its ecosystem of tools.",
      talk: "Vue 5.0: A Deep Dive",
      image: "/images/speakers/placeholder-8.jpg"
    }
  ];

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-indigo-900/50 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Amazing Speakers! 🎤</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get ready to learn from the absolute JS rockstars we&apos;re bringing to Zurich! Our lineup features JavaScript experts who are shaping the future of web development. 🚀
            </p>
            <p className="text-lg text-blue-300 italic mb-2">
              ** Early speaker preview - full lineup coming soon! **
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Keynote Speakers 💫</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {featuredSpeakers.map((speaker, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl overflow-hidden border border-blue-800/30">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-full">
                      <div className="h-64 md:h-full bg-gray-700 relative">
                        {/* Speaker image would go here */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20 md:hidden"></div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                      <p className="text-blue-400 mb-4">{speaker.role} at {speaker.company}</p>
                      
                      <div className="mb-4 flex space-x-3">
                        {speaker.social.twitter && (
                          <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                        )}
                        {speaker.social.github && (
                          <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                      
                      <p className="text-lg font-semibold mb-2 text-gray-200">&quot;{speaker.talk}&quot;</p>
                      <p className="text-gray-300 mb-4">{speaker.bio}</p>
                      
                      <Button variant="primary" size="sm">
                        See full profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mb-12 text-center">Speakers Lineup 🌟</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition group">
                  <div className="aspect-square bg-gray-700 relative">
                    {/* Speaker image would go here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="primary"
                        size="sm"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{speaker.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{speaker.company}</p>
                    <p className="text-gray-300 text-sm font-medium">Topic:</p>
                    <p className="text-gray-300">&quot;{speaker.talk}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl border border-purple-800/30 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to join this stellar lineup? 💯</h3>
              <p className="text-xl text-gray-300 mb-6">
                Our Call for Papers opens soon! Get your best JavaScript ideas ready and join our speaking community.
              </p>
              <Button 
                href="/#waitlist" 
                variant="primary" 
                size="lg"
              >
                Join the Waitlist
              </Button>
              <p className="mt-4 text-gray-400">
                We&apos;ll notify you when the CFP opens and tickets are available!
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">More amazing speakers coming soon! 🎉</h2>
              <p className="text-xl text-gray-300 mb-4">
                We&apos;re adding new JavaScript experts to our lineup every week! Stay tuned for more announcements.
              </p>
              <div className="max-w-md mx-auto">
                <Newsletter compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}