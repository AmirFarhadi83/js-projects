"use client";

import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  SportsEsports as SportsEsportsIcon,
  Article as ArticleIcon,
  Style as StyleIcon,
  Terminal as TerminalIcon,
  ProductionQuantityLimits as ProductionQuantityLimitsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { BoxRow } from "@/utils/custom";
import InstallAppButton from "../Buttons/InstallAppButton";
import { ThemeTogglerButton } from "../Buttons/ThemeChangerButton";

export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: { xs: 220, sm: 250 } }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "بازی دیجیتال", icon: <SportsEsportsIcon /> },
          { text: "آیتم ها", icon: <ArticleIcon /> },
          { text: "کارت ها", icon: <StyleIcon /> },
          { text: "نرم افزار", icon: <TerminalIcon /> },
          { text: "محصولات ویژه", icon: <ProductionQuantityLimitsIcon /> },
          { text: "وبلاگ", icon: <ArticleIcon /> },
        ].map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ direction: "ltr" }}>
              <ListItemIcon color="secondary.main">{icon}</ListItemIcon>
              <ListItemText primary={text} sx={{ textAlign: "right" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <InstallAppButton />
        </ListItem>
        <ListItem>
          <ThemeTogglerButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <BoxRow>
      <IconButton
        color="primary"
        sx={{
          color: "primary.main",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" sx={{ color: "text.primary" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </BoxRow>
  );
}
