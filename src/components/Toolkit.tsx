import { Smartphone, Search, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tools = [
  { icon: <Smartphone className="w-6 h-6 text-accent-purple" />, title: 'Mobile Pentesting', items: 'Termux · NetHunter\nMobSF · APKTool' },
  { icon: <Search className="w-6 h-6 text-accent-cyan" />, title: 'Recon & OSINT', items: 'Maltego · Shodan ·\ntheHarvester' },
  { icon: <Zap className="w-6 h-6 text-accent-green" />, title: 'Exploitation', items: 'Metasploit · msfvenom\n· msfconsole' },
  { icon: <Globe className="w-6 h-6 text-blue-400" />, title: 'Web App Testing', items: 'Burp Suite · SQLMap\n· Nikto · OWASP ZAP' },
];

const Toolkit = () => {
  return (
    <section id="toolkit" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ethical Hacking Toolkit</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Curated tools featured in AashishTechSecurity tutorials. Everything you need to start your hacking journey — free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {tools.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-card border border-border-glow p-6 rounded-lg hover:bg-bg-card-hover transition-colors group flex items-start gap-4"
            >
              <div className="p-3 bg-bg-primary rounded-lg border border-border-glow/30 group-hover:border-accent-cyan transition-colors">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-text-primary mb-2">{cat.title}</h3>
                <p className="text-text-muted font-mono text-sm whitespace-pre-line leading-relaxed">{cat.items}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-center font-mono text-sm text-accent-cyan">
          <div>[ 10+ Categories ]</div>
          <div>[ 500+ Tools ]</div>
          <div>[ 100% Free ]</div>
          <div>[ 24/7 Access ]</div>
        </div>

        <div className="text-center">
          <Link to="/toolkit" className="px-8 py-3 bg-transparent border border-accent-cyan text-accent-cyan font-bold rounded hover:bg-[rgba(0,245,255,0.1)] transition-all box-glow-cyan inline-flex items-center gap-2">
            ⚡ Explore Full Toolkit →
          </Link>
          <p className="text-[#4a5568] text-xs mt-6 font-mono max-w-lg mx-auto">
            "For educational and authorized testing purposes only. AashishTechSecurity does not endorse unauthorized use."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
