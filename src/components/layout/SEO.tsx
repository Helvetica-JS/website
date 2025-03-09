import Head from 'next/head';
import { ReactNode } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  children?: ReactNode;
}

export default function SEO({ 
  title = 'AlpineJS Summit 2026 | Swiss JavaScript Conference',
  description = 'Join us for Switzerland\'s premier JavaScript conference in Zurich. One amazing day of JavaScript innovation, workshops, and community.',
  image = 'https://alpinejs-summit.ch/og-image.jpg',
  url = 'https://alpinejs-summit.ch',
  children
}: SEOProps) {
  const fullTitle = title.includes('AlpineJS Summit') ? title : `${title} | AlpineJS Summit 2026`;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional metadata */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1f2937" />
      <meta name="keywords" content="JavaScript, JS conference, Switzerland, Zurich, Alpine.js, Web Development, Frontend, Developers, Coding" />
      
      {/* Extra head elements */}
      {children}
    </Head>
  );
}