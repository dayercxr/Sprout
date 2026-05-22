import { FC } from "react";
import { Menu } from 'lucide-react';
import { Tabs, Tab, Box, Fab } from "@mui/material";
import { Sidebar } from "@/components/general/sidebar";
import { NavbarData } from "@/data/navbar";

export const Navbar: FC = () => {
  return (
    <Tabs value={false} sx={{ ml: 5, my: 1 }}>
      <Fab
        title="Menu"
        sx={{ }}
      >
        <Menu />
      </Fab>
      <Sidebar />
      {NavbarData.map(({ path, label, icon: Icon }) => (
        <Tab
          key={path}
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon size={20} />
              {label}
            </Box>
          }
          href={path}
          sx={{
            color: "#000000",
            textTransform: "none",
            fontSize: "1.05rem",
            fontWeight: 500,
            "&.Mui-selected": {
              color: "white"
            }
          }}
        />
      ))}
    </Tabs>
  );
};
