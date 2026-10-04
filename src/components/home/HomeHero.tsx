import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const HomeHero = () => {
  const [activeTab, setActiveTab] = useState<'status' | 'scan'>('status');

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/20" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle Accent Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-cyan/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Brand Messaging */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-glow/40 text-xs font-mono shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan font-bold tracking-wide">AashishTechSecurity</span>
              <span className="text-border-glow/60">|</span>
              <span className="text-text-muted">Cybersecurity · తెలుగులో</span>
            </motion.div>

            {/* Primary Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight leading-[1.15]"
            >
              Cybersecurity <br />
              <span className="text-accent-cyan text-glow-cyan">తెలుగులో</span>
            </motion.h1>

            {/* Supporting Heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-mono text-accent-green font-semibold"
            >
              Learn. Explore. Practice. Secure.
            </motion.p>

            {/* Platform Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Practical cybersecurity knowledge, ethical hacking resources, security tools, research, and services — 
              built for students, professionals, and security enthusiasts.
            </motion.p>

            {/* Interactive Flow Roadmap Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-muted pt-1 justify-center lg:justify-start"
            >
              <span className="px-2 py-0.5 rounded bg-bg-card border border-border-glow/30 text-accent-cyan">Learn</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-bg-card border border-border-glow/30 text-blue-400">Explore</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-bg-card border border-border-glow/30 text-accent-green">Practice</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-bg-card border border-border-glow/30 text-accent-purple">Build</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan font-bold">Secure</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-3 justify-center lg:justify-start"
            >
              <Link 
                to="/resources" 
                className="px-6 py-3.5 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center justify-center gap-2 text-sm shadow-md active:scale-95"
              >
                <Shield className="w-4 h-4" />
                <span>Explore Cybersecurity</span>
              </Link>
              <Link 
                to="/toolkit" 
                className="px-6 py-3.5 bg-bg-card border border-border-glow text-accent-cyan font-bold rounded-lg hover:border-accent-cyan hover:bg-bg-card-hover transition-all inline-flex items-center justify-center gap-2 text-sm active:scale-95"
              >
                <Terminal className="w-4 h-4" />
                <span>Explore Toolkit</span>
              </Link>
              <Link 
                to="/about#contact" 
                className="px-5 py-3.5 bg-transparent text-text-muted hover:text-text-primary border border-border-glow/20 hover:border-border-glow/60 rounded-lg transition-all inline-flex items-center justify-center gap-1.5 text-sm"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Cybersecurity HUD & Terminal Artifact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-bg-card border border-border-glow/50 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Terminal Window Header */}
              <div className="bg-bg-primary px-4 py-3 border-b border-border-glow/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-text-muted ml-2">ats-defense-node: ~</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTab('status')}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${activeTab === 'status' ? 'bg-accent-cyan/20 text-accent-cyan font-bold' : 'text-text-muted hover:text-text-primary'}`}
                  >
                    STATUS
                  </button>
                  <button 
                    onClick={() => setActiveTab('scan')}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${activeTab === 'scan' ? 'bg-accent-cyan/20 text-accent-cyan font-bold' : 'text-text-muted hover:text-text-primary'}`}
                  >
                    SCANNER
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 min-h-[260px] bg-bg-card/90">
                {activeTab === 'status' ? (
                  <>
                    <div className="text-accent-green">
                      $ ats-defense --telemetry --live
                    </div>
                    <div className="text-text-muted">
                      [+] Initializing AashishTechSecurity Platform Core...
                    </div>
                    <div className="text-text-primary">
                      [✓] Education Hub: <span className="text-accent-cyan font-bold">17+ Domains Active</span>
                    </div>
                    <div className="text-text-primary">
                      [✓] Security Tooling: <span className="text-accent-cyan font-bold">500+ Curated Tools</span>
                    </div>
                    <div className="text-text-primary">
                      [✓] Platform Series: <span className="text-accent-purple font-bold">100 Days of Hacking</span>
                    </div>
                    <div className="text-text-primary">
                      [✓] Threat Intelligence: <span className="text-accent-green font-bold">CTI Feeds Live</span>
                    </div>
                    <div className="pt-2 border-t border-border-glow/20 flex items-center justify-between text-text-muted text-[11px]">
                      <span>Target: Defensive Readiness</span>
                      <span className="text-accent-green flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> SECURE
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-accent-cyan">
                      $ httpAlive -l targets.txt --waf --async
                    </div>
                    <div className="text-text-muted">
                      [INF] Worker pool initialized (25 concurrent threads)
                    </div>
                    <div className="text-accent-green">
                      [200 OK] api.internal → Tech: React, Node.js [WAF: Cloudflare]
                    </div>
                    <div className="text-accent-purple">
                      [301 RED] auth.portal → Location: /v2/login [TLS 1.3]
                    </div>
                    <div className="text-accent-cyan">
                      [200 OK] cti.feed → Status: Threat telemetry active
                    </div>
                    <div className="pt-2 border-t border-border-glow/20 text-text-muted text-[11px] flex justify-between">
                      <span>Probed: 1,420 endpoints</span>
                      <span className="text-accent-cyan">0 errors</span>
                    </div>
                  </>
                )}
              </div>

              {/* HUD Status Footer */}
              <div className="bg-bg-primary/80 px-4 py-2.5 border-t border-border-glow/20 flex items-center justify-between text-[11px] font-mono">
                <span className="text-text-muted">SEC_ENGINE: v2.4</span>
                <span className="text-accent-cyan font-bold">TELUGU CYBER PLATFORM</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
