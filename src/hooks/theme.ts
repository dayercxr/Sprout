"use client";

import { useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material";
import { Mode } from "@/types";
import { setCookie, getCookie } from "cookies-next";

export const useCreateTheme = () => {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        const saved = getCookie("theme") as Mode | undefined;
        if (saved === "light" || saved === "dark") {
          setMode(saved);
        }
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const toggleTheme = () => {
    const next: Mode = mode === "light" ? "dark" : "light";
    setMode(next);
    setCookie("theme", next, { maxAge: 60 * 60 * 24 * 365 }); // 1 year
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return { mode, theme, setMode, toggleTheme };
};
