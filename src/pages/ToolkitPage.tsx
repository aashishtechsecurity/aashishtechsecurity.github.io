import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExternalLink, Terminal, Shield, Radar, Zap, Search, Filter, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { ethicalHackingToolkit, socToolkit, ctiToolkit } from '../data/toolkitData';
import type { ToolkitCategory } from '../data/toolkitData';

const HASH_TO_TAB = {
  '#ethical-hacking': 'ethical-hacking',
  '#soc': 'soc',
  '#cti': 'cti',
} as const;

type TabKey = 'ethical-hacking' | 'soc' | 'cti';

const ToolkitPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());

  const activeTab: TabKey = (() => {
    const hash = location.hash.toLowerCase();
    if (hash && hash in HASH_TO_TAB) {
      return HASH_TO_TAB[hash as keyof typeof HASH_TO_TAB];
    }
    return 'ethical-hacking';
  })();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const hash = location.hash.toLowerCase();
    if (!hash || !(hash in HASH_TO_TAB)) {
      navigate('/toolkit#ethical-hacking', { replace: true });
    }
    // Reset filters when tab changes
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setExpandedCats(new Set());
  }, [location.hash, navigate]);

  const handleTabChange = (tab: TabKey) => {
    navigate(`/toolkit#${tab}`);
  };

  const getToolkitData = (): ToolkitCategory[] => {
    switch (activeTab) {
      case 'ethical-hacking': return ethicalHackingToolkit;
      case 'soc': return socToolkit;
      case 'cti': return ctiToolkit;
      default: return ethicalHackingToolkit;
    }
  };

  const activeData = getToolkitData();
  const categoriesCount = activeData.length;
  const toolsCount = activeData.reduce((acc, cat) => acc + cat.items.length, 0);

  const filteredData = useMemo(() => {
    return activeData.map(cat => {
      if (selectedCategory !== 'All Categories' && cat.title !== selectedCategory) {
        return null;
      }
      
      const q = searchQuery.toLowerCase();
      const filteredItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q)) ||
        cat.title.toLowerCase().includes(q)
      );
      
      if (filteredItems.length === 0) return null;
      return { ...cat, items: filteredItems };
    }).filter(Boolean) as ToolkitCategory[];
  }, [activeData, searchQuery, selectedCategory]);

  const toggleCategory = (title: string) => {
    setExpandedCats(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCats(new Set(activeData.map(c => c.title)));
  };

  const collapseAll = () => {
    setExpandedCats(new Set());
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO title="Toolkit" description="Curated tools for Ethical Hacking, SOC, and Cyber Threat Intelligence." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-mono mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Curated Arsenal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Toolkit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            A comprehensive collection of tools, platforms, and resources for cybersecurity professionals and enthusiasts.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange('ethical-hacking')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold transition-all ${activeTab === 'ethical-hacking' ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 box-glow-cyan shadow-[0_0_15px_rgba(0,245,255,0.2)]' : 'text-text-muted hover:text-text-primary hover:bg-bg-card border border-border-glow'}`}
          >
            <Terminal className="w-5 h-5" />
            Ethical Hacking
          </button>
          <button
            onClick={() => handleTabChange('soc')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold transition-all ${activeTab === 'soc' ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 box-glow-cyan shadow-[0_0_15px_rgba(0,245,255,0.2)]' : 'text-text-muted hover:text-text-primary hover:bg-bg-card border border-border-glow'}`}
          >
            <Shield className="w-5 h-5" />
            SOC Analyst
          </button>
          <button
            onClick={() => handleTabChange('cti')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold transition-all ${activeTab === 'cti' ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 box-glow-cyan shadow-[0_0_15px_rgba(0,245,255,0.2)]' : 'text-text-muted hover:text-text-primary hover:bg-bg-card border border-border-glow'}`}
          >
            <Radar className="w-5 h-5" />
            Threat Intelligence
          </button>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {/* Horizontal Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 font-mono text-center">
              <div className="bg-bg-card border border-border-glow rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2 text-accent-cyan">{categoriesCount}</div>
                <div className="text-sm font-medium text-text-muted capitalize tracking-wide">Categories</div>
              </div>
              <div className="bg-bg-card border border-border-glow rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2 text-accent-cyan">{toolsCount}+</div>
                <div className="text-sm font-medium text-text-muted capitalize tracking-wide">Tools</div>
              </div>
              <div className="bg-bg-card border border-border-glow rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2 text-text-primary">100%</div>
                <div className="text-sm font-medium text-text-muted capitalize tracking-wide">Free</div>
              </div>
              <div className="bg-bg-card border border-border-glow rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2 text-accent-cyan">24/7</div>
                <div className="text-sm font-medium text-text-muted capitalize tracking-wide">Access</div>
              </div>
            </div>

                {/* Filter Box */}
                <div className="bg-bg-card border border-border-glow rounded-2xl p-6 mb-8 shadow-lg font-mono">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                      <input 
                        type="text" 
                        placeholder="Search tools, categories, or descriptions..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-bg-primary border border-border-glow rounded-xl pl-12 pr-4 py-4 text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all font-medium"
                      />
                    </div>
                    <div className="relative md:w-64">
                      <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                      <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-bg-primary border border-border-glow rounded-xl pl-12 pr-10 py-4 text-text-primary appearance-none focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all font-medium cursor-pointer"
                      >
                        <option value="All Categories">All Categories</option>
                        {activeData.map(c => (
                          <option key={c.title} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button onClick={expandAll} className="px-6 py-2 rounded-full bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/30 transition-colors">Expand All</button>
                    <button onClick={collapseAll} className="px-6 py-2 rounded-full bg-bg-primary border border-border-glow text-text-muted text-sm font-medium hover:bg-bg-card-hover transition-colors">Collapse All</button>
                  </div>
                </div>

                {/* Categories Accordion */}
                <div className="space-y-4">
                  {filteredData.map((category, idx) => {
                    const isExpanded = expandedCats.has(category.title);
                    return (
                      <div key={idx} className={`border rounded-xl overflow-hidden transition-all duration-300 bg-bg-card border-border-glow hover:border-accent-cyan/30 ${isExpanded ? 'border-accent-cyan/50' : ''}`}>
                        <button 
                          onClick={() => toggleCategory(category.title)}
                          className="w-full p-5 flex items-center justify-between focus:outline-none text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-1 text-text-muted">
                              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                            </div>
                            <span className="text-lg md:text-xl font-bold text-text-primary uppercase tracking-wider font-display">
                              {category.title}
                            </span>
                            <div className="hidden sm:block bg-accent-cyan/10 text-accent-cyan text-xs font-bold px-3 py-1 rounded-sm border border-accent-cyan/40">
                              {category.items.length}
                            </div>
                          </div>
                          <div className="sm:hidden bg-accent-cyan/10 text-accent-cyan text-xs font-bold px-3 py-1 rounded-sm border border-accent-cyan/40">
                            {category.items.length}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="p-4 md:p-6 border-t border-border-glow bg-bg-primary/30">
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                  {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="p-4 bg-bg-primary rounded-lg border border-border-glow/30 hover:border-accent-cyan/50 transition-colors group">
                                      <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3 min-w-0">
                                          {item.url ? (
                                            <img 
                                              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(item.url)}&sz=64`}
                                              alt=""
                                              className="w-6 h-6 rounded flex-shrink-0 mt-0.5 bg-bg-card"
                                              onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                              }}
                                            />
                                          ) : (
                                            <div className="w-6 h-6 rounded flex-shrink-0 mt-0.5 bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                                              <Terminal className="w-3.5 h-3.5" />
                                            </div>
                                          )}
                                          <div className="min-w-0">
                                            {item.url ? (
                                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-text-primary hover:text-accent-cyan transition-colors font-display group/link truncate max-w-full">
                                                {item.name}
                                              </a>
                                            ) : (
                                              <h3 className="font-bold text-text-primary transition-colors font-display truncate max-w-full">
                                                {item.name}
                                              </h3>
                                            )}
                                            {item.desc && (
                                              <p className="text-sm text-text-muted mt-2 leading-relaxed break-words">
                                                {item.desc}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                        {item.url && (
                                          <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-bg-card rounded-lg text-text-muted hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors flex-shrink-0"
                                            title={`Visit ${item.name}`}
                                          >
                                            <ExternalLink className="w-4 h-4" />
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  
                  {filteredData.length === 0 && (
                    <div className="text-center py-12 text-text-muted border border-border-glow border-dashed rounded-xl">
                      No tools found matching your search criteria.
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
      </div>
  );
};

export default ToolkitPage;
