import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import './Content.css'
import { NavLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const lightColor = 'black';

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
       
        
    
      <AppBar style={{ background: '#6D696A' }} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <br></br>
              <br></br>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                 <br></br>
                <MenuIcon />
              </IconButton>
            </Grid>
            <br></br>
            <Grid item xs />
            <br></br>
            <Grid item>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.black',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <br></br>
                Go to docs
              </Link>
            </Grid>

            <Grid item>
            <br></br>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
            <br></br>
              <IconButton color="inherit" sx={{ p: 0.5 }}>

                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar style={{ background: '#6D696A' }}
        component="div"
       
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="#FFFBED" variant="h5" component="h1">
               Espace Admin
              </Typography>
            </Grid>
            <Grid item>
             <NavLink to ="/adminpage"> <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
             Home
              </Button>
              
</NavLink>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar style={{ background: '#6D696A' }} component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={0} textColor="inherit">
          <Tab label="Derniers Messages" />
          
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
