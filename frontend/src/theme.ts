"use client";
import { createTheme } from "@mui/material/styles";

const ACCENT = "#00ff87";
const BG = "#080808";
const PAPER = "#111111";
const BORDER = "rgba(255,255,255,0.08)";
const MONO = "'JetBrains Mono', monospace";
const DISPLAY = "'Barlow Condensed', sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: BG, paper: PAPER },
    primary: { main: ACCENT, contrastText: BG },
    secondary: { main: "#1c1c1c", contrastText: "#f0f0f0" },
    text: { primary: "#f0f0f0", secondary: "#666666" },
    error: { main: "#ff4444" },
    success: { main: ACCENT },
    divider: BORDER,
  },
  typography: {
    fontFamily: "'Barlow', sans-serif",
    h1: { fontFamily: DISPLAY, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 },
    h2: { fontFamily: DISPLAY, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 },
    h3: { fontFamily: DISPLAY, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.1 },
    h4: { fontFamily: DISPLAY, fontWeight: 800, letterSpacing: "-0.01em" },
    h5: { fontFamily: DISPLAY, fontWeight: 700 },
    h6: { fontFamily: DISPLAY, fontWeight: 700 },
    overline: { fontFamily: MONO, letterSpacing: "0.05em", fontSize: "0.65rem" },
    caption: { fontFamily: MONO, fontSize: "0.65rem" },
    button: { fontFamily: MONO, letterSpacing: "0.06em", fontSize: "0.7rem" },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(8,8,8,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: MONO,
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "10px 24px",
          minWidth: "unset",
        },
        text: {
          color: "#666666",
          padding: "6px 12px",
          "&:hover": { color: "#f0f0f0", backgroundColor: "transparent" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${BORDER}`,
          boxShadow: "none",
          backgroundColor: PAPER,
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 0, boxShadow: "none" } },
    },
    MuiTableContainer: {
      styleOverrides: { root: { borderRadius: 0 } },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${BORDER}`,
          fontFamily: MONO,
          fontSize: "0.72rem",
          padding: "14px 16px",
          color: "#f0f0f0",
        },
        head: {
          color: "#666666",
          backgroundColor: PAPER,
          fontSize: "0.62rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          transition: "background-color 150ms",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.025)" },
          "&:last-child td": { borderBottom: 0 },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "unset",
          border: `1px solid ${BORDER}`,
        },
        indicator: { display: "none" },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: "unset",
          fontFamily: MONO,
          fontWeight: 700,
          fontSize: "0.68rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "8px 28px",
          color: "#666666",
          borderRadius: 0,
          "&.Mui-selected": { backgroundColor: ACCENT, color: BG },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: MONO,
          fontSize: "0.6rem",
          letterSpacing: "0.04em",
          height: 24,
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: BORDER } },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: BG,
          borderRadius: 0,
          borderRight: `1px solid ${BORDER}`,
          width: 280,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: 0, color: "#f0f0f0" } },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
        },
      },
    },
  },
});

export default theme;
