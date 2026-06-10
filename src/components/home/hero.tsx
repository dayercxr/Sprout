"use client";

import { FC } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Divider,
  Card,
  CardContent
} from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { HomeData } from "@/data/home";

export const HeroSection: FC = () => {
  const HeroSectionData = HomeData.HeroSection;
  const SignupData = HeroSectionData.signupButton;
  const LoginData = HeroSectionData.loginButton;

  const ACCENT = "#00ff87";
  const BORDER = "rgba(255,255,255,0.08)";

  const PORTFOLIO_DATA = [
    42000, 43200, 41800, 44600, 46200, 45100, 47800, 49200, 48100, 51400, 53200,
    52100, 54800, 56400, 55200, 58100, 60200, 62400
  ].map((v) => ({ v }));

  return (
    <Container maxWidth='xl' sx={{ pt: "144px", pb: 14, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 420px" },
          gap: { xs: 8, lg: 12 },
          alignItems: "space-b"
        }}
      >
        <Box>
          <Typography
            variant='h2'
            sx={{
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              lineHeight: 1,
              fontWeight: 900,
              mb: 0.5
            }}
          >
            {HeroSectionData.header}
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: "text.secondary",
              maxWidth: 440,
              lineHeight: 1.7,
              mb: 5,
              fontSize: "1.1rem"
            }}
          >
            {HeroSectionData.description}
          </Typography>

          <Stack direction='row' spacing={2}>
            <Button
              variant='contained'
              href={SignupData.path}
              sx={{ px: 5, py: 1.5 }}
            >
              {SignupData.label}
            </Button>
            <Button
              variant='outlined'
              href={LoginData.path}
              sx={{ px: 5, py: 1.5 }}
            >
              {LoginData.label}
            </Button>
          </Stack>
        </Box>

        <Card>
          <Box
            sx={{
              px: 2.5,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: `1px solid ${BORDER}`
            }}
          >
            <Typography variant='caption' sx={{ color: "text.secondary" }}>
              PORTFOLIO OVERVIEW
            </Typography>
            <Stack direction='row' spacing={0.75}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: ACCENT,
                  borderRadius: "50%",
                  animation: "pulse-dot 1.5s ease-in-out infinite"
                }}
              />
              <Typography variant='caption' sx={{ color: ACCENT }}>
                LIVE
              </Typography>
            </Stack>
          </Box>

          <CardContent sx={{ px: 2.5, pt: 2.5, pb: 2.5 }}>
            <Typography
              variant='caption'
              sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
            >
              TOTAL VALUE
            </Typography>
            <Typography variant='h2' sx={{ fontSize: "2.25rem", mb: 0.75 }}>
              $62,481.33
            </Typography>
            <Stack direction='row' spacing={0.5} sx={{ color: ACCENT, mb: 3 }}>
              <Typography variant='caption' sx={{ color: ACCENT }}>
                +$9,784.21 this month (+18.6%)
              </Typography>
            </Stack>

            <Box sx={{ height: 112, mb: 3 }}>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart
                  data={PORTFOLIO_DATA}
                  margin={{ top: 4, right: 0, bottom: 0, left: 0 }}
                >
                  <defs>
                    <linearGradient id='portGrad' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='0%' stopColor={ACCENT} stopOpacity={0.25} />
                      <stop offset='100%' stopColor={ACCENT} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type='monotone'
                    dataKey='v'
                    stroke={ACCENT}
                    strokeWidth={2}
                    fill='url(#portGrad)'
                    dot={false}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>

            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 2
              }}
            >
              {[
                { label: "24H P&L", value: "+$1,284", accent: true },
                { label: "ASSETS", value: "24", accent: false },
                { label: "CHAINS", value: "7", accent: false }
              ].map((s) => (
                <Box key={s.label}>
                  <Typography
                    variant='caption'
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      mb: 0.5,
                      fontSize: "0.6rem"
                    }}
                  >
                    {s.label}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{
                      color: s.accent ? ACCENT : "text.primary",
                      fontWeight: 700,
                      fontSize: "0.8rem"
                    }}
                  >
                    {s.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>

          <Box
            sx={{
              px: 2.5,
              py: 1.25,
              borderTop: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <Typography variant='caption' sx={{ color: "text.secondary" }}>
              3 WALLETS CONNECTED — LAST SYNC 12s AGO
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
