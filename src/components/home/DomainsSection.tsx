import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Terminal, Globe, Code, Key, Smartphone, Cloud, 
  Search, ShieldAlert, FileSearch, Radar, Network, Cpu, Bot, ArrowRight 
} from 'lucide-react';

const DOMAINS = [
  {
    name: 'Cybersecurity Fundamentals',
    desc: 'Core architecture, operating systems, compute primitives, and fundamental security axioms.',
    icon: <BookOpen className="w-5 h-5 text-accent-cyan" />,
    hash: '/resources#Fundamentals'
  },
  {
    name: 'Ethical Hacking',
    desc: 'Offensive methodologies, target enumeration, vulnerability exploitation, and reporting.',
    icon: <Terminal className="w-5 h-5 text-accent-green" />,
    hash: '/resources#PenTesting'
  },
  {
    name: 'Web Security',
    desc: 'SQL injection, Cross-Site Scripting (XSS), CSRF, authentication flaws, and SSRF.',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    hash: '/resources#PenTesting'
  },
  {
    name: 'Application Security (AppSec)',
    desc: 'SAST/DAST testing, secure software development lifecycles, and code vulnerability mitigation.',
    icon: <Code className="w-5 h-5 text-accent-purple" />,
    hash: '/resources#SecurityResources'
  },
  {
    name: 'API Security',
    desc: 'OWASP API Security Top 10, BOLA vulnerabilities, token inspection, and REST assessments.',
    icon: <Key className="w-5 h-5 text-yellow-400" />,
    hash: '/resources#APIPenTesting'
  },
  {
    name: 'Mobile Security',
    desc: 'Android APK reverse engineering, MobSF analysis, runtime hooking with Frida, and iOS audits.',
    icon: <Smartphone className="w-5 h-5 text-pink-400" />,
    hash: '/resources#MobileAndroid'
  },
  {
    name: 'Cloud Security',
    desc: 'IAM policy misconfigurations, S3 bucket exposures, container hardening, and cloud attack chains.',
    icon: <Cloud className="w-5 h-5 text-sky-400" />,
    hash: '/resources#CloudSecurity'
  },
  {
    name: 'OSINT (Open Source Intel)',
    desc: 'Passive asset reconnaissance, domain graph mapping, breach tracking, and search intelligence.',
    icon: <Search className="w-5 h-5 text-emerald-400" />,
    hash: '/resources#ThreatIntel'
  },
  {
    name: 'Bug Bounty',
    desc: 'Responsible vulnerability hunting programs, high-impact triage, and professional disclosure.',
    icon: <ShieldAlert className="w-5 h-5 text-orange-400" />,
    hash: '/roadmap#BugBounty'
  },
  {
    name: 'Digital Forensics',
    desc: 'Evidence preservation, memory artifact recovery, file analysis, and incident root cause triage.',
    icon: <FileSearch className="w-5 h-5 text-indigo-400" />,
    hash: '/resources#PracticePlatforms'
  },
  {
    name: 'SOC & Blue Team',
    desc: 'SIEM log telemetry, detection engineering, threat hunting hypotheses, and IR playbooks.',
    icon: <Radar className="w-5 h-5 text-red-400" />,
    hash: '/resources#SOCResources'
  },
  {
    name: 'Network Security',
    desc: 'Packet analysis, firewall configuration, network segmentation, and protocol security testing.',
    icon: <Network className="w-5 h-5 text-teal-400" />,
    hash: '/resources#NetworkPenTesting'
  },
  {
    name: 'AI Security',
    desc: 'Prompt injection (direct & indirect), model jailbreaks, training data poisoning, and LLM safety.',
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    hash: '/resources#AISecurity'
  },
  {
    name: 'Agentic AI Security',
    desc: 'MCP server vulnerabilities, excessive agent agency, tool poisoning, and multi-agent risks.',
    icon: <Bot className="w-5 h-5 text-accent-cyan" />,
    hash: '/resources#AISecurity'
  }
];

const DomainsSection = () => {
  return (
    <section className="py-24 relative border-b border-border-glow/30" id="domains">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
            <span>Specialized Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Explore <span className="text-accent-cyan text-glow-cyan">Cybersecurity Domains</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            Dive into specialized cybersecurity fields with curated resources, verified tools, and step-by-step guidance.
          </p>
        </div>

        {/* 14 Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 4) * 0.05 }}
            >
              <Link
                to={domain.hash}
                className="h-full p-5 rounded-xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/50 hover:bg-bg-card-hover transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-lg bg-bg-primary border border-border-glow/30 group-hover:scale-110 transition-transform">
                      {domain.icon}
                    </div>
                    <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded bg-bg-primary border border-border-glow/20">
                      Track
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors text-base mb-2">
                    {domain.name}
                  </h3>

                  <p className="text-text-muted text-xs leading-relaxed mb-4">
                    {domain.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-accent-cyan font-mono text-xs font-semibold pt-3 border-t border-border-glow/20 group-hover:translate-x-1 transition-transform">
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DomainsSection;
