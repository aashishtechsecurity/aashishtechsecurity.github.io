import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Terminal, ShieldCheck } from 'lucide-react';
import { GitHub, Linkedin, Instagram, Medium, XTwitter, YouTube } from '../Icons';

export const FinalCtaSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'aashishsec',
      href: 'https://www.linkedin.com/in/aashishsec',
      icon: Linkedin,
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'GitHub',
      handle: 'aashishtechsecurity',
      href: 'https://github.com/aashishtechsecurity',
      icon: GitHub,
      color: 'hover:text-white hover:border-white/40',
    },
    {
      name: 'Instagram',
      handle: '@aashishtechsecurity',
      href: 'https://www.instagram.com/aashishtechsecurity',
      icon: Instagram,
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    },
    {
      name: 'Medium',
      handle: 'aashishtechsecurity',
      href: 'https://aashishtechsecurity.medium.com/',
      icon: Medium,
      color: 'hover:text-[#00ab6c] hover:border-[#00ab6c]/40',
    },
    {
      name: 'X (Twitter)',
      handle: '@AashishTechSec',
      href: 'https://x.com/AashishTechSec',
      icon: XTwitter,
      color: 'hover:text-slate-200 hover:border-slate-400/40',
    },
    {
      name: 'YouTube',
      handle: '@aashishtechsecurity',
      href: 'https://www.youtube.com/@aashishtechsecurity',
      icon: YouTube,
      color: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-bg-secondary/40 border-t border-border-glow/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>JOIN_THE_MISSION // ATS_COMMUNITY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-5">
          Let's Build a More Secure <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-green">
            Digital World.
          </span>
        </h2>

        <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're here to learn cybersecurity fundamentals, explore practical tools, collaborate on security research, or secure your applications — let's connect.
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/resources"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-accent-cyan text-black font-mono font-bold text-sm tracking-wide hover:bg-accent-cyan/90 transition-all shadow-[0_0_20px_rgba(0,255,204,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] group"
          >
            <span>Explore Cybersecurity</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/about#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-border-glow/50 bg-bg-card/70 hover:bg-bg-card text-text-primary font-mono text-sm tracking-wide transition-all hover:border-accent-cyan/50 group"
          >
            <Briefcase className="w-4 h-4 text-accent-green group-hover:scale-110 transition-transform" />
            <span>Work With Me</span>
          </Link>
        </div>

        {/* Social connections bar */}
        <div className="pt-10 border-t border-border-glow/20">
          <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-cyan" />
            <span>Connect Across Platforms</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-3 rounded-lg bg-bg-card/40 border border-border-glow/30 transition-all group ${s.color}`}
                  aria-label={s.name}
                >
                  <Icon className="w-5 h-5 text-text-muted group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-medium text-text-primary">{s.name}</span>
                  <span className="text-[10px] font-mono text-text-muted/70 truncate max-w-full">
                    {s.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
