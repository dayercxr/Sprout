"use client"

import { FC, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Sidebar } from "@/components/general/sidebar";
import { NavbarData } from "@/data/navbar";

export const Navbar: FC = () => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            disabled={false}
            onClick={(sidebarState) => setSidebarState(!sidebarState)}
          >
            <MenuIcon />
          </IconButton>
          <Sidebar 
            sidebarState={sidebarState}
          />
          <Box>
            {NavbarData.map(({path, label, icon: Icon}) => 
              <Button
                variant="outlined"
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
                >{label}</Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
