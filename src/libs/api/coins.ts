"use server";

import "server-only";
import { cgClient } from "@/libs/api/index";
import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import { watchlist } from "@/db/schema";
import { AuthServerHandler } from "@/libs/auth/auth-server";

export const getCoinList = async () => {
  const coinMarketsData = await cgClient.coins.markets.get({
    vs_currency: "usd",
    per_page: 30
  });
  return coinMarketsData;
};

export const getTopCoin = async () => {
  const topCoinMarketData = await cgClient.coins.markets.get({
    vs_currency: "usd",
    per_page: 1
  });
  return topCoinMarketData;
};

export const getTopCoinPriceChart = async () => {
  const response = await getTopCoin();
  const topCoinID: string = response[0].id as string;
  const topCoinMarketChart = await cgClient.coins.marketChart.get(topCoinID, {
    days: "30",
    vs_currency: "usd",
    interval: "daily",
    precision: "1"
  });
  return topCoinMarketChart;
};

export const getWatchlistEntries = async () => {
  const sessionInfo = await AuthServerHandler.getSession();
  const userId = sessionInfo?.user.id;
  if (!userId) {
    throw new Error("Unable to add watchlist entry without authenticated user");
  }
  const watchlistEntries = await db
    .select()
    .from(watchlist)
    .where(eq(watchlist.userId, userId));

  return watchlistEntries;
};

export const addWatchlistEntry = async (
  coinName: string,
  buyPrice: number,
  quantity: number
) => {
  const coinData = await cgClient.simple.price.get({
    ids: coinName,
    vs_currencies: "usd",
    include_market_cap: true,
    include_24hr_change: true,
    include_last_updated_at: true
  });
  const sessionInfo = await AuthServerHandler.getSession();
  const userId = sessionInfo?.user.id;
  if (!userId) {
    throw new Error("Unable to add watchlist entry without authenticated user");
  }

  for (const [id, info] of Object.entries(coinData)) {
    await db
      .insert(watchlist)
      .values({
        userId: userId,
        buyPrice: buyPrice,
        quantity: quantity,
        coinId: id,
        priceUsd: info.usd,
        marketCap: info.usd_market_cap,
        change24h: info.usd_24h_change,
        updatedAt: info.last_updated_at
          ? new Date(info.last_updated_at * 1000)
          : new Date()
      })
      .onConflictDoUpdate({
        target: [watchlist.coinId, watchlist.userId],
        set: {
          priceUsd: info.usd,
          marketCap: info.usd_market_cap,
          change24h: info.usd_24h_change,
          updatedAt: info.last_updated_at
            ? new Date(info.last_updated_at * 1000)
            : new Date()
        }
      });
  }
  return;
};

export const updateCoinPrices = async () => {
  const trackedCoinsArray = await db
    .select({ coinId: watchlist.coinId })
    .from(watchlist);
  const trackedCoinsString = trackedCoinsArray
    .map((coin) => coin.coinId)
    .join(",");
  if (!trackedCoinsString) return;

  const sessionInfo = await AuthServerHandler.getSession();
  const userId = sessionInfo?.user.id;
  if (!userId) {
    throw new Error("Unable to update coin prices without authenticated user");
  }

  const data = await cgClient.simple.price.get({
    ids: trackedCoinsString,
    vs_currencies: "usd",
    include_market_cap: true,
    include_24hr_change: true,
    include_last_updated_at: true
  });

  for (const [id, info] of Object.entries(data)) {
    await db
      .insert(watchlist)
      .values({
        userId,
        coinId: id,
        priceUsd: info.usd,
        marketCap: info.usd_market_cap,
        change24h: info.usd_24h_change,
        updatedAt: info.last_updated_at
          ? new Date(info.last_updated_at * 1000)
          : new Date()
      })
      .onConflictDoUpdate({
        target: watchlist.coinId,
        set: {
          priceUsd: info.usd,
          marketCap: info.usd_market_cap,
          change24h: info.usd_24h_change,
          updatedAt: info.last_updated_at
            ? new Date(info.last_updated_at * 1000)
            : new Date()
        }
      });
  }
};
