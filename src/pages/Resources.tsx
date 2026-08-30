import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PlaySquare, Laptop, ShieldCheck, ExternalLink, Search, ArrowUp, Briefcase, Terminal, Award, Radar, Cloud, Key, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

type Resource = { name: string; desc: string; url: string; tags: string[] };

const HASH_TO_TAB = {
  '#YtChannels': 'youtube',
  '#PracticePlatforms': 'practice',
  '#SecurityResources': 'security',
  '#JobSimulations': 'simulations',
  '#jobsimulations': 'simulations',
  '#PenTesting': 'pentesting',
  '#pentesting': 'pentesting',
  '#SOCResources': 'soc',
  '#socresources': 'soc',
  '#FreeCertifications': 'certs',
  '#freecertifications': 'certs',
  '#CloudSecurity': 'cloud',
  '#cloudsecurity': 'cloud',
  '#Cryptography': 'crypto',
  '#cryptography': 'crypto',
  '#MobileAndroid': 'android',
  '#mobileandroid': 'android',
  '#MobileiOS': 'ios',
  '#mobileios': 'ios',
} as const;

const TAB_TO_HASH = {
  youtube: '#YtChannels',
  practice: '#PracticePlatforms',
  security: '#SecurityResources',
  simulations: '#JobSimulations',
  pentesting: '#PenTesting',
  soc: '#SOCResources',
  certs: '#FreeCertifications',
  cloud: '#CloudSecurity',
  crypto: '#Cryptography',
  android: '#MobileAndroid',
  ios: '#MobileiOS',
} as const;


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
  { name: 'DVWA', desc: 'Damn Vulnerable Web App', url: 'https://github.com/digininja/DVWA', tags: ['Web Sec', 'Vulnerable App'] },
  { name: 'OWASP WebGoat', desc: 'Deliberately insecure web application', url: 'https://github.com/WebGoat/WebGoat', tags: ['Web Sec', 'Vulnerable App'] },
  { name: 'Google Gruyere', desc: 'Web Application Exploitation and Defenses', url: 'https://google-gruyere.appspot.com', tags: ['Web Sec', 'Vulnerable App'] },
  { name: 'Defend The Org', desc: 'Platform to Learn Threat Hunting', url: 'https://defendtheorg.com', tags: ['Threat Hunting', 'Blue Team'] },
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

const JOB_SIMULATIONS: Resource[] = [
  { name: 'Commonwealth Bank - Intro to Cybersecurity', desc: 'Splunk-style analysis, incident response, SOC analyst tasks', url: 'https://www.theforage.com/simulations/commonwealth-bank/intro-cybersecurity-rdxl', tags: ['Splunk', 'Incident Response', 'SOC Analyst'] },
  { name: 'AIG - Shields Up Cybersecurity', desc: 'Ransomware response, SOC thinking, real attack scenarios', url: 'https://www.theforage.com/simulations/aig/cybersecurity-ku1i', tags: ['Ransomware', 'SOC', 'Incident Response'] },
  { name: 'Mastercard - Cybersecurity', desc: 'Security awareness, risk identification, threat prevention', url: 'https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye', tags: ['Security Awareness', 'Risk Assessment', 'Threat Prevention'] },
  { name: 'PwC - Cyber Security Consulting', desc: 'GRC, audit, risk assessment, consulting communication', url: 'https://www.theforage.com/simulations/pwc-us/cybersecurity-consulting-sr1m', tags: ['GRC', 'Audit', 'Risk Assessment', 'Consulting'] },
  { name: 'Datacom - Cybersecurity Operations', desc: 'Cyberattack investigation, threat analysis, impact assessment', url: 'https://www.theforage.com/simulations/datacom/cybersecurity-zm6d', tags: ['Investigation', 'Threat Analysis', 'Impact Assessment'] },
  { name: 'Tata - Cybersecurity & IAM', desc: 'Access control, IAM basics, security architecture', url: 'https://www.theforage.com/simulations/tata/cybersecurity-sbda', tags: ['Access Control', 'IAM', 'Security Architecture'] },
];

