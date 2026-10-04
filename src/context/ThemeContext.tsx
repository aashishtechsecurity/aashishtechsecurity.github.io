import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isTransitioning: boolean;
  transitionTheme: Theme | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTheme, setTransitionTheme] = useState<Theme | null>(null);

  // Sync document root class whenever theme updates
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (isTransitioning) return; // Prevent double trigger

    const targetTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTransitionTheme(targetTheme);
    setIsTransitioning(true);

    // Midpoint: switch the actual theme class on the document root
    setTimeout(() => {
      setTheme(targetTheme);
      localStorage.setItem('theme', targetTheme);
      if (targetTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
    }, 550); // Midpoint of the transition

    // End: clean up transition states
    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionTheme(null);
    }, 1200); // Complete animation duration
  };

  return (
    <ThemeContext.Provider value={{ theme, isTransitioning, transitionTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
