"use client";

import { FC, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthClientHandler } from "@/libs/auth/auth-client";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import { ThemeToggle } from "@/components/general/themeToggle";
import { MenubarHandlers } from "@/libs/client/index";
import { NavbarData } from "@/data/navbar";

export const Navbar: FC = () => {
  const [menubarState, setMenubarState] = useState<HTMLButtonElement | null>(
    null
  );

  return (
    <Box sx={{ mb: 2.5 }}>
      <AppBar position='static' color='default'>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                MenubarHandlers.openMenubar(setMenubarState, event)
              }
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menubarState}
              open={Boolean(menubarState)}
              onClose={() => MenubarHandlers.closeMenubar(setMenubarState)}
            >
              {NavbarData.menu.map(({ label, path, Icon }) => (
                <MenuItem
                  component={Link}
                  key={label}
                  href={path}
                  sx={{ py: 1, px: 2.5, gap: 1.5 }}
                >
                  <Icon />
                  {label}
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              {NavbarData.navigation.map(({ path, label, icon: Icon }) => (
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
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              onClick={() => AuthClientHandler.SignOutHandler()}
              variant='outlined'
              color='success'
            >
              Logout
            </Button>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