const PEN_TESTING: Resource[] = [
  { name: 'Ethical Hacking in 15 Hours (Part 1) · The Cyber Mentor', desc: 'Comprehensive ethical hacking course for beginners (Part 1)', url: 'https://youtu.be/3FNYvj2U0HM', tags: ['Pentesting', 'Beginner'] },
  { name: 'Ethical Hacking in 15 Hours (Part 2) · The Cyber Mentor', desc: 'Comprehensive ethical hacking course for beginners (Part 2)', url: 'https://youtu.be/sH4JCwjybGs', tags: ['Pentesting', 'Beginner'] },
  { name: 'Web Security Academy Series · Rana Khalil', desc: 'Nine vulnerability classes. Start with SQL Injection.', url: 'https://www.youtube.com/@RanaKhalil101/playlists', tags: ['Web Sec', 'Vulns'] },
  { name: 'Hacking Active Directory · The Cyber Mentor', desc: 'Learn how to hack Active Directory environments', url: 'https://youtu.be/VXxH4n684HE', tags: ['AD', 'Pentesting'] },
  { name: 'Linux Privilege Escalation · The Cyber Mentor', desc: 'Techniques for escalating privileges on Linux systems', url: 'https://youtu.be/ZTnwg3qCdVM', tags: ['Linux', 'PrivEsc'] },
  { name: 'Red Team Essentials · HackerSploit', desc: 'Essential concepts and techniques for Red Teaming', url: 'https://www.youtube.com/playlist?list=PLBf0hzazHTGMjSlPmJ73Cydh9vCqxukCu', tags: ['Red Team', 'Essentials'] },
  { name: 'Binary Exploitation · LiveOverflow', desc: 'Deep dive into binary exploitation techniques', url: 'https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN', tags: ['Binary Exp', 'Deep Dive'] },
  { name: 'HackTheBox Walkthroughs · IppSec', desc: 'Walkthroughs and techniques. Search tool at ippsec.rocks', url: 'https://www.youtube.com/@ippsec', tags: ['HTB', 'Walkthroughs'] },
  { name: 'Buffer OverFlow', desc: 'Understanding and exploiting buffer overflows', url: 'https://youtu.be/ncBblM920jw', tags: ['Buffer Overflow', 'Exploit'] },
];

const SOC_RESOURCES: Resource[] = [
  { name: 'EnableWindowsLogSettings', desc: 'Turn the right Windows logs on', url: 'https://github.com/Yamato-Security/EnableWindowsLogSettings', tags: ['Windows', 'Logs', 'Blue Team'] },
  { name: 'DeTTECT', desc: 'Score what your data sources can actually see', url: 'https://github.com/rabobank-cdc/DeTTECT', tags: ['Data Sources', 'Framework'] },
  { name: 'ThreatHunter-Playbook', desc: 'Hunting hypotheses as runnable notebooks', url: 'https://github.com/OTRF/ThreatHunter-Playbook', tags: ['Threat Hunting', 'Playbook'] },
  { name: 'Hunting Queries', desc: '450+ KQL queries for Defender and Sentinel', url: 'https://github.com/Bert-JanP/Hunting-Queries-Detection-Rules', tags: ['KQL', 'Defender', 'Sentinel'] },
  { name: 'Security-Datasets', desc: 'Real attack telemetry to practice on', url: 'https://github.com/OTRF/Security-Datasets', tags: ['Telemetry', 'Datasets'] },
  { name: 'Blue-Team-Notes', desc: 'One-liners and field notes for daily work', url: 'https://github.com/Purp1eW0lf/Blue-Team-Notes', tags: ['Notes', 'Blue Team'] },
  { name: 'IRM', desc: 'One-page incident response cheat sheets', url: 'https://github.com/certsocietegenerale/IRM', tags: ['Incident Response', 'Cheat Sheet'] },
];

