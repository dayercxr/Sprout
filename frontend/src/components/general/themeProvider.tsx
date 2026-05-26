"use client"

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from '@/context/themeContext'
import { useCreateTheme } from '@/hooks/theme';


export function ThemeContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { mode, toggleTheme, theme } = useCreateTheme();

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


