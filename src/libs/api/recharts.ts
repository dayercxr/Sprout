import { MarketChartTypes } from "@/types";
import { Coingecko } from "@coingecko/coingecko-typescript";

export const RechartsHandlers = {
  formatDate: (date: Date) => {
    const adjustedDate = new Date(date);
    return adjustedDate.toLocaleString();
  },

  getPriceChartData: (response: MarketChartTypes) => {
    const newData = response.prices.map((value) => {
      return { date: RechartsHandlers.formatDate(value[0]), price: value[1] };
    });
    return newData;
  }
};
