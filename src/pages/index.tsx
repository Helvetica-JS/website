import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import TracksSection from '../components/home/TracksSection';
import ValuesSection from '../components/home/ValuesSection';
import LocationSection from '../components/home/LocationSection';
import WaitlistSection from '../components/home/WaitlistSection';

export default function Home() {
  const seo = {
    title: 'AlpineJS Summit 2026 | Swiss JavaScript Conference',
    description: 'Join us for Switzerland\'s premier JavaScript conference in Zurich. One amazing day of JavaScript innovation, workshops, and community.',
    url: 'https://alpinejs-summit.ch'
  };

  return (
    <Layout seo={seo}>
      <Hero />
      <AboutSection />
      <TracksSection />
      <ValuesSection />
      <LocationSection />
      <WaitlistSection />
    </Layout>
  );
}