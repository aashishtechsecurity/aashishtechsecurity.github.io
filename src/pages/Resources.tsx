import { useState, useEffect, useMemo } from 'react';
import type { Resource } from '../data/resourcesData';
import { YOUTUBE_CHANNELS, PRACTICE_PLATFORMS, SECURITY_RESOURCES, JOB_SIMULATIONS, PEN_TESTING, SOC_RESOURCES, FREE_CERTS, CLOUD_SECURITY, CRYPTOGRAPHY, MOBILE_ANDROID, MOBILE_IOS, FUNDAMENTALS, AI_SECURITY, THREAT_INTEL , getFaviconUrl , API_PENTESTING, NETWORK_PENTESTING, RED_TEAMING} from '../data/resourcesData';

import { useLocation, useNavigate } from 'react-router-dom';
import { PlaySquare, Laptop, ShieldCheck, ExternalLink, Search, ArrowUp, Briefcase, Terminal, Award, Radar, Cloud, Key, Smartphone, BookOpen, Cpu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';



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
  '#ThreatIntel': 'threat_intel',
  '#threatintel': 'threat_intel',

  '#APIPenTesting': 'api_pentesting',
  '#apipentesting': 'api_pentesting',
  '#NetworkPenTesting': 'network_pentesting',
  '#networkpentesting': 'network_pentesting',
  '#RedTeaming': 'red_teaming',
  '#redteaming': 'red_teaming',
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
  
  threat_intel: '#ThreatIntel',
  api_pentesting: '#APIPenTesting',
  network_pentesting: '#NetworkPenTesting',
  red_teaming: '#RedTeaming',
} as const;



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
  const [activeTab, setActiveTab] = useState<'youtube' | 'practice' | 'security' | 'simulations' | 'pentesting' | 'soc' | 'certs' | 'cloud' | 'crypto' | 'android' | 'ios' | 'fundamentals' | 'ai_security' | 'threat_intel' | 'api_pentesting' | 'network_pentesting' | 'red_teaming'>('youtube');
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
    { id: 'threat_intel', label: 'Threat Intel', data: THREAT_INTEL, icon: <Globe className="w-4 h-4" /> },
    { id: 'simulations', label: 'Job Simulations', data: JOB_SIMULATIONS, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'pentesting', label: 'Pen Testing', data: PEN_TESTING, icon: <Terminal className="w-4 h-4" /> },
    { id: 'soc', label: 'SOC / Threat Hunting', data: SOC_RESOURCES, icon: <Radar className="w-4 h-4" /> },
    { id: 'certs', label: 'Free Certifications', data: FREE_CERTS, icon: <Award className="w-4 h-4" /> },
    { id: 'cloud', label: 'Cloud Security', data: CLOUD_SECURITY, icon: <Cloud className="w-4 h-4" /> },
    { id: 'crypto', label: 'Cryptography', data: CRYPTOGRAPHY, icon: <Key className="w-4 h-4" /> },
    
    { id: 'android', label: 'Mobile (Android)', data: MOBILE_ANDROID, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ios', label: 'Mobile (iOS)', data: MOBILE_IOS, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'api_pentesting', label: 'API Pen Testing', data: API_PENTESTING, icon: <Terminal className="w-4 h-4" /> },
    { id: 'network_pentesting', label: 'Network Pen Testing', data: NETWORK_PENTESTING, icon: <Radar className="w-4 h-4" /> },
    { id: 'red_teaming', label: 'Red Teaming', data: RED_TEAMING, icon: <ShieldCheck className="w-4 h-4" /> },
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
