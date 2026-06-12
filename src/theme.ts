import { createTheme } from "@mui/material/styles";

export const THEME_VARS = {
  LIGHT: {
    DEFAULT_COLOR: "#14cf5c",
    BACKGROUND_COLOR: "#ffffff",
    PAPER_COLOR: "#cdccccb1",
    BORDER_COLOR: "#rgba(133, 132, 132, 0.54)"
  },
  DARK: {
    DEFAULT_COLOR: "#00ff87",
    BACKGROUND_COLOR: "#0f0f0f",
    ERROR: "#ff4444",
    PAPER_COLOR: "#191919",
    BORDER_COLOR: "#rgba(255, 255, 255, 0.08)",
    PRIMARY_TEXT_COLOR: "#f0f0f0",
    SECONDARY_TEXT_COLOR: "#666666"
  },
  TYPOGRAPHY: {
    PRIMARY_FONT: "'Barlow Condensed', sans-serif",
    SECONDARY_FONT: "'JetBrains Mono', monospace",
    TERTIARY_FONT: "'Barlow', sans-serif"
  }
};

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: THEME_VARS.LIGHT.BACKGROUND_COLOR,
          paper: THEME_VARS.LIGHT.PAPER_COLOR
        },
        primary: {
          main: THEME_VARS.LIGHT.DEFAULT_COLOR
        },
        success: {
          main: THEME_VARS.LIGHT.DEFAULT_COLOR
        }
      }
    },
    dark: {
      palette: {
        background: {
          default: THEME_VARS.DARK.BACKGROUND_COLOR,
          paper: THEME_VARS.DARK.PAPER_COLOR
        },
        primary: {
          main: THEME_VARS.DARK.DEFAULT_COLOR,
          contrastText: THEME_VARS.DARK.BACKGROUND_COLOR
        },
        text: {
          primary: THEME_VARS.DARK.PRIMARY_TEXT_COLOR,
          secondary: THEME_VARS.DARK.SECONDARY_TEXT_COLOR
        },
        success: {
          main: THEME_VARS.DARK.DEFAULT_COLOR
        },
        divider: THEME_VARS.DARK.BORDER_COLOR
      }
    }
  },
  typography: {
    fontFamily: THEME_VARS.TYPOGRAPHY.TERTIARY_FONT,
    h1: {
      fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT,
      fontWeight: 900,
      letterSpacing: "0.02em",
      lineHeight: 1
    },
    h2: {
      fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT,
      fontWeight: 900,
      letterSpacing: "0.02em",
      lineHeight: 1.05
    },
    h3: {
      fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT,
      fontWeight: 800,
      letterSpacing: "0.01em",
      lineHeight: 1.1
    },
    h4: {
      fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT,
      fontWeight: 800,
      letterSpacing: "0.01em"
    },
    h5: { fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT, fontWeight: 700 },
    h6: { fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT, fontWeight: 700 },
    overline: {
      fontFamily: THEME_VARS.TYPOGRAPHY.PRIMARY_FONT,
      letterSpacing: "0.05em",
      fontSize: "0.65rem"
    },
    caption: {
      fontFamily: THEME_VARS.TYPOGRAPHY.PRIMARY_FONT,
      fontSize: "0.65rem"
    },
    button: {
      fontFamily: THEME_VARS.TYPOGRAPHY.PRIMARY_FONT,
      letterSpacing: "0.06em",
      fontSize: "0.8rem"
    }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT,
          fontWeight: 700,
          textTransform: "uppercase",
          minWidth: "unset"
        }
      }
    }
  }
});
