import * as CoinHandlers from "@/libs/api/coins";
import { CRON_SECRET } from "@/config";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  await CoinHandlers.updateCoinPrices();
  return Response.json({ ok: true });
}
