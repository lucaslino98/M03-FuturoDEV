import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', margin: '20px' }}>
      Alternar para tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
}

export default ThemeToggleButton;