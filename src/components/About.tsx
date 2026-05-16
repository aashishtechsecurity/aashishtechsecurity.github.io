import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Medium, XTwitter } from './Icons';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-accent-cyan/20 blur-3xl rounded-full"></div>
              <div className="relative w-full h-full overflow-hidden [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border-2 border-accent-cyan bg-bg-card p-1">
                <div className="w-full h-full bg-bg-card flex items-center justify-center [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <Shield className="w-32 h-32 text-accent-cyan opacity-80" />
                </div>
              </div>
              
              {/* Floating Badges — hidden on mobile to prevent overflow */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="hidden md:flex absolute -top-4 -left-4 bg-bg-card border border-border-glow px-4 py-2 rounded-full text-sm font-mono items-center gap-2 box-glow-cyan"><span className="text-accent-cyan">🐍</span> Python</motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="hidden md:flex absolute top-1/4 -right-8 bg-bg-card border border-border-glow px-4 py-2 rounded-full text-sm font-mono items-center gap-2 box-glow-cyan"><span className="text-accent-purple">📱</span> Mobile Sec</motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="hidden md:flex absolute bottom-1/4 -left-8 bg-bg-card border border-border-glow px-4 py-2 rounded-full text-sm font-mono items-center gap-2 box-glow-cyan"><span className="text-accent-green">🐧</span> Linux</motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="hidden md:flex absolute -bottom-4 right-0 bg-bg-card border border-border-glow px-4 py-2 rounded-full text-sm font-mono items-center gap-2 box-glow-cyan"><span className="text-blue-400">☁️</span> AWS</motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="font-mono text-accent-green">{'> whoami'}</div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-text-muted">Name:</span> <span className="text-text-primary">Aashish Bande</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-text-muted">Brand:</span> <span className="text-text-primary">AashishTechSecurity</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-text-muted">Role:</span> <span className="text-text-primary">Security Analyst @ Pragma Edge Inc</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-text-muted">Location:</span> <span className="text-text-primary">Hyderabad, Telangana 🇮🇳</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <span className="text-text-muted">Focus:</span> <span className="text-text-primary">Mobile Pentesting | Web App Security | OSINT</span>
              </div>
            </div>

            <p className="text-text-muted leading-relaxed">
              "I'm a dynamic and forward-thinking cybersecurity professional with a B.Tech degree in Mechanical Engineering. Currently honing my skills as a Security Analyst at Pragma Edge Inc, focusing on vulnerability assessments, penetration testing, and incident response. My passion extends beyond security into AI, Blockchain, Cloud & Crypto."
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Kali Linux', 'Termux', 'NetHunter', 'Metasploit', 'Burp Suite', 'OSINT', 'AWS', 'Python', 'Web Pentesting', 'Network Pentesting'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-[rgba(0,245,255,0.1)] text-accent-cyan border border-border-glow">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-8 mt-6 pt-6 border-t border-border-glow/30">
              <div>
                <div className="text-2xl font-display font-bold text-accent-cyan mb-1">5+</div>
                <div className="text-text-primary text-sm font-medium">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-accent-cyan mb-1">100%</div>
                <div className="text-text-primary text-sm font-medium">Telugu Content</div>
              </div>
            </div>

            <div className="flex gap-3 pt-6">
              <a href="https://www.instagram.com/aashishtechsecurity" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow rounded hover:bg-bg-card-hover hover:box-glow-cyan transition-all text-text-primary hover:text-accent-cyan active:scale-95"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/aashishsec" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow rounded hover:bg-bg-card-hover hover:box-glow-cyan transition-all text-text-primary hover:text-accent-cyan active:scale-95"><Linkedin className="w-5 h-5" /></a>
              <a href="https://aashishtechsecurity.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow rounded hover:bg-bg-card-hover hover:box-glow-cyan transition-all text-text-primary hover:text-accent-cyan active:scale-95"><Medium className="w-5 h-5" /></a>
              <a href="https://x.com/AashishTechSec" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-bg-card border border-border-glow rounded hover:bg-bg-card-hover hover:box-glow-cyan transition-all text-text-primary hover:text-accent-cyan active:scale-95"><XTwitter className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
