import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Experience', href: '/#experience', id: 'experience' },
  { name: 'Toolkit', href: '/#toolkit', id: 'toolkit' },
  { name: 'Resources', href: '/resources', id: '' },
  { name: 'Roadmap', href: '/roadmap', id: '' },
  { name: 'Contact', href: '/#contact', id: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Scroll to hash when location changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // General scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy via Intersection Observer
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the intersection entry that is currently intersecting
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // If multiple, pick the first one (top-most)
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' } // Triggers when section is near the top
    );

    const sectionIds = NAV_LINKS.map(link => link.id).filter(Boolean);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isLinkActive = (href: string, id: string) => {
    if (href === '/resources') return location.pathname === '/resources';
    if (href === '/roadmap') return location.pathname === '/roadmap';
    if (location.pathname === '/') return activeSection === id;
    return false; // If not on home, hash links aren't strictly "active"
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-glow' : 'bg-transparent'}`} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3 group" aria-label="AashishTechSecurity Home">
            <div className="relative">
              <img src={logo} alt="ATS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-accent-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-accent-cyan tracking-tight">AashishTechSecurity</span>
          </Link>

          {/* Desktop Nav & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((item) => (
              <Link key={item.name} to={item.href} className={`text-text-primary hover:text-accent-cyan transition-colors relative group font-medium ${isLinkActive(item.href, item.id) ? 'text-accent-cyan' : ''}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all group-hover:w-full ${isLinkActive(item.href, item.id) ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-primary hover:text-accent-cyan active:scale-95 transition-all"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 sm:top-20 bg-bg-card/95 backdrop-blur-md border-t border-border-glow z-40"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col p-6 pt-8">
              {NAV_LINKS.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-display transition-colors py-3 border-b border-border-glow/20 ${isLinkActive(item.href, item.id) ? 'text-accent-cyan' : 'text-text-primary hover:text-accent-cyan active:text-accent-cyan'}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span className="text-accent-cyan font-mono text-sm mr-3">0{idx + 1}.</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
