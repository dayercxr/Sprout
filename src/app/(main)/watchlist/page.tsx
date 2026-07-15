import { Box } from "@mui/material";
import { WatchlistStatistics } from "@/components/watchlist/statistics";
import { WatchlistContent } from "@/components/watchlist/content";
import * as CoinHandlers from "@/libs/api/coins";
import { AuthServerHandler } from "@/libs/auth/auth-server";

export default async function Watchlist() {
  await AuthServerHandler.requireAuth();
  const watchlistEntries = await CoinHandlers.getWatchlistEntries();

  return (
    <Box sx={{ mx: 15 }}>
      <WatchlistStatistics />
      <WatchlistContent data={watchlistEntries} />
    </Box>
  );
}
