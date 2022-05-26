import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import "./Sitebar.scss";

export default function Sitebar({ isopen, isopened }) {
  let styleListMUI = {
    display: "flex",
    flexDirection: "column",
    alingItems: "center",
    justifyContent: "center",
  };
  let closeSitebar = {
    position: "absolute",
    top: "10px",
    right: "10px",
  };
  return (
    <div className="Sitebar" id={`${isopened ? "opened" : ""}`}>
      <div className="sitebar__wrapper">
        <IconButton
          onClick={isopen}
          size="large"
          sx={closeSitebar}
          aria-label="delete"
        >
          <CloseIcon />
        </IconButton>
        <Link to="/user/profile">
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random"
            sx={{ width: 56, height: 56 }}
          />
        </Link>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List sx={styleListMUI}>
              <Link to="/">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bosh sahifa" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/Books">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Books" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/Nazm">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nazim" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/Maqolalar">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="Maqolalar" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/Forum">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FormatAlignCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Forum" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </nav>
          <Divider />
        </Box>
      </div>
    </div>
  );
}
