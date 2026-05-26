"use client";

import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { Sidebar } from "@/components/general/sidebar";
import { ThemeToggle } from "@/components/general/themeToggle";
import { NavbarData } from "@/data/navbar";

export const Navbar: FC = () => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='default'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Box
            sx={{ display: 'flex', alignItems: 'center'}}
          >
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              disabled={false}
              onClick={(sidebarState) => setSidebarState(!sidebarState)}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar sidebarState={sidebarState} />
            <Box
              sx={{ display: 'flex', justifyContent: 'space-evenly'}}
            >
              {NavbarData.map(({ path, label, icon: Icon }) => (
                <Button
                  variant='outlined'
                  color='success'
                  href={path}
                  key={label}
                  sx={{
                    mx: 1
                  }}
                >
                  <Icon size={20}></Icon>
                  <Typography
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    {label}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
