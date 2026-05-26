"use client";

import {
  Box
} from "@mui/material";
import { NavigationSection } from "@/components/home/nav";
import { HeroSection } from "@/components/home/hero";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
        overflowX: "hidden"
      }}
    >
      <NavigationSection />
      <HeroSection />
    </Box>
  );
}
