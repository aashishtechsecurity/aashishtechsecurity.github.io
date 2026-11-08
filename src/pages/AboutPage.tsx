import { motion } from 'framer-motion';
import { 
  Shield, Terminal, Cpu, Globe, Search, Code, ExternalLink, 
  CheckCircle2, Award, Briefcase, Smartphone, Cloud, 
  Sparkles, Mail, Layers, ArrowUpRight, Compass
} from 'lucide-react';
import SEO from '../components/SEO';
import { Instagram, Linkedin, Medium, XTwitter, GitHub, YouTube } from '../components/Icons';

// Verified Experience Data
const EXPERIENCE = [
  {
    title: 'Security Analyst',
    company: 'Pragma Edge Inc',
    date: 'February 2024 - Present',
    duration: 'Present',
    location: 'Hyderabad, Telangana, India',
    type: 'Full-time',
    points: [
      'Performing vulnerability assessments, web application penetration testing, and static application security testing (SAST) to uncover security gaps before deployment.',
      'Managing and responding to real-time telemetry alerts by monitoring endpoint security solutions and network firewall systems.',
      'Documenting security incidents and remediation playbooks in strict alignment with the organizational Incident Response Plan.',
      'Conducting weekly security reviews of infrastructure logs, vulnerability scan reports, and regulatory compliance checklists.',
      'Collaborating directly with engineering teams to provide pragmatic, tailored remediation guidance for discovered vulnerabilities.'
    ]
  },
  {
    title: 'Cyber Security Intern',
    company: 'Safe your web',
    date: 'May 2023 - August 2023',
    duration: '4 months',
    location: 'Saket, New Delhi, India',
    type: 'Internship',
    points: [
      'Conducted security assessments of web applications targeting OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR).',
      'Utilized industry-standard pentesting tools and offensive methodologies to simulate real-world threat actors.',
      'Researched emerging threat trends and documented reproducible proof-of-concept exploits for technical teams.'
    ]
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'LTIMindtree',
    date: 'February 2023 - April 2023',
    duration: '3 months',
    location: 'India',
    type: 'Full-time',
    points: [
      'Trained in enterprise software engineering fundamentals, networking architectures, and modern cloud deployment lifecycles.',
      'Developed foundational understanding of enterprise IT systems and secure development practices.'
    ]
  },
  {
    title: 'Cybersecurity Administrator',
    company: 'Virtually Testing Foundation',
    date: 'January 2023 - March 2023',
    duration: '3 months',
    location: 'Los Angeles, California (Remote)',
    type: 'Apprenticeship',
    points: [
      'Applied the MITRE ATT&CK framework to analyze adversary tactics, techniques, and procedures (TTPs).',
      'Conducted OSINT research to identify attack surface exposures and domain spoofing risks.',
      'Mapped vulnerability assessment findings to OWASP Top 10 security standards and defense-in-depth controls.'
    ]
  },
  {
    title: 'Cyber Security & Digital Forensics Intern',
    company: 'Cyber Secured India',
    date: 'November 2022 - February 2023',
    duration: '4 months',
    location: 'India (Remote)',
    type: 'Internship',
    points: [
      'Gained hands-on knowledge in OSINT techniques, footprinting tools, and reconnaissance workflows.',
      'Practiced penetration testing methodologies across simulated targets and virtual vulnerability labs.',
      'Explored digital forensics principles for artifact recovery and cyber incident investigation.'
    ]
  }
];

