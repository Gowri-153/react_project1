import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import { Link, useNavigate } from 'react-router-dom';
import DrawerComp from "./DrawerComp";

const Navbar = ({ setIsLoggedIn }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged-in state to false
    navigate('/'); // Navigate to the login page
  };

  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              Shoppee
            </Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
            >
              <Tab label="Home" component={Link} to="/home" />

              <Tab label="Products" component={Link} to="/products" />
              <Tab label="Services" component={Link} to="/services" />
              <Tab label="About Us" component={Link} to="/about" />
              <Tab label="Contact" component={Link} to="/contact" />
            </Tabs>
            <Button 
              sx={{ marginLeft: "auto" }} 
              variant="contained" 
              onClick={handleLogout} // Handle logout click
            >
              Logout
            </Button>
            {/* <Link to="/signup">
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Sign Up
              </Button>
            </Link> */}
          </>
        )}
      </Toolbar>
      
    </AppBar>

  );
};

export default Navbar;
