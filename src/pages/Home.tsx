import { lazy, Suspense } from 'react';

// Eagerly loaded
import Hero from '../components/Hero';

// Lazily loaded
const About = lazy(() => import('../components/About'));
const Experience = lazy(() => import('../components/Experience'));
const Academy = lazy(() => import('../components/Academy'));
const UpcomingServices = lazy(() => import('../components/UpcomingServices'));
const Toolkit = lazy(() => import('../components/Toolkit'));
const Certifications = lazy(() => import('../components/Certifications'));
const ChannelHighlight = lazy(() => import('../components/ChannelHighlight'));
const TerminalWidget = lazy(() => import('../components/TerminalWidget'));
import Contact from '../components/Contact';
import SEO from '../components/SEO';

/** Skeleton placeholder shown while lazy chunks load */
const SectionFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
      <span className="text-text-muted font-mono text-xs">Loading…</span>
    </div>
  </div>
);

const Home = () => {
  return (
    <main>
      <SEO title="Portfolio" />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Experience />
        <Academy />
        <UpcomingServices />
        <Toolkit />
        <Certifications />
        <ChannelHighlight />
        <TerminalWidget />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
