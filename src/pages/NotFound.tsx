import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="pt-32 pb-16 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      <SEO title="404 - Not Found | AashishTechSecurity" description="The page you are looking for does not exist." />
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="text-[20rem] font-bold text-border-glow/30 select-none">404</div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-10 max-w-xl mx-auto px-4 text-center space-y-8"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-bg-card border-2 border-red-500/30 rounded-full box-glow-red">
            <Terminal className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
          <span className="text-red-500">Error 404:</span> Target Not Found
        </h1>
        
        <p className="text-text-muted font-mono leading-relaxed">
          The endpoint you are trying to reach has either been moved, deleted, or never existed in the first place. Verify your coordinates and try again.
        </p>
        
        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-bg-primary font-bold rounded hover:bg-[#00d5ff] transition-all hover:box-glow-cyan font-mono"
          >
            Return to Base
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
