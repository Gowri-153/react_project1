import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Logout", path: "/login" } 
];

const DrawerComp = ({ setIsLoggedIn }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setOpenDrawer(false);
    if (path === "/login") {
      setIsLoggedIn(false); // Set login state to false on logout
    }
    navigate(path);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => handleNavigation(page.path)}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
