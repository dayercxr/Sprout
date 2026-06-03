import { Paper, Typography, Box, ButtonBase } from "@mui/material";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DashboardData } from "@/data/dashboard";
import { CoinGeckoTypes } from "@/types";

export function TrendingCollections({ data }: CoinGeckoTypes) {
  const TrendingCollectionsData = DashboardData.trendingCollection;
  const CoinMarketData = data;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant='h5' color='white'>
        Trending Collections
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <ButtonBase
          key={0}
          sx={{
            width: "100%",
            p: 2,
            borderRadius: 1,
            transition: "all 0.2s",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" }
          }}
        >
          <Box sx={{ width: "100%", textAlign: "left" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  objectFit: "cover"
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant='subtitle1' color='white'>
                  0
                </Typography>
                <Typography variant='body2' sx={{ color: "#c4b5fd" }}>
                  sales
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5
              }}
            >
              <Box>
                <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                  Floor Price
                </Typography>
                <Typography variant='body1' color='white'>
                  ETH
                </Typography>
              </Box>
              <Box>
                <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                  24h Change
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography variant='body1' sx={{ color: "#f87171" }}>
                    %
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 1.5,
                pt: 1.5,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                24h Volume
              </Typography>
              <Typography variant='body1' color='white'>
                ETH
              </Typography>
            </Box>
          </Box>
        </ButtonBase>
      </Box>
    </Paper>
  );
}
