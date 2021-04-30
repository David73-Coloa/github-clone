import React from 'react'
import usePersistedState from '../hooks/usePersistedState'

const ThemeContext = React.createContext();
const ThemeStore = ({ children }) => {
  const [themeName, setThemeName] = usePersistedState('Theme','light');
  const switchTheme = (theme) => setThemeName(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext,ThemeStore }
