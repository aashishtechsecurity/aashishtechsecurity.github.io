import { motion } from 'framer-motion';
import { Globe, Key, Smartphone, Search, Shield, BookOpen, Mail } from 'lucide-react';
import { Linkedin } from '../Icons';

const SERVICES = [
  {
    title: 'Web Application Security',
    icon: <Globe className="w-6 h-6 text-accent-cyan" />,
    desc: 'Security testing and vulnerability assessments for web applications to detect OWASP Top 10 flaws, injection risks, and misconfigurations before deployment.',
    deliverables: ['Vulnerability Scan & Triage', 'OWASP Top 10 Verification', 'Actionable Remediation Guidance']
  },
  {
    title: 'API Security Assessment',
    icon: <Key className="w-6 h-6 text-accent-purple" />,
    desc: 'Assessment of authentication, authorization models (BOLA/BFLA), token handling, and business logic flaws across RESTful endpoints.',
    deliverables: ['Endpoint Access Control Checks', 'Rate Limiting & Token Analysis', 'API Security Checklist']
  },
  {
    title: 'Mobile Application Security',
    icon: <Smartphone className="w-6 h-6 text-pink-400" />,
    desc: 'Static and dynamic analysis of Android APK packages, identifying exported components, hardcoded secrets, and unsafe storage practices.',
    deliverables: ['MobSF Static / Dynamic Triage', 'APK Decompilation Audit', 'Android Defense Playbook']
  },
  {
    title: 'Attack Surface & Vulnerability Assessment',
    icon: <Search className="w-6 h-6 text-accent-green" />,
    desc: 'External perimeter enumeration and vulnerability mapping to identify exposed assets, stale DNS records, and unpatched service endpoints.',
    deliverables: ['External Asset Enumeration', 'Vulnerability Prioritization', 'Executive Summary']
  },
  {
    title: 'Practical Security Consulting',
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    desc: 'Pragmatic, developer-friendly security guidance for technical teams, early-stage applications, and independent projects.',
    deliverables: ['Architecture Risk Assessment', 'Security Best Practices Review', 'Direct Technical Q&A']
  },
  {
    title: 'Security Awareness & Workshops',
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    desc: 'Customized educational sessions, ethical hacking workshops, and threat awareness content delivered clearly in Telugu and English.',
    deliverables: ['Interactive Live Demos', 'Custom Slide Decks & Cheatsheets', 'Telugu Technical Sessions']
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-bg-card/30 relative border-b border-border-glow/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Cybersecurity <span className="text-accent-cyan text-glow-cyan">Services</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            Hands-on technical security evaluations, application assessments, and educational workshops tailored to your organizational needs.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="p-3 rounded-xl bg-bg-primary border border-border-glow/30 w-fit mb-5 group-hover:scale-105 transition-transform">
                  {svc.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-2.5">
                  {svc.title}
                </h3>

                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-mono">
                  {svc.desc}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-border-glow/20 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-bold">
                    Key Deliverables:
                  </span>
                  {svc.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-glow/40 max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
            Have a Security Assessment or Educational Requirement?
          </h3>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out directly to discuss scope, timeline, and security goals. Let's make your software and architecture measurably more resilient.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/aashishsec"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>Discuss a Security Project →</span>
            </a>
            <a
              href="mailto:privacy@aashishtechsecurity.in"
              className="px-6 py-3.5 bg-bg-primary border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email: privacy@aashishtechsecurity.in</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
