import { FC } from "react";
import { AppBar, Typography, Toolbar, Stack, Button } from "@mui/material";
import { ThemeToggle } from "@/components/general/themeToggle";
import { HomeData } from "@/data/home";

export const NavigationSection: FC = () => {
  const NavigationSectionData = HomeData.NavigationSection;
  const NavigationLoginData = NavigationSectionData.loginButton;
  const NavigationSignupData = NavigationSectionData.signupButton;

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
            variant='outlined'
            href={NavigationLoginData.path}
            sx={{ px: 1.5 }}
          >
            {NavigationLoginData.label}
          </Button>
          <Button variant='contained' href={NavigationSignupData.path}>
            {NavigationSignupData.label}
          </Button>
          <ThemeToggle />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
