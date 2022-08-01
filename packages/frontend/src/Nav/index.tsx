import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "./drawers";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDrawerStore, User, useUserStore } from "../store";
import shallow from "zustand/shallow";
import Timer from "./timer";

export default function Nav() {
  const state = useDrawerStore((state) => state);

  let navigate = useNavigate();

  const avatarUrl = useUserStore((state: User) => state.avatar);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={state.toggleLeftDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "block", sm: "block" },
              }}
              onClick={() => navigate("/", { replace: true })}
              className="buttonlike"
            >
              SPORK
            </Typography>
            <Timer />
            <Avatar
              src={avatarUrl}
              sx={{
                position: "absolute",
                left: "100%",
                transform: "translateX(-130%)",
              }}
              className="buttonlike"
              onClick={state.toggleRightDrawer(true)}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer />
    </>
  );
}