// Verified Certifications
const CERTIFICATIONS = [
  { 
    title: 'CAP', 
    fullName: 'Certified AppSec Practitioner', 
    issuer: 'The SecOps Group',
    desc: 'Demonstrated proficiency in web application security testing, vulnerability discovery, and remediation verification.'
  },
  { 
    title: 'ISO 27001', 
    fullName: 'Information Security Management', 
    issuer: 'Cyber Security Master Certification',
    desc: 'Deep grounding in ISO/IEC 27001 ISMS principles, risk management, and security governance frameworks.'
  },
  { 
    title: 'CNSP', 
    fullName: 'Certified Network Security Practitioner', 
    issuer: 'The SecOps Group',
    desc: 'Validated competence in network infrastructure security, protocol inspection, firewall analysis, and defensive hardening.'
  },
  { 
    title: 'Jr Pentester', 
    fullName: 'Junior Penetration Tester', 
    issuer: 'TryHackMe',
    desc: 'Comprehensive offensive security path covering web hacking, network exploitation, and privilege escalation.'
  },
  { 
    title: 'API Pentest', 
    fullName: 'API Penetration Testing', 
    issuer: 'APIsec University',
    desc: 'Specialized testing across REST APIs, GraphQL, authentication mechanisms, and OWASP API Security Top 10 flaws.'
  }
];

// Technical Skill Matrix
const SKILLS = [
  {
    category: 'Application Security (AppSec)',
    icon: <Code className="w-5 h-5 text-accent-cyan" />,
    skills: ['SAST (Static Analysis)', 'DAST (Dynamic Analysis)', 'OWASP Top 10', 'API Security Testing', 'Business Logic Testing', 'Secure Code Review', 'Dependency Scanning (SCA)']
  },
  {
    category: 'Offensive Security & Pentesting',
    icon: <Terminal className="w-5 h-5 text-accent-green" />,
    skills: ['Reconnaissance & Enumeration', 'Vulnerability Assessment', 'Burp Suite Professional', 'Metasploit Framework', 'Nmap & Port Scanning', 'OSINT Investigations', 'Exploit PoC Development']
  },
  {
    category: 'Mobile Security',
    icon: <Smartphone className="w-5 h-5 text-accent-purple" />,
    skills: ['Android Pentesting', 'APK Decompilation (JADX)', 'MobSF (Static/Dynamic)', 'APKTool Reverse Engineering', 'Runtime Hooking (Frida)', 'Termux & NetHunter Environments']
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    skills: ['Linux Administration (Kali / Ubuntu)', 'AWS Security Fundamentals', 'Network Security & Firewalls', 'Security Incident Handling', 'Log Analysis & SIEM Concepts']
  },
  {
    category: 'AI Security & Emerging Tech',
    icon: <Cpu className="w-5 h-5 text-pink-400" />,
    skills: ['LLM Security & Threat Modeling', 'Prompt Injection (Direct / Indirect)', 'AI Red Teaming Fundamentals', 'MITRE ATLAS Framework', 'OWASP Top 10 for LLMs', 'Agentic Workflow Risks']
  }
];

// Real Tools Built by Aashish
const PROJECTS = [
  {
    name: 'httpAlive',
    version: 'v2.0.0',
    desc: 'High-performance, asynchronous web reconnaissance engine built for security researchers and bug bounty hunters. Probes target domains at scale, extracts metadata, fingerprints technology stacks, and automatically detects WAFs (Cloudflare, Akamai, AWS WAF, Imperva).',
    tech: ['Python 3', 'AsyncIO', 'HTTPX', 'Rich UI', 'Multi-threading'],
    github: 'https://github.com/aashishtechsecurity/httpAlive',
    highlight: 'Async Worker Pool & WAF Fingerprinting'
  },
  {
    name: 'JS-Scanner',
    version: 'v2.1',
    desc: 'Modernized asynchronous security reconnaissance scanner engineered to discover sensitive secrets, credentials, API keys, and endpoints from JavaScript files using Shannon Entropy analysis and 180+ custom regex signatures.',
    tech: ['Python', 'AsyncIO', 'Regex Engine', 'Entropy Analysis', 'Selenium'],
    github: 'https://github.com/aashishtechsecurity/JS-Scanner',
    highlight: '180+ Compiled Regex & Shannon Entropy'
  },
  {
    name: 'dirBrute',
    version: 'v1.0',
    desc: 'High-speed multithreaded directory and path brute-forcing tool designed for web application security assessments. Features intelligent user-agent rotation, custom header manipulation, and colorized terminal output.',
    tech: ['Python', 'Threading', 'HTTP Requests', 'Colorama'],
    github: 'https://github.com/aashishsec/dirBrute',
    highlight: 'User-Agent Rotation & Threaded Probing'
  },
  {
    name: 'CTI Monitor Platform',
    version: 'Live Tool',
    desc: 'Real-time Cyber Threat Intelligence feed aggregator and tracker monitoring active data breaches, ransomware groups, and dark web intelligence for blue teams and threat hunters.',
    tech: ['Threat Feeds', 'OSINT', 'Dark Web Telemetry', 'Web Dashboard'],
    demo: 'https://www.aashishtechsecurity.in/cti-monitor/',
    highlight: 'Real-time Ransomware & Breach Telemetry'
  }
];

