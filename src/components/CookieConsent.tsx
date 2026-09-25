import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-bg-card border border-border-glow shadow-[0_0_20px_rgba(0,245,255,0.15)] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto backdrop-blur-lg">
            <div className="text-sm text-text-muted font-mono leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
              Read our <Link to="/cookie-policy" className="text-accent-cyan hover:underline">Cookie Policy</Link> and <Link to="/privacy-policy" className="text-accent-cyan hover:underline">Privacy Policy</Link> for more details.
            </div>
            <div className="flex gap-3 shrink-0">
              <button 
                onClick={declineCookies}
                className="px-4 py-2 border border-border-glow/50 text-text-muted hover:text-text-primary rounded-lg font-mono text-sm transition-colors focus:ring-2 focus:ring-border-glow"
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-accent-cyan text-bg-primary font-bold rounded-lg font-mono text-sm hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all focus:ring-2 focus:ring-accent-cyan focus:outline-none"
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
