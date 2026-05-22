"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default:
        "linear-gradient(90deg,rgba(187, 247, 250, 1) 0%, rgba(130, 222, 255, 1) 51%, rgba(187, 247, 250, 1) 100%)",
      paper:
        "linear-gradient(90deg,rgba(187, 247, 250, 1) 0%, rgba(130, 222, 255, 1) 51%, rgba(187, 247, 250, 1) 100%)"
    }
  },
  typography: {
    fontFamily: "var(--font-roboto)"
  }
});

export default theme;
