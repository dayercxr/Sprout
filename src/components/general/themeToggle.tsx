"use client";

import { GrSun } from "react-icons/gr";
import { TbMoon } from "react-icons/tb";
import { Stack, SvgIcon, Switch } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Stack direction='row' sx={{ alignItems: "center" }}>
      <SvgIcon component={GrSun} inheritViewBox />
      <Switch
        checked={mode === "dark"}
        onChange={() => setMode(mode === "light" ? "dark" : "light")}
      />
      <SvgIcon component={TbMoon} inheritViewBox />
    </Stack>
  );
}
