import NavbarLists from "./navbarLists/NavbarLists";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../assets/images/userAccountImage.jpg";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  let [isit, setisit] = useState(false);
  function opentit() {
    setisit(!isit);
  }
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
      </div>
    </nav>
  );
}

export default Navbar;
