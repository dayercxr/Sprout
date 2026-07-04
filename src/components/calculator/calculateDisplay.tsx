"use client";

import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { CalculateDisplayTypes } from "@/types";

export const CalculateDisplay: FC<CalculateDisplayTypes> = ({
  title,
  value
}) => {
  const isPositive = value > 0;

  return (
    <Grid>
      <Typography variant='caption'>{title}</Typography>
      <Typography
        variant='h5'
        sx={{ color: isPositive ? "#24eb73" : "#cf3e3e" }}
      >
        {value}
      </Typography>
    </Grid>
  );
};
