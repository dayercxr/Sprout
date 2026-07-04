"use client";

import { FC, ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";
import { CalculateInputTypes } from "@/types";

export const CalculateInput: FC<CalculateInputTypes> = ({
  label,
  type,
  placeholder,
  name,
  onChangeHandler
}) => {
  return (
    <Grid>
      <TextField
        fullWidth
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e as ChangeEvent<HTMLInputElement>)}
      />
    </Grid>
  );
};
