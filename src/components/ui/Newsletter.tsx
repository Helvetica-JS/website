import { useState, FormEvent } from 'react';
import { trackWaitlistSignup } from '../../utils/analytics';

interface NewsletterProps {
  compact?: boolean;
}

export default function Newsletter({ compact = false }: NewsletterProps) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong!');
      }
      
      setSuccess(true);
      setEmail('');
      
      // Track signup with analytics
      trackWaitlistSignup(compact ? 'compact_form' : 'full_form');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  if (compact) {
    return (
      <div>
        {!success ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-2">
            <p className="text-green-400">
              🎉 You&apos;re on the list! Get ready for some JavaScript awesomeness!
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-2 text-blue-400 hover:text-blue-300 underline text-sm"
            >
              Sign up another email
            </button>
          </div>
        )}
        {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
      {!success ? (
        <>
          <h3 className="text-xl font-bold mb-4">Stay in the loop! 🔔</h3>
          <p className="mb-4 text-gray-300">
            Be the first to hear about speakers, workshops, and early-bird tickets for AlpineJS Summit 2026! Join our awesome community of JS enthusiasts!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap flex items-center justify-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
          </form>
        </>
      ) : (
        <div className="text-center py-2">
          <svg className="h-12 w-12 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold mb-2">You&apos;re on the list! 🎉</h3>
          <p className="text-gray-300">
            Awesome! We&apos;ll keep you updated with all the latest AlpineJS Summit news. Get ready for some JavaScript magic!
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
          >
            Sign up another email
          </button>
        </div>
      )}
    </div>
  );
}