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

const SidebarContent = (
  <Box>
    <List>
      <ListItem>
        <ListItemButton>
          <Home />
          <ListItemText primary='Home' />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
  </Box>
);

export const Sidebar: FC = () => {
  return <Drawer>{SidebarContent}</Drawer>;
};
