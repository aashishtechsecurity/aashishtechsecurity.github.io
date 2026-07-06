import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded border border-border-glow/30 hover:border-accent-cyan text-text-primary hover:text-accent-cyan transition-all hover:box-glow-cyan flex items-center justify-center"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
