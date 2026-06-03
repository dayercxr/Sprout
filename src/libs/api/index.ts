import Coingecko from "@coingecko/coingecko-typescript";
import { COINGECKO_API_KEY } from "@/config";

export const cgClient = new Coingecko({
  demoAPIKey: COINGECKO_API_KEY,
  environment: "demo",
  maxRetries: 3 // Automatically handles backoff for rate limits
});
