import type { Metadata } from 'next';
import { Poppins, Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins-var',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway-var',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bennie Ejiga - Learning Experience Design Portfolio',
  description:
    'Learning Experience Designer specializing in e-learning development, course design, and instructional design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-poppins text-text-dark">
        <CustomCursor />
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
