import React from 'react';
import { useTheme } from './ThemeContext';

function ThemedComponent() {
  const { theme } = useTheme();

  const lightStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    textAlign: 'center',
  };

  const darkStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={theme === 'light' ? lightStyle : darkStyle}>
      <h1>Este é o tema {theme === 'light' ? 'claro' : 'escuro'}</h1>
    </div>
  );
}

export default ThemedComponent;