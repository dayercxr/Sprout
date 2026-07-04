"use client";

import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CalculateHeaderTypes } from "@/types";

export const CalculateHeader: FC<CalculateHeaderTypes> = ({
  title,
  description,
  Icon,
  logoColor
}) => {
  return (
    <Box sx={{ display: "flex", aligs: "center", gap: 2, mb: 3 }}>
      <Box sx={{ p: 1.5, bgcolor: logoColor, borderRadius: 1 }}>
        <Icon />
      </Box>
      <Box>
        <Typography variant='h5' color='white'>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: logoColor }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
