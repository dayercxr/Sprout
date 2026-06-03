import { Box } from "@mui/material";
import { WatchlistStatistics } from "@/components/watchlist/statistics";
import { WatchlistContent } from "@/components/watchlist/content";
import { AuthServerHandler } from "@/libs/auth/auth-server";

export default async function Watchlist() {
  await AuthServerHandler.requireAuth();

  return (
    <Box sx={{ mx: 15 }}>
      <WatchlistStatistics />
      <WatchlistContent />
    </Box>
  );
}
