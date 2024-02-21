import React from 'react';
import {
  Typography,
  Stack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  Hidden,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTheme } from '@emotion/react';
const Navbar = () => {
  // what is the use of  the useTheme 

  const theme = useTheme();
  const nav_bgc = theme.palette.ternary.main;
  const nav_links_color= theme.palette.text.light;
  const nav_links_dark_color= theme.palette.text.dark;
  const nav_link_white = theme.palette.text.white;


  // Check if the screen width is smaller than 768px
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  // State to manage the drawer open/close status
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Open the drawer  this is the arrow function
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  

  // Close the drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Handle click on a mobile menu item
  const handleDrawerItemClick = () => {
    // Close the drawer when a mobile menu item is clicked
    handleDrawerClose();
  };





  return (
    <div>
      {/* Top navigation stack */}
      <Stack
        style={{backgroundColor:nav_bgc}}
        direction={'row'}
        alignItems={'center'}
        padding={'12px 24px'}
        justifyContent={'space-between'}
        sx={{ color: 'white' }}
      >
        {/* Brand/logo */}
        <Box>
          <Link to='/'>
            <Button
              style={{color:nav_link_white}}
              sx={{ letterSpacing: '.2em', fontWeight: 'bold' }}
              size='medium'
          >
              🧑‍💻 GetNews 📰
              </Button>
            </Link>
        </Box>


        {/* Navigation buttons (visible on larger screens) */}
        <Hidden smDown>
          <Box>
            <ButtonGroup>
              <Link to='/' >
                <Button style={{color:nav_link_white}}   variant='none'>
                  Home
                </Button>
              </Link>

              <Link to='/about' >
                <Button   style={{color:nav_link_white}} variant='none'>
                  about
                </Button>
              </Link>

              <Link to='/tnews' >
                <Button  style={{color:nav_link_white}} variant='none'>
                  Trending News
                </Button>
              </Link>

            </ButtonGroup>
          </Box>
        </Hidden>

        {/* Mobile menu button (visible on smaller screens) */}
          {isSmallScreen && (
          <Box >
            <IconButton
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerOpen}

            >
              <MenuIcon style={{color:nav_link_white}} />
            </IconButton>
            {/* Drawer for mobile navigation */}
            <Drawer
              anchor='left'
              padding='20 30px'
              open={drawerOpen}
              onClose={handleDrawerClose}
             backgroundColor='seconday'
            >
              <List style={{backgroundColor:nav_bgc, height:"100%"}}>
                {/* Mobile navigation items */}
                <Link to='/' style={{ textDecoration: 'none' }}>
              <ListItem
                button
                justifyContent='center'
                onClick={handleDrawerItemClick}
              >
                <Typography
                  margin={'0 20px'}
                  variant='overline'
                  style={{color:nav_link_white,fontWeight:"bold"}}
                >
                  home
                </Typography>
              </ListItem>
                </Link>
                <Link to='/tnews' style={{ textDecoration: 'none' }}>
              <ListItem
                button
                justifyContent='center'
                onClick={handleDrawerItemClick}
              >
                <Typography
                  margin={'0 20px'}
                  variant='overline'
                  style={{color:nav_link_white,fontWeight:"bold"}}
                >
                  Trending News
                </Typography>
              </ListItem>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
              <ListItem
                button
                justifyContent='center'
                onClick={handleDrawerItemClick}
              >
                <Typography
                  margin={'0 20px'}
                  variant='overline'
                  style={{color:nav_link_white,fontWeight:"bold"}}
                >
                  TodayNews
                </Typography>
              </ListItem>
                </Link>

                {/* Add more Link components for other pages */}
              </List>
            </Drawer>
          </Box>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;