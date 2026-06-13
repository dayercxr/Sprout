"use client";

import { FC, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { Star } from "lucide-react";
import { WatchlistData } from "@/data/watchlist";
import { WatchlistDialog } from "@/components/watchlist/dialog";
import { THEME_VARS } from "@/theme";

export const WatchlistContent: FC = () => {
  const [dialogState, setDialogState] = useState<boolean>(false);

  return (
    <Paper sx={{ mb: 7 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 5,
          mb: 1.5
        }}
      >
        <Typography variant='h5' color='black' sx={{ fontWeight: 600 }}>
          {WatchlistData.content.title}
        </Typography>
        <Button
          variant='contained'
          onClick={() => setDialogState(true)}
          sx={[
            (theme) =>
              theme.applyStyles("light", {
                color: THEME_VARS.LIGHT.BACKGROUND_COLOR,
                bgcolor: THEME_VARS.LIGHT.DEFAULT_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                color: THEME_VARS.DARK.BACKGROUND_COLOR,
                bgcolor: THEME_VARS.DARK.DEFAULT_COLOR
              })
          ]}
        >
          {WatchlistData.content.addButton}
        </Button>
      </Box>

      <Box sx={{ textAlign: "center", py: 8 }}>
        <Star size={64} style={{ margin: "0 auto 16px" }} />
        <Typography variant='h6' color='white'>
          No collections in your watchlist
        </Typography>
        <Typography
          variant='body1'
          sx={[
            { mb: 3 },
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
          Start tracking your favorite NFT collections
        </Typography>
        <Button
          variant='contained'
          onClick={() => setDialogState(true)}
          sx={[
            (theme) =>
              theme.applyStyles("light", {
                color: THEME_VARS.LIGHT.BACKGROUND_COLOR,
                bgcolor: THEME_VARS.LIGHT.DEFAULT_COLOR
              }),
            (theme) =>
              theme.applyStyles("dark", {
                color: THEME_VARS.DARK.BACKGROUND_COLOR,
                bgcolor: THEME_VARS.DARK.DEFAULT_COLOR
              })
          ]}
        >
          Add Your First Collection
        </Button>
      </Box>
      <WatchlistDialog
        dialogState={dialogState}
        setDialogState={setDialogState}
      />
    </Paper>
  );
};
