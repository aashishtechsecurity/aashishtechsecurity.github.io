import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Terminal, Laptop, FileText, Shield, PlayCircle, ArrowRight } from 'lucide-react';

const ECOSYSTEM_CARDS = [
  {
    id: 'learn',
    title: 'Learn',
    subtitle: 'Cybersecurity Education',
    desc: 'Cybersecurity fundamentals, ethical hacking, web security, OSINT, AppSec, cloud security, mobile security, and AI security explained clearly.',
    icon: <BookOpen className="w-6 h-6 text-accent-cyan" />,
    badge: '17+ Domains',
    link: '/resources',
    isExternal: false
  },
  {
    id: 'toolkit',
    title: 'Toolkit',
    subtitle: 'Curated Arsenal',
    desc: 'Curated cybersecurity tools for reconnaissance, OSINT, pentesting, vulnerability assessment, binary analysis, and security research.',
    icon: <Terminal className="w-6 h-6 text-accent-purple" />,
    badge: '500+ Tools',
    link: '/toolkit',
    isExternal: false
  },
  {
    id: 'practice',
    title: 'Practice',
    subtitle: 'Labs & CTFs',
    desc: 'Hands-on practice platforms, CTF challenges, interactive web security sandboxes, and guided offensive security exercises.',
    icon: <Laptop className="w-6 h-6 text-accent-green" />,
    badge: 'Hands-on Labs',
    link: '/resources#PracticePlatforms',
    isExternal: false
  },
  {
    id: 'research',
    title: 'Research',
    subtitle: 'Writeups & Analysis',
    desc: 'Deep-dive security writeups, vulnerability root cause analyses, CTF walkthroughs, and practical technical publications.',
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    badge: 'Technical Blogs',
    link: '#research',
    isExternal: false
  },
  {
    id: 'services',
    title: 'Services',
    subtitle: 'Professional Advisory',
    desc: 'Professional cybersecurity services including vulnerability assessment, application security testing, and practical consulting.',
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    badge: 'Coming Soon',
    link: '#services',
    isExternal: false
  },
  {
    id: 'content',
    title: 'Content',
    subtitle: 'Community & Media',
    desc: 'Cybersecurity education delivered through Instagram reels, 100 Days of Hacking, YouTube guides, and Telugu live demonstrations.',
    icon: <PlayCircle className="w-6 h-6 text-pink-400" />,
    badge: '13k+ Followers',
    link: '#instagram',
    isExternal: false
  }
];

const EcosystemSection = () => {
  return (
    <section className="py-20 bg-bg-card/30 relative border-y border-border-glow/30" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
            <span>The Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Everything Cybersecurity. <span className="text-accent-cyan text-glow-cyan">One Platform.</span>
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            From foundational theory to offensive tools, practical labs, and security consulting — AashishTechSecurity integrates the complete learning and defensive lifecycle.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              {card.isExternal ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/60 transition-all hover:box-glow-cyan flex flex-col justify-between group block"
                >
                  <EcosystemCardContent card={card} />
                </a>
              ) : card.link.startsWith('#') ? (
                <a
                  href={card.link}
                  className="h-full p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/60 transition-all hover:box-glow-cyan flex flex-col justify-between group block"
                >
                  <EcosystemCardContent card={card} />
                </a>
              ) : (
                <Link
                  to={card.link}
                  className="h-full p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-glow/30 hover:border-accent-cyan/60 transition-all hover:box-glow-cyan flex flex-col justify-between group block"
                >
                  <EcosystemCardContent card={card} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const EcosystemCardContent = ({ card }: { card: typeof ECOSYSTEM_CARDS[0] }) => (
  <>
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-bg-primary border border-border-glow/30 group-hover:scale-110 transition-transform">
          {card.icon}
        </div>
        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-bg-primary text-text-muted border border-border-glow/20">
          {card.badge}
        </span>
      </div>

      <div className="space-y-1 mb-3">
        <span className="text-xs font-mono text-accent-cyan block uppercase tracking-wider">
          {card.subtitle}
        </span>
        <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
          {card.title}
        </h3>
      </div>

      <p className="text-text-muted text-sm leading-relaxed mb-6 font-mono text-xs sm:text-sm">
        {card.desc}
      </p>
    </div>

    <div className="flex items-center gap-1.5 text-accent-cyan font-mono text-xs font-bold pt-4 border-t border-border-glow/20 group-hover:translate-x-1 transition-transform">
      <span>Explore {card.title}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  </>
);

export default EcosystemSection;
