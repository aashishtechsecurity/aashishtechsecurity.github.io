import { motion } from 'framer-motion';

const services = [
  { icon: '📄', title: 'Resume Review', desc: 'Expert feedback on your cybersecurity resume tailored for Indian job market.' },
  { icon: '🎓', title: '1:1 Mentorship', desc: 'Personalized Telugu career coaching & offensive security roadmap planning.' },
  { icon: '🎤', title: 'Mock Interviews', desc: 'Practice technical interviews with real-world cybersecurity Q&A.' },
];

const UpcomingServices = () => {
  return (
    <section id="roadmap" className="py-24 bg-bg-primary relative z-10 border-t border-border-glow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-accent-purple text-sm mb-2 uppercase tracking-widest">Portfolio</div>
          <div className="w-24 h-px bg-border-glow mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Upcoming Services</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Elevate your cybersecurity career with personalized guidance from AashishTechSecurity. Currently planned — not yet available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-card border border-border-glow/30 p-8 rounded-lg relative group hover:border-accent-purple transition-colors hover:box-glow-purple flex flex-col h-full"
            >
              <div className="absolute -top-3 left-8 bg-bg-card px-3 py-1 border border-accent-cyan rounded-full text-xs font-mono text-accent-cyan">
                Coming Soon
              </div>
              <div className="text-4xl mb-4 mt-2">{svc.icon}</div>
              <h3 className="text-xl font-bold font-display mb-3">{svc.title}</h3>
              <p className="text-text-muted text-sm mb-8 flex-grow">{svc.desc}</p>
              <button disabled className="w-full py-2 bg-bg-card-hover text-[#4a5568] rounded font-mono text-sm cursor-not-allowed border border-[#2d3748]">
                [Waitlist Soon]
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingServices;
