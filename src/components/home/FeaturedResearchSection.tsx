import { motion } from 'framer-motion';
import { FileText, ArrowRight, ExternalLink, Calendar } from 'lucide-react';
import { Medium } from '../Icons';

const ARTICLES = [
  {
    title: 'Dissecting Indirect Prompt Injection Vulnerabilities in AI Tooling',
    category: 'AI Security',
    date: '2026',
    desc: 'An exploration of how untrusted external context vectors can manipulate LLM agent workflows and trigger unauthorized tool actions.',
    url: 'https://aashishtechsecurity.medium.com/',
    tagColor: 'text-accent-purple bg-accent-purple/10 border-accent-purple/30'
  },
  {
    title: 'Modern OSINT Reconnaissance: Uncovering Hidden Assets with Censys & Shodan',
    category: 'OSINT',
    date: '2026',
    desc: 'Practical search syntax, SSL fingerprint tracking, and automated host aggregation techniques to map target infrastructure.',
    url: 'https://aashishtechsecurity.medium.com/',
    tagColor: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30'
  },
  {
    title: 'OWASP API Security: Identifying Broken Object Level Authorization (BOLA)',
    category: 'AppSec',
    date: '2026',
    desc: 'Why BOLA continues to dominate API vulnerability findings and how to design robust attribute-based access controls.',
    url: 'https://aashishtechsecurity.medium.com/',
    tagColor: 'text-accent-green bg-accent-green/10 border-accent-green/30'
  },
  {
    title: 'Reverse Engineering Android APKs: A Hands-On Guide with MobSF and JADX',
    category: 'Mobile Pentesting',
    date: '2026',
    desc: 'Decompiling Android bytecode, analyzing manifest permissions, and discovering exposed secrets within mobile client applications.',
    url: 'https://aashishtechsecurity.medium.com/',
    tagColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30'
  }
];

const FeaturedResearchSection = () => {
  return (
    <section className="py-24 bg-bg-card/40 relative border-b border-border-glow/30" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
              Latest Security <span className="text-accent-cyan text-glow-cyan">Research</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2">
              Technical breakdowns, attack surface studies, and vulnerability analyses published on Medium.
            </p>
          </div>

          <a
            href="https://aashishtechsecurity.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-cyan font-mono text-xs sm:text-sm hover:underline inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            <Medium className="w-4 h-4" />
            <span>Read all on Medium</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/60 transition-all hover:box-glow-cyan flex flex-col justify-between group block"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 font-mono text-xs">
                    <span className={`px-2.5 py-0.5 rounded border font-semibold ${article.tagColor}`}>
                      {article.category}
                    </span>
                    <span className="text-text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-3">
                    {article.title}
                  </h3>

                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-mono mb-6">
                    {article.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-accent-cyan font-mono text-xs font-bold pt-4 border-t border-border-glow/20 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedResearchSection;
