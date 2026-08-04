import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Benjamin Ejiga — Learning Experience Architect',
  description:
    'Learning Experience Architect helping organizations turn complex knowledge into intuitive, engaging and measurable learning ecosystems.',
  keywords: [
    'Benjamin Ejiga',
    'bennie.pro',
    'Learning Experience Architect',
    'Skillieo LXP',
    'Learning Strategy',
    'Instructional Design',
    'eLearning Development',
    'Learning Technology',
  ],
  authors: [{ name: 'Benjamin Ejiga', url: 'https://bennie.pro' }],
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
