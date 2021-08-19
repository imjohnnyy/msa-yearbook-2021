import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
