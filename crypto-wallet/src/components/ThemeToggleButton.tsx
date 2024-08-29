import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" /> 
      ) : (
        <SunIcon className="w-6 h-6" /> 
      )}
    </button>
  );
};

export default ThemeToggleButton;
