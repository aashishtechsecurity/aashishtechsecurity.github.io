import { useState, useEffect, useMemo } from 'react';
import { PlaySquare, Laptop, ShieldCheck, ExternalLink, Search, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

type Resource = { name: string; desc: string; url: string; tags: string[] };

const YOUTUBE_CHANNELS: Resource[] = [
  { name: 'LiveOverflow', desc: 'Binary exploitation, reverse engineering, CTF', url: 'https://youtube.com/@LiveOverflow', tags: ['Binary Exp', 'Reverse Eng', 'CTF'] },
  { name: 'John Hammond', desc: 'Malware analysis, CTFs, security research', url: 'https://youtube.com/@_JohnHammond', tags: ['Malware', 'CTF', 'Research'] },
  { name: 'IppSec', desc: 'Penetration testing, Hack The Box walkthroughs', url: 'https://youtube.com/@ippsec', tags: ['Pentesting', 'HTB'] },
  { name: 'The Cyber Mentor', desc: 'Penetration testing, red teaming', url: 'https://youtube.com/@TCMSecurityAcademy', tags: ['Pentesting', 'Red Team'] },
  { name: 'Nahamsec', desc: 'Bug bounty, web application security', url: 'https://youtube.com/@NahamSec', tags: ['Bug Bounty', 'Web Sec'] },
  { name: 'Hackersploit', desc: 'Ethical hacking tools, Kali Linux', url: 'https://youtube.com/@HackerSploit', tags: ['Tools', 'Linux'] },
  { name: 'NetworkChuck', desc: 'Networking, cybersecurity fundamentals', url: 'https://youtube.com/@NetworkChuck', tags: ['Networking', 'Fundamentals'] },
  { name: 'David Bombal', desc: 'Networking, cybersecurity, ethical hacking', url: 'https://youtube.com/@davidbombal', tags: ['Networking', 'Hacking'] },
  { name: 'Hak5', desc: 'Security gadgets, penetration testing', url: 'https://youtube.com/@hak5', tags: ['Hardware', 'Pentesting'] },
  { name: 'Computerphile', desc: 'Computer science, cryptography, security concepts', url: 'https://youtube.com/@Computerphile', tags: ['CS', 'Cryptography'] },
  { name: 'PwnFunction', desc: 'Web exploitation', url: 'https://youtube.com/@PwnFunction', tags: ['Web Sec'] },
  { name: 'Professor Messer', desc: 'IT certifications, cybersecurity fundamentals', url: 'https://youtube.com/@professormesser', tags: ['Certs', 'Fundamentals'] },
  { name: 'Loi Liang Yang', desc: 'Bug bounty, web security', url: 'https://youtube.com/@LoiLiangYang', tags: ['Bug Bounty', 'Web Sec'] },
  { name: 'InsiderPhD', desc: 'Bug bounty, hacker career development', url: 'https://youtube.com/@InsiderPhD', tags: ['Bug Bounty', 'Career'] },
  { name: 'StackSmashing', desc: 'Hardware hacking, embedded security', url: 'https://youtube.com/@stacksmashing', tags: ['Hardware', 'Embedded'] },
  { name: 'Stök', desc: 'Bug bounty community', url: 'https://youtube.com/@STOKfredrik', tags: ['Bug Bounty', 'Community'] },
  { name: 'Infinite Logins', desc: 'Security tools, ethical hacking tutorials', url: 'https://youtube.com/@InfiniteLogins', tags: ['Tools', 'Tutorials'] },
  { name: 'Seytonic', desc: 'Cybersecurity news, hacking topics', url: 'https://youtube.com/@Seytonic', tags: ['News', 'Topics'] },
  { name: '13Cubed', desc: 'Digital forensics, DFIR', url: 'https://youtube.com/@13Cubed', tags: ['Forensics', 'DFIR'] },
  { name: 'DEF CON Conference', desc: 'Security research conferences', url: 'https://youtube.com/@DEFCONConference', tags: ['Conference', 'Research'] },
];

const PRACTICE_PLATFORMS: Resource[] = [
  { name: 'TryHackMe', desc: 'Guided cybersecurity labs, beginner penetration testing', url: 'https://tryhackme.com', tags: ['Guided Labs', 'Beginner'] },
  { name: 'picoCTF', desc: 'CTF challenges for beginners', url: 'https://picoctf.org', tags: ['CTF', 'Beginner'] },
  { name: 'OverTheWire', desc: 'Linux command line, security fundamentals', url: 'https://overthewire.org', tags: ['Linux', 'Fundamentals'] },
  { name: 'Hack The Box Academy', desc: 'Structured cybersecurity training modules', url: 'https://academy.hackthebox.com', tags: ['Training', 'Modules'] },
  { name: 'Hack The Box', desc: 'Realistic penetration testing labs', url: 'https://hackthebox.com', tags: ['Labs', 'Pentesting'] },
  { name: 'OffSec Proving Grounds', desc: 'Realistic pentesting environments', url: 'https://offsec.com/labs', tags: ['Labs', 'Pentesting'] },
  { name: 'VulnHub', desc: 'Downloadable vulnerable virtual machines', url: 'https://vulnhub.com', tags: ['VMs', 'Pentesting'] },
  { name: 'Root-Me', desc: 'CTF challenges across multiple domains', url: 'https://root-me.org', tags: ['CTF', 'Multi-domain'] },
  { name: 'LetsDefend', desc: 'SOC analyst simulation', url: 'https://letsdefend.io', tags: ['Blue Team', 'SOC'] },
  { name: 'Blue Team Labs Online', desc: 'Digital forensics and incident response', url: 'https://blueteamlabs.online', tags: ['Blue Team', 'DFIR'] },
  { name: 'CyberDefenders', desc: 'Blue team CTF investigations', url: 'https://cyberdefenders.org', tags: ['Blue Team', 'CTF'] },
  { name: 'PortSwigger Web Security Academy', desc: 'Modern web vulnerabilities', url: 'https://portswigger.net/web-security', tags: ['Web Sec', 'Training'] },
  { name: 'PentesterLab', desc: 'Practical web exploitation', url: 'https://pentesterlab.com', tags: ['Web Sec', 'Practical'] },
  { name: 'Defend the Web', desc: 'Interactive hacking levels', url: 'https://defendtheweb.net', tags: ['Web Sec', 'Interactive'] },
  { name: 'OWASP Juice Shop', desc: 'Practice vulnerable web application', url: 'https://owasp.org/www-project-juice-shop', tags: ['Web Sec', 'AppSec'] },
  { name: 'Immersive Labs', desc: 'Gamified cybersecurity training', url: 'https://immersivelabs.com', tags: ['Gamified', 'Training'] },
  { name: 'UnderTheWire', desc: 'Windows PowerShell security', url: 'https://underthewire.tech', tags: ['Windows', 'PowerShell'] },
  { name: 'Malware-Traffic-Analysis.net', desc: 'Network traffic and malware analysis', url: 'https://malware-traffic-analysis.net', tags: ['Blue Team', 'Malware'] },
];

const SECURITY_RESOURCES: Resource[] = [
  { name: 'OWASP', desc: 'Web application security vulnerabilities', url: 'https://owasp.org', tags: ['Web Sec', 'Vulns'] },
  { name: 'OWASP Cheat Sheet Series', desc: 'Secure coding and vulnerability prevention', url: 'https://cheatsheetseries.owasp.org', tags: ['Cheatsheet', 'AppSec'] },
  { name: 'HackTricks', desc: 'Offensive security techniques', url: 'https://book.hacktricks.xyz', tags: ['Wiki', 'Offensive'] },
  { name: 'PayloadsAllTheThings', desc: 'Web exploitation payloads', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', tags: ['Payloads', 'Web Sec'] },
  { name: 'Awesome Hacking', desc: 'Learning resources and tools', url: 'https://github.com/Hack-with-Github/Awesome-Hacking', tags: ['List', 'Tools'] },
  { name: 'MITRE ATT&CK', desc: 'Adversary tactics and techniques', url: 'https://attack.mitre.org', tags: ['Framework', 'Intel'] },
  { name: 'Exploit Database', desc: 'Public exploit code', url: 'https://exploit-db.com', tags: ['Exploits', 'DB'] },
  { name: 'CVE Details', desc: 'Security vulnerabilities database', url: 'https://cvedetails.com', tags: ['CVE', 'Vulns'] },
  { name: 'GTFOBins', desc: 'Linux privilege escalation', url: 'https://gtfobins.github.io', tags: ['Linux', 'PrivEsc'] },
  { name: 'LOLBAS', desc: 'Living-off-the-land binaries, Windows attack techniques', url: 'https://lolbas-project.github.io', tags: ['Windows', 'PrivEsc'] },
  { name: 'SecLists', desc: 'Enumeration and fuzzing wordlists', url: 'https://github.com/danielmiessler/SecLists', tags: ['Wordlists', 'Fuzzing'] },
  { name: 'Google Project Zero', desc: 'Zero-day vulnerability research', url: 'https://googleprojectzero.blogspot.com', tags: ['Research', 'Zero-day'] },
  { name: 'Bugcrowd VRT', desc: 'Vulnerability classification taxonomy', url: 'https://bugcrowd.com/vulnerability-rating-taxonomy', tags: ['Taxonomy', 'Bug Bounty'] },
  { name: 'National Vulnerability Database', desc: 'CVE scoring and analysis', url: 'https://nvd.nist.gov', tags: ['CVE', 'DB'] },
  { name: 'SANS Internet Storm Center', desc: 'Global attack monitoring, threat intelligence', url: 'https://isc.sans.edu', tags: ['Intel', 'Monitoring'] },
  { name: 'Red Team Notes', desc: 'Red team techniques, AD attacks', url: 'https://ired.team', tags: ['Red Team', 'AD'] },
  { name: 'PortSwigger Web Security Academy', desc: 'Modern web vulnerabilities reference', url: 'https://portswigger.net/web-security', tags: ['Reference', 'Web Sec'] },
  { name: 'OpenSecurityTraining2', desc: 'Low-level security training, exploit dev', url: 'https://opensecuritytraining.info', tags: ['Training', 'Exploit Dev'] },
  { name: 'pwn.college', desc: 'Exploit development training, binary exploitation', url: 'https://pwn.college', tags: ['Training', 'Binary Exp'] },
  { name: 'CTF Wiki', desc: 'CTF techniques and knowledge base', url: 'https://ctf-wiki.org', tags: ['Wiki', 'CTF'] },
  { name: 'CyberChef', desc: 'Data encoding, decoding, and analysis', url: 'https://gchq.github.io/CyberChef', tags: ['Tool', 'Encoding'] },
  { name: 'crt.sh', desc: 'Certificate transparency log search, OSINT recon', url: 'https://crt.sh', tags: ['OSINT', 'Recon'] },
  { name: 'RevShells', desc: 'Reverse shell payload generator', url: 'https://revshells.com', tags: ['Tool', 'Payloads'] },
  { name: 'PentesterLab', desc: 'Web vulnerability exploitation reference', url: 'https://pentesterlab.com', tags: ['Reference', 'Web Sec'] },
];

// Helper to get domain favicon
const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return null;
  }
};

