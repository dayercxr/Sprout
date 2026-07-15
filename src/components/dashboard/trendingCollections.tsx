import { Paper, Typography, Box, ButtonBase } from "@mui/material";
import { TrendingCoin } from "@/types";

export function TrendingCollections({
  data
}: {
  data?: TrendingCoin | TrendingCoin[];
}) {
  const CoinMarketData: TrendingCoin[] = Array.isArray(data)
    ? data
    : data
      ? [data]
      : [];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant='h5' color='white'>
        Trending Collections
      </Typography>

      <Box
        sx={{
          display: "grid",
          flexDirection: "column",
          gap: 1.5,
          gridTemplateColumns: "repeat(3, 0.5fr)"
        }}
      >
        {CoinMarketData.map((coin: TrendingCoin, idx: number) => (
          <ButtonBase
            key={coin.id ?? idx}
            sx={{
              width: "100%",
              p: 2,
              borderRadius: 1,
              transition: "all 0.2s",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.08)" }
            }}
          >
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5
                }}
              >
                <Box sx={{ flex: 1, justifyContent: "center" }}>
                  <Box
                    component='img'
                    src={coin.image}
                    sx={{ width: 180, height: 180 }}
                  />
                  <Typography
                    variant='subtitle1'
                    color='white'
                    sx={{ textAlign: "center" }}
                  >
                    {coin.name}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1.5
                }}
              >
                <Box>
                  <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                    Current Price
                  </Typography>
                  <Typography variant='body1' color='white'>
                    {coin.current_price}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                    24h Change
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography variant='body1' sx={{ color: "#f87171" }}>
                      {coin.price_change_percentage_24h}%
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: 1.5,
                  pt: 1.5,
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
                  24h Volume
                </Typography>
                <Typography variant='body1' color='white'>
                  {coin.high_24h}
                </Typography>
              </Box>
            </Box>
          </ButtonBase>
        ))}
      </Box>
    </Paper>
  );
}
