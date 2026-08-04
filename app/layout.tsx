import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bennie.pro'),
  title: 'Benjamin Ejiga (Bennie) — Learning Experience Architect',
  description:
    'Official website of Benjamin Ejiga (Bennie). Learning Experience Architect helping organizations design learning ecosystems that build capability, improve performance, and turn strategy into measurable outcomes.',
  keywords: [
    'Benjamin Ejiga',
    'Bennie Ejiga',
    'Bennie',
    'bennie.pro',
    'Learning Experience Architect',
    'Learning Strategy',
    'Instructional Design',
    'eLearning Development',
    'Learning Technology',
    'Skillieo LXP',
    'Pinnacle Learning Design System',
  ],
  authors: [
    { name: 'Benjamin Ejiga', url: 'https://bennie.pro' },
    { name: 'Bennie Ejiga', url: 'https://bennie.pro' },
  ],
  alternates: {
    canonical: 'https://bennie.pro',
  },
  openGraph: {
    title: 'Benjamin Ejiga (Bennie) — Learning Experience Architect',
    description:
      'Official website of Benjamin Ejiga (Bennie). Learning Experience Architect designing learning ecosystems that build capability and improve performance.',
    url: 'https://bennie.pro',
    siteName: 'Benjamin Ejiga (bennie.pro)',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Ejiga (Bennie) — Learning Experience Architect',
    description:
      'Official website of Benjamin Ejiga (Bennie). Learning Experience Architect designing learning ecosystems that build capability and improve performance.',
  },
  icons: {
    icon: [
      {
        url: '/logo/monogram-light-mode.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo/monogram-dark-mode.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    shortcut: '/logo/monogram-light-mode.png',
    apple: '/logo/monogram-light-mode.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Person Schema (JSON-LD) for mapping "Benjamin Ejiga" & "Bennie Ejiga" to bennie.pro
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Benjamin Ejiga',
    alternateName: ['Bennie Ejiga', 'Bennie'],
    url: 'https://bennie.pro',
    jobTitle: 'Learning Experience Architect',
    sameAs: ['https://www.linkedin.com/in/ejiga/'],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
