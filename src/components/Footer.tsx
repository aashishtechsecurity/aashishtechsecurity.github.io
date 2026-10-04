import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Instagram, Linkedin, Medium, XTwitter, GitHub, YouTube } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-glow/30 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center sm:text-left">
          
          {/* Brand Info */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-accent-cyan" />
              <span className="font-display font-bold text-lg text-accent-cyan">AashishTechSecurity</span>
            </div>
            <p className="text-text-muted text-sm font-medium">Cybersecurity · తెలుగులో</p>
            <p className="text-text-muted text-xs leading-relaxed max-w-xs">
              A practical cybersecurity platform for learning, ethical hacking tools, security research, and AppSec services.
            </p>
            <p className="text-text-muted font-mono text-xs text-accent-green/80">Authorized Use Only 🔐</p>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-text-primary mb-3 font-mono text-sm tracking-wide uppercase text-accent-cyan">
              // Platform
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Learn Resources', href: '/resources' },
                { name: 'Security Toolkit', href: '/toolkit' },
                { name: 'Cyber Roadmap', href: '/roadmap' },
                { name: 'About Aashish', href: '/about' },
                { name: 'Work With Me', href: '/about#contact' }
              ].map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-text-muted hover:text-accent-cyan transition-colors text-sm font-mono flex items-center justify-center sm:justify-start gap-1"
                >
                  <span className="text-accent-cyan/60 text-xs">{'>'}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Policy */}
          <div className="space-y-3">
            <h4 className="font-bold text-text-primary mb-3 font-mono text-sm tracking-wide uppercase text-accent-cyan">
              // Legal & Safety
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'Refund Policy', href: '/refund-policy' }
              ].map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-text-muted hover:text-accent-cyan transition-colors text-sm font-mono flex items-center justify-center sm:justify-start gap-1"
                >
                  <span className="text-accent-cyan/60 text-xs">{'>'}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-text-primary mb-1 font-mono text-sm tracking-wide uppercase text-accent-cyan">
              // Connect
            </h4>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-2">
              <a
                href="https://www.linkedin.com/in/aashishsec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/aashishtechsecurity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <GitHub className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aashishtechsecurity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://aashishtechsecurity.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <Medium className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/AashishTechSec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <XTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@aashishtechsecurity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-bg-card border border-border-glow/30 rounded hover:border-accent-cyan hover:text-accent-cyan active:scale-95 transition-all text-text-muted"
              >
                <YouTube className="w-4 h-4" />
              </a>
            </div>
            <div className="text-text-muted text-xs space-y-1 font-mono">
              <p>Location: Hyderabad, Telangana, India</p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@aashishtechsecurity.in" className="hover:text-accent-cyan transition-colors underline">
                  privacy@aashishtechsecurity.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border-glow/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} AashishTechSecurity. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-text-muted font-mono text-xs">
              Learn → Explore → Practice → Build → Secure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
