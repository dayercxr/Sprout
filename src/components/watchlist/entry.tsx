import { Box, Typography, Paper, IconButton } from "@mui/material";
import { X } from "lucide-react";

export function WatchlistEntry({}) {
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
        <Typography variant='h6'>name</Typography>
        <Typography variant='body2' sx={{ color: "#c4b5fd" }}>
          Added
        </Typography>
      </Box>

      <Box sx={{ textAlign: "right", minWidth: 120 }}>
        <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
          Floor Price
        </Typography>
        <Typography variant='h6'>ETH</Typography>
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
          <Typography variant='h6'>k</Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "right", minWidth: 120 }}>
        <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
          24h Volume
        </Typography>
        <Typography variant='h6'>ETH</Typography>
      </Box>

      <IconButton
        sx={{
          bgcolor: "rgba(239, 68, 68, 0.2)",
          color: "#f87171",
          "&:hover": { bgcolor: "rgba(239, 68, 68, 0.3)" }
        }}
      >
        <X size={20} />
      </IconButton>
    </Paper>
  );
}
