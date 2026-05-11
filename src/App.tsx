import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Resources = lazy(() => import('./pages/Resources'));

/** Skeleton placeholder shown while lazy chunks load */
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-primary">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
      <span className="text-text-muted font-mono text-xs">Loading…</span>
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
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-cyan/30 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
