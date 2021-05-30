import React,{useContext} from 'react';
import {List,ListItem,ListItemIcon,ListItemText,Divider,Avatar} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PeopleIcon from '@material-ui/icons/People';
import {useHistory} from "react-router-dom";
import {UserContext} from '../Providers/UserProvider';
import {auth} from '../Authentication/firebase';
import { PersonOutline } from '@material-ui/icons';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    link: {
      color: "inherit",
      textDecoration: "none"
    }
  });
 const DrawerList = ({handleDecodeEl,setPage,handleClose}) => {
    const classes = useStyles();
    let history = useHistory();
    const user = useContext(UserContext);
    const {photoURL, displayName} = user;

    return (
        <div
        className={classes.fullList}
        role="presentation"
        >
      <List>
        <ListItem button key={displayName}>
            <ListItemIcon>
              <Avatar alt={displayName} src={photoURL} />
            </ListItemIcon>
            <ListItemText primary={displayName} />
        </ListItem>            
      </List>
      <Divider />
      <List>
        {['Encoder', 'Decoder'].map((text, index) => (
          <ListItem button key={text} 
          onClick={(e)=>{
              handleDecodeEl( text === 'Encoder' ? false : true);
              setPage(null);
              history.push('/');
              handleClose(e);
          }}
          >
            <ListItemIcon>{index % 2 === 0 ? <LockIcon /> : <LockOpenIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem button key="My Profile"
          onClick={(e)=>{
                setPage("My Profile");
                history.push('/profile');
                handleClose(e);
            }}
          >
            <ListItemIcon>
                <PersonOutline />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key="How Ciphers Work?"
          onClick={(e)=>{
                setPage("Blog");
                history.push('/blog');
                handleClose(e);
            }}
          >
            <ListItemIcon>
                <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="How Ciphers Work?" />
          </ListItem>
          <ListItem button key="About Us"
          onClick={(e)=>{
              setPage("About Us");
              history.push('/aboutus');
              handleClose(e);
          }}
          >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
            <a className={classes.link} href="https://github.com/tushartiwari7/secure-texts" target="_blank"
            rel="noreferrer"
            >
            <ListItem button key="Secure Texts">
                <ListItemIcon>
                    <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Source Code" />
            </ListItem>
            </a>
      </List>
      <Divider />
      <List>
          <ListItem button key="Sign Out" onClick={()=> {
            history.push('/');
            auth.signOut()}}
          >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
      </List>
    </div>
    );

};

  export default DrawerList;