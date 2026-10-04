import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';

const ROADMAP_STEPS = [
  { step: '01', title: 'Computer Fundamentals', level: 'Beginner' },
  { step: '02', title: 'Networking Primitives', level: 'Beginner' },
  { step: '03', title: 'Linux Administration', level: 'Beginner' },
  { step: '04', title: 'Cybersecurity Fundamentals', level: 'Beginner' },
  { step: '05', title: 'Web Application Security', level: 'Intermediate' },
  { step: '06', title: 'Ethical Hacking & Pentesting', level: 'Intermediate' },
  { step: '07', title: 'Application Security (AppSec)', level: 'Intermediate' },
  { step: '08', title: 'Cloud Security Architecture', level: 'Advanced' },
  { step: '09', title: 'Mobile Security & Reversing', level: 'Advanced' },
  { step: '10', title: 'AI & LLM Security', level: 'Advanced' },
  { step: '11', title: 'Security Research & Tool Building', level: 'Specialist' }
];

const RoadmapPreviewSection = () => {
  return (
    <section className="py-24 relative border-b border-border-glow/30" id="roadmap-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs">
            <Map className="w-3.5 h-3.5" />
            <span>Structured Learning Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Your Cybersecurity Journey <span className="text-blue-400">Starts Here</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-2 font-mono text-xs text-text-muted pt-2">
            <span className="text-accent-cyan font-bold">Beginner</span>
            <span>→</span>
            <span className="text-accent-green font-bold">Intermediate</span>
            <span>→</span>
            <span className="text-accent-purple font-bold">Advanced</span>
            <span>→</span>
            <span className="text-pink-400 font-bold">Security Specialist</span>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Follow a proven, step-by-step curriculum with recommended courses, lab practice, and certifications.
          </p>
        </div>

        {/* 11 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {ROADMAP_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-4 rounded-xl bg-bg-card border border-border-glow/30 hover:border-blue-500/50 transition-all flex items-center gap-3.5 group"
            >
              <div className="font-mono text-xs font-bold text-blue-400 p-2 rounded-lg bg-bg-primary border border-border-glow/20 shrink-0">
                {step.step}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-text-primary font-display font-bold text-sm truncate group-hover:text-blue-400 transition-colors">
                  {step.title}
                </div>
                <div className="text-[11px] font-mono text-text-muted">
                  {step.level}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/roadmap"
            className="px-8 py-3.5 bg-blue-500 text-bg-primary font-bold rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
          >
            <span>View Full Interactive Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RoadmapPreviewSection;
