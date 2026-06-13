"use client";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  DialogContent,
  Button,
  TextField
} from "@mui/material";
import { DialogTypes } from "@/types";

export function WatchlistDialog({ dialogState, setDialogState }: DialogTypes) {
  return (
    <Dialog
      open={dialogState}
      onClose={() => setDialogState(false)}
      maxWidth='sm'
      fullWidth
    >
      <DialogTitle>
        <Typography variant='h6'>Add to Watchlist</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 2 }}>
          Search for a collection to add to your watchlist
        </Typography>
        <TextField
          fullWidth
          placeholder='d'
          variant='outlined'
          sx={{ mt: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogState(false)} sx={{}}>
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={() => setDialogState(false)}
          sx={{}}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
