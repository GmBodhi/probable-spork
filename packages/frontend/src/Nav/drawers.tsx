import { ListItem, ListItemText, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { DrawerStore, useDrawerStore } from "../store";
import FriendsAndSettings from "./settings";

const pages = ["About", "Pricing", "Blog"];


//
// List of pages to display in the drawer
//
const leftList = (
  toggleLeftDrawer: (
    bool: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void,
  nav: NavigateFunction
) => (
  <Box
    sx={{
      width: 250,
      height: "100%",
    }}
    onClick={toggleLeftDrawer(false)}
    onKeyDown={toggleLeftDrawer(false)}
    color="rgba(0, 0, 0, 0.84)"
  >
    <List>
      <ListItem>
        <ListItemText disableTypography>
          <Typography variant="h5">Navigation</Typography>
        </ListItemText>
      </ListItem>
      {pages.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => nav(text.toLowerCase())}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

//
// Fix for IOS swipe gesture
//
const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

//
// Drawer component
//

export function Drawer() {
  const state = useDrawerStore((state) => state)

  let navigate = useNavigate();

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={state.toggleLeftDrawer(false)}
        onOpen={state.toggleLeftDrawer(true)}
        open={state.leftDrawer}
      >
        {leftList(state.toggleLeftDrawer, navigate)}
      </SwipeableDrawer>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={state.toggleRightDrawer(false)}
        onOpen={state.toggleRightDrawer(true)}
        open={state.rightDrawer}
        anchor="right"
      >
        <FriendsAndSettings />
      </SwipeableDrawer>
    </>
  );
}
