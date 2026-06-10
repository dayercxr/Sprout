"use client";

import { FC } from "react";
import { HomeData } from "@/data/home";
import { Box, Typography, Container } from "@mui/material";
import { THEME_VARS } from "@/theme";

export const FeaturesSection: FC = () => {
  const FeaturesSectionData = HomeData.FeaturesSection;

  return (
    <Box
      sx={[
        { bgcolor: THEME_VARS.LIGHT.PAPER_COLOR, py: 12 },
        (theme) =>
          theme.applyStyles("dark", {
            bgcolor: THEME_VARS.DARK.PAPER_COLOR,
            py: 12
          })
      ]}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 2, md: 4 } }}>
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
            {FeaturesSectionData.header}
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              maxWidth: 520,
              lineHeight: 1.05
            }}
          >
            {FeaturesSectionData.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr"
            },
            border: 0.1,
            "& > *": {
              border: 0.1,
              borderRight: THEME_VARS.DARK.BORDER_COLOR,
              borderBottom: THEME_VARS.DARK.BORDER_COLOR
            }
          }}
        >
          {FeaturesSectionData.points.map(({ Icon, title, description }) => (
            <Box
              key={title}
              sx={[
                {
                  p: 4,
                  bgcolor: THEME_VARS.LIGHT.PAPER_COLOR,
                  transition: "background-color 200ms",
                  cursor: "default",
                  "&:hover": { bgcolor: THEME_VARS.LIGHT.BACKGROUND_COLOR },
                  "&:hover .feat-icon": {
                    color: THEME_VARS.LIGHT.DEFAULT_COLOR
                  }
                },
                (theme) =>
                  theme.applyStyles("dark", {
                    p: 4,
                    bgcolor: THEME_VARS.DARK.PAPER_COLOR,
                    transition: "background-color 200ms",
                    cursor: "default",
                    "&:hover": { bgcolor: THEME_VARS.DARK.BACKGROUND_COLOR },
                    "&:hover .feat-icon": {
                      color: THEME_VARS.DARK.DEFAULT_COLOR
                    }
                  })
              ]}
            >
              <Icon className='feat-icon' sx={{ transition: "color 200ms" }} />
              <Typography variant='h5' sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                {title}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  fontSize: "0.875rem"
                }}
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
