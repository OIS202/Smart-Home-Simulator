import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem,ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoSrc from '../iHomeLogo.png'; // Ensure the logo path is correct

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerToggle}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <List>
          <ListItem button>
            <ListItemText primary="User Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          {isMobile && (
            <>
              <ListItem button>
                <ListItemText primary="SHS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHC" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHH" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHP" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: '#2330A5' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src={logoSrc} alt="iHome logo" style={{ marginRight: 10 }} />
          <Typography variant="h6" style={{ fontFamily: 'Irish Grover' }}>
            iHome
          </Typography>
        </Box>
        {!isMobile && (
          <>
            <Button color="inherit">SHS</Button>
            <Button color="inherit">SHC</Button>
            <Button color="inherit">SHH</Button>
            <Button color="inherit">SHP</Button>
          </>
        )}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {drawer}
    </AppBar>
  );
};

export default NavBar;