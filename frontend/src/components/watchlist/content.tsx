import { FC } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { Star } from "lucide-react";
import { WatchlistData } from "@/data/watchlist";

export const WatchlistContent: FC = () => {
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
          sx={{
            color: "black",
            bgcolor: "#4ef19d",
            "&:hover": { bgcolor: "#4cc989" }
          }}
        >
          {WatchlistData.content.addButton}
        </Button>
      </Box>

      <Box sx={{ textAlign: "center", py: 8 }}>
        <Star
          size={64}
          color='rgba(168, 85, 247, 0.3)'
          style={{ margin: "0 auto 16px" }}
        />
        <Typography variant='h6' color='white'>
          No collections in your watchlist
        </Typography>
        <Typography variant='body1' sx={{ color: "#c4b5fd", mb: 3 }}>
          Start tracking your favorite NFT collections
        </Typography>
        <Button
          variant='contained'
          sx={{ bgcolor: "#a855f7", "&:hover": { bgcolor: "#7c3aed" } }}
        >
          Add Your First Collection
        </Button>
      </Box>
    </Paper>
  );
};
