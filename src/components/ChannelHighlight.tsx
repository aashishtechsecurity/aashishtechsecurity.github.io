import { motion } from 'framer-motion';
import { Instagram } from './Icons';

const videos = [
  { title: 'Kali Linux on Android without Root (Termux)' },
  { title: 'Metasploit for Beginners (Telugu)' },
  { title: 'Android Pentesting with NetHunter (Telugu)' }
];

const ChannelHighlight = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">AashishTechSecurity on Instagram</h2>
          <p className="text-text-muted">Cybersecurity tutorials in Telugu — Follow for daily hacking content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.map((vid, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-bg-card border border-border-glow rounded-xl overflow-hidden group hover:box-glow-purple transition-all">
              <div className="aspect-[4/3] sm:aspect-[4/5] bg-bg-card relative flex items-center justify-center p-6 text-center border-b border-border-glow/30">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📹</span>
                  </div>
                  <h3 className="font-bold font-display text-lg mb-2">Tutorial</h3>
                  <p className="text-text-muted text-sm">{vid.title}</p>
                </div>
              </div>
              <div className="p-4 bg-bg-card flex justify-center">
                <a href="https://www.instagram.com/aashish_tech_security" target="_blank" rel="noopener noreferrer" className="text-accent-purple font-mono text-sm group-hover:text-[#c084fc] transition-colors flex items-center gap-2">
                  [Watch Now →]
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="font-mono text-sm text-text-muted">
            @aashish_tech_security · 4,500+ Followers · తెలుగు
          </div>
          <a href="https://www.instagram.com/aashish_tech_security" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 sm:py-3 bg-accent-cyan text-bg-primary font-bold rounded hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto max-w-md">
            <Instagram className="w-5 h-5" /> <span className="hidden sm:inline">Follow AashishTechSecurity on</span> <span className="sm:hidden">Follow on</span> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChannelHighlight;
