import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DakrModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDakrMode = () => {
    setDarkMode(!darkMode);
    upadateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    upadateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDakrMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function upadateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
