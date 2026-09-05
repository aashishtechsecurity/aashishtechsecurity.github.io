import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PlaySquare, Laptop, ShieldCheck, ExternalLink, Search, ArrowUp, Briefcase, Terminal, Award, Radar, Cloud, Key, Smartphone, BookOpen, Cpu } from 'lucide-react';
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
  '#Fundamentals': 'fundamentals',
  '#fundamentals': 'fundamentals',
  '#AISecurity': 'ai_security',
  '#aisecurity': 'ai_security',
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
  fundamentals: '#Fundamentals',
  ai_security: '#AISecurity',
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
  { name: 'PicoLock', desc: 'Interactive cryptography puzzles', url: 'https://picolock.itch.io/picolockgame', tags: ['Interactive', 'Crypto'] },
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

const FUNDAMENTALS: Resource[] = [
  { name: 'Fundamentals of OS (Linux)', desc: 'Linux fundamentals video series', url: 'https://www.youtube.com/watch?v=kLVV3FVKQHE&list=PLsep1uQfemNFvT57-DOjzSnGspJv8efpS', tags: ['OS', 'Linux', 'YouTube'] },
  { name: 'Fundamentals of OS (Windows)', desc: 'Windows fundamentals video', url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8', tags: ['OS', 'Windows', 'YouTube'] },
  { name: 'Networking Basics - Part 1', desc: 'Introduction to networking concepts', url: 'https://www.youtube.com/watch?v=CY4hn70K3r8', tags: ['Networking', 'Fundamentals', 'YouTube'] },
  { name: 'Networking Basics - Part 2', desc: 'Further networking concepts', url: 'https://www.youtube.com/watch?v=fQbBPa0ADvs', tags: ['Networking', 'Fundamentals', 'YouTube'] },
  { name: 'MDN Web Docs: HTTP', desc: 'Overview of HTTP protocols and concepts', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', tags: ['Web', 'HTTP', 'Reference'] },
  { name: 'MDN Web Docs: HTTP Status', desc: 'Reference for HTTP status codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status', tags: ['Web', 'HTTP Status', 'Reference'] },
  { name: 'PortSwigger Web Security', desc: 'Web security academy and materials', url: 'https://portswigger.net/web-security', tags: ['Web Sec', 'Training'] },
];

const AI_SECURITY: Resource[] = [
  { name: 'Hack The Agent', desc: 'Interactive AI security challenge platform with progressive difficulty. Test prompt injection, jailbreaking and AI manipulation against a live ticketing agent.', url: 'https://hacktheagent.com/', tags: ['All Levels', 'Online Platform', 'Labs', 'AI Security'] },
  { name: 'Broken LLM Integration App', desc: 'Vulnerable LLM application demonstrating common integration flaws in web apps, from direct/indirect injection through to shell and SQL abuse.', url: 'https://github.com/13o-bbr-bbq/Broken_LLM_Integration_App', tags: ['Beginner–Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Gandalf — Lakera AI', desc: 'The classic online prompt-injection challenge by Lakera AI. Progressive levels teaching fundamental to advanced prompt engineering and bypass techniques.', url: 'https://gandalf.lakera.ai/', tags: ['Beginner–Advanced', 'Labs', 'AI Security'] },
  { name: 'Gandalf Agent Breaker — Lakera AI', desc: 'Advanced agent-based challenge by Lakera. Test skills against tool-using AI agents and discover vulnerabilities in multi-step agentic workflows.', url: 'https://gandalf.lakera.ai/agent-breaker', tags: ['Intermediate–Advanced', 'Labs', 'AI Security'] },
  { name: 'Gandalf Adventures — Lakera AI', desc: 'Seven unique adventure scenarios testing different prompt-injection techniques, from basic password extraction to advanced jailbreaking.', url: 'https://gandalf.lakera.ai/adventure-1', tags: ['Beginner–Advanced', 'Labs', 'AI Security'] },
  { name: 'HackMerlin', desc: 'The alternative wizard challenge for prompt injection — extract the secret from Merlin across escalating levels.', url: 'https://hackmerlin.io/', tags: ['Beginner–Intermediate', 'Labs', 'AI Security'] },
  { name: 'Immersive Labs Prompt Injection', desc: 'Professional training platform with 10 progressive levels — extract secret passwords through increasingly sophisticated injection techniques.', url: 'https://prompting.ai.immersivelabs.com/', tags: ['Beginner–Intermediate', 'Labs', 'AI Security'] },
  { name: 'GPT Prompt Attack', desc: 'Web game challenging you to craft the shortest prompt that tricks an assistant into revealing its secret key. A perfect intro to prompt injection.', url: 'https://gpa.43z.one/', tags: ['Beginner', 'Labs', 'AI Security'] },
  { name: 'TensorTrust', desc: 'UC Berkeley research platform combining attack and defense. Create defense prompts to protect assets and craft attacks to break in.', url: 'https://tensortrust.ai/', tags: ['Intermediate', 'Labs', 'AI Security'] },
  { name: 'PromptMe — OWASP LLM Top 10', desc: 'CTF-style platform with 10 challenges based on the OWASP LLM Top 10. Runs locally with Python + Ollama and open models like Mistral and Llama3.', url: 'https://github.com/R3dShad0w7/PromptMe', tags: ['Intermediate–Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'SecOps Group — HackAI Mock Lab', desc: 'AI/ML penetration-testing mock lab by The SecOps Group. Hands-on exercises covering prompt injection and model attacks, aligned to their certification.', url: 'https://hackai.mock.secops.group/', tags: ['Intermediate', 'Labs', 'AI Security'] },
  { name: 'OWASP FinBot CTF', desc: 'Agentic AI CTF simulating goal-manipulation against AI-powered financial systems — the "Juice Shop for Agentic AI". The public Render demo is offline; self-host from source.', url: 'https://github.com/OWASP-ASI/finbot-ctf-demo', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'PortSwigger LLM Labs', desc: 'Four LLM security labs by PortSwigger covering indirect prompt injection, data exfiltration, cross-user data leakage and authentication bypass.', url: 'https://portswigger.net/web-security/llm-attacks', tags: ['Intermediate–Advanced', 'Labs', 'AI Security'] },
  { name: 'MyLLMBank', desc: 'Prompt-injection challenge against chained AI agents performing data transformation. Explore attacks on multi-agent banking systems.', url: 'https://myllmbank.com/', tags: ['Intermediate–Advanced', 'Labs', 'AI Security'] },
  { name: 'MyLLMDoc', desc: 'Document-focused AI security challenge exploring vulnerabilities in RAG and document-processing systems.', url: 'https://myllmdoc.com/', tags: ['Intermediate–Advanced', 'Labs', 'AI Security'] },
  { name: 'Auto Parts CTF', desc: 'Chained LLM-powered auto-parts system with multiple vulnerability classes, real-time WebSocket comms and API endpoints.', url: 'https://github.com/Arcanum-Sec/MyLLMAuto', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'PwnGPT CTF', desc: 'Agentic LLM CTF with vector search and OpenAI models. 10+ progressive levels teaching injection, retrieval and LLM security.', url: 'https://github.com/c-goosen/ai-prompt-ctf', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Professional-Secure-AI-Bot', desc: 'Multi-feature AI platform demonstrating proper security implementations — a defender-side counterpoint to the vulnerable labs.', url: 'https://github.com/NSIDE-ATTACK-LOGIC/Professional-Secure-AI-Bot', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Prompt Airlines', desc: 'AI security CTF by Wiz with 5 progressive challenges — manipulate a customer-service chatbot to earn a free airline ticket.', url: 'https://promptairlines.com/', tags: ['Intermediate', 'Labs', 'AI Security'] },
  { name: 'Dreadnode Crucible', desc: 'Professional ML/AI security platform with 80+ challenges spanning prompt injection, adversarial attacks, model inversion and data poisoning — including DEFCON and Black Hat content.', url: 'https://platform.dreadnode.io/crucible', tags: ['Specialized', 'Advanced', 'Labs', 'AI Security'] },
  { name: 'AI Goat', desc: 'Deliberately vulnerable LLM chatbot lab built around the OWASP LLM Top 10 — a hands-on "goat" target for practicing prompt injection and related AI attacks.', url: 'https://github.com/dhammon/ai-goat', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Doublespeak.chat', desc: 'Hosted prompt-injection game by Forces Unseen — coax an AI gatekeeper into revealing its secret name across escalating levels. No setup, play in the browser.', url: 'https://doublespeak.chat/', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'Hacc-Man', desc: 'Arcade-styled hosted prompt-injection game — break the AI across escalating levels, no setup required.', url: 'https://haccman.com/', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'SpyLogic', desc: 'Scott Logic’s attack-and-defend chatbot challenge — extract secrets past layered guardrails, or build defences of your own.', url: 'https://spylogic.ai/', tags: ['Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: '8kSec — AI/LLM Exploitation Challenges', desc: '10 free hosted AI security labs from 8kSec Battlegrounds — prompt injection (direct/indirect), jailbreaking, agent manipulation and insecure tool use, run in cloud sandboxes.', url: 'https://academy.8ksec.io/course/ai-exploitation-challenges', tags: ['Beginner–Advanced', 'Online (free account)', 'Labs', 'AI Security'] },
  { name: 'BHIS AI-CTF', desc: 'Black Hills Information Security’s prompt-injection CTF built on Open WebUI — a self-hosted range for practicing LLM attacks.', url: 'https://github.com/blackhillsinfosec/AI-CTF', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'LLMGoat', desc: 'SECFORCE’s deliberately vulnerable LLM application for hands-on practice across the OWASP LLM Top 10.', url: 'https://github.com/SECFORCE/LLMGoat', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Local LLM CTF & Lab', desc: 'Bishop Fox’s local LLM CTF and lab for experimenting with prompt-injection and LLM app attacks entirely offline.', url: 'https://github.com/BishopFox/local-llm-ctf', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'AIGoat (Orca)', desc: 'Orca Security’s deliberately vulnerable AI/ML environment covering the OWASP ML Top 10 and AI supply-chain risks (distinct from the chatbot-style AI Goat already listed).', url: 'https://github.com/orcasecurity-research/AIGoat', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'AI Red Teaming Playground Labs', desc: 'Microsoft’s open-source playground of hands-on AI red-teaming labs — direct and indirect injection, guardrail bypass and more.', url: 'https://github.com/microsoft/AI-Red-Teaming-Playground-Labs', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'labStudentLLM (OWASP LLM Top 10 2025)', desc: 'Self-hosted lab set mapped to the OWASP LLM Top 10 (2025) for structured, per-risk practice.', url: 'https://github.com/leinn32/labStudentLLM', tags: ['Beginner–Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Bot-Tricks', desc: 'A structured compendium of prompt-injection lessons, challenge walkthroughs and hands-on labs against real LLM targets — from foundational mindset through advanced evasion.', url: 'https://bot-tricks.com/', tags: ['Beginner–Advanced', 'Online', 'Labs', 'AI Security'] },
  { name: 'AIPWN.ME', desc: 'Hands-on AI red-team training labs covering prompt injection, jailbreaks, data exfiltration and LLM security fundamentals — play in the browser.', url: 'https://www.aipwn.me/', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'Kontra — OWASP Top 10 for LLM', desc: 'Kontra’s free interactive OWASP LLM Top 10 (2025) training — hands-on browser exercises walking through prompt injection, sensitive-information disclosure, supply chain and excessive agency.', url: 'https://application.security/free/llm', tags: ['Beginner–Intermediate', 'Online (free)', 'Labs', 'AI Security'] },
  { name: 'HackMyClaw', desc: 'An email-based prompt-injection challenge: trick “Fiu” into leaking a secrets.env file via crafted emails. The live challenge is over (nobody cracked it), but the writeup and public attack log (/log.html) are a great study of real email-injection attempts and defenses.', url: 'https://hackmyclaw.com/', tags: ['Read-only', 'Archived Challenge', 'Labs', 'AI Security'] },
  { name: 'OnlyLANs', desc: 'A deliberately vulnerable AI demo — make “NetworkJohn” reveal three secrets via prompt injection. Built for the ContinuumCon prompt-injection workshop.', url: 'https://onlylans.justhacking.com/', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'FAS Judgement', desc: 'Open-source, self-hosted prompt-injection training platform from Fallen Angel Systems — 37 challenges across 10 levels with XP progression, a WarGames-style game master, and built-in vulnerable targets (no external API keys needed).', url: 'https://github.com/fallen-angel-systems/fas-judgement-oss', tags: ['Beginner–Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'ARKX — AI Agent Security CTF', desc: 'A hosted capture-the-flag focused on hacking AI agents — identify and exploit agent-security vulnerabilities across real-world scenarios, with Beginner through DEFCON difficulty tiers.', url: 'https://ctf.arkx.ninja/', tags: ['Beginner–Expert', 'Online (free account)', 'Labs', 'AI Security'] },
  { name: 'AISecOps Labs (Black Hills / Derek Banks)', desc: 'Docker-based AI security lab suite from the Black Hills / Antisyphon “Attacking, Defending & Leveraging AI” class — 11 prompt-injection CTF challenges plus 9 Jupyter labs spanning RAG poisoning, MCP security, guardrails and adversarial embeddings. Runs on free local Ollama or OpenAI.', url: 'https://github.com/deruke/aisecops-labs', tags: ['Beginner–Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'GitHub Secure Code Game — Agentic AI (S4)', desc: 'GitHub Security Lab’s free open-source game. Season 4 drops you inside a deliberately vulnerable agentic coding assistant across five progressive levels, from command execution to MCP servers to multi-agent orchestration attacks.', url: 'https://github.com/skills/secure-code-game', tags: ['Beginner–Intermediate', 'Self-Hosted (Codespaces)', 'Labs', 'AI Security'] },
  { name: 'AgentDojo', desc: 'ETH Zurich SPY Lab’s NeurIPS 2024 environment for attacking and defending LLM agents across 97 realistic tool-using tasks with 629 security test cases and a public leaderboard. Reference-grade for agentic prompt-injection work.', url: 'https://github.com/ethz-spylab/agentdojo', tags: ['Intermediate–Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'OWASP PromptMe', desc: 'Official OWASP educational project with 10 hands-on CTF-style challenges walking the full OWASP LLM Top 10, runnable fully locally with Python and Ollama on open models.', url: 'https://github.com/OWASP/www-project-promptme', tags: ['Beginner–Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Vulnerable MCP Server (aganita)', desc: 'A self-hostable intentionally vulnerable MCP server with 7 structured CTF challenges spanning tool-description poisoning, excessive file access, token exposure and multi-step privilege escalation.', url: 'https://github.com/aganita/mcp-ctf-challenge', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'ctf-prompt-injection (CharlesTheGreat77)', desc: 'A self-contained multi-level prompt-injection CTF (Go backend + Ollama/Llama 3.2) with one-command Docker setup and no API keys. An ideal zero-friction local starter lab.', url: 'https://github.com/CharlesTheGreat77/ctf-prompt-injection', tags: ['Beginner–Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'AIGoat (AI Security Consortium)', desc: 'A deliberately vulnerable AI e-commerce app with 17 attack labs, 9 CTF challenges and progressive-defense levels, running fully locally against Ollama/Mistral with no API keys.', url: 'https://github.com/AISecurityConsortium/AIGoat', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'prompt-injection-lab (txdadlab)', desc: 'An MIT-licensed CTF-style web app with 7 progressive levels where the goal is beating the lab’s own defense layers (input/output filters, sandwich defense, judge-LLM) rather than model safety. Fully local via Python + Ollama.', url: 'https://github.com/txdadlab/prompt-injection-lab', tags: ['Beginner–Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'llm-sec-range (gatsby-sec)', desc: 'A one-command Docker, MIT-licensed platform bundling an 8-level prompt-injection CTF, OWASP LLM Top 10 labs and a vulnerable ReAct banking agent (SQLi, path traversal, privesc), multi-model with local Ollama support.', url: 'https://github.com/gatsby-sec/llm-sec-range', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'DEF CON CTF 2023 Quals — pawan_gupta', desc: 'Source and deployment handouts for the DEF CON CTF 2023 qualifier LLM prompt-injection challenge (3 escalating flags), replayable locally. Rare competition-grade material.', url: 'https://github.com/Nautilus-Institute/quals-2023/tree/main/pawan_gupta', tags: ['Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'PromptInjects', desc: 'A free, no-account browser CTF where each level is a themed mini-app (vault, support bot, inbox) hiding a flag in the AI’s instructions, with an optional ELO leaderboard and live-event hosting.', url: 'https://promptinjects.com/', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'CrowdStrike AI Unlocked: Decoding Prompt Injection', desc: 'A free interactive prompt-injection game with three escalating rooms coaxing an AI supervisor into revealing secret phrases, scored by token efficiency. A polished vendor-built layered-defense challenge.', url: 'https://www.crowdstrike.com/en-us/platform/falcon-aidr-ai-detection-and-response/ai-unlocked/', tags: ['Beginner', 'Online', 'Labs', 'AI Security'] },
  { name: 'LLM-Security-CTF (TrustAI)', desc: 'An open-source series of vulnerable-LLM CTF challenges (with a companion free hosted game) for learning LLM security, no sign-ups or fees.', url: 'https://github.com/TrustAI-laboratory/LLM-Security-CTF', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'multiAiCtf (s0rcy)', desc: 'A lightweight browser-based, Gandalf-style multi-level prompt-engineering CTF in Python + Streamlit. Easy to self-host.', url: 'https://github.com/s0rcy/multiAiCtf', tags: ['Beginner', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'MCP Ethical Hacking (cmpxchg16)', desc: 'A hands-on MCP-security demo showing how seemingly legitimate MCP tools can execute unexpected code via image steganography and WebAssembly and reach beyond intended scope. A fresh MCP attack-surface angle (demo, not flag-based).', url: 'https://github.com/cmpxchg16/mcp-ethical-hacking', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'JailbreakLab (karloks2005)', desc: 'A self-hostable React + FastAPI lab (Docker/K8s, MIT) pitting 20+ attack vectors against local HuggingFace LLMs with 14+ defenses and live attack-success metrics. A solid attack/defense playground.', url: 'https://github.com/karloks2005/JailbreakLab', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'PromptTrace', desc: 'A free hands-on AI security training platform for practicing prompt injection, RAG poisoning and tool exploitation against real LLMs. Its Context Trace shows the full prompt stack (system prompt, RAG docs, tool definitions, user input) in real time.', url: 'https://prompttrace.airedlab.com/', tags: ['Beginner–Advanced', 'Online (free)', 'Labs', 'AI Security'] },
  { name: 'Machine Learning CTF Challenges (alexdevassy)', desc: 'A set of adversarial machine-learning and AI CTF challenges to practice attacking ML/AI systems locally.', url: 'https://github.com/alexdevassy/Machine_Learning_CTF_Challenges', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Invariant Labs Agent CTF 2024', desc: 'Invariant Labs’ playable agent-security capture-the-flag focused on tool-using LLM agents and prompt injection.', url: 'https://invariantlabs.ai/play-ctf-challenge-24', tags: ['Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'aifirst-insecure-agent-labs (Trail of Bits)', desc: 'A chatbot-agent exploit lab from Trail of Bits for practicing prompt injection, system-prompt extraction and guardrail bypass against NeMo and regex guardrails.', url: 'https://github.com/trailofbits/aifirst-insecure-agent-labs', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'otto-support MCP CTF (Bishop Fox)', desc: 'A Bishop Fox capture-the-flag simulating how modern AI agents interact with tools, internal services and local environments. Escalate across privilege levels to exfiltrate data, access other users’ info and execute code on the host.', url: 'https://github.com/BishopFox/otto-support', tags: ['Intermediate–Advanced', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Steve’s Chat Playground', desc: 'A free in-browser sandbox for testing prompt-injection attacks and defenses against configurable chatbot personas and guardrails.', url: 'https://virtualsteve-star.github.io/chat-playground/', tags: ['Beginner', 'Online', 'Labs', 'AI Security'] },
  { name: 'Wild LLaMa', desc: 'A hosted prompt-injection challenge (Allen Institute for AI) where you try to talk the model into breaking its rules.', url: 'https://feedox.com/wild-llama', tags: ['Beginner–Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'ggrank — Password Please', desc: 'A free no-account browser puzzle: an AI lock screen guards a secret word, and you get 10 chat turns to break in through prompt injection.', url: 'https://ggrank.xyz/en/game/password-please', tags: ['Beginner', 'Online', 'Labs', 'AI Security'] },
  { name: 'ai_for_the_win', desc: 'Hands-on labs for building and breaking AI security tooling across ML, LLMs, RAG, DFIR and red teaming.', url: 'https://github.com/depalmar/ai_for_the_win', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Damn Vulnerable MCP Server (DVMCP)', desc: 'Educational vulnerable Model Context Protocol server with 10 escalating challenges — prompt injection, tool poisoning, excessive permissions and rug-pull attacks against MCP tooling.', url: 'https://github.com/harishsg993010/damn-vulnerable-MCP-server', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Damn Vulnerable AI Agent (DVAA)', desc: 'The "DVWA of AI agents" — a deliberately vulnerable agent platform with 17 agents, 12 vulnerability categories and 3 protocols for security testing and education.', url: 'https://github.com/opena2a-org/damn-vulnerable-ai-agent', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Damn Vulnerable LLM Agent (DVLA)', desc: 'The classic ReAct-agent prompt-injection CTF from Reversec Labs (ex-WithSecure). Chain injection to make a Thought/Action/Observation agent leak other users’ transactions and capture flags.', url: 'https://github.com/ReversecLabs/damn-vulnerable-llm-agent', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'MCP CTF', desc: 'Hosted capture-the-flag focused on Model Context Protocol security — tool poisoning, injection and permission abuse against MCP servers.', url: 'https://www.mcpctf.io/', tags: ['Intermediate', 'Online', 'Labs', 'AI Security'] },
  { name: 'Damn Vulnerable Email Agent', desc: 'A deliberately vulnerable email-handling AI agent — practice indirect prompt injection delivered through email content and tool calls.', url: 'https://github.com/kyuz0/damn-vulnerable-email-agent', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Invariant MCP Injection Experiments', desc: 'Invariant Labs’ proof-of-concept MCP attacks — tool-poisoning and injection experiments against real MCP tooling.', url: 'https://github.com/invariantlabs-ai/mcp-injection-experiments', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Microsoft AIAgentCTF', desc: 'An AI-agent CTF built around a real agent vulnerability (CVE-2026-26030) — exploit an agentic workflow to capture flags.', url: 'https://github.com/amiteliahu/AIAgentCTF', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Appsecco Vulnerable MCP Servers Lab', desc: 'A collection of deliberately vulnerable MCP servers for pentest practice around untrusted tools and content in agent workflows.', url: 'https://github.com/appsecco/vulnerable-mcp-servers-lab', tags: ['Intermediate', 'Self-Hosted', 'Labs', 'AI Security'] },
  { name: 'Pangea AI Escape Room', desc: 'Interactive AI escape room — use prompt injection to outsmart chatbot supervisors and reveal secret passcodes. Global leaderboard.', url: 'https://escape.pangea.cloud/', tags: ['Intermediate–Advanced', 'Competitions', 'AI Security'] },
  { name: 'RedTeam Arena', desc: 'Open-source, community-driven LLM red-teaming platform (LMSYS). 60 seconds to convince models to say target words. The public redarena.ai instance is offline; run it from source.', url: 'https://github.com/redteaming-arena/redteam-arena', tags: ['Intermediate', 'Self-Hosted', 'Competitions', 'AI Security'] },
  { name: 'HackAPrompt 2.0', desc: 'The world’s largest AI red-teaming competition ($100,000+ prize pool) by Learn Prompting & OpenAI. Multiple tracks for discovering AI vulnerabilities.', url: 'https://www.hackaprompt.com/', tags: ['Advanced Competition', 'Competitions', 'AI Security'] },
  { name: 'Gray Swan AI Arena', desc: 'Competitive AI safety arena with prompt-injection challenges, model evaluation and red-teaming competitions against many models. $500K+ distributed.', url: 'https://app.grayswan.ai/arena', tags: ['Intermediate Competition', 'Competitions', 'AI Security'] },
  { name: 'LLMail-Inject (Microsoft)', desc: 'Microsoft’s adaptive prompt-injection challenge — smuggle instructions past an email assistant’s defences in a realistic indirect-injection setting.', url: 'https://microsoft.github.io/llmail-inject/', tags: ['Advanced Competition', 'Competitions', 'AI Security'] },
  { name: 'SaTML LLM CTF', desc: 'The SaTML LLM CTF (ETH SpyLab) — an attack-and-defend prompt-injection competition with a public leaderboard.', url: 'https://ctf.spylab.ai/', tags: ['Competition', 'SpyLab', 'Competitions', 'AI Security'] },
  { name: 'Alignment Arena', desc: 'Competitive jailbreaking / red-teaming arena pitting players against models to elicit target behaviours.', url: 'https://www.alignmentarena.com/', tags: ['Competition', 'Competitions', 'AI Security'] },
  { name: 'Anthropic Bug Bounty', desc: 'Official Anthropic program for reporting security vulnerabilities in Claude AI systems and infrastructure via responsible disclosure.', url: 'https://docs.google.com/forms/d/e/1FAIpQLSf3IuyunFH1Rbz_9Bpt2kGBfwSW5QQ1TBkeAzNZrtCP-hRvNA/viewform', tags: ['Professional Bounty', 'Bug Bounties', 'AI Security'] },
  { name: 'OpenAI Bug Bounty', desc: 'OpenAI’s Bugcrowd-hosted program for vulnerabilities in ChatGPT, the GPT API and related services and infrastructure.', url: 'https://bugcrowd.com/engagements/openai', tags: ['Professional Bounty', 'Bug Bounties', 'AI Security'] },
  { name: 'Google Gemini Bug Bounty', desc: 'Google’s Abuse Vulnerability Reward Program for Gemini AI models and services, part of Google Bug Hunters, focused on AI safety and abuse.', url: 'https://bughunters.google.com/about/rules/google-friends/5238081279623168/abuse-vulnerability-reward-program-rules', tags: ['Professional Bounty', 'Bug Bounties', 'AI Security'] },
  { name: '0din.ai — GenAI Bug Bounty', desc: 'Mozilla’s 0-Day Investigative Network GenAI bounty targeting LLM and generative-AI vulnerabilities. Rewards up to $15,000 for critical findings.', url: 'https://0din.ai/', tags: ['Professional Bounty', 'Bug Bounties', 'AI Security'] },
  { name: 'huntr (Protect AI)', desc: 'Protect AI’s bug-bounty platform dedicated to AI/ML — vulnerabilities in open-source models, ML libraries and the AI supply chain.', url: 'https://huntr.com/', tags: ['Professional Bounty', 'AI/ML', 'Bug Bounties', 'AI Security'] },
  { name: 'P4RS3LT0NGV3 — Original', desc: 'The original P4RS3LT0NGV3 by Elder Plinius — generate obfuscated prompts with 20+ text transformations to test LLM filters and controls.', url: 'https://elder-plinius.github.io/P4RS3LT0NGV3/', tags: ['Payload Generator', 'Online', 'Tools', 'AI Security'] },
  { name: 'PyRIT — Python Risk Identification Tool', desc: 'Microsoft’s open-source automation framework to proactively identify risk in generative-AI systems through automated red teaming.', url: 'https://github.com/Azure/PyRIT', tags: ['Red Team Framework', 'Microsoft', 'Tools', 'AI Security'] },
  { name: 'Garak — LLM Vulnerability Scanner', desc: 'NVIDIA’s LLM vulnerability scanner — probes for hallucination, data leakage, prompt injection, toxicity, jailbreaks and more. "nmap for LLMs".', url: 'https://github.com/NVIDIA/garak', tags: ['Security Scanner', 'NVIDIA', 'Tools', 'AI Security'] },
  { name: 'Promptfoo — LLM Testing & Red Teaming', desc: 'Open-source LLM testing and red-teaming framework for evaluating prompt quality, catching regressions and finding vulnerabilities.', url: 'https://www.promptfoo.dev/', tags: ['Testing Framework', 'Open Source', 'Tools', 'AI Security'] },
  { name: 'Spikeé — AI Security Analysis Platform', desc: 'AI security analysis platform for comprehensive testing of LLM applications — automated assessment, injection testing and posture evaluation with enterprise reporting.', url: 'https://spikee.ai/', tags: ['Security Platform', 'Arcanum', 'Tools', 'AI Security'] },
  { name: 'PyRIT SHIP — Burp Suite Extension', desc: 'Prototype extending PyRIT with API integration — a Flask server plus a Burp Suite Intruder extension for AI safety testing.', url: 'https://github.com/microsoft/PyRIT-Ship', tags: ['Burp Extension', 'Microsoft', 'Tools', 'AI Security'] },
  { name: 'Augustus', desc: 'Praetorian’s Go-native LLM vulnerability scanner — tests models against 210+ adversarial attacks (prompt injection, jailbreaks, encoding exploits, data extraction). Single binary, 28 providers, Apache-2.0. Second release in the "12 Caesars" series.', url: 'https://github.com/praetorian-inc/augustus', tags: ['LLM Vuln Scanner', 'Praetorian', 'Tools', 'AI Security'] },
  { name: 'Julius', desc: 'Praetorian’s LLM fingerprinting tool — identify which model sits behind an endpoint from its behavior. First release in the "12 Caesars" open-source series, and a natural recon step before Augustus.', url: 'https://github.com/praetorian-inc/julius', tags: ['LLM Fingerprinting', 'Praetorian', 'Tools', 'AI Security'] },
  { name: 'Giskard', desc: 'Open-source testing and red-teaming library covering both LLM apps and traditional ML. Its RAGET toolkit auto-generates test sets for RAG apps and scores retrieval accuracy, relevance, correctness and hallucination.', url: 'https://github.com/Giskard-AI/giskard', tags: ['Red Team Library', 'Open Source', 'Tools', 'AI Security'] },
  { name: 'CyberArk FuzzyAI', desc: 'Open-source fuzzer for finding jailbreaks and prompt-injection bypasses in LLMs, with a large library of attack techniques and support for many providers.', url: 'https://github.com/cyberark/FuzzyAI', tags: ['Jailbreak Fuzzer', 'CyberArk', 'Tools', 'AI Security'] },
  { name: 'DeepTeam', desc: 'LLM and agent red-teaming framework from the DeepEval team, with 40+ vulnerabilities and adversarial attack methods mapped to the OWASP LLM Top 10.', url: 'https://github.com/confident-ai/deepteam', tags: ['Red Team Framework', 'Open Source', 'Tools', 'AI Security'] },
  { name: 'NVIDIA NeMo Guardrails', desc: 'NVIDIA’s open-source toolkit for adding programmable guardrails to LLM apps — the defensive counterpart to the attack tooling, and a target to test against.', url: 'https://github.com/NVIDIA-NeMo/Guardrails', tags: ['Guardrails Framework', 'NVIDIA', 'Tools', 'AI Security'] },
  { name: 'PoisonedRAG', desc: 'Reference implementation of knowledge-corruption attacks against RAG pipelines — poison the retrieval corpus to steer LLM answers.', url: 'https://github.com/sleeepeer/PoisonedRAG', tags: ['Attack Research', 'Open Source', 'Tools', 'AI Security'] },
  { name: 'Arcanum Prompt Injection Taxonomy', desc: 'Comprehensive taxonomy and classification system for prompt-injection attacks by Arcanum — a structured framework for understanding and categorizing injection vulnerabilities.', url: 'https://github.com/Arcanum-Sec/arc_pi_taxonomy/tree/main', tags: ['Research Resource', 'Arcanum', 'Resources', 'AI Security'] },
  { name: 'AI Pentest Questionnaire', desc: 'Structured penetration-testing questionnaire for AI systems — security evaluation criteria, attack vectors and assessment methodology for AI/LLM applications.', url: 'https://github.com/Arcanum-Sec/arc_pi_taxonomy/blob/main/ai_sec_questionnaire.md', tags: ['Assessment Guide', 'Arcanum', 'Resources', 'AI Security'] },
  { name: 'AI Security Ecosystem', desc: 'Enterprise AI deployment ecosystem mapping — helps AI pentesters identify and include all relevant components in their testing scope.', url: 'https://github.com/Arcanum-Sec/arc_pi_taxonomy/tree/main/ecosystem', tags: ['Research Collection', 'Arcanum', 'Resources', 'AI Security'] },
  { name: 'greshake/llm-security', desc: 'The seminal indirect prompt-injection demos and write-ups from the team that named the technique — foundational reading and PoCs.', url: 'https://github.com/greshake/llm-security', tags: ['Research', 'Indirect Injection', 'Resources', 'AI Security'] },
  { name: 'awesome-prompt-injection', desc: 'A curated index of prompt-injection resources — papers, tools, labs and write-ups in one place.', url: 'https://github.com/Joe-B-Security/awesome-prompt-injection', tags: ['Curated List', 'Resources', 'AI Security'] },
  { name: 'JailbreakBench', desc: 'An open benchmark and leaderboard for LLM jailbreak robustness, with standardized artifacts and attack/defense tracking.', url: 'https://jailbreakbench.github.io/', tags: ['Benchmark', 'Leaderboard', 'Resources', 'AI Security'] },
  { name: 'Black Hills — Getting Started with AI Hacking', desc: 'Black Hills InfoSec’s practical intro to AI hacking and prompt injection — a solid on-ramp that pairs with their AI-CTF.', url: 'https://www.blackhillsinfosec.com/getting-started-with-ai-hacking-part-2/', tags: ['Guide', 'Black Hills InfoSec', 'Resources', 'AI Security'] },
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
  const [activeTab, setActiveTab] = useState<'youtube' | 'practice' | 'security' | 'simulations' | 'pentesting' | 'soc' | 'certs' | 'cloud' | 'crypto' | 'android' | 'ios' | 'fundamentals' | 'ai_security'>('youtube');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

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
    { id: 'fundamentals', label: 'Fundamentals', data: FUNDAMENTALS, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'security', label: 'Security Resources', data: SECURITY_RESOURCES, icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'ai_security', label: 'AI Security', data: AI_SECURITY, icon: <Cpu className="w-4 h-4" /> },
    { id: 'simulations', label: 'Job Simulations', data: JOB_SIMULATIONS, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'pentesting', label: 'Pen Testing', data: PEN_TESTING, icon: <Terminal className="w-4 h-4" /> },
    { id: 'soc', label: 'SOC / Threat Hunting', data: SOC_RESOURCES, icon: <Radar className="w-4 h-4" /> },
    { id: 'certs', label: 'Free Certifications', data: FREE_CERTS, icon: <Award className="w-4 h-4" /> },
    { id: 'cloud', label: 'Cloud Security', data: CLOUD_SECURITY, icon: <Cloud className="w-4 h-4" /> },
    { id: 'crypto', label: 'Cryptography', data: CRYPTOGRAPHY, icon: <Key className="w-4 h-4" /> },
    { id: 'android', label: 'Mobile (Android)', data: MOBILE_ANDROID, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ios', label: 'Mobile (iOS)', data: MOBILE_IOS, icon: <Smartphone className="w-4 h-4" /> },
  ] as const;

  // Compute dynamic filters for the active tab
  const currentTabFilters = useMemo(() => {
    if (!activeTab) return [];
    
    // If AI security, use the specific filters
    if (activeTab === 'ai_security') {
      return [
        { label: 'Labs', tag: 'Labs', color: 'bg-emerald-400' },
        { label: 'Competitions', tag: 'Competitions', color: 'bg-orange-500' },
        { label: 'Bug Bounties', tag: 'Bug Bounties', color: 'bg-red-500' },
        { label: 'Tools', tag: 'Tools', color: 'bg-purple-500' },
        { label: 'Text', tag: 'Resources', color: 'bg-cyan-400' }
      ];
    }
    
    // For other tabs, dynamically generate top 5 filters
    const currentData = tabs.find(t => t.id === activeTab)?.data || [];
    const tagCounts: Record<string, number> = {};
    currentData.forEach(item => {
      item.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    
    // Get top tags that appear more than once, max 5
    const sortedTags = Object.entries(tagCounts)
      .filter(entry => entry[1] > 1) // Only tags with > 1 resource
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
      .slice(0, 5);
      
    const colors = ['bg-emerald-400', 'bg-orange-500', 'bg-red-500', 'bg-purple-500', 'bg-cyan-400'];
    return sortedTags.map((tag, i) => ({ label: tag, tag: tag, color: colors[i % colors.length] }));
  }, [activeTab, tabs]);

  // Filter based on search query and active filter
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    // If no search query, return the data for the active tab only
    if (!query) {
      let data = tabs.find(t => t.id === activeTab)?.data || [];
      if (activeFilter !== 'All') {
        const filterDef = currentTabFilters.find(f => f.label === activeFilter);
        const filterTag = filterDef ? filterDef.tag : activeFilter;
        data = data.filter(item => item.tags.includes(filterTag));
      }
      return data;
    }
    
    // If there is a search query, search across ALL resources
    const allData = tabs.flatMap(t => t.data);
    
    // Filter the flattened array
    const results = allData.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );

    // Remove duplicates based on URL just in case
    const uniqueResults = [];
    const seenUrls = new Set();
    for (const item of results) {
      if (!seenUrls.has(item.url)) {
        seenUrls.add(item.url);
        uniqueResults.push(item);
      }
    }
    
    return uniqueResults;
  }, [activeTab, searchQuery, activeFilter, tabs, currentTabFilters]);

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
                  setSearchQuery('');
                  setActiveFilter('All'); // Reset filter on tab change
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
            {/* Dynamic Filter Bar */}
            {!searchQuery && currentTabFilters.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 mb-8 bg-bg-card/50 p-2 rounded-2xl border border-border-glow/20"
              >
                <button
                  onClick={() => setActiveFilter('All')}
                  className={`px-5 py-2 rounded-xl font-mono text-sm transition-all ${
                    activeFilter === 'All' 
                      ? 'bg-accent-cyan text-bg-primary font-bold shadow-[0_0_10px_rgba(0,245,255,0.3)]' 
                      : 'bg-bg-primary border border-border-glow/30 text-text-muted hover:border-accent-cyan hover:text-accent-cyan'
                  }`}
                >
                  All
                </button>
                
                {currentTabFilters.map(filter => (
                  <button
                    key={filter.label}
                    onClick={() => setActiveFilter(filter.label)}
                    className={`px-4 py-2 rounded-xl font-mono text-sm transition-all flex items-center gap-2 ${
                      activeFilter === filter.label
                        ? 'bg-accent-cyan text-bg-primary font-bold shadow-[0_0_10px_rgba(0,245,255,0.3)]' 
                        : 'bg-bg-primary border border-border-glow/30 text-text-muted hover:border-accent-cyan hover:text-accent-cyan'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeFilter === filter.label ? 'bg-bg-primary' : filter.color}`}></span>
                    {filter.label}
                  </button>
                ))}
              </motion.div>
            )}
            
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
                    {searchQuery 
                      ? `No matches found for "${searchQuery}" across all resources.`
                      : `No resources available in ${tabs.find(t => t.id === activeTab)?.label}.`}
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
