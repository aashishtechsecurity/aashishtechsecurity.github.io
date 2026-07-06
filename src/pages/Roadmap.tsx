import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Terminal, Network, Shield, Globe, 
  Swords, ShieldCheck, Cpu, Laptop, GraduationCap,
  ChevronDown, ExternalLink, Search
} from 'lucide-react';

const HASH_TO_TAB = {
  '#Cybersecurity': 'cybersecurity',
  '#BugBounty': 'bugbounty',
} as const;

const TAB_TO_HASH = {
  cybersecurity: '#Cybersecurity',
  bugbounty: '#BugBounty',
} as const;


const CYBERSECURITY_ROADMAP = [
  {
    phase: "Foundation Phase",
    description: "Build core knowledge in computing, networking, and basic security principles.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    topics: [
      {
        title: "1. Computer Fundamentals",
        icon: <Terminal className="w-5 h-5" />,
        subTopics: [
          {
            name: "Operating Systems",
            resources: [
              { name: "CS50: Intro to Computer Science", url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" },
              { name: "Operating Systems: Three Easy Pieces", url: "http://pages.cs.wisc.edu/~remzi/OSTEP/" },
              { name: "MIT 6.S081: OS Engineering", url: "https://pdos.csail.mit.edu/6.S081/2020/" },
              { name: "Intro to OS – Georgia Tech (Udacity)", url: "https://www.udacity.com/course/introduction-to-operating-systems--ud923" },
              { name: "OverTheWire: Bandit", url: "https://overthewire.org/wargames/bandit/" },
              { name: "QEMU", url: "https://www.qemu.org/" },
              { name: "VirtualBox", url: "https://www.virtualbox.org/" }
            ],
            exercises: "Install and explore Windows, Ubuntu, Arch, macOS. Learn memory management, scheduling, file systems."
          },
          {
            name: "Networking Basics",
            resources: [
              { name: "Computer Networking: Top-Down Approach", url: "https://gaia.cs.umass.edu/kurose_ross/index.php" },
              { name: "Stanford CS144: Computer Networking", url: "https://cs144.github.io/" },
              { name: "Practical Networking", url: "https://www.practicalnetworking.net/" },
              { name: "Wireshark Tutorial (YouTube)", url: "https://www.youtube.com/playlist?list=PLW8bTPfXNGdC5Co0VnBK1yVzAwSSphzpJ" },
              { name: "Cisco Networking – Packet Tracer", url: "https://www.netacad.com/courses/packet-tracer" },
              { name: "Wireshark", url: "https://www.wireshark.org/" },
              { name: "tcpdump", url: "https://www.tcpdump.org/" },
              { name: "GNS3", url: "https://www.gns3.com/" }
            ],
            exercises: "Simulate networks with GNS3 or Packet Tracer. Analyze packets with Wireshark. Practice subnetting, DNS, firewall rules."
          },
          {
            name: "Programming Fundamentals",
            resources: [
              { name: "Python for Everybody", url: "https://www.py4e.com/" },
              { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
              { name: "Codecademy Python Course", url: "https://www.codecademy.com/learn/learn-python-3" },
              { name: "freeCodeCamp JS Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
              { name: "CS50's Web Programming", url: "https://cs50.harvard.edu/web/" },
              { name: "Visual Studio Code", url: "https://code.visualstudio.com/" },
              { name: "PyCharm", url: "https://www.jetbrains.com/pycharm/" },
              { name: "Jupyter Notebooks", url: "https://jupyter.org/" },
              { name: "Replit", url: "https://replit.com/" },
              { name: "HackerRank", url: "https://www.hackerrank.com/" },
              { name: "LeetCode", url: "https://leetcode.com/" }
            ],
            exercises: "Build simple security tools (port scanner, password generator). Automate repetitive security tasks. Solve coding challenges."
          },
          {
            name: "Linux Fundamentals",
            resources: [
              { name: "Linux Journey", url: "https://linuxjourney.com/" },
              { name: "Linux Command Line Basics", url: "https://ubuntu.com/tutorials/command-line-for-beginners#1-overview" },
              { name: "Linux Survival", url: "https://linuxsurvival.com/" },
              { name: "Linux From Scratch", url: "https://www.linuxfromscratch.org/" },
              { name: "Vagrant", url: "https://www.vagrantup.com/" },
              { name: "Kali Linux", url: "https://www.kali.org/" }
            ],
            exercises: "Install and configure a Linux distribution. Master bash scripting for automation. Set up a LAMP/LEMP stack. Configure user permissions."
          }
        ]
      },
      {
        title: "2. Information Security Principles",
        icon: <Shield className="w-5 h-5" />,
        subTopics: [
          {
            name: "CIA Triad & Security Fundamentals",
            resources: [
              { name: "Cybrary Intro to IT & Cybersecurity", url: "https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/" },
              { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
              { name: "edX Intro to Cybersecurity", url: "https://www.edx.org/course/introduction-to-cybersecurity" },
              { name: "Coursera Information Security", url: "https://www.coursera.org/specializations/information-security" }
            ],
            exercises: "Analyze case studies of security breaches. Create a security policy for a fictional organization. Conduct a basic risk assessment."
          },
          {
            name: "Cryptography Basics",
            resources: [
              { name: "Cryptography I (Stanford)", url: "https://www.coursera.org/learn/crypto" },
              { name: "Practical Cryptography for Developers", url: "https://cryptobook.nakov.com/" },
              { name: "Khan Academy Cryptography", url: "https://www.khanacademy.org/computing/computer-science/cryptography" },
              { name: "Crypto101", url: "https://www.crypto101.io/" },
              { name: "CyberChef", url: "https://gchq.github.io/CyberChef/" },
              { name: "OpenSSL", url: "https://www.openssl.org/" },
              { name: "Hashcat", url: "https://hashcat.net/hashcat/" },
              { name: "Cryptopals Challenges", url: "https://cryptopals.com/" }
            ],
            exercises: "Implement basic encryption/decryption algorithms. Analyze cryptographic protocols. Solve cryptography challenges."
          },
          {
            name: "Security Policies & Compliance",
            resources: [
              { name: "SANS Security Policy Templates", url: "https://www.sans.org/security-resources/policies/" },
              { name: "ISO 27001 Overview", url: "https://www.iso.org/isoiec-27001-information-security.html" },
              { name: "NIST Special Publications", url: "https://csrc.nist.gov/publications/sp" },
              { name: "GDPR Compliance", url: "https://gdpr.eu/" }
            ],
            exercises: "Create a security policy for a fictional organization. Conduct a gap analysis against a security framework. Develop an incident response plan."
          }
        ]
      },
      {
        title: "3. Basic Security Tools",
        icon: <Laptop className="w-5 h-5" />,
        subTopics: [
          {
            name: "Security Tool Fundamentals",
            resources: [
              { name: "SANS SEC504", url: "https://www.sans.org/cyber-security-courses/hacker-techniques-exploits-incident-handling/" },
              { name: "Black Hills Webcasts", url: "https://www.blackhillsinfosec.com/blog/webcasts/" },
              { name: "Cybrary OSINT", url: "https://www.cybrary.it/practice-lab/perform-open-source-intelligence" },
              { name: "Metasploit", url: "https://www.metasploit.com/" },
              { name: "Nmap", url: "https://nmap.org/" }
            ],
            exercises: "Set up a security lab environment. Perform basic reconnaissance on a target (with permission). Use OSINT tools to gather info."
          },
          {
            name: "Vulnerability Scanning",
            resources: [
              { name: "OpenVAS Tutorial", url: "https://www.openvas.org/" },
              { name: "Nessus Essentials Tutorial", url: "https://www.tenable.com/products/nessus/nessus-essentials" },
              { name: "OWASP ZAP Getting Started", url: "https://www.zaproxy.org/getting-started/" },
              { name: "Nikto", url: "https://cirt.net/Nikto2" },
              { name: "Metasploitable", url: "https://sourceforge.net/projects/metasploitable/" }
            ],
            exercises: "Set up a vulnerable machine. Perform vulnerability scans and analyze results. Create vulnerability reports."
          }
        ]
      }
    ]
  },
  {
    phase: "Technical Skills Phase",
    description: "Develop practical security skills across various domains.",
    icon: <Network className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    topics: [
      {
        title: "4. Network Security",
        icon: <Network className="w-5 h-5" />,
        subTopics: [
          {
            name: "Network Protocols & Security",
            resources: [
              { name: "Professor Messer Network+", url: "https://www.professormesser.com/network-plus/n10-008/n10-008-training-course/" },
              { name: "SANS SEC560", url: "https://www.sans.org/cyber-security-courses/network-penetration-testing-ethical-hacking/" },
              { name: "Cybrary Network Security", url: "https://www.cybrary.it/course/cyber-network-security" },
              { name: "Bettercap", url: "https://www.bettercap.org/" },
              { name: "Zeek", url: "https://zeek.org/" }
            ],
            exercises: "Perform network reconnaissance with Nmap. Analyze traffic for security issues. Detect/prevent ARP spoofing. Configure NSM."
          },
          {
            name: "Firewalls & IDS/IPS",
            resources: [
              { name: "pfSense Fundamentals", url: "https://www.netgate.com/training/pfsense-fundamentals-and-advanced-application" },
              { name: "Snort IDS Fundamentals", url: "https://iritt.medium.com/ids-fundamentals-cyber-security-101-security-solutions-tryhackme-walkthrough-23edba97cfa3" },
              { name: "Suricata IDS/IPS", url: "https://suricata.io/" },
              { name: "Cisco Firewall Config", url: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/security/how-to-setup-a-firewall.html" },
              { name: "pfSense", url: "https://www.pfsense.org/" },
              { name: "Snort", url: "https://www.snort.org/" },
              { name: "Security Onion", url: "https://securityonionsolutions.com/" }
            ],
            exercises: "Set up a firewall with pfSense. Configure and tune IDS/IPS rules. Analyze and respond to alerts. Create custom detection rules."
          },
          {
            name: "VPN & Secure Communications",
            resources: [
              { name: "OpenVPN Setup Guide", url: "https://openvpn.net/community-resources/how-to/" },
              { name: "WireGuard VPN Tutorial", url: "https://www.wireguard.com/quickstart/" },
              { name: "IPsec VPN Configuration", url: "https://www.cisco.com/c/en/us/support/docs/routers/1700-series-modular-access-routers/71462-rtr-l2l-ipsec-split.html" },
              { name: "SSL/TLS Deep Dive", url: "https://www.feistyduck.com/library/openssl-cookbook/" },
              { name: "Strongswan", url: "https://www.strongswan.org/" }
            ],
            exercises: "Set up a site-to-site VPN. Configure remote access VPN. Implement certificate-based auth. Analyze VPN traffic."
          }
        ]
      },
      {
        title: "5. System Security",
        icon: <ShieldCheck className="w-5 h-5" />,
        subTopics: [
          {
            name: "Operating System Security",
            resources: [
              { name: "Windows Security Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/" },
              { name: "Linux Security Fundamentals", url: "https://www.udemy.com/course/linux-security-fundamentals/" },
              { name: "macOS Security Guide", url: "https://github.com/drduh/macOS-Security-and-Privacy-Guide" },
              { name: "SANS SEC505: Securing Windows", url: "https://www.cybersecuritycourses.com/course/sec505-securing-windows-and-powershell-automation/" },
              { name: "MS Baseline Security Analyzer", url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/" },
              { name: "Lynis", url: "https://cisofy.com/lynis/" },
              { name: "OpenSCAP", url: "https://www.open-scap.org/" },
              { name: "Sysinternals Suite", url: "https://docs.microsoft.com/en-us/sysinternals/" }
            ],
            exercises: "Harden a Windows/Linux server. Implement security baselines. Perform security audits. Configure secure authentication."
          },
          {
            name: "Endpoint Protection",
            resources: [
              { name: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks/" },
              { name: "MS Defender for Endpoint", url: "https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/" },
              { name: "EDR Guide", url: "https://www.crowdstrike.com/cybersecurity-101/endpoint-security/endpoint-detection-and-response-edr/" },
              { name: "ClamAV", url: "https://www.clamav.net/" },
              { name: "OSSEC", url: "https://www.ossec.net/" },
              { name: "Wazuh", url: "https://wazuh.com/" }
            ],
            exercises: "Configure endpoint protection solutions. Implement app whitelisting. Detect malware infections. Create security policies."
          },
          {
            name: "Vulnerability Management",
            resources: [
              { name: "Qualys Vuln Management", url: "https://www.qualys.com/apps/vulnerability-management/" },
              { name: "NIST Vulnerability Management", url: "https://nvd.nist.gov/vuln/search" },
              { name: "Nexpose", url: "https://www.rapid7.com/products/nexpose/" }
            ],
            exercises: "Perform vulnerability assessments. Prioritize based on risk. Develop remediation plans. Implement processes."
          },
          {
            name: "Identity & Access Management (IAM)",
            resources: [
              { name: "Zero Trust Architecture (NIST)", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
              { name: "Microsoft Identity Training", url: "https://learn.microsoft.com/en-us/training/paths/explore-identity-azure-ad/" },
              { name: "OAuth 2.0 & OIDC", url: "https://oauth.net/2/" },
              { name: "Google BeyondCorp", url: "https://cloud.google.com/beyondcorp" }
            ],
            exercises: "Implement SSO using SAML or OIDC. Configure Role-Based Access Control (RBAC). Design a Zero Trust network model."
          }
        ]
      },
      {
        title: "6. Web Application Security",
        icon: <Globe className="w-5 h-5" />,
        subTopics: [
          {
            name: "OWASP Top 10",
            resources: [
              { name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
              { name: "Web Security Academy", url: "https://portswigger.net/web-security" },
              { name: "SANS SEC542", url: "https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking/" },
              { name: "Kontra OWASP Top 10", url: "https://application.security/free/owasp-top-10" },
              { name: "Burp Suite", url: "https://portswigger.net/burp" },
              { name: "SQLmap", url: "https://sqlmap.org/" },
              { name: "DVWA", url: "https://github.com/digininja/DVWA" }
            ],
            exercises: "Set up a vulnerable web application. Identify and exploit common web vulnerabilities. Implement security controls."
          },
          {
            name: "Web App Penetration Testing",
            resources: [
              { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/" },
              { name: "HackTheBox Web Challenges", url: "https://www.hackthebox.eu/" },
              { name: "PentesterLab", url: "https://pentesterlab.com/" },
              { name: "Dirsearch", url: "https://github.com/maurosoria/dirsearch" },
              { name: "Wfuzz", url: "https://github.com/xmendez/wfuzz" }
            ],
            exercises: "Perform full web app pen-test. Write a security report. Exploit and chain vulnerabilities. Do bug bounties."
          },
          {
            name: "Secure Coding Practices",
            resources: [
              { name: "Secure Coding in Python", url: "https://github.com/Ericsson/secure_coding_one_stop_shop_for_python" },
              { name: "OWASP Secure Coding Practices", url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/" },
              { name: "Secure Coding in Java", url: "https://www.oracle.com/java/technologies/javase/seccodeguide.html" },
              { name: "MS Secure Coding Guidelines", url: "https://docs.microsoft.com/en-us/previous-versions/visualstudio/" },
              { name: "SonarQube", url: "https://www.sonarqube.org/" },
              { name: "OWASP Dependency-Check", url: "https://owasp.org/www-project-dependency-check/" },
              { name: "Snyk", url: "https://snyk.io/" },
              { name: "Checkmarx", url: "https://www.checkmarx.com/" },
              { name: "Vulert", url: "https://www.vulert.com/" }
            ],
            exercises: "Review code for vulnerabilities. Implement secure auth. Secure data storage. Integrate security into SDLC."
          },
          {
            name: "API Security",
            resources: [
              { name: "OWASP API Security Top 10", url: "https://owasp.org/www-project-api-security/" },
              { name: "APIsec University", url: "https://www.apisecuniversity.com/" },
              { name: "crAPI (Completely Ridiculous API)", url: "https://github.com/OWASP/crAPI" },
              { name: "Postman API Security", url: "https://www.postman.com/api-security/" }
            ],
            exercises: "Test REST and GraphQL APIs for vulnerabilities. Analyze JWT tokens. Implement rate limiting and authentication."
          },
          {
            name: "DevSecOps & CI/CD Security",
            resources: [
              { name: "GitHub Advanced Security", url: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" },
              { name: "GitLab DevSecOps", url: "https://about.gitlab.com/solutions/devsecops/" },
              { name: "OWASP DefectDojo", url: "https://github.com/DefectDojo/django-DefectDojo" },
              { name: "Trivy Scanner", url: "https://github.com/aquasecurity/trivy" }
            ],
            exercises: "Integrate SAST/DAST tools into a GitHub Actions pipeline. Set up automated secret scanning."
          }
        ]
      }
    ]
  },
  {
    phase: "Specialization Phase",
    description: "Focus on offensive or defensive security specializations.",
    icon: <Swords className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    topics: [
      {
        title: "7. Offensive Security (Red Team)",
        icon: <Swords className="w-5 h-5" />,
        subTopics: [
          {
            name: "Penetration Testing Methodology",
            resources: [
              { name: "TryHackMe Beginner Path", url: "https://tryhackme.com/path/outline/beginner" },
              { name: "HackTheBox Academy", url: "https://academy.hackthebox.com/" },
              { name: "SANS Pen Test Roadmap", url: "https://www.sans.org/cyber-security-skills-roadmap/" },
              { name: "OSCP", url: "https://www.offensive-security.com/pwk-oscp/" },
              { name: "PTES Standard", url: "http://www.pentest-standard.org/" },
              { name: "Cobalt Strike", url: "https://www.cobaltstrike.com/" },
              { name: "Empire", url: "https://github.com/BC-SECURITY/Empire" },
              { name: "Covenant", url: "https://github.com/cobbr/Covenant" }
            ],
            exercises: "Complete CTF challenges. Perform lab pen tests. Write professional reports. Practice OSCP-like challenges."
          },
          {
            name: "Exploitation Techniques",
            resources: [
              { name: "Metasploit Unleashed", url: "https://www.offensive-security.com/metasploit-unleashed/" },
              { name: "OSCP Prep Guide", url: "https://johnjhacking.com/blog/the-oscp-preperation-guide-2020/" },
              { name: "Exploit Development", url: "https://github.com/wtsxDev/Exploit-Development" },
              { name: "Buffer Overflow Tutorial", url: "https://www.youtube.com/watch?v=1S0aBV-Waeo" },
              { name: "GDB", url: "https://www.gnu.org/software/gdb/" },
              { name: "IDA Pro", url: "https://hex-rays.com/ida-pro/" },
              { name: "Ghidra", url: "https://ghidra-sre.org/" }
            ],
            exercises: "Develop custom exploits. Analyze/modify public exploits. Practice buffer overflows. Perform post-exploitation."
          },
          {
            name: "Social Engineering",
            resources: [
              { name: "Science of Human Hacking", url: "https://www.social-engineer.org/" },
              { name: "Social-Engineer Toolkit (SET)", url: "https://github.com/trustedsec/social-engineer-toolkit" },
              { name: "SANS SEC567", url: "https://www.sans.org/cyber-security-courses/social-engineering-security/" },
              { name: "Gophish", url: "https://getgophish.com/" },
              { name: "King Phisher", url: "https://github.com/securestate/king-phisher" },
              { name: "SpiderFoot", url: "https://www.spiderfoot.net/" }
            ],
            exercises: "Create a phishing campaign (controlled). Develop social engineering scenarios. Practice pretexting."
          }
        ]
      },
      {
        title: "8. Defensive Security (Blue Team)",
        icon: <ShieldCheck className="w-5 h-5" />,
        subTopics: [
          {
            name: "Security Operations Center (SOC)",
            resources: [
              { name: "SOC Analyst Learning Path", url: "https://app.letsdefend.io/path/soc-analyst-learning-path" },
              { name: "Blue Team Labs Online", url: "https://blueteamlabs.online/" },
              { name: "SANS SEC450", url: "https://www.sans.org/cyber-security-courses/blue-team-fundamentals-security-operations-analysis/" },
              { name: "Cybrary SOC Analyst", url: "https://www.cybrary.it/career-path/soc-analyst" },
              { name: "Splunk", url: "https://www.splunk.com/" },
              { name: "ELK Stack", url: "https://www.elastic.co/elastic-stack" },
              { name: "TheHive", url: "https://thehive-project.org/" }
            ],
            exercises: "Set up a SIEM solution. Create detection rules. Perform log analysis. Develop IR playbooks."
          },
          {
            name: "Incident Response",
            resources: [
              { name: "SANS IR Handbook", url: "https://www.sans.org/white-papers/33901/" },
              { name: "NIST IR Framework", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf" },
              { name: "SANS FOR508", url: "https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/" },
              { name: "Velociraptor", url: "https://www.velocidex.com/" },
              { name: "MISP", url: "https://www.misp-project.org/" },
              { name: "GRR Rapid Response", url: "https://github.com/google/grr" }
            ],
            exercises: "Develop IR plan. Simulate/respond to incidents. Perform forensic analysis of compromised systems."
          },
          {
            name: "Digital Forensics",
            resources: [
              { name: "SANS FOR500", url: "https://www.sans.org/cyber-security-courses/windows-forensic-analysis/" },
              { name: "Digital Forensics Framework", url: "https://github.com/arxsys/dff" },
              { name: "Computer Forensics Tutorial", url: "https://www.udemy.com/course/computer-forensics-and-digital-forensics-for-everyone/" },
              { name: "NIST Forensics Tools", url: "https://toolcatalog.nist.gov/" },
              { name: "Autopsy", url: "https://www.autopsy.com/" },
              { name: "FTK Imager", url: "https://www.exterro.com/digital-forensics-software/ftk-imager" },
              { name: "Volatility", url: "https://www.volatilityfoundation.org/" },
              { name: "Sleuth Kit", url: "https://www.sleuthkit.org/" }
            ],
            exercises: "Perform disk forensics. Analyze memory dumps. Recover deleted files. Create investigation reports."
          }
        ]
      },
      {
        title: "9. Cloud Security",
        icon: <Globe className="w-5 h-5" />,
        subTopics: [
          {
            name: "Cloud Security Fundamentals",
            resources: [
              { name: "AWS Security Fundamentals", url: "https://aws.amazon.com/training/course-descriptions/security-fundamentals/" },
              { name: "Azure Security Tech", url: "https://learn.microsoft.com/en-us/training/courses/az-500t00" },
              { name: "Google Cloud Security", url: "https://cloud.google.com/security/" },
              { name: "Cloud Security Alliance", url: "https://cloudsecurityalliance.org/education/" },
              { name: "IBM Cloud Security", url: "https://www.ibm.com/cloud/learn/cloud-security" },
              { name: "CloudSploit", url: "https://github.com/aquasecurity/cloudsploit" }
            ],
            exercises: "Set up secure cloud infrastructure. Implement IAM. Configure cloud monitoring. Perform assessments."
          },
          {
            name: "Cloud Security Architecture",
            resources: [
              { name: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" },
              { name: "Azure Framework", url: "https://docs.microsoft.com/en-us/azure/architecture/framework/" },
              { name: "GCP Architecture Framework", url: "https://cloud.google.com/architecture/framework" },
              { name: "Terraform", url: "https://www.terraform.io/" },
              { name: "CloudFormation", url: "https://aws.amazon.com/cloudformation/" }
            ],
            exercises: "Design secure cloud architecture. Implement defense in depth. Create secure IaC templates."
          },
          {
            name: "Container & Cloud-Native Security",
            resources: [
              { name: "Docker Security", url: "https://docs.docker.com/engine/security/" },
              { name: "Kubernetes Security", url: "https://kubernetes.io/docs/concepts/security/" },
              { name: "OWASP Docker Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
              { name: "Checkov (IaC Scanner)", url: "https://www.checkov.io/" },
              { name: "Trivy", url: "https://github.com/aquasecurity/trivy" },
              { name: "Falco", url: "https://falco.org/" },
              { name: "Aqua Security", url: "https://www.aquasec.com/" }
            ],
            exercises: "Secure Docker containers/images. Scan IaC (Terraform/CloudFormation) for misconfigurations using Checkov. Set up runtime threat detection with Falco."
          }
        ]
      }
    ]
  },
  {
    phase: "Advanced Phase",
    description: "Master advanced topics and specialized security domains.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    topics: [
      {
        title: "10. Advanced Topics",
        icon: <Cpu className="w-5 h-5" />,
        subTopics: [
          {
            name: "Malware Analysis",
            resources: [
              { name: "Practical Malware Analysis", url: "https://nostarch.com/malware" },
              { name: "SANS FOR610", url: "https://www.sans.org/cyber-security-courses/reverse-engineering-malware-malware-analysis-tools-techniques/" },
              { name: "Malware Analysis Tutorials", url: "https://fumalwareanalysis.blogspot.com/" },
              { name: "OALabs YouTube", url: "https://www.youtube.com/c/OALabs" },
              { name: "Cuckoo Sandbox", url: "https://cuckoosandbox.org/" },
              { name: "REMnux", url: "https://remnux.org/" }
            ],
            exercises: "Analyze malware samples safely. Reverse engineer malicious code. Build analysis pipelines."
          },
          {
            name: "Threat Intelligence",
            resources: [
              { name: "MITRE ATT&CK", url: "https://attack.mitre.org/" },
              { name: "SANS FOR578", url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/" },
              { name: "Open Source Intel Techniques", url: "https://inteltechniques.com/" },
              { name: "OpenCTI", url: "https://www.opencti.io/" },
              { name: "ThreatConnect", url: "https://threatconnect.com/" },
              { name: "Recorded Future", url: "https://www.recordedfuture.com/" }
            ],
            exercises: "Collect/analyze threat intel. Map threats to MITRE ATT&CK. Create threat intelligence reports."
          },
          {
            name: "Advanced Persistent Threats",
            resources: [
              { name: "APT Groups and Operations", url: "https://apt.threattracking.com/" },
              { name: "Mandiant APT Reports", url: "https://www.mandiant.com/resources/insights/reports" },
              { name: "MITRE ATT&CK Groups", url: "https://attack.mitre.org/groups/" },
              { name: "ThaiCERT APT Encyclopedia", url: "https://apt.etda.or.th/cgi-bin/aptgroups.cgi" },
              { name: "Yara", url: "https://virustotal.github.io/yara/" },
              { name: "Sigma", url: "https://github.com/SigmaHQ/sigma" }
            ],
            exercises: "Analyze APT campaigns. Create detection rules for APT tactics. Simulate APT attacks."
          },
          {
            name: "AI & LLM Security",
            resources: [
              { name: "OWASP Top 10 for LLMs", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
              { name: "Lakera Gandalf (Prompt Injection)", url: "https://gandalf.lakera.ai/" },
              { name: "NIST AI Risk Management", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
              { name: "AI Village", url: "https://aivillage.org/" }
            ],
            exercises: "Perform prompt injection attacks in a safe environment. Evaluate an AI model for data leakage and privacy risks."
          }
        ]
      },
      {
        title: "11. Specialized Security Domains",
        icon: <Laptop className="w-5 h-5" />,
        subTopics: [
          {
            name: "IoT Security",
            resources: [
              { name: "OWASP IoT Security", url: "https://owasp.org/www-project-internet-of-things/" },
              { name: "IoT Security Foundation", url: "https://www.iotsecurityfoundation.org/" },
              { name: "NIST IoT Security", url: "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program" },
              { name: "Shodan", url: "https://www.shodan.io/" },
              { name: "Firmware Analysis Toolkit", url: "https://github.com/attify/firmware-analysis-toolkit" },
              { name: "IoTSeeker", url: "https://github.com/rapid7/IoTSeeker" }
            ],
            exercises: "Analyze IoT security. Perform firmware analysis. Test IoT communication protocols."
          },
          {
            name: "Mobile Security",
            resources: [
              { name: "OWASP Mobile Testing Guide", url: "https://owasp.org/www-project-mobile-security-testing-guide/" },
              { name: "Android Security", url: "https://source.android.com/security" },
              { name: "iOS Security", url: "https://support.apple.com/guide/security/welcome/web" },
              { name: "MobSF", url: "https://github.com/MobSF/Mobile-Security-Framework-MobSF" },
              { name: "Frida", url: "https://frida.re/" },
              { name: "Objection", url: "https://github.com/sensepost/objection" },
              { name: "Drozer", url: "https://github.com/FSecureLABS/drozer" }
            ],
            exercises: "Perform mobile app pen-testing. Analyze permissions. Test authentication mechanisms."
          },
          {
            name: "ICS Security",
            resources: [
              { name: "ICS-CERT Training", url: "https://us-cert.cisa.gov/ics/Training-Available-Through-ICS-CERT" },
              { name: "SANS ICS410", url: "https://www.sans.org/cyber-security-courses/ics-scada-cyber-security-essentials/" },
              { name: "NIST SP 800-82", url: "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final" },
              { name: "ISA/IEC 62443", url: "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards" },
              { name: "Conpot", url: "https://github.com/mushorg/conpot" },
              { name: "PLCscan", url: "https://github.com/meeas/plcscan" }
            ],
            exercises: "Set up ICS lab. Analyze ICS protocols/vulnerabilities. Implement ICS security controls."
          }
        ]
      }
    ]
  },
  {
    phase: "Professional Development",
    description: "Continuous learning and career advancement.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    topics: [
      {
        title: "12. Career Development",
        icon: <GraduationCap className="w-5 h-5" />,
        subTopics: [
          {
            name: "Certifications Planning",
            resources: [
              { name: "CompTIA Certification Roadmap", url: "https://www.comptia.org/certifications/which-certification" },
              { name: "SANS Certification Roadmap", url: "https://www.sans.org/cyber-security-skills-roadmap/" },
              { name: "ISC2 Certifications", url: "https://www.isc2.org/Certifications" },
              { name: "ISACA Certifications", url: "https://www.isaca.org/credentialing" },
              { name: "EC-Council Certifications", url: "https://www.eccouncil.org/programs/" },
              { name: "Paul Jerimy Security Certification Roadmap", url: "https://pauljerimy.com/security-certification-roadmap/" },
              { name: "Reddit r/cybersecurity Certification Guides", url: "https://www.reddit.com/r/cybersecurity/wiki/index/#wiki_certification_questions" }
            ],
            exercises: "Create a personalized certification roadmap. Build a study plan for target certs. Join study groups."
          },
          {
            name: "Building a Professional Network",
            resources: [
              { name: "Cybersecurity Communities", url: "https://github.com/sbilly/awesome-security#other-awesome-lists-and-repositories" },
              { name: "Security Conferences", url: "https://infosec-conferences.com/" },
              { name: "OWASP Chapters", url: "https://owasp.org/chapters/" },
              { name: "Cybersecurity Meetups", url: "https://www.meetup.com/topics/cybersecurity/" },
              { name: "Women in Cybersecurity (WiCyS)", url: "https://www.wicys.org/" }
            ],
            exercises: "Join communities. Attend local meetups/conferences. Contribute to open-source projects."
          },
          {
            name: "Continuous Learning",
            resources: [
              { name: "Cybersecurity Podcasts", url: "https://nordlayer.com/blog/cybersecurity-podcasts-to-check-out/" },
              { name: "Security Research Blogs", url: "https://www.akamai.com/blog/security-research" },
              { name: "Academic Journals", url: "https://www.scimagojr.com/journalrank.php?category=1712" },
              { name: "SANS Newsletters", url: "https://www.sans.org/newsletters/" },
              { name: "Awesome Hacking Resources", url: "https://github.com/vitalysim/Awesome-Hacking-Resources" },
              { name: "Cybersecurity Canon", url: "https://icdt.osu.edu/cybercanon/bookreviews" },
              { name: "TryHackMe Paths", url: "https://tryhackme.com/paths" }
            ],
            exercises: "Subscribe to newsletters/podcasts. Set up a personal blog. Participate in bug bounties."
          },
          {
            name: "Soft Skills & Business Risk",
            resources: [
              { name: "Threat Modeling (STRIDE)", url: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool" },
              { name: "FAIR Risk Framework", url: "https://www.fairinstitute.org/" },
              { name: "Writing an Executive Summary", url: "https://www.sans.org/blog/how-to-write-an-executive-summary-for-a-pen-test-report/" },
              { name: "Effective Communication in InfoSec", url: "https://www.cybersecuritydive.com/news/communication-skills-cybersecurity/645100/" }
            ],
            exercises: "Write a one-page executive summary of a technical vulnerability. Conduct a STRIDE threat modeling session on a sample app."
          }
        ]
      },
      {
        title: "Learning Platforms & CTFs",
        icon: <Laptop className="w-5 h-5" />,
        subTopics: [
          {
            name: "Online Practice Environments & Platforms",
            resources: [
              { name: "HackTheBox", url: "https://www.hackthebox.eu/" },
              { name: "TryHackMe", url: "https://tryhackme.com/" },
              { name: "VulnHub", url: "https://www.vulnhub.com/" },
              { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
              { name: "Cybrary", url: "https://www.cybrary.it/" },
              { name: "PentesterLab", url: "https://pentesterlab.com/" },
              { name: "Offensive Security", url: "https://www.offensive-security.com/" },
              { name: "INE Security", url: "https://security.ine.com/" },
              { name: "Root Me", url: "https://www.root-me.org/" },
              { name: "CryptoHack", url: "https://cryptohack.org/" },
              { name: "OverTheWire", url: "https://overthewire.org/wargames/" }
            ],
            exercises: "Consistently practice on these platforms to sharpen hands-on skills."
          },
          {
            name: "YouTube Channels",
            resources: [
              { name: "John Hammond", url: "https://www.youtube.com/user/RootOfTheNull" },
              { name: "IppSec", url: "https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA" },
              { name: "The Cyber Mentor", url: "https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw" },
              { name: "David Bombal", url: "https://www.youtube.com/user/ConfigTerm" },
              { name: "NetworkChuck", url: "https://www.youtube.com/user/NetworkChuck" },
              { name: "Nahamsec", url: "https://www.youtube.com/channel/UCCZDt7MuC3Hzs6IH4xODLBw" },
              { name: "LiveOverflow", url: "https://www.youtube.com/channel/UCW6MNdOsqv2E9AjQkv9we7A" },
              { name: "STÖK", url: "https://www.youtube.com/channel/UCQN2DsjnYH0pQcECM0d6oLQ" },
              { name: "HackerSploit", url: "https://www.youtube.com/channel/UCW6MNdOsqv2E9AjQkv9we7A" },
              { name: "InsiderPhD", url: "https://www.youtube.com/user/RapidBug" }
            ],
            exercises: "Watch walkthroughs and concept explanations from industry experts."
          },
          {
            name: "Capture The Flag (CTF)",
            resources: [
              { name: "PicoCTF", url: "https://picoctf.org/" },
              { name: "CTFlearn", url: "https://ctflearn.com/" },
              { name: "Hacker101 CTF", url: "https://ctf.hacker101.com/" },
              { name: "CyberDefenders", url: "https://cyberdefenders.org/" },
              { name: "DEF CON CTF", url: "https://www.defcon.org/html/links/dc-ctf.html" },
              { name: "CSAW CTF", url: "https://www.csaw.io/ctf" },
              { name: "CTFtime", url: "https://ctftime.org/" },
              { name: "CTF Field Guide", url: "https://trailofbits.github.io/ctf/" }
            ],
            exercises: "Participate in beginner-friendly CTFs. Move to advanced competitions. Review write-ups."
          }
        ]
      },
      {
        title: "Community & Research",
        icon: <Globe className="w-5 h-5" />,
        subTopics: [
          {
            name: "Communities & Forums",
            resources: [
              { name: "Reddit r/cybersecurity", url: "https://www.reddit.com/r/cybersecurity/" },
              { name: "Reddit r/netsec", url: "https://www.reddit.com/r/netsec/" },
              { name: "Stack Exchange InfoSec", url: "https://security.stackexchange.com/" },
              { name: "Hack The Box Forum", url: "https://forum.hackthebox.eu/" },
              { name: "NetSec Focus", url: "https://www.netsecfocus.com/" }
            ],
            exercises: "Engage in discussions, ask questions, and share knowledge."
          },
          {
            name: "Vulnerability Databases & Research",
            resources: [
              { name: "NVD", url: "https://nvd.nist.gov/" },
              { name: "CVE Details", url: "https://www.cvedetails.com/" },
              { name: "Exploit Database", url: "https://www.exploit-db.com/" },
              { name: "Vulners", url: "https://vulners.com/" },
              { name: "Krebs on Security", url: "https://krebsonsecurity.com/" },
              { name: "Schneier on Security", url: "https://www.schneier.com/" },
              { name: "The Hacker News", url: "https://thehackernews.com/" },
              { name: "Dark Reading", url: "https://www.darkreading.com/" },
              { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/" }
            ],
            exercises: "Stay updated with the latest security news, research, and vulnerabilities."
          }
        ]
      }
    ]
  }
];

const BUG_BOUNTY_ROADMAP = [
  {
    phase: "Architectural Foundations",
    description: "Master the mechanics of the web. You cannot automate what you do not understand.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    topics: [
      {
        title: "1. The Protocol Level",
        icon: <Network className="w-5 h-5" />,
        subTopics: [
          {
            name: "Web Mechanics",
            resources: [
              { name: "HTTP MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
              { name: "HTTP Status Codes Guide", url: "https://httpstatuses.com/" },
              { name: "OWASP Session Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" }
            ],
            exercises: "Practice analyzing HTTP requests/responses. Understand how cookies and headers manage sessions."
          }
        ]
      },
      {
        title: "2. Vulnerability Mechanics",
        icon: <Shield className="w-5 h-5" />,
        subTopics: [
          {
            name: "OWASP Top 10 & Lab Practice",
            resources: [
              { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
              { name: "OWASP Top 10 Project", url: "https://owasp.org/www-project-top-ten/" },
              { name: "HackTheBox Academy", url: "https://academy.hackthebox.com/" }
            ],
            exercises: "Complete the PortSwigger Academy top-to-bottom. Understand the 'Why' behind SQLi, XXE, and SSRF."
          }
        ]
      },
      {
        title: "3. Interception Environment",
        icon: <Terminal className="w-5 h-5" />,
        subTopics: [
          {
            name: "Proxy Mastery & Mobile Labs",
            resources: [
              { name: "Burp Suite Community", url: "https://portswigger.net/burp/communitydownload" },
              { name: "Caido Proxy", url: "https://caido.io/" },
              { name: "Termux for Android", url: "https://termux.dev/" },
              { name: "Kali NetHunter", url: "https://www.kali.org/docs/nethunter/" },
              { name: "Burp Suite Pro (Worth the investment)", url: "https://portswigger.net/burp/pro" }
            ],
            exercises: "Learn to intercept, modify, and replay traffic. Set up a mobile lab with Termux or NetHunter for testing on the go."
          },
          {
            name: "Senior Hunter Advice",
            resources: [],
            exercises: "Don't just use default settings. Master 'Match and Replace' rules to automate boring tasks like adding custom headers or bypassing simple client-side checks."
          }
        ]
      }
    ]
  },
  {
    phase: "AI-Accelerated Learning Loop",
    description: "Build an accelerated feedback loop using AI to compress years of experience into months.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    topics: [
      {
        title: "4. The New Ingestion Method",
        icon: <BookOpen className="w-5 h-5" />,
        subTopics: [
          {
            name: "Parsing Bug Write-ups",
            resources: [
              { name: "CrowdStrike Blog", url: "https://www.crowdstrike.com/blog/" },
              { name: "HackerOne Hacktivity", url: "https://hackerone.com/hacktivity" },
              { name: "PentesterLand Writeups", url: "https://pentester.land/writeups/" }
            ],
            exercises: "Use LLMs to explain complex bug bounty write-ups like SSTI or IDOR. Ask for beginner-friendly walkthroughs."
          }
        ]
      },
      {
        title: "5. Prompt Architecture",
        icon: <Terminal className="w-5 h-5" />,
        subTopics: [
          {
            name: "Active Recall & Quizzing",
            resources: [
              { name: "Claude AI", url: "https://claude.ai/" },
              { name: "ChatGPT", url: "https://chatgpt.com/" }
            ],
            exercises: "Ask AI to quiz you on concepts or generate mock scenarios for vulnerabilities. Transition to AI Red Teaming."
          },
          {
            name: "Senior Hunter Advice",
            resources: [],
            exercises: "Use AI to deobfuscate minified JavaScript. It's incredibly good at renaming variables and explaining what a complex function is doing, which often leads to finding hidden API endpoints."
          }
        ]
      }
    ]
  },
  {
    phase: "Recon & Target Acquisition",
    description: "Hunt where the attack surface is wide, messy, and less traversed.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    topics: [
      {
        title: "6. Core Stack & AI Parsing",
        icon: <Laptop className="w-5 h-5" />,
        subTopics: [
          {
            name: "Project Discovery Tools",
            resources: [
              { name: "Subfinder", url: "https://github.com/projectdiscovery/subfinder" },
              { name: "HTTPX", url: "https://github.com/projectdiscovery/httpx" },
              { name: "AlterX", url: "https://github.com/projectdiscovery/alterx" }
            ],
            exercises: "Standardize your tooling. Use AI to categorize subdomains (admin, api, internal) to find hidden gems."
          }
        ]
      },
      {
        title: "7. Custom Automation",
        icon: <Terminal className="w-5 h-5" />,
        subTopics: [
          {
            name: "AI-Powered Tooling",
            resources: [
              { name: "Cursor AI", url: "https://cursor.com/" },
              { name: "Claude Code", url: "https://claude.ai/code" }
            ],
            exercises: "Write custom Python scripts for JWT checks or Broken Access Control using AI assistants. Document edge cases."
          },
          {
            name: "Senior Hunter Advice",
            resources: [],
            exercises: "Automation should be recursive. Don't just scan subdomains once; set up a 'monitors' that alerts you when a new subdomain or a new JS file appears. The biggest bugs are found in things that just changed."
          }
        ]
      }
    ]
  },
  {
    phase: "The Hunt & Surface Mapping",
    description: "Execute and focus on logic bugs like BAC, IDOR, and Blind XSS.",
    icon: <Swords className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    topics: [
      {
        title: "8. Feature Mapping",
        icon: <ShieldCheck className="w-5 h-5" />,
        subTopics: [
          {
            name: "Strategic Testing",
            resources: [
              { name: "OWASP WSTG", url: "https://owasp.org/www-project-web-security-testing-guide/" },
              { name: "Bugcrowd University", url: "https://www.bugcrowd.com/university/" }
            ],
            exercises: "Map the app (Dashboard, Billing, Teams). Ask AI to prioritize bug classes based on features."
          }
        ]
      },
      {
        title: "9. Advanced Exploitation",
        icon: <Network className="w-5 h-5" />,
        subTopics: [
          {
            name: "Chaining & Logic Bugs",
            resources: [
              { name: "HTTP Request Smuggling", url: "https://portswigger.net/web-security/request-smuggling" },
              { name: "Web Cache Deception", url: "https://owasp.org/www-community/attacks/Web_Cache_Deception" },
              { name: "OAuth Misconfigurations", url: "https://portswigger.net/web-security/oauth" }
            ],
            exercises: "Go beyond XSS. Master Request Smuggling and Race Conditions. Learn how to chain a low-impact info leak with an IDOR to get full account takeover."
          },
          {
            name: "Senior Hunter Advice",
            resources: [],
            exercises: "Always look for 'Second-Order' bugs. Where does your input go after it's saved? If it pops up in an admin dashboard three days later, that's a much higher payout than a simple self-XSS."
          }
        ]
      }
    ]
  },
  {
    phase: "Reporting & Authority",
    description: "Convert findings into high-tier payouts and build your personal brand.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    topics: [
      {
        title: "10. Sanitized AI Reporting",
        icon: <BookOpen className="w-5 h-5" />,
        subTopics: [
          {
            name: "Impact Statements",
            resources: [
              { name: "Bug Bounty Report Template", url: "https://github.com/charlax/bugbounty-writeups" },
              { name: "HackerOne Brand Guidelines", url: "https://www.hackerone.com/brand" }
            ],
            exercises: "Describe bugs abstractly to AI to get professional impact statements. Avoid pasting sensitive target data."
          }
        ]
      },
      {
        title: "11. Authority & Professionalism",
        icon: <Globe className="w-5 h-5" />,
        subTopics: [
          {
            name: "Teaching & Networking",
            resources: [
              { name: "100 Days of Hacking", url: "https://www.instagram.com/explore/tags/100daysofhacking/" },
              { name: "Bug Bounty Community Discord", url: "https://discord.com/invite/bugbounty" }
            ],
            exercises: "Teach what you learn. Explain vulnerabilities in regional languages. Build a brand on visual platforms."
          },
          {
            name: "Senior Hunter Advice",
            resources: [],
            exercises: "The best bugs are found through collaboration. Network with triage teams and other hunters. Sometimes a 'Duplicate' report can lead to a 'Collaboration' where you both win if you share your unique bypass techniques."
          }
        ]
      }
    ]
  },
  {
    phase: "The Elite Workflow",
    description: "Focus on zero-day research, deep-dive methodology, and business-critical vulnerabilities.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    topics: [
      {
        title: "12. Deep-Dive Methodology",
        icon: <ShieldCheck className="w-5 h-5" />,
        subTopics: [
          {
            name: "Code Auditing & Zero-Days",
            resources: [
              { name: "Semgrep for Bug Hunting", url: "https://semgrep.dev/" },
              { name: "CodeQL for Security Research", url: "https://codeql.github.com/" }
            ],
            exercises: "Stop just 'poking' the app. Learn to read the code (if available) or reverse engineer the logic. Look for architectural flaws that can't be fixed with a simple patch."
          }
        ]
      },
      {
        title: "13. Business Impact & Chaining",
        icon: <Swords className="w-5 h-5" />,
        subTopics: [
          {
            name: "The $10k+ Mindset",
            resources: [
              { name: "Chaining Vulnerabilities for Max Impact", url: "https://hackerone.com/blog/vulnerability-chaining-for-the-win" }
            ],
            exercises: "Chain multiple bugs. For example: SSRF to reach internal metadata -> Get IAM tokens -> Access S3 buckets -> Find PII. That's how you get the critical payouts."
          }
        ]
      }
    ]
  }
];

const RoadmapPhase = ({ 
  phase, 
  index, 
  activeTab, 
  onToggle, 
  completedItems,
  progress 
}: { 
  phase: typeof CYBERSECURITY_ROADMAP[0], 
  index: number,
  activeTab: string,
  onToggle: (id: string) => void,
  completedItems: string[],
  progress: number
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`border ${phase.borderColor} rounded-xl overflow-hidden bg-bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/5`}
    >
      <button 
        id={`phase-header-${index}`}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 md:p-6 text-left ${phase.bgColor} transition-colors group`}
        aria-expanded={isOpen}
        aria-controls={`phase-content-${index}`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg bg-bg-primary/50 ${phase.color} shadow-sm group-hover:scale-110 transition-transform`}>
            {phase.icon}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary">
                Phase {index + 1}: {phase.phase}
              </h2>
              {progress === 100 && (
                <span className="flex items-center gap-1 text-[10px] bg-accent-green/20 text-accent-green px-2 py-0.5 rounded-full border border-accent-green/30">
                  <ShieldCheck className="w-3 h-3" /> Completed
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 mt-1">
              <p className="text-text-muted text-sm md:text-base line-clamp-1">
                {phase.description}
              </p>
              <div className="hidden md:flex items-center gap-2 min-w-[100px]">
                <div className="h-1.5 flex-1 bg-bg-primary/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className={`h-full ${phase.color.replace('text-', 'bg-')}`}
                  />
                </div>
                <span className="text-[10px] font-mono text-text-muted">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
            id={`phase-content-${index}`}
            role="region"
            aria-labelledby={`phase-header-${index}`}
          >
            <div className="p-5 md:p-6 space-y-8">
              {phase.topics.map((topic, tIdx) => (
                <div key={tIdx} className="relative">
                  {/* Vertical Line indicator */}
                  <div className={`absolute left-[11px] top-8 bottom-0 w-0.5 ${phase.bgColor} -z-10`} />
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="flex items-center gap-3 text-lg font-bold text-text-primary">
                      <div className={`p-1.5 rounded-full bg-bg-primary ${phase.color} border border-border-glow`}>
                        {topic.icon}
                      </div>
                      {topic.title}
                    </h3>
                    {/* Difficulty Badge */}
                    <span className={`text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider font-bold ${
                      index < 2 ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      index < 4 ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {index < 2 ? 'Beginner' : index < 4 ? 'Intermediate' : 'Advanced'}
                    </span>
                  </div>
                  
                  <div className="ml-8 space-y-6">
                    {topic.subTopics.map((sub, sIdx) => {
                      const itemId = `${activeTab}-${phase.phase}-${sub.name}`;
                      const isCompleted = completedItems.includes(itemId);
                      
                      return (
                        <div 
                          key={sIdx} 
                          className={`bg-bg-primary/40 rounded-lg p-4 border transition-all duration-300 ${
                            isCompleted ? 'border-accent-green/30 bg-accent-green/5 opacity-80' : 
                            sub.name === 'Senior Hunter Advice' ? 'border-accent-purple/50 bg-accent-purple/5' : 
                            'border-border-glow/50'
                          }`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <button 
                              onClick={() => onToggle(itemId)}
                              className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                                isCompleted 
                                  ? 'bg-accent-green border-accent-green text-bg-primary' 
                                  : 'border-border-glow hover:border-accent-cyan'
                              }`}
                            >
                              {isCompleted && <ShieldCheck className="w-3.5 h-3.5" />}
                            </button>
                            
                            <div className="flex-1">
                              <h4 className={`font-semibold flex items-center justify-between gap-2 ${
                                isCompleted ? 'text-accent-green line-through' :
                                sub.name === 'Senior Hunter Advice' ? 'text-accent-purple' : 
                                'text-accent-cyan'
                              }`}>
                                <span className="flex items-center gap-2">
                                  {sub.name}
                                </span>
                                {sub.name === 'Senior Hunter Advice' && (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-accent-purple/20 border border-accent-purple/30 uppercase tracking-tighter">Pro Tip</span>
                                )}
                              </h4>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 ml-8">
                            {sub.resources.length > 0 && (
                              <div>
                                <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">Key Resources</span>
                                <ul className="space-y-2">
                                  {sub.resources.map((res, rIdx) => (
                                    <li key={rIdx}>
                                      <a 
                                        href={res.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm text-text-primary hover:text-accent-cyan transition-colors flex items-center gap-1 group"
                                      >
                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                          isCompleted ? 'bg-accent-green/50 group-hover:bg-accent-green' :
                                          sub.name === 'Senior Hunter Advice' ? 'bg-accent-purple/50 group-hover:bg-accent-purple' : 
                                          'bg-accent-cyan/50 group-hover:bg-accent-cyan'
                                        } transition-colors`} />
                                        <span className="truncate">{res.name}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className={`rounded p-3 border ${
                              isCompleted ? 'bg-accent-green/10 border-accent-green/20' :
                              sub.name === 'Senior Hunter Advice' ? 'bg-accent-purple/10 border-accent-purple/20 col-span-2' : 
                              'bg-bg-card border-border-glow/20'
                            } ${sub.resources.length === 0 ? 'col-span-2' : ''}`}>
                              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                                {sub.name === 'Senior Hunter Advice' ? 'Strategic Insight' : 'Practical Exercises'}
                              </span>
                              <p className={`text-sm leading-relaxed ${
                                isCompleted ? 'text-accent-green/80 italic' :
                                sub.name === 'Senior Hunter Advice' ? 'text-text-primary italic' : 
                                'text-text-primary/80'
                              }`}>
                                {sub.exercises}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Roadmap() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'cybersecurity' | 'bugbounty'>('cybersecurity');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedItems, setCompletedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('roadmap_progress');
    return saved ? JSON.parse(saved) : [];
  });

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

  const currentData = activeTab === 'cybersecurity' ? CYBERSECURITY_ROADMAP : BUG_BOUNTY_ROADMAP;

  // Sync progress to localStorage
  useEffect(() => {
    localStorage.setItem('roadmap_progress', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const filteredData = currentData.map(phase => ({
    ...phase,
    topics: phase.topics.filter(topic => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.subTopics.some(sub => sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(phase => phase.topics.length > 0);

  const calculateProgress = (phaseTopics: any[]) => {
    const total = phaseTopics.reduce((acc, t) => acc + t.subTopics.length, 0);
    const completed = phaseTopics.reduce((acc, t) => {
      const topicCompletedCount = t.subTopics.filter((sub: any) => 
        completedItems.includes(`${activeTab}-${t.title}-${sub.name}`)
      ).length;
      return acc + topicCompletedCount;
    }, 0);
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Ultimate Security Mastery Roadmap | AashishTechSecurity</title>
        <meta name="description" content="A comprehensive, step-by-step guide to mastering cybersecurity and bug bounty hunting from beginner to expert level with curated resources." />
      </Helmet>

      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-4"
            >
              Ultimate Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-500">Mastery Roadmap</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted max-w-2xl mx-auto mb-10"
            >
              {activeTab === 'cybersecurity' 
                ? "A comprehensive, step-by-step guide to mastering cybersecurity from beginner to expert level with curated resources, tools, and career guidance."
                : "The AI-Accelerated path to Bug Bounty hunting. Learn to master the web, leverage AI for research, and execute high-impact hunts."}
            </motion.p>

            {/* Tab Switcher */}
            <div className="flex justify-center p-1 bg-bg-card/50 backdrop-blur-md rounded-xl border border-border-glow max-w-md mx-auto mb-12" role="tablist">
              <button
                id="tab-cybersecurity"
                role="tab"
                aria-selected={activeTab === 'cybersecurity'}
                aria-controls="roadmap-content"
                onClick={() => navigate(TAB_TO_HASH.cybersecurity, { replace: true })}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeTab === 'cybersecurity' 
                    ? 'bg-accent-cyan text-bg-primary shadow-lg shadow-accent-cyan/20' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Cybersecurity
              </button>
              <button
                id="tab-bugbounty"
                role="tab"
                aria-selected={activeTab === 'bugbounty'}
                aria-controls="roadmap-content"
                onClick={() => navigate(TAB_TO_HASH.bugbounty, { replace: true })}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeTab === 'bugbounty' 
                    ? 'bg-accent-cyan text-bg-primary shadow-lg shadow-accent-cyan/20' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Bug Bounty
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search topics, tools, or vulnerabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-bg-card/50 border border-border-glow rounded-xl focus:outline-none focus:border-accent-cyan transition-colors text-text-primary placeholder:text-text-muted/50"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-bg-card/30 rounded-xl border border-border-glow text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              {completedItems.length} tasks completed
            </div>
          </div>

          <div className="space-y-6 relative" id="roadmap-content" role="tabpanel" key={activeTab}>
            {/* Background connection line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-green-500/20 hidden lg:block -z-20" />
            
            {filteredData.map((phase, index) => (
              <RoadmapPhase 
                key={`${activeTab}-${index}`} 
                phase={phase} 
                index={index} 
                activeTab={activeTab}
                onToggle={toggleItem}
                completedItems={completedItems}
                progress={calculateProgress(phase.topics)}
              />
            ))}

            {filteredData.length === 0 && (
              <div className="text-center py-20 bg-bg-card/20 rounded-3xl border border-dashed border-border-glow">
                <p className="text-text-muted">No topics found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-accent-cyan hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="italic text-text-muted font-serif">
              "Security is a process, not a product." - Bruce Schneier
            </p>
          </motion.div>

        </div>
      </main>
    </>
  );
}
