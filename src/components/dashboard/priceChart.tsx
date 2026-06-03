"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";
import { RechartsHandlers } from "@/libs/api/recharts";
import { CoinGeckoTypes, MarketChartTypes } from "@/types";

export function PriceChart(data: MarketChartTypes) {
  const newData = RechartsHandlers.getPriceChartData(data);
  return (
    <Paper sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }}
      >
        <Typography variant='h5' color='white'>
          Price History (30 days)
        </Typography>
      </Box>

      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={newData}>
          <defs>
            <linearGradient x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#a855f7' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#a855f7' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' stroke='#ffffff20' />
          <XAxis dataKey='date' stroke='#c4b5fd' style={{ fontSize: "12px" }} />
          <YAxis
            stroke='#c4b5fd'
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `${value} ETH`}
          />
          <Area
            type='monotone'
            dataKey='price'
            stroke='#b879f2'
            strokeWidth={3}
            fillOpacity={1}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
