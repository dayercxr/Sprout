import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { CalculateDisplayTypes } from "@/types";

export const CalculateDisplay: FC<CalculateDisplayTypes> = ({
  title,
  value
}) => {
  return (
    <Grid>
      <Typography variant='caption' sx={{ color: "#010101" }}>
        {title}
      </Typography>
      <Typography variant='h5' sx={{ color: "#ff2a2a" }}>
        {value}
      </Typography>
    </Grid>
  );
};
