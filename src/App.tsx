import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import CookieConsent from './components/CookieConsent';
import ScrollToTopButton from './components/ScrollToTopButton';

const Resources = lazy(() => import('./pages/Resources'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const ToolkitPage = lazy(() => import('./pages/ToolkitPage'));

// Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Skeleton placeholder shown while lazy chunks load */
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-primary">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
      <span className="text-text-muted font-mono text-xs">Loading...</span>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-cyan/30 flex flex-col overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-bg-primary font-bold top-0 left-0">
        Skip to main content
      </a>
      <ThemeTransitionOverlay />
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/toolkit" element={<PageTransition><ToolkitPage /></PageTransition>} />
              <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
              <Route path="/roadmap" element={<PageTransition><Roadmap /></PageTransition>} />
              
              <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><TermsConditions /></PageTransition>} />
              <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
              <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
              
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