// Research & Technical Publications
const RESEARCH_TOPICS = [
  {
    title: 'Modern Reconnaissance at Scale: Leveraging Asynchronous Architectures in Python',
    category: 'Tooling & Recon',
    desc: 'An architectural deep-dive into overcoming synchronous bottleneck limitations during wide-scope web asset discovery using non-blocking worker pools.',
    url: 'https://aashishtechsecurity.medium.com/'
  },
  {
    title: 'Demystifying the OWASP API Security Top 10 in Practical Testing',
    category: 'API Security',
    desc: 'A breakdown of Broken Object Level Authorization (BOLA), mass assignment, and improper asset management with real-world scenarios.',
    url: 'https://aashishtechsecurity.medium.com/'
  },
  {
    title: 'Android Security Essentials: Static Analysis with MobSF and APK Decompilation',
    category: 'Mobile Pentesting',
    desc: 'Step-by-step guide on tearing down APK files, analyzing AndroidManifest configurations, and identifying exported components.',
    url: 'https://aashishtechsecurity.medium.com/'
  },
  {
    title: 'Indirect Prompt Injection and Attack Surfaces in LLM-Integrated Applications',
    category: 'AI Security',
    desc: 'Analyzing how untrusted retrieval corpora can manipulate downstream AI reasoning and tool-calling execution.',
    url: 'https://aashishtechsecurity.medium.com/'
  }
];

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SEO 
        title="About Aashish Bande — Cybersecurity Professional & Researcher"
        description="Professional cybersecurity portfolio of Aashish Bande. Security Analyst at Pragma Edge Inc specializing in Application Security, Penetration Testing, OSINT, and Telugu cybersecurity education."
      />

      {/* SECTION 1: ABOUT HERO */}
      <section className="relative py-16 lg:py-24 border-b border-border-glow/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Bio & Positioning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <span>Security Analyst @ Pragma Edge Inc</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight">
                Hi, I'm <span className="text-accent-cyan text-glow-cyan">Aashish.</span>
              </h1>

              <p className="text-lg sm:text-xl font-mono text-accent-purple font-medium">
                Cybersecurity Professional · Security Researcher · Educator
              </p>

              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                I am a cybersecurity analyst with a strong engineering foundation (B.Tech from Vellore Institute of Technology). At 
                <strong className="text-text-primary"> Pragma Edge Inc</strong>, I focus on vulnerability assessments, application security (SAST/DAST), 
                and incident response. Beyond day-to-day defense, I actively conduct independent security research, develop open-source offensive tools, 
                and lead <strong className="text-accent-cyan">AashishTechSecurity</strong> — empowering over 13,000 learners with practical, regional-language cybersecurity education.
              </p>

              {/* Verified Meta Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
                <div className="p-3 bg-bg-card border border-border-glow/30 rounded-lg">
                  <span className="text-text-muted block mb-1">Base</span>
                  <span className="text-text-primary font-bold">Hyderabad, India 🇮🇳</span>
                </div>
                <div className="p-3 bg-bg-card border border-border-glow/30 rounded-lg">
                  <span className="text-text-muted block mb-1">Primary Focus</span>
                  <span className="text-accent-cyan font-bold">AppSec & Pentesting</span>
                </div>
                <div className="p-3 bg-bg-card border border-border-glow/30 rounded-lg col-span-2 sm:col-span-1">
                  <span className="text-text-muted block mb-1">Education</span>
                  <span className="text-text-primary font-bold">B.Tech (VIT, 8.89 CGPA)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/aashishsec" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/aashishtechsecurity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-bg-card border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all inline-flex items-center gap-2 text-sm"
                >
                  <GitHub className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aashishsec" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-bg-card/50 border border-border-glow/40 text-text-muted hover:text-accent-cyan rounded-lg transition-all inline-flex items-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Technical Identity Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-bg-card border border-border-glow/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl hover:border-accent-cyan/60 transition-all group">
                <div className="flex items-center justify-between border-b border-border-glow/30 pb-4 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent-green">
                    <Terminal className="w-4 h-4" />
                    <span>aashish@ats-secbox ~ $ id</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
                </div>

                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-border-glow/20">
                    <span className="text-text-muted">Operator</span>
                    <span className="text-text-primary font-semibold">Aashish Bande</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-border-glow/20">
                    <span className="text-text-muted">Current Role</span>
                    <span className="text-accent-cyan font-semibold">Security Analyst</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-border-glow/20">
                    <span className="text-text-muted">Organization</span>
                    <span className="text-text-primary">Pragma Edge Inc</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-border-glow/20">
                    <span className="text-text-muted">Platform</span>
                    <span className="text-accent-purple font-semibold">AashishTechSecurity</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-border-glow/20">
                    <span className="text-text-muted">Core Stack</span>
                    <span className="text-text-primary">Python, Linux, Burp, SAST</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-text-muted">Security Mission</span>
                    <span className="text-accent-green font-semibold">Build → Secure → Educate</span>
                  </div>
                </div>

                {/* Stat Counters */}
                <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-border-glow/30 text-center">
                  <div className="p-2 rounded bg-bg-primary/50 border border-border-glow/20">
                    <div className="text-2xl font-bold font-display text-accent-cyan">5+</div>
                    <div className="text-[10px] font-mono text-text-muted uppercase">Certifications</div>
                  </div>
                  <div className="p-2 rounded bg-bg-primary/50 border border-border-glow/20">
                    <div className="text-2xl font-bold font-display text-accent-purple">13K+</div>
                    <div className="text-[10px] font-mono text-text-muted uppercase">Community</div>
                  </div>
                  <div className="p-2 rounded bg-bg-primary/50 border border-border-glow/20">
                    <div className="text-2xl font-bold font-display text-accent-green">100%</div>
                    <div className="text-[10px] font-mono text-text-muted uppercase">Telugu Content</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL SUMMARY */}
      <section className="py-16 bg-bg-primary relative border-b border-border-glow/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Professional Summary</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
              Defensive rigor combined with an offensive security perspective.
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              Cybersecurity professional with hands-on experience in application security, penetration testing, vulnerability assessment, 
              OSINT, and technical security research. Proven track record in evaluating web architectures, triaging incident alerts, 
              and automating security workflows using asynchronous Python tools. Dedicated to bridging the knowledge gap through 
              clear, accessible regional-language cybersecurity education.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE TIMELINE */}
      <section className="py-20 relative border-b border-border-glow/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
              Professional Experience
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Verified security analyst, offensive security, and enterprise engineering roles.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-accent-cyan before:via-accent-purple before:to-border-glow/20">
            {EXPERIENCE.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group"
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-accent-cyan bg-bg-card flex items-center justify-center text-accent-cyan shadow-[0_0_12px_rgba(0,245,255,0.4)] z-10 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                </div>

                {/* Content Card (Alternating on Desktop) */}
                <div className={`ml-12 sm:ml-0 w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-bg-card border border-border-glow/40 hover:border-accent-cyan transition-all hover:box-glow-cyan ${idx % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-accent-cyan px-2.5 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                      {job.date}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-text-primary">
                    {job.title}
                  </h3>
                  <div className="text-accent-purple font-medium text-sm mb-1">
                    {job.company}
                  </div>
                  {job.location && (
                    <div className="text-text-muted text-xs font-mono mb-4">
                      {job.location}
                    </div>
                  )}

                  <ul className="space-y-2 mt-3 text-xs sm:text-sm text-text-muted">
                    {job.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-accent-cyan mt-1 flex-shrink-0 font-bold">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL EXPERTISE MATRIX */}
      <section className="py-20 bg-bg-primary/50 relative border-b border-border-glow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Skill Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
              Technical Expertise
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Categorized security disciplines backed by real projects and daily operational practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-bg-card border border-border-glow/40 hover:border-accent-cyan/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-bg-primary border border-border-glow/30 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-text-primary text-base">
                      {item.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-primary text-text-muted border border-border-glow/30 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROJECTS SHOWCASE */}
      <section className="py-20 relative border-b border-border-glow/30" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green font-mono text-xs mb-3">
                <Code className="w-3.5 h-3.5" />
                <span>Open Source Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
                Featured Security Tools
              </h2>
              <p className="text-text-muted text-sm sm:text-base mt-2">
                "I don't just learn cybersecurity — I build tools for it."
              </p>
            </div>
            <a 
              href="https://github.com/aashishtechsecurity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-cyan font-mono text-xs sm:text-sm hover:underline inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Explore all GitHub Repositories</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-glow/40 hover:border-accent-cyan transition-all hover:box-glow-cyan flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-accent-cyan font-bold px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                      {proj.version}
                    </span>
                    <span className="font-mono text-xs text-accent-purple">
                      {proj.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-3">
                    {proj.name}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-mono">
                    {proj.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-primary text-text-primary/70 border border-border-glow/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border-glow/20">
                    {proj.github && (
                      <a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-bg-primary hover:bg-bg-primary/80 border border-border-glow text-accent-cyan text-xs font-mono font-bold rounded flex items-center gap-2 transition-all hover:border-accent-cyan"
                      >
                        <GitHub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {proj.demo && (
                      <a 
                        href={proj.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-accent-cyan text-bg-primary text-xs font-mono font-bold rounded flex items-center gap-2 hover:bg-[#00d5ff] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Platform</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SECURITY RESEARCH & WRITEUPS */}
      <section className="py-20 bg-bg-primary/50 relative border-b border-border-glow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-xs mb-3">
                <Search className="w-3.5 h-3.5" />
                <span>Publications & Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
                Security Research & Writeups
              </h2>
              <p className="text-text-muted text-sm sm:text-base mt-2">
                Detailed breakdowns of attack techniques, vulnerability classes, and defense engineering.
              </p>
            </div>
            <a 
              href="https://aashishtechsecurity.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-purple font-mono text-xs sm:text-sm hover:underline inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Read on Medium</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_TOPICS.map((res, idx) => (
              <a 
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-bg-card border border-border-glow/40 hover:border-accent-purple/60 transition-all hover:box-glow-purple group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-accent-purple font-semibold uppercase tracking-wider">
                    {res.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-purple transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-purple transition-colors mb-2">
                  {res.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {res.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTENT CREATION & COMMUNITY */}
      <section className="py-20 relative border-b border-border-glow/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border-glow/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
                <Globe className="w-3.5 h-3.5" />
                <span>Cybersecurity · తెలుగులో</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
                Democratizing Security Education in Telugu
              </h2>

              <p className="text-text-muted text-base leading-relaxed">
                Cybersecurity has historically been dominated by high English-barrier resources. Through 
                <strong className="text-text-primary"> AashishTechSecurity</strong>, I produce structured, real-world educational content in Telugu 
                — covering ethical hacking workflows, OSINT investigations, Termux setup, and defensive tactics for over 13,000+ aspiring professionals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-bg-primary border border-border-glow/30">
                  <div className="text-accent-cyan font-bold text-lg mb-1">Instagram</div>
                  <div className="text-text-muted">@aashishtechsecurity</div>
                  <div className="text-text-primary mt-2">13k+ Followers · Reels & Demos</div>
                </div>
                <div className="p-4 rounded-xl bg-bg-primary border border-border-glow/30">
                  <div className="text-red-500 font-bold text-lg mb-1">YouTube</div>
                  <div className="text-text-muted">@AashishTechSecurity</div>
                  <div className="text-text-primary mt-2">Tutorials & Ethical Hacking</div>
                </div>
                <div className="p-4 rounded-xl bg-bg-primary border border-border-glow/30">
                  <div className="text-accent-purple font-bold text-lg mb-1">100 Days</div>
                  <div className="text-text-muted">Structured Series</div>
                  <div className="text-text-primary mt-2">Zero-to-Hero ethical hacking roadmap</div>
                </div>
                <div className="p-4 rounded-xl bg-bg-primary border border-border-glow/30">
                  <div className="text-accent-green font-bold text-lg mb-1">Medium</div>
                  <div className="text-text-muted">Technical Articles</div>
                  <div className="text-text-primary mt-2">Deep-dives on tools and methodologies</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="https://www.youtube.com/@AashishTechSecurity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] inline-flex items-center gap-2 text-sm"
                >
                  <YouTube className="w-4 h-4" />
                  <span>Subscribe on YouTube</span>
                </a>
                <a 
                  href="https://www.instagram.com/aashishtechsecurity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>
                <a 
                  href="https://aashishtechsecurity.medium.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-bg-primary border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-cyan transition-all inline-flex items-center gap-2 text-sm"
                >
                  <Medium className="w-4 h-4" />
                  <span>Read Medium Blogs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CERTIFICATIONS & RECOGNITION */}
      <section className="py-20 bg-bg-primary/50 relative border-b border-border-glow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
              Certifications & Continuous Learning
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Verified certifications and continuous hands-on skill validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-bg-card border border-border-glow/40 hover:border-accent-cyan transition-all hover:box-glow-cyan flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-2xl text-accent-cyan">
                      {cert.title}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-bg-primary text-text-muted border border-border-glow/30">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-base mb-2">
                    {cert.fullName}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ACHIEVEMENTS & MILESTONES */}
      <section className="py-20 relative border-b border-border-glow/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
              Impact & Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 text-center">
              <div className="text-3xl font-display font-bold text-accent-cyan mb-2">13,000+</div>
              <h3 className="font-bold text-text-primary mb-1">Cyber Community</h3>
              <p className="text-text-muted text-xs leading-relaxed">Active student and professional community learning offensive security in Telugu.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 text-center">
              <div className="text-3xl font-display font-bold text-accent-purple mb-2">Open Source</div>
              <h3 className="font-bold text-text-primary mb-1">Tooling Author</h3>
              <p className="text-text-muted text-xs leading-relaxed">Created httpAlive, JS-Scanner, and dirBrute to assist bug bounty hunters with recon automation.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 text-center">
              <div className="text-3xl font-display font-bold text-accent-green mb-2">100+</div>
              <h3 className="font-bold text-text-primary mb-1">Guides & Writeups</h3>
              <p className="text-text-muted text-xs leading-relaxed">Published practical technical roadmaps, cheatsheets, and tool walkthroughs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: PERSONAL CYBERSECURITY PHILOSOPHY */}
      <section className="py-20 bg-bg-primary/50 relative border-b border-border-glow/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
              My Approach to Cybersecurity
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 space-y-2">
                <h3 className="font-display font-bold text-accent-cyan text-lg">1. Build to Understand the Break</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Real security skill comes from engineering experience. When you write asynchronous networking code, you understand exactly how race conditions and packet timeouts occur in testing.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 space-y-2">
                <h3 className="font-display font-bold text-accent-purple text-lg">2. Practice Over Pure Theory</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Certifications validate foundational knowledge, but real instinct is earned through hours in the terminal, CTFs, code inspection, and real-world triage.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 space-y-2">
                <h3 className="font-display font-bold text-accent-green text-lg">3. Responsible Research & Ethics</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Offensive security is a tool for defense. The purpose of discovering an attack vector is to fortify systems, eliminate risks, and protect users.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-bg-card border border-border-glow/30 space-y-2">
                <h3 className="font-display font-bold text-blue-400 text-lg">4. Inclusive Knowledge Sharing</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Technical knowledge should not be hoarded behind linguistic barriers. Bringing high-grade cybersecurity education to regional languages lifts the entire tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: CURRENTLY LEARNING */}
      <section className="py-20 relative border-b border-border-glow/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Active Research</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-text-primary">
              Currently Learning & Exploring
            </h2>
            <p className="text-text-muted text-sm mt-2">
              Focus areas actively expanding my technical horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-bg-card border border-border-glow/30">
              <div className="text-accent-cyan font-bold text-sm mb-1">AI Red Teaming</div>
              <div className="text-text-muted">Evaluating prompt injection, jailbreaks, and adversarial defenses in LLMs.</div>
            </div>
            <div className="p-4 rounded-xl bg-bg-card border border-border-glow/30">
              <div className="text-accent-purple font-bold text-sm mb-1">Agentic AI Risks</div>
              <div className="text-text-muted">Studying MCP server security, tool poisoning, and autonomous agent loops.</div>
            </div>
            <div className="p-4 rounded-xl bg-bg-card border border-border-glow/30">
              <div className="text-accent-green font-bold text-sm mb-1">DevSecOps & SAST</div>
              <div className="text-text-muted">Automating code security gating and dependency auditing in CI/CD pipelines.</div>
            </div>
            <div className="p-4 rounded-xl bg-bg-card border border-border-glow/30">
              <div className="text-blue-400 font-bold text-sm mb-1">Cloud Threat Modeling</div>
              <div className="text-text-muted">IAM least privilege policies, container hardening, and cloud attack chains.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT & COLLABORATION */}
      <section className="py-24 bg-bg-card/40 relative" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Collaboration & Inquiries</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-primary tracking-tight">
            Let's Connect
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in security consulting, application assessments, research collaboration, 
            or educational workshops? Feel free to reach out directly through any of my verified channels.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/aashishsec" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn (@aashishsec)</span>
            </a>
            <a 
              href="https://github.com/aashishtechsecurity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-bg-card border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <GitHub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.instagram.com/aashishtechsecurity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-bg-card border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-purple hover:text-accent-purple transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/@AashishTechSecurity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-bg-card border border-border-glow text-text-primary font-bold rounded-lg hover:border-red-500 hover:text-red-400 transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <YouTube className="w-4 h-4 text-red-500" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://x.com/AashishTechSec" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 bg-bg-card border border-border-glow text-text-primary font-bold rounded-lg hover:border-slate-400 hover:text-white transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <XTwitter className="w-4 h-4" />
              <span>X (@AashishTechSec)</span>
            </a>
            <a 
              href="mailto:privacy@aashishtechsecurity.in" 
              className="px-6 py-3.5 bg-bg-card border border-border-glow text-accent-green font-mono font-bold rounded-lg hover:border-accent-green transition-all inline-flex items-center gap-2 text-sm active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-text-muted">
            Response turnaround within 24-48 hours for verified inquiries.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
