import { FC } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { WatchlistData } from "@/data/watchlist";

export const WatchlistStatistics: FC = () => {
  return (
    <Grid container spacing={2} sx={{ my: 3 }}>
      {WatchlistData.statistics.map(({ label, Icon }, index) => (
        <Grid key={index}>
          <Paper sx={{ p: 3.5, borderRadius: "10px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
                gap: 1.5
              }}
            >
              <Typography variant='body2' color='black'>
                {label}
              </Typography>
              <Icon />
            </Box>
            <Typography variant='h5' color='black'></Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
