import Button from '../ui/Button';

export default function AboutSection() {
  // Features for the conference format
  const conferenceFeatures = [
    {
      text: '1-day, single-track conference (no FOMO!)'
    },
    {
      text: 'Pre-conference workshops for hands-on learning'
    },
    {
      text: 'Community meetup the evening before'
    },
    {
      text: 'Carefully curated talks from JS experts'
    }
  ];
  
  // Differentiating features
  const differentiators = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Focused Experience',
      description: 'Single-track means you never have to choose between great talks. Experience every moment of curated content.'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'True Community',
      description: 'We\'re building a conference that fosters real connections and collaboration among attendees.'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Swiss Quality',
      description: 'Expect meticulous attention to every detail - from content curation to venue selection and catering.'
    }
  ];

  // Check mark icon for feature list
  const CheckIcon = () => (
    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium">About the Conference</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Why AlpineJS Summit?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-300 mb-6">
              AlpineJS Summit is Switzerland&apos;s answer to the growing JavaScript community in Europe. We&apos;re creating an intimate, focused experience that champions both technical excellence and community connection. 💙
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Our one-day, single-track format ensures you won&apos;t miss any amazing content, while our pre-conference workshops and community meetup provide deeper learning and networking opportunities. Get ready for JS magic! ✨
            </p>
            <div className="bg-indigo-900/50 rounded-lg p-6 border border-indigo-800">
              <h3 className="text-xl font-semibold mb-3">Conference Format:</h3>
              <ul className="space-y-2 text-gray-300">
                {conferenceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 text-center md:text-left">
              <Button 
                href="/about" 
                variant="tertiary"
              >
                Learn more about AlpineJS Summit
              </Button>
            </div>
          </div>
          
          <div className="bg-indigo-800/20 p-8 rounded-xl border border-indigo-700/30">
            <h3 className="text-2xl font-bold mb-6">What Makes Us Different? 💫</h3>
            <div className="space-y-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex">
                  <div className={`flex-shrink-0 h-12 w-12 ${
                    index === 0 ? 'bg-blue-600' : 
                    index === 1 ? 'bg-purple-600' : 'bg-indigo-600'
                  } rounded-full flex items-center justify-center mr-4`}>
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{diff.title}</h4>
                    <p className="text-gray-300">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}