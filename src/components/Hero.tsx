import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Fewer particles on mobile to reduce visual noise & improve performance
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden crt-scanline">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-cyan/20"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Floating Orbs — smaller on mobile */}
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full blur-3xl z-0 hero-orb bg-accent-cyan/10"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, -60, 50, 0], y: [0, 50, -70, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl z-0 hero-orb bg-accent-purple/10"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 40, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl z-0 hero-orb bg-accent-green/5"
      />

      {/* Floating Particles — reduced count on mobile */}
      {!shouldReduceMotion && [...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -120 - i * 30, 0], 
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "easeInOut", delay: i * 1.5 }}
          className="absolute w-1.5 h-1.5 bg-accent-cyan rounded-full z-0 hero-particle"
          style={{ left: `${15 + i * 14}%`, top: `${30 + (i % 3) * 20}%` }}
        />
      ))}
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-accent-cyan/30 blur-3xl rounded-full animate-pulse" />
          <img 
            src={logo} 
            alt="AashishTechSecurity Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain brand-logo relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-accent-green mb-4 md:mb-6 typewriter-text inline-block text-xs sm:text-sm"
        >
          {'> System Ready // Access Granted ✓'}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        >
          Welcome to <br />
          <span className="glitch-text text-accent-cyan" data-text="AashishTechSecurity">
            AashishTechSecurity
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-mono text-text-muted text-xs sm:text-sm md:text-base max-w-2xl mb-8 md:mb-10 leading-relaxed"
        >
          Security Analyst & Cybersecurity Educator.<br/>
          Vulnerability Assessments · Penetration Testing · SAST<br/>
          — Breaking things to build them stronger.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <a href="https://www.linkedin.com/in/aashishsec" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 bg-accent-cyan text-bg-primary font-bold rounded flex items-center justify-center gap-2 hover:bg-[#00d5ff] transition-all hover:box-glow-cyan text-sm sm:text-base active:scale-95">
            📄 Download Resume
          </a>
          <Link to="/#toolkit" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 border border-accent-cyan text-accent-cyan font-bold rounded flex items-center justify-center gap-2 hover:bg-[rgba(0,245,255,0.1)] transition-all box-glow-cyan text-sm sm:text-base active:scale-95">
            ⚙ Explore Toolkit
          </Link>
        </motion.div>
      </div>

      <motion.div 
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-accent-cyan text-sm"
      >
        ▼
      </motion.div>
    </section>
  );
};

export default Hero;
