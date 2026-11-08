import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { Instagram, YouTube } from '../Icons';

const FEATURED_REELS = [
  {
    day: 'Day 12',
    topic: 'Kali Linux on Android (Termux)',
    desc: 'How to install and run Kali Linux natively on Android devices without root access using Termux and PRoot-distro.',
    url: 'https://www.instagram.com/aashishtechsecurity/reel/DXRd_iQhmV1/',
    category: 'Mobile Pentesting',
    tagColor: 'text-accent-purple bg-accent-purple/10 border-accent-purple/30'
  },
  {
    day: 'Day 28',
    topic: 'OSINT & Asset Reconnaissance',
    desc: 'Deep search on target subdomains, leaked SSL certificates, and internet-wide exposures using Censys, FOFA, and Shodan.',
    url: 'https://www.instagram.com/aashishtechsecurity/',
    category: 'OSINT & Recon',
    tagColor: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30'
  },
  {
    day: 'Day 45',
    topic: 'Threat Intelligence with VirusTotal',
    desc: 'Analyzing suspicious hashes, identifying malware sandbox evasion techniques, and extracting behavioral process graphs.',
    url: 'https://www.instagram.com/aashishtechsecurity/reel/DZUwVFChpSy/',
    category: 'Threat Intel & SOC',
    tagColor: 'text-accent-green bg-accent-green/10 border-accent-green/30'
  },
  {
    day: 'Day 61',
    topic: 'Historical Recon with Wayback & URLScan',
    desc: 'Uncovering forgotten endpoints, legacy parameters, and exposed backup archives using Wayback Machine archives and URLScan.',
    url: 'https://www.instagram.com/aashishtechsecurity/reel/Dapt4azvi1l/',
    category: 'Bug Bounty Recon',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30'
  }
];

const InstagramContentSection = () => {
  return (
    <section className="py-24 relative border-b border-border-glow/30" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 font-mono text-xs">
            <Instagram className="w-3.5 h-3.5" />
            <span>Regional Media</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Cybersecurity on <span className="text-pink-400">Instagram</span>
          </h2>

          <p className="text-base sm:text-lg font-mono text-accent-cyan font-semibold">
            Practical cybersecurity. Short and simple.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Short-form technical walkthroughs, zero-day threat explainers, and ethical hacking demonstrations in Telugu.
          </p>
        </div>

        {/* Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FEATURED_REELS.map((reel, idx) => (
            <motion.div
              key={reel.topic}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-pink-500/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-text-primary font-bold px-2 py-0.5 rounded bg-bg-primary border border-border-glow/20">
                    {reel.day}
                  </span>
                  <span className={`font-mono text-[11px] px-2 py-0.5 rounded border ${reel.tagColor}`}>
                    {reel.category}
                  </span>
                </div>

                <div className="h-28 rounded-lg bg-bg-primary/80 border border-border-glow/20 mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-pink-500/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-transparent to-accent-cyan/5" />
                  <div className="w-10 h-10 rounded-full bg-bg-card border border-border-glow flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-text-primary group-hover:text-pink-400 transition-colors mb-2">
                  {reel.topic}
                </h3>

                <p className="text-text-muted text-xs leading-relaxed font-mono mb-4">
                  {reel.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-border-glow/20">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 font-mono text-xs font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center space-y-4">
          <div className="font-mono text-xs text-text-muted">
            @AashishTechSecurity · Regular reels, YouTube tutorials & threat alerts in Telugu
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@AashishTechSecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all inline-flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] active:scale-95"
            >
              <YouTube className="w-4 h-4" />
              <span>Subscribe on YouTube →</span>
            </a>
            <a
              href="https://www.instagram.com/aashishtechsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-95 transition-all inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @AashishTechSecurity →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstagramContentSection;
