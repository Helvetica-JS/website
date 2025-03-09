import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Newsletter from '../components/ui/Newsletter';

export default function SpeakersPage() {
  const seo = {
    title: "Speakers | HelveticaJS Summit 2026",
    description: "Meet our amazing lineup of speakers for HelveticaJS Summit 2026 in Zurich - JavaScript experts from around the world sharing their knowledge and passion!",
    url: "https://helveticajs-summit.ch/speakers"
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
      <section className="py-20 bg-gradient-to-b from-code-slate-800 to-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 bg-js-yellow-500 rounded-full text-code-slate-900 font-bold">
              JavaScript Experts • Q1 2026 • Zurich
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Amazing Speakers! 🎤</h1>
            <p className="text-xl text-code-slate-200 mb-8">
              Get ready to learn from the absolute JS rockstars we&apos;re bringing to Zurich! Our lineup features JavaScript experts who are shaping the future of web development. 🚀
            </p>
            <p className="text-lg text-js-yellow-400 italic mb-2">
              ** Early speaker preview - full lineup coming soon! **
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-1 bg-gradient-to-r from-transparent via-js-yellow-500 to-transparent w-24 mr-6"></div>
              <h2 className="text-3xl font-bold text-white">Keynote Speakers</h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-js-yellow-500 to-transparent w-24 ml-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {featuredSpeakers.map((speaker, index) => (
                <div key={index} className="bg-gradient-to-br from-alpine-blue-900/30 to-code-slate-900 rounded-xl overflow-hidden border border-alpine-blue-700/30 shadow-xl hover:border-js-yellow-500/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-full">
                      <div className="h-64 md:h-full bg-code-slate-800 relative">
                        {/* Speaker image would go here */}
                        <div className="absolute top-0 right-0 bg-js-yellow-500 text-code-slate-900 px-3 py-1 font-bold text-sm">
                          Keynote
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-code-slate-900 to-transparent h-20 md:hidden"></div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">{speaker.name}</h3>
                      <p className="text-js-yellow-400 mb-4">{speaker.role} at {speaker.company}</p>
                      
                      <div className="mb-4 flex space-x-3">
                        {speaker.social.twitter && (
                          <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-code-slate-400 hover:text-js-yellow-400 transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                        )}
                        {speaker.social.github && (
                          <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-code-slate-400 hover:text-js-yellow-400 transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                      
                      <div className="bg-code-slate-800/50 p-3 rounded-lg mb-4 border-l-4 border-js-yellow-500">
                        <p className="text-lg font-medium text-code-slate-200">&quot;{speaker.talk}&quot;</p>
                      </div>
                      
                      <p className="text-code-slate-300 mb-4">{speaker.bio}</p>
                      
                      <Button 
                        variant="primary" 
                        size="sm"
                        className="bg-js-yellow-500 hover:bg-js-yellow-600 text-code-slate-900 font-medium"
                      >
                        See full profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center mb-12 mt-20">
              <div className="h-1 bg-gradient-to-r from-transparent via-js-yellow-500 to-transparent w-24 mr-6"></div>
              <h2 className="text-3xl font-bold text-white">Speakers Lineup</h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-js-yellow-500 to-transparent w-24 ml-6"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="bg-code-slate-800 rounded-xl overflow-hidden border border-code-slate-700 hover:border-js-yellow-500 transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square bg-code-slate-700 relative">
                    {/* Speaker image would go here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-code-slate-900 via-code-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="primary"
                        size="sm"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-js-yellow-500 hover:bg-js-yellow-600 text-code-slate-900 font-medium"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">{speaker.name}</h3>
                    <p className="text-js-yellow-400 text-sm mb-2">{speaker.role}</p>
                    <p className="text-code-slate-400 text-sm mb-4">{speaker.company}</p>
                    <p className="text-code-slate-300 text-sm font-medium">Topic:</p>
                    <p className="text-code-slate-300">&quot;{speaker.talk}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-8 bg-gradient-to-br from-swiss-red-900/30 to-code-slate-900 rounded-xl border border-swiss-red-700/30 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Got JavaScript wisdom to share? 💫</h3>
              <p className="text-xl text-code-slate-200 mb-6">
                Our Call for Papers opens soon! Got an awesome JavaScript talk idea? We want to hear from you! Join our speaking community and share your JS passion with the world! 🎤
              </p>
              <Button 
                href="/#waitlist" 
                variant="primary" 
                size="lg"
                className="bg-js-yellow-500 hover:bg-js-yellow-600 text-code-slate-900 font-bold px-8 py-3 shadow-lg"
              >
                Join the Waitlist
              </Button>
              <p className="mt-4 text-code-slate-300">
                We&apos;ll notify you when the CFP opens and tickets are available! Be among the first to know!
              </p>
            </div>
            
            <div className="mt-20 text-center">
              <div className="inline-block bg-js-yellow-500/10 p-3 rounded-full mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-js-yellow-500 rounded-full text-code-slate-900 text-2xl">
                  🎉
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">More amazing speakers coming soon!</h2>
              <p className="text-xl text-code-slate-200 mb-4 max-w-3xl mx-auto">
                We&apos;re adding JS superheroes to our lineup every week! Can&apos;t wait to share all the amazing folks who&apos;ll be dropping JavaScript knowledge at HelveticaJS Summit 2026! Stay in the loop! 💛
              </p>
              <div className="max-w-md mx-auto mt-8">
                <Newsletter compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}