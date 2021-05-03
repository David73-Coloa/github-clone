import React from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '../styles/themes'
import useTheme from '../hooks/useTheme'
import GlobalStyles from '../styles/GlobalStyles'

const Theme = ({ children }) => {
  const { themeName } = useTheme()
  return (
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
