import { Link } from 'react-router-dom';
import { Terminal, ArrowRight, User } from 'lucide-react';
import { Linkedin } from '../Icons';

const AboutPreviewSection = () => {
  return (
    <section className="py-24 relative border-b border-border-glow/30" id="about-preview">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border-glow/40 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Bio Info */}
            <div className="md:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs">
                <User className="w-3.5 h-3.5" />
                <span>The Security Professional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
                Meet <span className="text-accent-cyan text-glow-cyan">Aashish Bande</span>
              </h2>

              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Security Analyst at <strong className="text-text-primary">Pragma Edge Inc</strong> with a degree in Mechanical Engineering from Vellore Institute of Technology. 
                Specializing in Application Security (SAST/DAST), penetration testing, vulnerability triage, and open-source tooling.
              </p>

              {/* Roles Matrix */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                {['Security Analyst', 'AppSec Practitioner', 'Penetration Tester', 'Tool Builder', 'Telugu Educator'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-bg-primary border border-border-glow/30 text-accent-cyan">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA to Dedicated About Page */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-accent-cyan text-bg-primary font-bold rounded-lg hover:bg-[#00d5ff] transition-all hover:box-glow-cyan inline-flex items-center gap-2 text-sm shadow-md active:scale-95"
                >
                  <span>View Full Professional Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/aashishsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-bg-primary border border-border-glow text-text-primary font-bold rounded-lg hover:border-accent-cyan hover:text-accent-cyan transition-all inline-flex items-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right: Quick Spec Snippet */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-bg-primary/80 border border-border-glow/30 font-mono text-xs space-y-3">
              <div className="text-accent-green pb-2 border-b border-border-glow/20 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>whoami --summary</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Experience</span>
                <span className="text-text-primary font-bold">2+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Location</span>
                <span className="text-text-primary">Hyderabad, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Certs</span>
                <span className="text-accent-cyan font-bold">CAP, ISO 27001, CNSP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Open Source</span>
                <span className="text-accent-purple font-bold">httpAlive, JS-Scanner</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreviewSection;
