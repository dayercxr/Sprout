"use client";

import { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  DialogContent,
  Button,
  TextField
} from "@mui/material";
import * as CoinHandlers from "@/libs/api/coins";
import { THEME_VARS } from "@/theme";
import { WatchlistData } from "@/data/watchlist";
import { DialogTypes } from "@/types";

export function WatchlistDialog({ dialogState, setDialogState }: DialogTypes) {
  const [formData, setFormData] = useState({
    coinName: "",
    price: 0,
    quantity: 0
  });

  const { title, textfields } = WatchlistData.dialog;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    await CoinHandlers.addWatchlistEntry(
      formData.coinName,
      formData.price,
      formData.quantity
    );
    setDialogState(false);
  };
  console.log(formData);

  return (
    <Dialog
      open={dialogState}
      onClose={() => setDialogState(false)}
      maxWidth='sm'
      fullWidth
    >
      <Box component='form' onSubmit={handleSubmit}>
        <DialogTitle>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: THEME_VARS.TYPOGRAPHY.SECONDARY_FONT
            }}
          >
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {textfields.map(({ label, name }) => (
            <Box key={label}>
              <Typography key={label} sx={{ mt: 2.5 }}>
                {label}
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                name={name}
                sx={{ mt: 0.5 }}
                onChange={handleChange}
              />
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogState(false)}>Cancel</Button>
          <Button variant='contained' type='submit'>
            Add
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
