import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ValueCard from '../components/ui/ValueCard';

export default function AboutPage() {
  const seo = {
    title: 'About AlpineJS Summit',
    description: 'Learn about Switzerland\'s premier JavaScript conference, our mission, and what makes AlpineJS Summit a unique tech event.',
    url: 'https://alpinejs-summit.ch/about'
  };

  const values = [
    {
      number: '01',
      title: 'Technical Excellence',
      description: 'We present high-quality technical content with no fluff and no sales pitches.',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Community Connection',
      description: 'We build meaningful interactions and believe the hallway track is as valuable as the speaker track.',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Accessibility & Inclusion',
      description: 'We create a welcoming environment and ensure diversity in our speaker lineup and attendee base.',
      color: 'green'
    },
    {
      number: '04',
      title: 'Swiss Quality',
      description: 'We pay meticulous attention to every detail, from venue to catering, scheduling to speaker support.',
      color: 'amber'
    }
  ];

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-indigo-900/50 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AlpineJS Summit</h1>
            <p className="text-xl text-gray-300 mb-8">
              Switzerland&apos;s premier JavaScript conference coming to Zurich in Q1 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission 🚀</h2>
            <p className="text-xl text-gray-300 mb-6">
              AlpineJS Summit was born from a desire to bring the JavaScript community together in one of Europe&apos;s most beautiful tech hubs. We&apos;re creating a conference that balances technical depth with genuine human connection.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Our mission is to provide a platform where JavaScript enthusiasts can share knowledge, build meaningful connections, and explore the cutting edge of web development—all while enjoying the beauty and precision of Switzerland.
            </p>
            <p className="text-xl text-gray-300 mb-12">
              We chose the single-track format deliberately—we want every attendee to have the same amazing experience, with no fear of missing out and plenty of shared context for those hallway conversations that often become the highlight of any conference.
            </p>

            <h2 className="text-3xl font-bold mb-8">Core Values 💙</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  number={value.number}
                  title={value.title}
                  description={value.description}
                  highlightColor={value.color as "blue" | "purple" | "green" | "amber"}
                />
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8">Who&apos;s Behind This? 🤔</h2>
            <p className="text-xl text-gray-300 mb-6">
              AlpineJS Summit is organized by a team of passionate JavaScript developers and community builders from across Switzerland and Europe. With backgrounds ranging from startups to enterprises, agencies to open source maintainers, we&apos;re united by our love for JavaScript and community events.
            </p>
            <p className="text-xl text-gray-300 mb-12">
              Our organizing team has collective experience attending and speaking at hundreds of tech conferences worldwide—we&apos;re taking our favorite elements from each to create something truly special in Zurich.
            </p>

            <div className="text-center">
              <Button 
                href="/#waitlist" 
                variant="primary" 
                size="lg"
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}