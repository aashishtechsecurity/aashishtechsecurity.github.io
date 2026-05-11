import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const certs = [
  { title: 'CAP', desc: 'Certified AppSec Practitioner' },
  { title: 'ISO 27001', desc: "Cyber Security Master's Cert" },
  { title: 'CNSP', desc: 'Certified Network Sec Practitioner' },
  { title: 'Jr Penetration', desc: 'Tester (TryHackMe)' },
  { title: 'API Pentest', desc: 'API Penetration Testing' },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-bg-primary border-y border-border-glow/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Certifications & Recognition</h2>
          <p className="text-text-muted">Industry-recognized credentials behind AashishTechSecurity</p>
        </div>
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-5 gap-6 snap-x snap-mandatory hide-scrollbar">
          {certs.map((cert, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="min-w-[250px] md:min-w-0 bg-bg-card border border-border-glow/30 p-6 rounded-lg snap-center hover:border-accent-cyan hover:box-glow-cyan transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-accent-cyan/10 p-1 rounded-full"><Check className="w-5 h-5 text-accent-cyan" /></div>
                <h3 className="font-bold font-display">{cert.title}</h3>
              </div>
              <p className="text-text-muted text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Mobile swipe hint */}
        <p className="md:hidden text-center text-xs text-text-muted mt-4 font-mono animate-pulse">
          ← Swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default Certifications;
