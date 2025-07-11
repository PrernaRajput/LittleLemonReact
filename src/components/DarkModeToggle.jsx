import React from 'react';
import { useTheme } from '../utils/ThemeContext';

const DarkModeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode">
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
