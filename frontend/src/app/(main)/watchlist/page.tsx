import {
  Box,
  Button,
  Paper,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@mui/material";
import { WatchlistStatistics } from "@/components/watchlist/statistics";
import { WatchlistContent } from "@/components/watchlist/content";

export default function Watchlist() {
  return (
    <Box sx={{ mx: 15 }}>
      <WatchlistStatistics />
      <WatchlistContent />
    </Box>
  );
}
