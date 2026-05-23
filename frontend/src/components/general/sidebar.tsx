import { FC } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from "@mui/material";
import { Home } from "lucide-react";
import { SidebarStateTypes } from '@/types';

const SidebarContent = (
  <Box>
    <List>
      <ListItem>
        <ListItemButton href="/">
          <Home />
          <ListItemText primary='Home' />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
  </Box>
);

export const Sidebar: FC<SidebarStateTypes> = ({
  sidebarState
}) => {
  
  return (
  <Drawer open={sidebarState}>
    {SidebarContent}
  </Drawer>);
};
