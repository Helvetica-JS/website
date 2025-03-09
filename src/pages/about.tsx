import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ValueCard from '../components/ui/ValueCard';

export default function AboutPage() {
  const seo = {
    title: 'About HelveticaJS Summit',
    description: 'Learn about Switzerland\'s premier JavaScript conference, our mission, and what makes HelveticaJS Summit a unique tech event.',
    url: 'https://helveticajs-summit.ch/about'
  };

  const values = [
    {
      number: '01',
      title: 'Technical Excellence',
      description: 'We present high-quality technical content with no fluff and no sales pitches. Just pure JavaScript goodness from the experts!',
      color: 'js-yellow'
    },
    {
      number: '02',
      title: 'Community Connection',
      description: 'We build meaningful interactions and believe the hallway track is as valuable as the speaker track. The JS community is what makes this event special! 🤝',
      color: 'alpine-blue'
    },
    {
      number: '03',
      title: 'Accessibility & Inclusion',
      description: 'We create a welcoming environment and ensure diversity in our speaker lineup and attendee base. Everyone belongs in our JS family! 💛',
      color: 'zurich-teal'
    },
    {
      number: '04',
      title: 'Swiss Quality',
      description: 'We pay meticulous attention to every detail, from venue to catering, scheduling to speaker support. Expect nothing but the best for our amazing community! 🇨🇭',
      color: 'swiss-red'
    }
  ];

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-code-slate-800 to-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 bg-js-yellow-500 rounded-full text-code-slate-900 font-bold">
              Q1 2026 • Zurich, Switzerland
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About HelveticaJS Summit</h1>
            <p className="text-xl text-code-slate-200 mb-8">
              Switzerland&apos;s premier JavaScript conference bringing together the most passionate JS enthusiasts from across Europe! 🔥
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 bg-gradient-to-br from-js-yellow-900/20 to-code-slate-900 p-8 rounded-2xl border border-js-yellow-700/20 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
                <span className="bg-js-yellow-500 text-code-slate-900 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl font-bold">🚀</span>
                Our Mission
              </h2>
              <p className="text-xl text-code-slate-200 mb-6">
                HelveticaJS Summit was born from a desire to bring the JavaScript community together in one of Europe&lsquo;s most beautiful tech hubs. We&apos;re creating a conference that balances technical depth with genuine human connection!
              </p>
              <p className="text-xl text-code-slate-200 mb-6">
                Our mission is to provide a platform where JavaScript enthusiasts can share knowledge, build meaningful connections, and explore the cutting edge of web development—all while enjoying the beauty and precision of Switzerland. 💻
              </p>
              <p className="text-xl text-code-slate-200 mb-4">
                We chose the single-track format deliberately—we want every attendee to have the same amazing experience, with no fear of missing out and plenty of shared context for those hallway conversations that often become the highlight of any conference!
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="bg-js-yellow-500 text-code-slate-900 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl font-bold">💛</span>
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  number={value.number}
                  title={value.title}
                  description={value.description}
                  highlightColor={value.color as "js-yellow" | "alpine-blue" | "zurich-teal" | "swiss-red" | "syntax-plum" | "code-slate" | undefined}
                />
              ))}
            </div>

            <div className="bg-gradient-to-br from-alpine-blue-900/20 to-code-slate-900 p-8 rounded-2xl border border-alpine-blue-700/20 shadow-xl mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
                <span className="bg-js-yellow-500 text-code-slate-900 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl font-bold">🤝</span>
                Who&apos;s Behind This?
              </h2>
              <p className="text-xl text-code-slate-200 mb-6">
                HelveticaJS Summit is organized by a team of passionate JavaScript developers and community builders from across Switzerland and Europe. With backgrounds ranging from startups to enterprises, agencies to open source maintainers, we&apos;re united by our love for JavaScript and community events! 💯
              </p>
              <p className="text-xl text-code-slate-200 mb-6">
                Our organizing team has collective experience attending and speaking at hundreds of tech conferences worldwide—we&apos;re taking our favorite elements from each to create something truly special in Zurich.
              </p>
              
              <div className="mt-8 bg-code-slate-800/50 p-6 rounded-xl border border-alpine-blue-600/20">
                <h3 className="text-xl font-bold mb-4 text-white">Want to get involved? 🙋‍♂️</h3>
                <p className="text-code-slate-200 mb-4">
                  We&apos;re always looking for volunteers, speakers, and sponsors who share our passion for JavaScript and community! Reach out if you&apos;d like to be part of making HelveticaJS Summit an unforgettable experience!
                </p>
                <a 
                  href="mailto:team@helveticajs-summit.ch" 
                  className="inline-flex items-center text-js-yellow-400 hover:text-js-yellow-300 font-medium"
                >
                  Email our team <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            <div className="text-center p-8 bg-js-yellow-500/10 rounded-2xl border border-js-yellow-500/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to join the JavaScript party? 🎉</h2>
              <p className="text-xl text-code-slate-200 mb-8">
                Be among the first to know when tickets drop and get exclusive early-bird perks!
              </p>
              <Button 
                href="/#waitlist" 
                variant="primary" 
                size="lg"
                className="bg-js-yellow-500 hover:bg-js-yellow-600 text-code-slate-900 font-bold px-8 py-4 text-lg shadow-lg"
              >
                Join the Waitlist Now! 🚀
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}