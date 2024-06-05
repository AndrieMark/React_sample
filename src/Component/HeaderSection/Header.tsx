
import { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Import the required icon
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LoginIcon from '@mui/icons-material/Login';
import "../../CSS/Header.css";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { text: "Hom", link: "#1", icon: <HomeIcon /> }, // Assign the icon here
    { text: "Car-List", link: "#2", icon: <TimeToLeaveIcon /> },
    { text: "Contact", link: "#3", icon: <InboxIcon /> },
    { text: "Login", link: "#login", icon: <LoginIcon /> }
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
          {!isMobile && (
            <div className="menu-section">
              <nav className="container-menu">
                <ul className="menu-list">
                  {menuItems.slice(0, -1).map((item, index) => (
                    <li className="menu-link" key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
          {!isMobile && (
            <div className="login-section">
              <a href="#login">Login</a>
            </div>
          )}
          {isMobile && (
            <>
              <div className="menu-icon">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </div>
              <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                <div className="drawer-header">
                  <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.link} onClick={toggleDrawer}>
                      <ListItemIcon>{item.icon}</ListItemIcon> {/* Add the ListItemIcon here */}
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

