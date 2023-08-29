import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DakrModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDakrMode = () => {
    setDarkMode(!darkMode);
    upadateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDakrMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function upadateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
