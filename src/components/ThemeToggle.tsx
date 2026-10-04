import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button 
      onClick={toggleTheme} 
      className="h-9 w-9 rounded-lg border border-border-glow/40 hover:border-accent-cyan/60 bg-bg-card/60 hover:bg-bg-card text-text-primary hover:text-accent-cyan transition-all flex items-center justify-center shrink-0"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
