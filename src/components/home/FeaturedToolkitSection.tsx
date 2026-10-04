import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Search, Globe, Network, ShieldCheck, Key, Smartphone, Cloud, Cpu, ArrowRight } from 'lucide-react';

const TOOLKIT_CATEGORIES = [
  {
    name: 'Reconnaissance',
    tools: ['Subfinder', 'Amass', 'Assetfinder', 'httpx'],
    icon: <Search className="w-5 h-5 text-accent-cyan" />
  },
  {
    name: 'OSINT',
    tools: ['Shodan', 'Censys', 'theHarvester', 'SpiderFoot'],
    icon: <Globe className="w-5 h-5 text-blue-400" />
  },
  {
    name: 'Web Security',
    tools: ['Burp Suite', 'OWASP ZAP', 'FFUF', 'SQLmap'],
    icon: <Terminal className="w-5 h-5 text-accent-green" />
  },
  {
    name: 'Network Security',
    tools: ['Nmap', 'Wireshark', 'Masscan', 'Netcat'],
    icon: <Network className="w-5 h-5 text-teal-400" />
  },
  {
    name: 'Vulnerability Assessment',
    tools: ['Nuclei', 'Nikto', 'OpenVAS', 'Trivy'],
    icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />
  },
  {
    name: 'Password Security',
    tools: ['Hashcat', 'John the Ripper', 'Hydra'],
    icon: <Key className="w-5 h-5 text-amber-400" />
  },
  {
    name: 'Mobile Security',
    tools: ['MobSF', 'JADX', 'APKTool', 'Frida'],
    icon: <Smartphone className="w-5 h-5 text-pink-400" />
  },
  {
    name: 'Cloud Security',
    tools: ['CloudSploit', 'Prowler', 'ScoutSuite'],
    icon: <Cloud className="w-5 h-5 text-sky-400" />
  },
  {
    name: 'Digital Forensics',
    tools: ['Autopsy', 'Volatility', 'FTK Imager'],
    icon: <Search className="w-5 h-5 text-indigo-400" />
  },
  {
    name: 'AI Security',
    tools: ['Garak', 'PyRIT', 'Promptfoo', 'DeepTeam'],
    icon: <Cpu className="w-5 h-5 text-accent-purple" />
  }
];

const FeaturedToolkitSection = () => {
  return (
    <section className="py-24 bg-bg-card/40 relative border-b border-border-glow/30" id="toolkit-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-xs">
            <span>Curated Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Cybersecurity <span className="text-accent-purple">Toolkit</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            Explore practical cybersecurity tools used for reconnaissance, OSINT, vulnerability assessment, penetration testing, application security, and security research.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {TOOLKIT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-xl bg-bg-card border border-border-glow/30 hover:border-accent-purple/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-bg-primary border border-border-glow/20 group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-accent-purple transition-colors">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cat.tools.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-primary text-text-muted border border-border-glow/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats & CTA */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 font-mono text-xs text-text-muted">
            <div><span className="text-accent-cyan font-bold">10+</span> Categories</div>
            <div><span className="text-accent-purple font-bold">500+</span> Filtered Tools</div>
            <div><span className="text-accent-green font-bold">100%</span> Community Curated</div>
            <div><span className="text-blue-400 font-bold">Live</span> Favicon Previews</div>
          </div>

          <div>
            <Link 
              to="/toolkit" 
              className="px-8 py-3.5 bg-accent-purple text-bg-primary font-bold rounded-lg hover:bg-[#b06cf7] transition-all hover:box-glow-purple inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
            >
              <span>Explore Full Toolkit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedToolkitSection;
