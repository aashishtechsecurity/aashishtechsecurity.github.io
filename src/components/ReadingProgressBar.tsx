import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple origin-left z-[60] pointer-events-none shadow-[0_0_8px_rgba(0,255,204,0.6)]"
      aria-hidden="true"
    />
  );
};

export default ReadingProgressBar;
