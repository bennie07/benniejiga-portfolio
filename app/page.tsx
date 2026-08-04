import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Beliefs from '@/components/Beliefs';
import Approach from '@/components/Approach';
import Engagements from '@/components/Engagements';
import LearningExperiences from '@/components/LearningExperiences';
import CurrentlyBuilding from '@/components/CurrentlyBuilding';
import ImpactMetrics from '@/components/ImpactMetrics';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* 01. Hero Header */}
      <Hero />

      {/* 02. Sector Trust Bar */}
      <TrustedBy />

      {/* 03. Brand Philosophy */}
      <Beliefs />

      {/* 04. Approach & Differentiation */}
      <Approach />

      {/* 05. Narrative One: Selected Engagements (How I Think) */}
      <Engagements />

      {/* 06. Narrative Two: Learning Experiences (How I Build) */}
      <LearningExperiences />

      {/* 07. Live Innovation Trackers */}
      <CurrentlyBuilding />

      {/* 08. Quantitative Impact Metrics */}
      <ImpactMetrics />

      {/* 09. Client Endorsements */}
      <Testimonials />

      {/* 10. Project Consultation */}
      <Contact />
    </main>
  );
}
