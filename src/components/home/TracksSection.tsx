import Card from '../ui/Card';
import Link from 'next/link';

export default function TracksSection() {
  // Conference tracks data with our awesome new color mapping
  const tracks = [
    {
      title: 'Modern Frameworks',
      description: 'Deep dives into Next.js, Remix, Astro, SvelteKit, and other modern JS frameworks shaping the web.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tags: ['Next.js', 'React', 'Svelte', 'Vue'],
      color: 'alpine-blue' // Updated color name
    },
    {
      title: 'Performance & Architecture',
      description: 'Optimizing JavaScript applications, modern build tools, and robust architecture patterns for blazing fast UIs.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tags: ['Vite', 'Webpack', 'Core Web Vitals'],
      color: 'syntax-plum' // Updated color name
    },
    {
      title: 'Frontend AI & ML',
      description: 'Exploring how AI is transforming frontend development, from code generation to amazing user experiences.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      tags: ['TensorFlow.js', 'AI Tooling', 'ML Models'],
      color: 'zurich-teal' // Updated color name
    },
    {
      title: 'Web Platform',
      description: 'Latest advancements in web standards, browser APIs, and the cutting edge of what\'s possible in browsers.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
      tags: ['Web Components', 'WebGPU', 'WebAssembly'],
      color: 'swiss-red' // Updated color name
    },
    {
      title: 'Testing & DevOps',
      description: 'Best practices for testing JavaScript applications and streamlining the development pipeline for happy teams.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      tags: ['Jest', 'Playwright', 'CI/CD'],
      color: 'js-yellow' // Updated color name
    },
    {
      title: 'Community & Career',
      description: 'Growing as a JavaScript developer, building communities, and navigating tech careers in our changing industry.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      tags: ['Open Source', 'Tech Leadership', 'Communication'],
      color: 'code-slate' // Updated color name
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-code-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-js-yellow-400 font-medium">Technical Awesomeness 🔥</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Conference Tracks</h2>
          <p className="mt-4 text-xl text-code-slate-300 max-w-3xl mx-auto">
            Our single-track format is packed with the hottest developments in the JavaScript ecosystem. No FOMO - you&apos;ll catch every epic moment! ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card
              key={index}
              title={track.title}
              description={track.description}
              icon={track.icon}
              tags={track.tags}
              highlightColor={track.color as "alpine-blue" | "syntax-plum" | "zurich-teal" | "swiss-red" | "js-yellow" | "code-slate" | undefined}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/schedule" passHref>
            <span className="text-js-yellow-400 hover:text-js-yellow-300 transition cursor-pointer inline-flex items-center">
              <span>Get a sneak peek at our session lineup</span>
              <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}