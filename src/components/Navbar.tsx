import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import logo from '../assets/logo.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
  id: string;
  isExternal?: boolean;
}

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Resources', href: '/resources', id: 'resources' },
  { name: 'Toolkit', href: '/toolkit', id: 'toolkit' },
  { name: 'Projects', href: '/#projects', id: 'projects' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'Research', href: '/#research', id: 'research' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Contact', href: 'https://www.linkedin.com/in/aashishsec', id: '', isExternal: true },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  // General scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy via Intersection Observer on Home Page
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sectionIds = ['home', 'ecosystem', 'domains', 'toolkit-preview', 'projects', 'services', 'education', '100-days', 'roadmap', 'research', 'about-preview'];
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
    if (href === '/toolkit') return location.pathname === '/toolkit';
    if (href === '/about') return location.pathname === '/about' && !location.hash;
    if (href === '/about#contact') return location.pathname === '/about' && location.hash === '#contact';
    if (location.pathname === '/') {
      if (href === '/') return !activeSection || activeSection === 'home';
      return activeSection === id;
    }
    return false;
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
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0" aria-label="AashishTechSecurity Home">
            <div className="relative">
              <img
                src={logo}
                alt="ATS Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain brand-logo group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-accent-cyan/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-base sm:text-lg text-accent-cyan tracking-tight">
              AashishTechSecurity
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {NAV_LINKS.map((item) => {
              const active = isLinkActive(item.href, item.id);
              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-cyan transition-colors font-mono text-xs xl:text-sm font-medium"
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-mono text-xs xl:text-sm font-medium transition-colors py-1 group ${
                    active ? 'text-accent-cyan font-bold' : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent-cyan transition-all duration-200 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions: Search + Get in Touch CTA + ThemeToggle */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-bg-card border border-border-glow/40 text-text-muted hover:text-accent-cyan hover:border-accent-cyan/50 font-mono text-xs transition-all group"
                aria-label="Search site (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="hidden xl:inline text-text-muted group-hover:text-text-primary">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-bg-primary border border-border-glow text-[10px] text-text-muted group-hover:text-accent-cyan">
                  ⌘K
                </kbd>
              </button>
            )}

            <a
              href="https://www.linkedin.com/in/aashishsec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-accent-cyan/50 text-accent-cyan font-mono text-xs hover:bg-accent-cyan hover:text-black transition-all font-semibold whitespace-nowrap shadow-[0_0_12px_rgba(0,255,204,0.15)] group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls: Search + ThemeToggle + Hamburger */}
          <div className="flex sm:hidden items-center space-x-1.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-text-muted hover:text-accent-cyan active:scale-95 transition-all"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-accent-cyan" />
              </button>
            )}
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
                const active = isLinkActive(item.href, item.id);
                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3 border-b border-border-glow/20 font-mono text-sm transition-colors text-text-primary hover:text-accent-cyan"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-accent-cyan/60 text-xs">0{idx + 1}.</span>
                        <span>{item.name}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-text-muted/60" />
                    </a>
                  );
                }
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-accent-cyan text-black font-mono font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(0,255,204,0.3)]"
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
