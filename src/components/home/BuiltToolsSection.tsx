import { motion } from 'framer-motion';
import { Code, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GitHub } from '../Icons';

const BUILT_PROJECTS = [
  {
    name: 'httpAlive',
    tagline: 'High-Performance Asynchronous Web Recon Engine',
    desc: 'Probes large lists of subdomains and URLs concurrently to detect live hosts, extract server metadata, fingerprint web technology stacks (WordPress, React, Next.js), and detect protective WAF layers (Cloudflare, Akamai, Imperva, AWS WAF).',
    tech: ['Python 3', 'AsyncIO', 'HTTPX', 'Rich CLI', 'Multi-format Export'],
    github: 'https://github.com/aashishtechsecurity/httpAlive',
    status: 'v2.0.0 Active',
    badgeColor: 'border-accent-cyan/40 text-accent-cyan bg-accent-cyan/10'
  },
  {
    name: 'JS-Scanner',
    tagline: 'Asynchronous Secret, API Key & Endpoint Discovery',
    desc: 'High-speed recon scanner that crawls and analyzes JavaScript assets to locate exposed credentials, hardcoded API keys, and hidden backend endpoints using Shannon Entropy mathematics and 180+ compiled regex signatures.',
    tech: ['Python', 'AsyncIO', 'Shannon Entropy', 'Regex Engine', 'Headless Browser'],
    github: 'https://github.com/aashishtechsecurity/JS-Scanner',
    status: 'v2.1 Modernized',
    badgeColor: 'border-accent-purple/40 text-accent-purple bg-accent-purple/10'
  },
  {
    name: 'dirBrute',
    tagline: 'Multithreaded Web Directory & Path Brute-Forcer',
    desc: 'Fast directory fuzzing tool designed for penetration testers to discover hidden paths and sensitive administrative endpoints with intelligent user-agent rotation and clean terminal reporting.',
    tech: ['Python', 'Threading', 'User-Agent Rotation', 'Colorama'],
    github: 'https://github.com/aashishsec/dirBrute',
    status: 'v1.0 Release',
    badgeColor: 'border-accent-green/40 text-accent-green bg-accent-green/10'
  },
  {
    name: 'CTI Monitor Platform',
    tagline: 'Real-Time Cyber Threat Intelligence Dashboard',
    desc: 'Live intelligence monitoring platform tracking active ransomware attacks, dark web extortion leak sites, data breaches, and emerging adversary threat chatter for defensive teams.',
    tech: ['Threat Feeds', 'OSINT Automation', 'Dark Web Telemetry', 'Web Dashboard'],
    demo: 'https://www.aashishtechsecurity.in/cti-monitor/',
    status: 'Live Platform',
    badgeColor: 'border-blue-400/40 text-blue-400 bg-blue-400/10'
  }
];

const BuiltToolsSection = () => {
  return (
    <section className="py-24 relative border-b border-border-glow/30" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Brand Quote */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green font-mono text-xs">
            <Code className="w-3.5 h-3.5" />
            <span>Engineering & Automation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Security Tools <span className="text-accent-green">I Build</span>
          </h2>

          <blockquote className="text-base sm:text-lg font-mono text-text-muted italic border-l-2 border-accent-green/40 pl-4 py-1 inline-block text-left">
            "I don't just learn cybersecurity — I build tools for it."
          </blockquote>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Open-source utilities created to automate reconnaissance, scan attack surfaces, and extract actionable security intelligence.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {BUILT_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-glow/40 hover:border-accent-green/60 transition-all hover:box-glow-green flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${proj.badgeColor}`}>
                    {proj.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
                    <span>Tested</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-accent-green transition-colors mb-1">
                  {proj.name}
                </h3>
                <div className="font-mono text-xs text-accent-cyan mb-4 font-semibold">
                  {proj.tagline}
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-6 font-mono text-xs sm:text-sm">
                  {proj.desc}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-primary text-text-muted border border-border-glow/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-glow/20">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-bg-primary hover:bg-bg-primary/80 border border-border-glow text-accent-green text-xs font-mono font-bold rounded flex items-center gap-2 transition-all hover:border-accent-green"
                    >
                      <GitHub className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent-green text-bg-primary text-xs font-mono font-bold rounded flex items-center gap-2 hover:bg-[#00e53a] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Platform</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Sub-tools Banner */}
        <div className="p-6 rounded-xl bg-bg-card/50 border border-border-glow/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-xs text-text-muted block">Reconnaissance & Automation Repositories</span>
            <p className="text-sm text-text-primary font-medium">
              Also exploring: <span className="text-accent-cyan font-mono">pyWebCrawler</span>, <span className="text-accent-purple font-mono">SubBruter</span>, and custom security scripts.
            </p>
          </div>
          <a
            href="https://github.com/aashishtechsecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-bg-card border border-border-glow text-accent-cyan font-mono text-xs font-bold rounded hover:border-accent-cyan transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>View GitHub Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BuiltToolsSection;
