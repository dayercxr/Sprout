"use client";

import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { HomeData } from "@/data/home";
import { THEME_VARS } from "@/theme";

export const BannerSection: FC = () => {
  const BannerSectionData = HomeData.BannerSection;
  const SignupDetails = BannerSectionData.signupButton;

  return (
    <Box
      sx={[
        { py: 14, px: 3 },
        (theme) =>
          theme.applyStyles("light", {
            bgcolor: THEME_VARS.LIGHT.DEFAULT_COLOR
          }),
        (theme) =>
          theme.applyStyles("dark", {
            bgcolor: THEME_VARS.DARK.DEFAULT_COLOR
          })
      ]}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
        <Typography
          variant='h1'
          sx={[
            {
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
              mb: 2.5
            },
            (theme) =>
              theme.applyStyles("light", {
                color: THEME_VARS.LIGHT.BACKGROUND_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                color: THEME_VARS.DARK.BACKGROUND_COLOR
              })
          ]}
        >
          {BannerSectionData.header}
        </Typography>
        <Typography
          variant='body1'
          sx={[
            {
              fontSize: "1.1rem",
              mb: 5,
              maxWidth: 400,
              mx: "auto",
              lineHeight: 1.7
            },
            (theme) =>
              theme.applyStyles("light", {
                color: THEME_VARS.LIGHT.BACKGROUND_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                color: THEME_VARS.DARK.BACKGROUND_COLOR
              })
          ]}
        >
          {BannerSectionData.description}
        </Typography>
        <Button
          variant='contained'
          endIcon={<ChevronRight />}
          href={SignupDetails.path}
          sx={[
            { px: 6, py: 1.75 },
            (theme) =>
              theme.applyStyles("light", {
                bgcolor: THEME_VARS.LIGHT.BACKGROUND_COLOR,
                color: THEME_VARS.LIGHT.DEFAULT_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                bgcolor: THEME_VARS.DARK.BACKGROUND_COLOR,
                color: THEME_VARS.DARK.DEFAULT_COLOR
              })
          ]}
        >
          {SignupDetails.label}
        </Button>
      </Box>
    </Box>
  );
};
