import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bennie.pro'),
  title: 'Benjamin Ejiga | Learning Experience Architect | bennie.pro',
  description:
    'Official website of Benjamin Ejiga, also known as Bennie. Learning Experience Architect helping organizations design learning ecosystems through strategy, experience design, and technology.',
  authors: [
    { name: 'Benjamin Ejiga', url: 'https://bennie.pro' },
    { name: 'Bennie Ejiga', url: 'https://bennie.pro' },
  ],
  alternates: {
    canonical: 'https://bennie.pro',
  },
  openGraph: {
    title: 'Benjamin Ejiga | Learning Experience Architect | bennie.pro',
    description:
      'Official website of Benjamin Ejiga, also known as Bennie. Learning Experience Architect helping organizations design learning ecosystems through strategy, experience design, and technology.',
    url: 'https://bennie.pro',
    siteName: 'Benjamin Ejiga (bennie.pro)',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Ejiga | Learning Experience Architect | bennie.pro',
    description:
      'Official website of Benjamin Ejiga, also known as Bennie. Learning Experience Architect helping organizations design learning ecosystems through strategy, experience design, and technology.',
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
    '@id': 'https://bennie.pro/#person',
    name: 'Benjamin Ejiga',
    alternateName: ['Bennie Ejiga', 'Bennie'],
    url: 'https://bennie.pro',
    jobTitle: 'Learning Experience Architect',
    image: 'https://bennie.pro/benjamin_ejiga_corp.jpg',
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
