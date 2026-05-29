import { Box, Paper, Typography, IconButton, Grid } from "@mui/material";
import { CoinHandlers } from "@/libs/coins";
import { DashboardData } from "@/data/dashboard";

export async function TopCollection() {
  const TopCollectionData = DashboardData.topCollection;
  const CoinMarketData = await CoinHandlers.getCoinList();
  const TopCoinMarketData = CoinMarketData[0];

  return (
    <Paper sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        <Box>
          <Typography variant='h4' color='white'>
            {TopCoinMarketData.name}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {TopCollectionData.labels.map((item) => (
          <Grid key={item.label}>
            <Box
              sx={{
                p: 2,
                bgcolor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 1
              }}
            >
              <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                {item.label}
              </Typography>
              <Typography variant='body1' color='white'>
                {TopCoinMarketData[item.key]}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
