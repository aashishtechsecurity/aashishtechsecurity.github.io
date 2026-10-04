import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import logo from '../assets/logo.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Toolkit', href: '/toolkit' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'About', href: '/about' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to hash when location changes
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/' || location.pathname === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // General scroll state for glassmorphic backdrop
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-glow/40 shadow-lg shadow-black/30'
          : 'bg-bg-primary/60 backdrop-blur-sm border-b border-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group flex-shrink-0 mr-4 lg:mr-8 xl:mr-10" 
            aria-label="AashishTechSecurity Home"
          >
            <div className="relative">
              <img
                src={logo}
                alt="ATS Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain brand-logo group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-accent-cyan/25 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-base sm:text-lg text-accent-cyan tracking-tight group-hover:text-[#00d5ff] transition-colors whitespace-nowrap">
              AashishTechSecurity
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-mono text-sm tracking-wide transition-colors py-1 px-1 group ${
                    active ? 'text-accent-cyan font-bold' : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan rounded-full transition-all duration-200 ${
                      active ? 'w-full shadow-[0_0_8px_rgba(0,245,255,0.7)]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Controls: Search + Get in Touch + ThemeToggle */}
          <div className="hidden sm:flex items-center space-x-3 flex-shrink-0 ml-4">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="h-9 inline-flex items-center gap-2 px-3 rounded-lg bg-bg-card/70 hover:bg-bg-card border border-border-glow/40 hover:border-accent-cyan/50 text-text-muted hover:text-accent-cyan font-mono text-xs transition-all shadow-sm group"
                aria-label="Search site (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-accent-cyan group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline text-text-muted group-hover:text-text-primary font-medium">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-bg-primary/80 border border-border-glow text-[10px] text-text-muted group-hover:text-accent-cyan font-mono">
                  ⌘K
                </kbd>
              </button>
            )}

            <a
              href="https://www.linkedin.com/in/aashishsec"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center gap-1.5 px-4 rounded-lg bg-accent-cyan/10 hover:bg-accent-cyan text-accent-cyan hover:text-bg-primary border border-accent-cyan/40 hover:border-accent-cyan font-mono text-xs font-bold tracking-wide transition-all shadow-[0_0_12px_rgba(0,245,255,0.12)] hover:shadow-[0_0_18px_rgba(0,245,255,0.35)] whitespace-nowrap group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Right Controls: Search + ThemeToggle + Hamburger */}
          <div className="flex sm:hidden items-center space-x-2">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="h-9 w-9 rounded-lg border border-border-glow/40 bg-bg-card/60 text-text-muted hover:text-accent-cyan flex items-center justify-center active:scale-95 transition-all"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-accent-cyan" />
              </button>
            )}
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 rounded-lg border border-border-glow/40 bg-bg-card/60 text-text-primary hover:text-accent-cyan flex items-center justify-center active:scale-95 transition-all"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border-glow/30 bg-bg-card/95 backdrop-blur-xl px-6 py-6 overflow-y-auto max-h-[calc(100vh-5rem)]"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((item, idx) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3 border-b border-border-glow/20 font-mono text-sm transition-colors ${
                      active ? 'text-accent-cyan font-bold' : 'text-text-primary hover:text-accent-cyan'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-accent-cyan/60 text-xs">0{idx + 1}.</span>
                      <span>{item.name}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-text-muted/60" />
                  </Link>
                );
              })}

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/aashishsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-accent-cyan text-bg-primary font-mono font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(0,255,204,0.3)] hover:brightness-110 transition-all"
                >
                  <span>Get in Touch (LinkedIn)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
