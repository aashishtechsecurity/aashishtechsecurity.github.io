import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import HomeHero from '../components/home/HomeHero';

// Lazily load sections below the fold for optimal initial page load performance
const EcosystemSection = lazy(() => import('../components/home/EcosystemSection'));
const DomainsSection = lazy(() => import('../components/home/DomainsSection'));
const FeaturedToolkitSection = lazy(() => import('../components/home/FeaturedToolkitSection'));
const BuiltToolsSection = lazy(() => import('../components/home/BuiltToolsSection'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const InstagramContentSection = lazy(() => import('../components/home/InstagramContentSection'));
const HackingSeriesSection = lazy(() => import('../components/home/HackingSeriesSection'));
const RoadmapPreviewSection = lazy(() => import('../components/home/RoadmapPreviewSection'));
const FeaturedResearchSection = lazy(() => import('../components/home/FeaturedResearchSection'));
const AboutPreviewSection = lazy(() => import('../components/home/AboutPreviewSection'));
const FinalCtaSection = lazy(() => import('../components/home/FinalCtaSection'));

const SectionFallback: React.FC = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
      <span className="text-text-muted font-mono text-xs">Loading section...</span>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-cyan selection:text-black">
      <SEO
        title="Cybersecurity Platform · తెలుగులో"
        description="A practical cybersecurity platform for learning, ethical hacking tools, security research, and professional application security services — built for students, developers, and security enthusiasts."
        url="https://www.aashishtechsecurity.in"
      />

      {/* 1. Hero Section */}
      <HomeHero />

      <Suspense fallback={<SectionFallback />}>
        {/* 2. Cybersecurity Ecosystem */}
        <EcosystemSection />

        {/* 3. Cybersecurity Domains */}
        <DomainsSection />

        {/* 4. Ethical Hacking Toolkit */}
        <FeaturedToolkitSection />

        {/* 5. Security Tools I Build */}
        <BuiltToolsSection />

        {/* 6. Cybersecurity Services */}
        <ServicesSection />

        {/* 7. Cybersecurity Education & Reels */}
        <InstagramContentSection />

        {/* 8. 100 Days of Hacking */}
        <HackingSeriesSection />

        {/* 9. Cybersecurity Roadmap */}
        <RoadmapPreviewSection />

        {/* 10. Security Research & Writeups */}
        <FeaturedResearchSection />

        {/* 11. Meet the Creator (About Preview) */}
        <AboutPreviewSection />

        {/* 12. Final Call to Action */}
        <FinalCtaSection />
      </Suspense>
    </main>
  );
};

export default Home;
