// components/ThemeToggle.tsx
"use client";

import { Switch, Stack, SvgIcon } from "@mui/material";
import { GrSun } from 'react-icons/gr';
import { TbMoon } from 'react-icons/tb';
import { useThemeContext } from "@/context/themeContext";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Stack direction='row' sx={{ alignItems: 'center'}}>
      <SvgIcon 
        component={GrSun}
        inheritViewBox
      />
      <Switch
        checked={mode === "dark"}
        onChange={toggleTheme}
        color='default'
          />
      <SvgIcon 
        component={TbMoon}
        inheritViewBox
      />
    </Stack>
  );
}
