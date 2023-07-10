import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreen } from "../../asset/screen/Screen";
import useHeaderStyles from "../../asset/styles/header";

const Header = () => {
  const navigate = useNavigate();
  const { LogoutBtn, containerHeader, hoverText } = useHeaderStyles();
  const { isScreen1024 } = useScreen();
  const handleLogout = () => {
    navigate("/");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={containerHeader}>
      <Box>
        <img
          src={require("../../asset/images/logo_app.jpg")}
          alt="Logo"
          style={{ height: "100px", width: 100 }}
        />
      </Box>
      <Toolbar>
        {isScreen1024 ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ marginRight: "1rem" }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box>
            <Button sx={hoverText} color="inherit">
              Home
            </Button>
            <Button sx={hoverText} color="inherit">
              Favorite
            </Button>
            <Button sx={hoverText} color="inherit">
              Information
            </Button>
            <Button sx={hoverText} color="inherit">
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
      <Button color="inherit" onClick={handleLogout} sx={LogoutBtn}>
        Logout
      </Button>
      <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuClose}>
        <Box sx={{ textAlign: "center" }}>
          <img
            src={require("../../asset/images/logo_app.jpg")}
            alt="Logo"
            style={{
              height: "100px",
              width: 100,
            }}
          />
        </Box>
        <List
          component="nav"
          sx={{
            width: 250,
          }}
        >
          <ListItemButton onClick={handleMenuClose}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={handleMenuClose}>
            <ListItemText primary="Favorite" />
          </ListItemButton>
          <ListItemButton onClick={handleMenuClose}>
            <ListItemText primary="Information" />
          </ListItemButton>
          <ListItemButton onClick={handleMenuClose}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
