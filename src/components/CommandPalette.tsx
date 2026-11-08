import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Terminal, Globe, ArrowRight, X, ExternalLink, 
  BookOpen, Shield, Code, Cpu, User, Map, Sparkles
} from 'lucide-react';
import { GitHub, Linkedin, Instagram, Medium, YouTube } from './Icons';

interface CommandItem {
  id: string;
  title: string;
  category: 'Pages' | 'Tools' | 'Domains' | 'Socials';
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input whenever opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Global Keydown Listeners for Arrows, Enter, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items: CommandItem[] = useMemo(() => [
    // Core Pages
    {
      id: 'page-home',
      title: 'Home',
      category: 'Pages',
      description: 'Main cybersecurity platform & ecosystem overview',
      icon: <Globe className="w-4 h-4 text-accent-cyan" />,
      action: () => { navigate('/'); onClose(); },
      keywords: ['landing', 'main', 'start']
    },
    {
      id: 'page-resources',
      title: 'Resources Hub',
      category: 'Pages',
      description: '17+ domains of ethical hacking & defense materials',
      icon: <BookOpen className="w-4 h-4 text-accent-cyan" />,
      action: () => { navigate('/resources'); onClose(); },
      keywords: ['learn', 'education', 'courses', 'youtube', 'labs']
    },
    {
      id: 'page-toolkit',
      title: 'Cybersecurity Toolkit',
      category: 'Pages',
      description: '500+ curated pentesting & analysis tools',
      icon: <Terminal className="w-4 h-4 text-accent-purple" />,
      action: () => { navigate('/toolkit'); onClose(); },
      keywords: ['tools', 'arsenal', 'pentesting', 'scripts']
    },
    {
      id: 'page-roadmap',
      title: 'Cybersecurity Roadmap',
      category: 'Pages',
      description: 'Interactive step-by-step security mastery guide',
      icon: <Map className="w-4 h-4 text-accent-green" />,
      action: () => { navigate('/roadmap'); onClose(); },
      keywords: ['guide', 'career', 'path', 'learning']
    },
    {
      id: 'page-about',
      title: 'About Aashish Bande',
      category: 'Pages',
      description: 'Security analyst background, experience, certs & portfolio',
      icon: <User className="w-4 h-4 text-blue-400" />,
      action: () => { navigate('/about'); onClose(); },
      keywords: ['bio', 'experience', 'resume', 'contact']
    },
    {
      id: 'page-privacy',
      title: 'Privacy Policy',
      category: 'Pages',
      description: 'DPDP Act 2023 compliance, data minimization & user rights',
      icon: <Shield className="w-4 h-4 text-accent-green" />,
      action: () => { navigate('/privacy-policy'); onClose(); },
      keywords: ['privacy', 'policy', 'dpdp', 'terms', 'compliance', 'legal']
    },
    {
      id: 'page-security-txt',
      title: 'Security Disclosure (security.txt)',
      category: 'Pages',
      description: 'RFC 9116 security contact, vulnerability policy & reporting',
      icon: <Shield className="w-4 h-4 text-accent-cyan" />,
      action: () => { window.open('/.well-known/security.txt', '_blank'); onClose(); },
      keywords: ['security', 'security.txt', 'rfc9116', 'vulnerability', 'disclosure', 'bug', 'report']
    },
    {
      id: 'page-robots-txt',
      title: 'Robots.txt & Sitemap',
      category: 'Pages',
      description: 'Search engine crawler rules and XML sitemap index',
      icon: <Globe className="w-4 h-4 text-text-muted" />,
      action: () => { window.open('/robots.txt', '_blank'); onClose(); },
      keywords: ['robots', 'robots.txt', 'sitemap', 'crawler', 'seo']
    },

    // Domains
    {
      id: 'domain-web',
      title: 'Web Application Security',
      category: 'Domains',
      description: 'OWASP Top 10, SQLi, XSS, SSRF, authentication testing',
      icon: <Globe className="w-4 h-4 text-accent-cyan" />,
      action: () => { navigate('/resources#SecurityResources'); onClose(); },
      keywords: ['appsec', 'owasp', 'burp', 'xss', 'sqli']
    },
    {
      id: 'domain-api',
      title: 'API Security & Pentesting',
      category: 'Domains',
      description: 'REST API, GraphQL, BOLA, JWT, and authorization checks',
      icon: <Code className="w-4 h-4 text-accent-purple" />,
      action: () => { navigate('/resources#ApiSecurity'); onClose(); },
      keywords: ['api', 'postman', 'bola', 'jwt', 'rest']
    },
    {
      id: 'domain-mobile',
      title: 'Mobile Security (Android & iOS)',
      category: 'Domains',
      description: 'APK reversing, MobSF, Frida hooking, and runtime tampering',
      icon: <Sparkles className="w-4 h-4 text-pink-400" />,
      action: () => { navigate('/resources#MobileAndroid'); onClose(); },
      keywords: ['android', 'apk', 'ios', 'mobsf', 'frida', 'jadx']
    },
    {
      id: 'domain-ai',
      title: 'AI & LLM Security',
      category: 'Domains',
      description: 'Prompt injection, AI red teaming, and MITRE ATLAS',
      icon: <Cpu className="w-4 h-4 text-yellow-400" />,
      action: () => { navigate('/resources#AISecurity'); onClose(); },
      keywords: ['llm', 'ai', 'prompt injection', 'atlas', 'red teaming']
    },
    {
      id: 'domain-soc',
      title: 'SOC & Threat Hunting',
      category: 'Domains',
      description: 'Blue team operations, log analysis, and incident response',
      icon: <Shield className="w-4 h-4 text-accent-green" />,
      action: () => { navigate('/resources#SocResources'); onClose(); },
      keywords: ['soc', 'blue team', 'siem', 'hunting', 'defense']
    },

    // Custom Tools
    {
      id: 'tool-httpalive',
      title: 'httpAlive (Web Recon Engine)',
      category: 'Tools',
      description: 'Async web reconnaissance, tech fingerprinting & WAF detection',
      icon: <Terminal className="w-4 h-4 text-accent-cyan" />,
      action: () => { window.open('https://github.com/aashishtechsecurity/httpAlive', '_blank'); onClose(); },
      keywords: ['recon', 'waf', 'subdomain', 'python', 'built']
    },
    {
      id: 'tool-jsscanner',
      title: 'JS-Scanner (Secrets Extractor)',
      category: 'Tools',
      description: 'Asynchronous regex & Shannon entropy API key finder',
      icon: <Code className="w-4 h-4 text-accent-green" />,
      action: () => { window.open('https://github.com/aashishtechsecurity/JS-Scanner', '_blank'); onClose(); },
      keywords: ['javascript', 'secrets', 'api keys', 'entropy', 'built']
    },
    {
      id: 'tool-dirbrute',
      title: 'dirBrute (Directory Fuzzer)',
      category: 'Tools',
      description: 'High-speed endpoint & hidden route enumeration',
      icon: <Terminal className="w-4 h-4 text-yellow-400" />,
      action: () => { window.open('https://github.com/aashishtechsecurity/dirBrute', '_blank'); onClose(); },
      keywords: ['directory', 'fuzzer', 'bruteforce', 'endpoints', 'built']
    },
    {
      id: 'tool-ctimonitor',
      title: 'CTI Monitor Platform',
      category: 'Tools',
      description: 'Live cyber threat intelligence & feed monitor',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      action: () => { window.open('https://www.aashishtechsecurity.in/cti-monitor/', '_blank'); onClose(); },
      keywords: ['threat intel', 'feeds', 'telemetry', 'cve', 'built']
    },

    // Socials
    {
      id: 'social-linkedin',
      title: 'Connect on LinkedIn',
      category: 'Socials',
      description: '@aashishsec — Inquiries, assessments & professional networking',
      icon: <Linkedin className="w-4 h-4 text-[#0A66C2]" />,
      action: () => { window.open('https://www.linkedin.com/in/aashishsec', '_blank'); onClose(); },
      keywords: ['contact', 'message', 'job', 'hire', 'chat']
    },
    {
      id: 'social-github',
      title: 'GitHub Repositories',
      category: 'Socials',
      description: '@aashishtechsecurity — Open-source tools & code',
      icon: <GitHub className="w-4 h-4 text-white" />,
      action: () => { window.open('https://github.com/aashishtechsecurity', '_blank'); onClose(); },
      keywords: ['git', 'code', 'repos', 'source']
    },
    {
      id: 'social-instagram',
      title: 'Instagram Community',
      category: 'Socials',
      description: '@aashishtechsecurity — 13k+ cybersecurity learners in Telugu',
      icon: <Instagram className="w-4 h-4 text-[#E4405F]" />,
      action: () => { window.open('https://www.instagram.com/aashishtechsecurity', '_blank'); onClose(); },
      keywords: ['reels', 'videos', 'telugu', 'community']
    },
    {
      id: 'social-youtube',
      title: 'YouTube Channel',
      category: 'Socials',
      description: '@AashishTechSecurity — Practical cybersecurity & ethical hacking tutorials in Telugu',
      icon: <YouTube className="w-4 h-4 text-[#FF0000]" />,
      action: () => { window.open('https://www.youtube.com/@AashishTechSecurity', '_blank'); onClose(); },
      keywords: ['youtube', 'videos', 'tutorials', 'telugu', 'channel', 'watch']
    },
    {
      id: 'social-medium',
      title: 'Security Research on Medium',
      category: 'Socials',
      description: 'Technical writeups, threat deep dives & exploit walkthroughs',
      icon: <Medium className="w-4 h-4 text-[#00ab6c]" />,
      action: () => { window.open('https://aashishtechsecurity.medium.com/', '_blank'); onClose(); },
      keywords: ['blog', 'articles', 'writeups', 'research']
    }
  ], [navigate, onClose]);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return items;

