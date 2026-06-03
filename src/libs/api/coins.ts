import "server-only";

import { cgClient } from "@/libs/api/index";

export const CoinHandlers = {
  getCoinList: async () => {
    const coinMarketsData = await cgClient.coins.markets.get({
      vs_currency: "usd",
      per_page: 30
    });
    return coinMarketsData;
  },

  getTopCoin: async () => {
    const topCoinMarketData = await cgClient.coins.markets.get({
      vs_currency: "usd",
      per_page: 1
    });
    return topCoinMarketData;
  },

  getTopCoinPriceChart: async () => {
    const response = await CoinHandlers.getTopCoin();
    const topCoinID: string = response[0].id as string;
    const topCoinMarketChart = await cgClient.coins.marketChart.get(topCoinID, {
      days: "30",
      vs_currency: "usd",
      interval: "daily",
      precision: "1"
    });
    return topCoinMarketChart;
  }
};
