"use client";

import { FC } from "react";
import { HomeData } from "@/data/home";
import { Box, Typography, Container } from "@mui/material";
import { THEME_VARS } from "@/theme";

export const SetupSection: FC = () => {
  const SetupSectionData = HomeData.SetupSection;

  return (
    <Container maxWidth='xl' sx={{ py: 12, px: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 8 }}>
        <Typography
          variant='overline'
          sx={[
            { display: "block", mb: 1.5 },
            (theme) =>
              theme.applyStyles("light", {
                color: THEME_VARS.LIGHT.DEFAULT_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                color: THEME_VARS.DARK.DEFAULT_COLOR
              })
          ]}
        >
          {SetupSectionData.header}
        </Typography>
        <Typography
          variant='h2'
          sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, lineHeight: 1 }}
        >
          HOW IT WORKS.
        </Typography>
      </Box>

      <Box
        sx={[
          {
            display: "grid",
            gridTemplateColumns: ["1fr 1fr", null, "1fr 1fr 1fr"],
            border: 0.1,
            borderColor: THEME_VARS.LIGHT.BORDER_COLOR
          },
          (theme) =>
            theme.applyStyles("dark", {
              display: "grid",
              gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
              border: 0.1,
              borderColor: THEME_VARS.DARK.BORDER_COLOR
            })
        ]}
      >
        {SetupSectionData.points.map(({ step, title, description }) => (
          <Box
            key={step}
            sx={[
              {
                p: { xs: 4, md: 5 },
                border: 0.1
              },
              (theme) =>
                theme.applyStyles("light", {
                  borderColor: THEME_VARS.LIGHT.BORDER_COLOR
                }),
              (theme) =>
                theme.applyStyles("dark", {
                  borderColor: THEME_VARS.DARK.BORDER_COLOR
                })
            ]}
          >
            <Typography
              variant='h1'
              sx={{ fontSize: "5rem", mb: 3, userSelect: "none" }}
            >
              {step}
            </Typography>
            <Typography variant='h4' sx={{ mb: 1.5, fontSize: "1.2rem" }}>
              {title}
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
