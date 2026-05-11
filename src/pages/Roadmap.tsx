import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Terminal, Network, Shield, Globe, 
  Swords, ShieldCheck, Cpu, Laptop, GraduationCap, 
  ChevronDown, ExternalLink, ChevronRight
} from 'lucide-react';

const ROADMAP_DATA = [
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
            name: "Container Security",
            resources: [
              { name: "Docker Security", url: "https://docs.docker.com/engine/security/" },
              { name: "Kubernetes Security", url: "https://kubernetes.io/docs/concepts/security/" },
              { name: "OWASP Docker Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
              { name: "Clair", url: "https://github.com/quay/clair" },
              { name: "Trivy", url: "https://github.com/aquasecurity/trivy" },
              { name: "Falco", url: "https://falco.org/" },
              { name: "Aqua Security", url: "https://www.aquasec.com/" }
            ],
            exercises: "Secure Docker containers/images. Implement K8s security. Set up vulnerability scanning."
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

const RoadmapPhase = ({ phase, index }: { phase: typeof ROADMAP_DATA[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`border \${phase.borderColor} rounded-xl overflow-hidden bg-bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/5`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 md:p-6 text-left \${phase.bgColor} transition-colors`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg bg-bg-primary/50 \${phase.color} shadow-sm`}>
            {phase.icon}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary">
              Phase {index + 1}: {phase.phase}
            </h2>
            <p className="text-text-muted mt-1 text-sm md:text-base">
              {phase.description}
            </p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-text-muted transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 md:p-6 space-y-8">
              {phase.topics.map((topic, tIdx) => (
                <div key={tIdx} className="relative">
                  {/* Vertical Line indicator */}
                  <div className={`absolute left-[11px] top-8 bottom-0 w-0.5 \${phase.bgColor} -z-10`} />
                  
                  <h3 className="flex items-center gap-3 text-lg font-bold text-text-primary mb-4">
                    <div className={`p-1.5 rounded-full bg-bg-primary \${phase.color} border border-border-glow`}>
                      {topic.icon}
                    </div>
                    {topic.title}
                  </h3>
                  
                  <div className="ml-8 space-y-6">
                    {topic.subTopics.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-bg-primary/40 rounded-lg p-4 border border-border-glow/50">
                        <h4 className="font-semibold text-accent-cyan mb-3 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4" />
                          {sub.name}
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
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
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                                    <span className="truncate">{res.name}</span>
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-bg-card rounded p-3 border border-border-glow/20">
                            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">Practical Exercises</span>
                            <p className="text-sm text-text-primary/80 leading-relaxed">
                              {sub.exercises}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
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
  return (
    <>
      <Helmet>
        <title>Cybersecurity Roadmap | AashishTechSecurity</title>
        <meta name="description" content="A comprehensive, step-by-step guide to mastering cybersecurity from beginner to expert level with curated resources, tools, and career guidance." />
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
              Ultimate Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-500">Mastery Roadmap</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              A comprehensive, step-by-step guide to mastering cybersecurity from beginner to expert level with curated resources, tools, and career guidance.
            </motion.p>
          </div>

          <div className="space-y-6 relative">
            {/* Background connection line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-green-500/20 hidden lg:block -z-20" />
            
            {ROADMAP_DATA.map((phase, index) => (
              <RoadmapPhase key={index} phase={phase} index={index} />
            ))}
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
