import { useEffect, useState } from 'react';

import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('isDarkMode');
    setIsDarkMode(stored === 'true' ? true : false);
    if (isDarkMode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return { theme, toggleTheme, isDarkMode };
};
