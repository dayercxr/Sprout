import { Box, Grid } from "@mui/material";
import { TrendingCollections } from "@/components/dashboard/trendingCollections";
import { TopCollection } from "@/components/dashboard/topCollection";
import { PriceChart } from "@/components/dashboard/priceChart";
import { CoinHandlers } from "@/libs/api/coins";
import Coingecko from "@coingecko/coingecko-typescript";
import { AuthServerHandler } from "@/libs/auth/auth-server";
import { MarketChartTypes } from "@/types";

export default async function Dashboard() {
  await AuthServerHandler.requireAuth();

  const coinList = await CoinHandlers.getCoinList();
  const topCoins = await CoinHandlers.getTopCoin();
  const topCoinPriceChart = await CoinHandlers.getTopCoinPriceChart();

  return (
    <>
      <Grid container spacing={3}>
        <Grid>
          <TrendingCollections data={coinList as unknown as Coingecko} />
        </Grid>

        <Grid>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TopCollection data={topCoins[0] as unknown as Coingecko} />
            <PriceChart
              {...(topCoinPriceChart as unknown as MarketChartTypes)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
