import { Box, Typography, Paper, IconButton } from "@mui/material";
import { WatchlistDataTypes } from "@/types";
import { deleteWatchlistEntry } from "@/libs/api/coins";
import { X } from "lucide-react";

export function WatchlistEntry({
  coinId,
  priceUsd,
  marketCap,
  change24h
}: WatchlistDataTypes) {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        bgcolor: "rgba(255, 255, 255, 0.03)",
        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" },
        transition: "background-color 0.2s"
      }}
    >
      <Box
        component='img'
        sx={{ width: 64, height: 64, borderRadius: 1, objectFit: "cover" }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography variant='h6'>{coinId}</Typography>
        <Typography variant='body2' sx={{ color: "#c4b5fd" }}>
          Added
        </Typography>
      </Box>

      <Box sx={{ textAlign: "right", minWidth: 120 }}>
        <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
          Current Price (USD)
        </Typography>
        <Typography variant='h6'>{priceUsd} USD</Typography>
      </Box>

      <Box sx={{ textAlign: "right", minWidth: 100 }}>
        <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
          24h Change
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 0.5
          }}
        >
          <Typography variant='h6'>{change24h?.toFixed(2)}</Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "right", minWidth: 120 }}>
        <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
          24h Volume
        </Typography>
        <Typography variant='h6'>{marketCap?.toFixed(2)} USD</Typography>
      </Box>

      <IconButton
        sx={{
          bgcolor: "rgba(239, 68, 68, 0.2)",
          color: "#f87171",
          "&:hover": { bgcolor: "rgba(239, 68, 68, 0.3)" }
        }}
        onClick={() => deleteWatchlistEntry(coinId)}
      >
        <X size={20} />
      </IconButton>
    </Paper>
  );
}
