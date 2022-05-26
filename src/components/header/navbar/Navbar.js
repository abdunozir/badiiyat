import NavbarLists from "./navbarLists/NavbarLists";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../assets/images/userAccountImage.jpg";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sitebar from "./Sitebar/Sitebar";

function Navbar() {
  let [isopened, setIsopened] = useState(true);
  const isopen = () => {
    setIsopened(!isopened);
  };
  let [isit, setisit] = useState(false);
  let manuallyStyle = {
    backgroundColor: "transparent",
    boxShadow: "none",
  };
  let opentit = () => {
    console.log("hello");
    setisit(!isit);
  };
  return (
    <nav>
      <div className="nav__container">
        <h1 className="nav__logo">Badiiyat</h1>
        <div className="nav__right">
          <NavbarLists />
          <Avatar
            onClick={opentit}
            alt="Remy Sharp"
            src={"https://source.unsplash.com/random"}
            sx={{ width: 56, height: 56 }}
          />
          <div className="PaperList">
            {isit ? (
              <Paper>
                <MenuList>
                  <Link to={"/user/profile"}>
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <Link to="/user/settings">
                    <MenuItem>Settings</MenuItem>
                  </Link>
                  <MenuItem>Log in</MenuItem>
                  <Link to={"/user/signup"}>
                    {" "}
                    <MenuItem>Sign up</MenuItem>
                  </Link>
                  <MenuItem color="error">Logout</MenuItem>
                </MenuList>
              </Paper>
            ) : (
              ""
            )}
          </div>
        </div>
        <Sitebar isopen={isopen} isopened={isopened} />
        <div className="madia-nav">
          <Box sx={{ flexGrow: 3 }}>
            <AppBar position="static" sx={manuallyStyle}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={isopen}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <h1 className="nav__logo1">Badiiyat</h1>
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
