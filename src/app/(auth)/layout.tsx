import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeContextProvider from "@/components/general/themeProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sprout",
  description: "NFTs made easy"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AppRouterCacheProvider>
  );
}
