import ValueCard from '../ui/ValueCard';

export default function ValuesSection() {
  // Values data
  const values = [
    {
      number: '01',
      title: 'Technical Excellence',
      description: (
        <>
          <p className="text-gray-300 mb-4">
            We&apos;re committed to showcasing the highest quality technical content. Our talks and workshops are rigorously curated to ensure they deliver genuine value and insight.
          </p>
          <p className="text-gray-300">
            No fluff, no sales pitches - just solid, practical JavaScript knowledge from experienced practitioners at the cutting edge of web development. 🧠
          </p>
        </>
      ),
      color: 'blue'
    },
    {
      number: '02',
      title: 'Community Connection',
      description: (
        <>
          <p className="text-gray-300 mb-4">
            AlpineJS Summit is built around meaningful interactions. Our single-track format, extended breaks, and social events are designed to foster genuine connections.
          </p>
          <p className="text-gray-300">
            We believe the hallway track is just as valuable as the speaker track - and we design our conference experience accordingly! 🤝
          </p>
        </>
      ),
      color: 'purple'
    },
    {
      number: '03',
      title: 'Accessibility & Inclusion',
      description: (
        <>
          <p className="text-gray-300 mb-4">
            We&apos;re committed to creating a welcoming environment for everyone. Our conference is designed to be accessible to all participants regardless of background or experience level.
          </p>
          <p className="text-gray-300">
            We actively work to ensure diversity in our speaker lineup and attendee base, and maintain a strict code of conduct to ensure everyone feels safe and respected. 💙
          </p>
        </>
      ),
      color: 'green'
    },
    {
      number: '04',
      title: 'Swiss Quality',
      description: (
        <>
          <p className="text-gray-300 mb-4">
            Like a precision Swiss timepiece, we pay meticulous attention to every detail. From venue selection to catering, scheduling to speaker support, we ensure everything runs smoothly.
          </p>
          <p className="text-gray-300">
            Attendees and speakers will experience the legendary Swiss dedication to quality in every aspect of the conference. ⌚
          </p>
        </>
      ),
      color: 'amber'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium">What Drives Us 🧭</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Values</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
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
      </div>
    </section>
  );
}