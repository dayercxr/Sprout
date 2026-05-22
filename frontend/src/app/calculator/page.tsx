import { Box, Paper, Typography } from "@mui/material";
import { TrendingUp } from "lucide-react";
import { Calculate } from "@/components/calculator/calculate";
import { CalculatorData } from "@/data/calculator";

export default function NFTCalculator() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Paper
        sx={{
          bgcolor:
            "linear-gradient(90deg,rgba(187, 247, 250, 1) 0%, rgba(130, 222, 255, 1) 51%, rgba(187, 247, 250, 1) 100%)",
          p: 5
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, px: 15 }}
        >
          <Box sx={{ p: 1.5, bgcolor: "#59acff", borderRadius: 1 }}>
            <TrendingUp size={24} color='white' />
          </Box>
          <Box>
            <Typography color='white'>{CalculatorData.title}</Typography>
            <Typography variant='body2' sx={{ color: "#609efc" }}>
              {CalculatorData.description}
            </Typography>
          </Box>
        </Box>
        {CalculatorData.individualCalculator.map((data, index) => (
          <Calculate
            key={index}
            index={index}
            title={data.title}
            description={data.description}
            Icon={data.logo}
          />
        ))}
      </Paper>
    </Box>
  );
}