const ResourceCard = ({ name, desc, url, tags, index }: Resource & { index: number }) => {
  const faviconUrl = getFaviconUrl(url);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="block p-5 bg-bg-card border border-border-glow/30 rounded-lg hover:border-accent-cyan hover:box-glow-cyan group transition-all h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {faviconUrl ? (
            <img src={faviconUrl} alt={`${name} logo`} className="w-6 h-6 rounded bg-bg-primary object-contain" />
          ) : (
            <div className="w-6 h-6 rounded bg-bg-primary flex items-center justify-center">
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </div>
          )}
          <h3 className="font-bold font-display text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-1">{name}</h3>
        </div>
        <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-cyan shrink-0 transition-colors ml-2" />
      </div>
      
      <p className="text-text-muted text-sm font-mono leading-relaxed flex-grow mb-4">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'practice' | 'security'>('youtube');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const tabs = [
    { id: 'youtube', label: 'YouTube Channels', data: YOUTUBE_CHANNELS, icon: <PlaySquare className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice Platforms', data: PRACTICE_PLATFORMS, icon: <Laptop className="w-4 h-4" /> },
    { id: 'security', label: 'Security Resources', data: SECURITY_RESOURCES, icon: <ShieldCheck className="w-4 h-4" /> },
  ] as const;

  const currentData = tabs.find(t => t.id === activeTab)?.data || [];

  // Filter based on search query
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return currentData;
    
    return currentData.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [currentData, searchQuery]);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SEO 
        title="Resources" 
        description="A curated list of top-tier YouTube channels, practice platforms, and reference materials to level up your hacking and defense skills." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan font-mono text-xs mb-4"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Curated Collection</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Cybersecurity <span className="text-accent-cyan text-glow-cyan">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted max-w-2xl mx-auto mb-8"
          >
            A curated list of top-tier YouTube channels, practice platforms, and reference materials to level up your hacking and defense skills.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-accent-cyan" />
            </div>
            <input
              type="text"
              placeholder="Search resources by name, description, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-card border border-border-glow/30 rounded-full py-3 pl-12 pr-4 text-sm font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:box-glow-cyan transition-all"
            />
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto hide-scrollbar pb-2 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as typeof activeTab);
                setSearchQuery(''); // Reset search on tab change
              }}
              className={`flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-md font-mono text-sm transition-all whitespace-nowrap active:scale-95 ${
                activeTab === tab.id 
                  ? 'bg-accent-cyan text-bg-primary font-bold box-glow-cyan border-transparent' 
                  : 'bg-bg-card border border-border-glow/30 text-text-muted hover:border-accent-cyan hover:text-accent-cyan'
              }`}
            >
              {tab.icon}
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-bg-primary/20' : 'bg-bg-primary'}`}>
                {tab.data.length}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          {filteredData.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <Search className="w-12 h-12 text-text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">No resources found</h3>
              <p className="text-text-muted font-mono text-sm">
                No matches for "{searchQuery}" in {tabs.find(t => t.id === activeTab)?.label}.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredData.map((res, i) => (
                <ResourceCard key={res.name} index={i} {...res} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-bg-card border border-accent-cyan text-accent-cyan rounded-full shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:bg-accent-cyan hover:text-bg-primary transition-colors z-50 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;
