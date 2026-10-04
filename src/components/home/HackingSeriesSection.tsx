import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { Instagram } from '../Icons';

const PHASES = [
  {
    range: 'Days 01 - 20',
    title: 'Foundations & Tooling',
    topics: 'Linux internals, Bash scripting, networking protocols, Termux setup, and foundational security hygiene.',
    status: 'Completed'
  },
  {
    range: 'Days 21 - 40',
    title: 'Recon & OSINT Mastery',
    topics: 'Passive information gathering, Censys, FOFA, Shodan, automated subdomain enumeration, and attack surface mapping.',
    status: 'Completed'
  },
  {
    range: 'Days 41 - 65',
    title: 'Web & API Vulnerabilities',
    topics: 'Burp Suite workflows, OWASP Top 10 hands-on analysis, SQL injection, IDORs, and broken API authorization.',
    status: 'Active'
  },
  {
    range: 'Days 66 - 85',
    title: 'Mobile Pentesting & Reversing',
    topics: 'Android security model, APK reverse engineering, JADX, MobSF static/dynamic triage, and Frida runtime hooking.',
    status: 'In Progress'
  },
  {
    range: 'Days 86 - 100',
    title: 'AI Security & Threat Defense',
    topics: 'Prompt injection (direct & indirect), LLM red teaming, SIEM telemetry investigation, and defense engineering.',
    status: 'Upcoming'
  }
];

const HackingSeriesSection = () => {
  return (
    <section className="py-24 bg-bg-card/40 relative border-b border-border-glow/30" id="100-days">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
            <Flame className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Structured Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            100 Days of <span className="text-accent-cyan text-glow-cyan">Hacking</span>
          </h2>

          <p className="text-text-muted text-base leading-relaxed">
            A practical journey through cybersecurity tools, techniques, OSINT, reconnaissance, ethical hacking, and security research — delivered daily in Telugu.
          </p>
        </div>

        {/* Visual Progress Bar */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-glow/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-text-primary font-bold">Progress: Day 01 → Day 100</span>
            </div>
            <div className="text-accent-cyan">
              Continuous Educational Pipeline
            </div>
          </div>

          {/* Progress track */}
          <div className="w-full bg-bg-primary h-3 rounded-full overflow-hidden p-0.5 border border-border-glow/30 mb-4">
            <div className="bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple h-full rounded-full w-[65%]" />
          </div>

          <div className="flex justify-between font-mono text-[11px] text-text-muted">
            <span>Day 01: Linux & Tools</span>
            <span>Day 50: Web Pentesting</span>
            <span>Day 100: AI & Advanced Defense</span>
          </div>
        </div>

        {/* Phase Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PHASES.map((p, idx) => (
            <motion.div
              key={p.range}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="text-accent-cyan font-bold px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                    {p.range}
                  </span>
                  <span className="text-text-muted text-[11px]">
                    {p.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-text-primary mb-2">
                  {p.title}
                </h3>

                <p className="text-text-muted text-xs leading-relaxed font-mono">
                  {p.topics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/aashishtechsecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>Explore the Series on Instagram →</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HackingSeriesSection;
