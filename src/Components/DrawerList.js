import {List,ListItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PeopleIcon from '@material-ui/icons/People';
import {useHistory} from "react-router-dom";

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
    return (
        <div
        className={classes.fullList}
        role="presentation"
        >
      <List>
            <a className={classes.link} href="https://github.com/tushartiwari7/secure-texts" target="_blank"
            rel="noreferrer"
            >
            <ListItem button key="Secure Texts">
                <ListItemIcon>
                    <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Secure Texts" />
            </ListItem>
            </a>
      </List>
      <List>
            
          <ListItem button key="Home" 
          onClick={(e)=>{
              setPage('Home');
              history.push('/');
              handleClose(e);
          }}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
      </List>
      <Divider />
      <List>
        {['Encoder', 'Decoder'].map((text, index) => (
          <ListItem button key={text} 
          onClick={(e)=>{
              handleDecodeEl( text === 'Encoder' ? false : true);
              setPage(text);
              history.push('/encrypt');
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
      </List>
      <Divider />
      <List>
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
      </List>
    </div>
    );

};

  export default DrawerList;