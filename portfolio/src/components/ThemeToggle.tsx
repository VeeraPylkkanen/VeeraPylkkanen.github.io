'use client'

import { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'default' ? 'dark' : 'default'
    });
  };

  return (
    <>
      <h2 className="hidden lg:block text-sm font-bold my-2">Switch theme</h2>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === 'dark'}
          onChange={toggleTheme} />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primaryAccent dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
      </label>
    </>
  );
};

export default ThemeToggle;