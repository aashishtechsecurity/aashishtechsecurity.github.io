import { motion } from 'framer-motion';
import { Instagram } from './Icons';

const videos = [
  { 
    title: 'Kali Linux on Android without Root (Termux)', 
    url: 'https://www.instagram.com/aashishtechsecurity/reel/DXRd_iQhmV1/',
    embedUrl: 'https://www.instagram.com/p/DXRd_iQhmV1/embed'
  },
  { 
    title: 'Best YouTube Channels for Cybersecurity', 
    url: 'https://www.instagram.com/aashishtechsecurity/reel/Dapt4azvi1l/',
    embedUrl: 'https://www.instagram.com/p/Dapt4azvi1l/embed'
  },
  { 
    title: 'Free Infosec Lab / SOC Training', 
    url: 'https://www.instagram.com/aashishtechsecurity/reel/DZUwVFChpSy/',
    embedUrl: 'https://www.instagram.com/p/DZUwVFChpSy/embed'
  }
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
              <div className="w-full bg-bg-card relative border-b border-border-glow/30 overflow-hidden">
                <iframe
                  src={vid.embedUrl}
                  className="w-full h-[450px] sm:h-[500px]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="p-4 bg-bg-card flex justify-center">
                <a href={vid.url} target="_blank" rel="noopener noreferrer" className="text-accent-purple font-mono text-sm group-hover:text-[#c084fc] transition-colors flex items-center gap-2">
                  [Watch Now →]
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="font-mono text-sm text-text-muted">
            @aashishtechsecurity · 13k+ Followers · తెలుగు
          </div>
          <a href="https://www.instagram.com/aashishtechsecurity" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 sm:py-3 bg-accent-cyan text-bg-primary font-bold rounded hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto max-w-md">
            <Instagram className="w-5 h-5" /> <span className="hidden sm:inline">Follow AashishTechSecurity on</span> <span className="sm:hidden">Follow on</span> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChannelHighlight;
