import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList';
import logo from './logo.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  }
}));

export default function MenuAppBar({checked,handleTheme,handleDecodeEl,page,setPage}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton}
            color="inherit" 
            aria-haspopup="true"
            onClick={handleAccount}
            aria-label="dropdown"
            >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="App logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
            <Switch
              checked={checked}
              onChange={handleTheme}
              name="Theme"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />            
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
            </Menu>          
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={handleClose}>
          <DrawerList handleClose={handleClose} setPage={setPage} handleDecodeEl={handleDecodeEl} />
        </Drawer>
      </AppBar>
    </div>
  );
}
