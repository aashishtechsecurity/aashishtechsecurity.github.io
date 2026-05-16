import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Instagram, Linkedin, Medium, XTwitter } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-glow/30 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-accent-cyan" />
              <span className="font-display font-bold text-lg text-accent-cyan">AashishTechSecurity</span>
            </div>
            <p className="text-text-muted text-sm">"A Telugu cybersecurity education platform."</p>
            <p className="text-text-muted font-mono text-xs">"Authorized Use Only 🔐"</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Toolkit', href: '/#toolkit' },
                { name: 'Roadmap', href: '/#roadmap' },
                { name: 'Resources', href: '/resources' },
                { name: 'About', href: '/#about' },
                { name: 'Contact', href: '/#contact' }
              ].map(link => (
                <Link key={link.name} to={link.href} className="text-text-muted hover:text-accent-cyan transition-colors text-sm">
                  {'>'} {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-text-primary mb-4">Connect with AashishTechSecurity</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/aashishtechsecurity" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/aashishsec" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="https://aashishtechsecurity.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all"><Medium className="w-5 h-5" /></a>
              <a href="https://x.com/AashishTechSec" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all"><XTwitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">© 2026 AashishTechSecurity. All rights reserved.</p>
          <div className="bg-accent-cyan text-black font-mono text-xs font-bold px-4 py-1">
            ██ Hack the Planet ██
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