const FREE_CERTS: Resource[] = [
  { name: 'ISC2 CC', desc: 'Certified in Cybersecurity (CC)', url: 'https://www.isc2.org/certifications/cc', tags: ['Certification', 'Beginner'] },
  { name: 'BTJA Pathway', desc: 'Security Blue Team - Junior Analyst', url: 'https://www.securityblue.team/courses/blue-team-junior-analyst-pathway-bundle', tags: ['Blue Team', 'Analyst'] },
  { name: 'EC-Council Essentials', desc: 'Cybersecurity essentials series', url: 'https://www.eccouncil.org/academia/essentials/', tags: ['Essentials', 'Beginner'] },
  { name: 'Fortinet FCF', desc: 'Fortinet Certified Fundamentals', url: 'https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity', tags: ['Fundamentals', 'Fortinet'] },
  { name: 'Fortinet FCA', desc: 'Fortinet Certified Associate', url: 'https://training.fortinet.com/local/staticpage/view.php?page=fca_cybersecurity', tags: ['Associate', 'Fortinet'] },
  { name: 'Hack Wiser Core', desc: 'Hackviser Core Certification', url: 'https://hackviser.com/core', tags: ['Certification', 'Pentesting'] },
  { name: 'Android Security', desc: 'Hextree x Google Android Security', url: 'https://www.hextree.io/hextree-x-google', tags: ['Android', 'Mobile Sec'] },
];

const CLOUD_SECURITY: Resource[] = [
  { name: 'Awesome CloudSec Labs', desc: 'Curated list of free and paid cloud security labs', url: 'https://github.com/iknowjason/Awesome-CloudSec-Labs', tags: ['Cloud', 'Labs'] },
];

const CRYPTOGRAPHY: Resource[] = [
  { name: 'PicoLock', desc: 'Interactive cryptography puzzles', url: 'https://projects.etc.cmu.edu/picolock/', tags: ['Interactive', 'Crypto'] },
  { name: 'CryptoHack', desc: 'Learn cryptography through fun challenges', url: 'https://cryptohack.org/', tags: ['Challenges', 'Crypto'] },
  { name: 'Cryptopals', desc: 'The cryptopals crypto challenges', url: 'https://cryptopals.com/', tags: ['Challenges', 'Crypto'] },
];

const MOBILE_ANDROID: Resource[] = [
  { name: 'Building an Android Pentest Lab', desc: 'Step-by-step guide to building an Android pentest lab', url: 'https://medium.com/purplebox/step-by-step-guide-to-building-an-android-pentest-lab-853b4af6945e', tags: ['Guide', 'Pentest Lab'] },
  { name: 'Vendor-specific Vulnerabilities', desc: 'Discovering vendor-specific vulnerabilities in Android', url: 'https://oversecured.com/blog/discovering-vendor-specific-vulnerabilities-in-android', tags: ['Vulns', 'Research'] },
  { name: 'OWASP MASWE', desc: 'Mobile Application Security Web Editor', url: 'https://mas.owasp.org/MASWE/#', tags: ['OWASP', 'Tool'] },
  { name: 'OWASP MASTG', desc: 'Mobile Application Security Testing Guide', url: 'https://mas.owasp.org/MASTG/', tags: ['Guide', 'OWASP'] },
  { name: 'HackTricks Android Checklist', desc: 'Android pentesting checklist', url: 'https://hacktricks.wiki/en/mobile-pentesting/android-checklist.html', tags: ['Checklist', 'HackTricks'] },
  { name: 'HackTricks Android App Pentesting', desc: 'Android application pentesting techniques', url: 'https://hacktricks.wiki/en/mobile-pentesting/android-app-pentesting/index.html', tags: ['Pentesting', 'HackTricks'] },
  { name: 'OWASP MASVS', desc: 'Mobile Application Security Verification Standard', url: 'https://mas.owasp.org/MASVS/', tags: ['Standard', 'OWASP'] },
  { name: 'Oversecured Blog', desc: 'Mobile security blogs and research', url: 'https://oversecured.com/blog', tags: ['Blog', 'Research'] },
  { name: 'Intro to Android Hacking', desc: 'YouTube playlist on Android hacking', url: 'https://www.youtube.com/watch?v=niRooMwDUPU&list=PLmqenIp2RQcjBWzwMZQbIkbuVDmkYi_KF', tags: ['YouTube', 'Tutorials'] },
  { name: 'Android App Pen Test Checklist', desc: 'XMind mindmap for Android pentesting', url: 'https://xmind.app/m/GkgaYH/', tags: ['Checklist', 'Mindmap'] },
];

