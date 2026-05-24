import { FC } from "react";
import { AppBar, Typography, Toolbar, Stack, Button } from "@mui/material";
import { HomeData } from "@/data/home";

export const NavigationSection: FC = () => {
  return (
    <AppBar position='fixed' color='default'>
      <Toolbar
        sx={{ px: { xs: 2, md: 4 }, minHeight: "56px !important", gap: 2 }}
      >
        <Typography
          variant='h5'
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.02em",
            flexGrow: 1,
            userSelect: "none"
          }}
        >
          {HomeData.NavigationSection.header}
        </Typography>

        <Stack
          direction='row'
          spacing={1.5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button
            variant='text'
            sx={{
              color: "black"
            }}
          >
            {HomeData.NavigationSection.loginButton}
          </Button>
          <Button variant='contained' color='success'>
            {HomeData.NavigationSection.signupButton}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
