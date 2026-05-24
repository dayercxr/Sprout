import { Star, TrendingUp } from "lucide-react";

export const WatchlistData = {
  statistics: [
    { label: "Collections tracked", Icon: Star },
    { label: "Total Floor Value", Icon: TrendingUp },
    { label: "Avg Weekly Change", Icon: TrendingUp }
  ],
  content: {
    title: "My Watchlist",
    addButton: "Add Collection",
    labels: ["Floor Price", "Weekly Change", "Weekly Volume"]
  }
};
