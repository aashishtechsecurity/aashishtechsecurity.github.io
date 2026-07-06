import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const ThemeTransitionOverlay: React.FC = () => {
  const { isTransitioning, transitionTheme } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden ${
            transitionTheme === 'dark' 
              ? 'bg-[#0a0a0a] text-[#e2e8f0]' 
              : 'bg-[#f8fafc] text-[#0f172a]'
          }`}
        >
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(to right, ${transitionTheme === 'dark' ? '#00f5ff' : '#0891b2'} 1px, transparent 1px),
                                  linear-gradient(to bottom, ${transitionTheme === 'dark' ? '#00f5ff' : '#0891b2'} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Glowing laser/scan line sweep */}
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className={`absolute left-0 right-0 h-[4px] blur-[2px] z-10 ${
              transitionTheme === 'dark'
                ? 'bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_15px_#00f5ff]'
                : 'bg-gradient-to-r from-transparent via-accent-purple to-transparent shadow-[0_0_15px_#7c3aed]'
            }`}
          />

          {/* Animated Tech Rings & Logo Container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer Cyber Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className={`absolute w-48 h-48 rounded-full border-2 border-dashed ${
                transitionTheme === 'dark' ? 'border-accent-cyan/40' : 'border-accent-purple/40'
              }`}
            />

            {/* Inner Tech Ring (rotating opposite direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className={`absolute w-40 h-40 rounded-full border border-double ${
                transitionTheme === 'dark' ? 'border-accent-purple/30' : 'border-accent-cyan/30'
              }`}
            />

            {/* Logo Wrapper with neon pulse */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ 
                scale: [0.7, 1.1, 1], 
                opacity: 1,
                boxShadow: transitionTheme === 'dark' 
                  ? ['0 0 20px rgba(0, 245, 255, 0.2)', '0 0 40px rgba(0, 245, 255, 0.6)', '0 0 20px rgba(0, 245, 255, 0.2)']
                  : ['0 0 20px rgba(124, 58, 237, 0.2)', '0 0 40px rgba(124, 58, 237, 0.5)', '0 0 20px rgba(124, 58, 237, 0.2)']
              }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative w-28 h-28 rounded-full bg-[#0a0a0a] flex items-center justify-center z-20 border border-border-glow/30"
            >
              <img 
                src={logo} 
                alt="ATS Logo" 
                className="w-20 h-20 object-contain brand-logo"
              />
            </motion.div>
          </div>

          {/* Scanning Text Message */}
          <div className="mt-8 text-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`font-display text-sm tracking-widest font-bold ${
                transitionTheme === 'dark' ? 'text-accent-cyan' : 'text-accent-purple'
              }`}
            >
              AASHISH TECH SECURITY
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="font-mono text-xs mt-2 opacity-80 tracking-wider"
            >
              {transitionTheme === 'dark' 
                ? 'INITIALIZING DARK SHIELD MODE...' 
                : 'INITIALIZING LIGHT SHIELD MODE...'
              }
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransitionOverlay;