    return items.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchCategory || matchDesc || matchKeywords;
    });
  }, [items, query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-bg-card border border-accent-cyan/40 rounded-2xl shadow-[0_0_40px_rgba(0,255,204,0.18)] overflow-hidden flex flex-col z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
          >
            {/* Input Bar */}
            <div className="relative flex items-center px-4 py-3.5 border-b border-border-glow/30 bg-bg-primary/90">
              <Search className="w-5 h-5 text-accent-cyan mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, tool (e.g. MobSF, httpAlive) or page..."
                className="w-full bg-transparent text-text-primary placeholder:text-text-muted text-sm sm:text-base font-mono focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-text-muted hover:text-text-primary p-1 rounded mr-2"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-bg-card border border-border-glow text-[11px] font-mono text-text-muted">
                ESC to close
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-border-glow/10 font-mono">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-text-muted text-sm space-y-2">
                  <p>No results found for "{query}".</p>
                  <p className="text-xs text-text-muted/60">Try searching for "toolkit", "recon", "mobile", or "about"</p>
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-all text-xs sm:text-sm group ${
                        isSelected 
                          ? 'bg-accent-cyan/15 text-text-primary border border-accent-cyan/40 shadow-sm' 
                          : 'text-text-muted hover:bg-bg-primary/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-3">
                        <div className={`p-2 rounded-md bg-bg-primary border border-border-glow/30 ${isSelected ? 'text-accent-cyan' : 'text-text-muted'}`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold truncate ${isSelected ? 'text-accent-cyan' : 'text-text-primary'}`}>
                              {item.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-bg-primary/80 border border-border-glow/20 text-text-muted uppercase">
                              {item.category}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-text-muted truncate mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 text-text-muted group-hover:text-accent-cyan">
                        {item.category === 'Socials' || item.category === 'Tools' ? (
                          <ExternalLink className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2.5 bg-bg-primary/80 border-t border-border-glow/30 flex items-center justify-between text-[11px] font-mono text-text-muted">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-bg-card border border-border-glow text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-bg-card border border-border-glow text-[10px]">↓</kbd>
                  <span>to navigate</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-bg-card border border-border-glow text-[10px]">↵</kbd>
                  <span>to open</span>
                </span>
              </div>
              <span className="text-accent-cyan font-semibold">
                AashishTechSecurity Spotlight
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