const MOBILE_IOS: Resource[] = [
  { name: 'HackTricks iOS Checklist', desc: 'iOS pentesting checklist', url: 'https://hacktricks.wiki/en/mobile-pentesting/ios-pentesting-checklist.html', tags: ['Checklist', 'HackTricks'] },
  { name: 'HackTricks iOS Pentesting', desc: 'iOS application pentesting techniques', url: 'https://hacktricks.wiki/en/mobile-pentesting/ios-pentesting/index.html', tags: ['Pentesting', 'HackTricks'] },
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
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'youtube' | 'practice' | 'security' | 'simulations' | 'pentesting' | 'soc' | 'certs' | 'cloud' | 'crypto' | 'android' | 'ios'>('youtube');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync active tab with URL hash
  useEffect(() => {
    const currentTab = HASH_TO_TAB[hash as keyof typeof HASH_TO_TAB];
    if (currentTab) {
      if (currentTab !== activeTab) {
        setActiveTab(currentTab);
      }
    } else {
      navigate(TAB_TO_HASH[activeTab], { replace: true });
    }
  }, [hash, navigate, activeTab]);

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
    { id: 'simulations', label: 'Job Simulations', data: JOB_SIMULATIONS, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'pentesting', label: 'Pen Testing', data: PEN_TESTING, icon: <Terminal className="w-4 h-4" /> },
    { id: 'soc', label: 'SOC / Threat Hunting', data: SOC_RESOURCES, icon: <Radar className="w-4 h-4" /> },
    { id: 'certs', label: 'Free Certifications', data: FREE_CERTS, icon: <Award className="w-4 h-4" /> },
    { id: 'cloud', label: 'Cloud Security', data: CLOUD_SECURITY, icon: <Cloud className="w-4 h-4" /> },
    { id: 'crypto', label: 'Cryptography', data: CRYPTOGRAPHY, icon: <Key className="w-4 h-4" /> },
    { id: 'android', label: 'Mobile (Android)', data: MOBILE_ANDROID, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ios', label: 'Mobile (iOS)', data: MOBILE_IOS, icon: <Smartphone className="w-4 h-4" /> },
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tab Navigation */}
          <div className="lg:w-1/4 shrink-0 flex overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 hide-scrollbar items-start lg:items-stretch">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  navigate(TAB_TO_HASH[tab.id as keyof typeof TAB_TO_HASH], { replace: true });
                  setSearchQuery(''); // Reset search on tab change
                }}
                className={`flex items-center justify-between gap-3 px-5 py-3 rounded-md font-mono text-sm transition-all whitespace-nowrap active:scale-95 shrink-0 w-full ${
                  activeTab === tab.id 
                    ? 'bg-accent-cyan text-bg-primary font-bold box-glow-cyan border-transparent' 
                    : 'bg-bg-card border border-border-glow/30 text-text-muted hover:border-accent-cyan hover:text-accent-cyan'
                }`}
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs ml-2 ${activeTab === tab.id ? 'bg-bg-primary/20' : 'bg-bg-primary'}`}>
                  {tab.data.length}
                </span>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
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
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {filteredData.map((res, i) => (
                    <ResourceCard key={res.name} index={i} {...res} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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
