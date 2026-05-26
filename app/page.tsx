import Hero from '@/components/Hero';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Documents from '@/components/Documents';
import Projects from '@/components/Projects';
import Contributions from '@/components/Contributions';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Methodology />
      <Documents />
      <Projects />
      <Contributions />
      <Testimonials />
      <Contact />
    </main>
  );
}
