import { FC } from "react";
import { Menu, MenuItem } from "@mui/material";
import { NavbarData } from "@/data/navbar";
import { SidebarStateTypes } from "@/types";

export const Sidebar: FC<SidebarStateTypes> = ({ sidebarState }) => {
  return (
    <Menu open={sidebarState}>
      {NavbarData.menu.map(({ label, path, Icon }) => (
        <MenuItem key={label} href={path}>
          <Icon />
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
};
