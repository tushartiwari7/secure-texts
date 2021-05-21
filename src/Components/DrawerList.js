import {List,ListItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
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
  });
 const DrawerList = ({handleDecodeEl,handleClose}) => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <div
        className={classes.list}    
        role="presentation"
        >
      <List>
          <ListItem key="Secure Texts">
            <ListItemIcon>
                <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Secure Texts" />
          </ListItem>
      </List>
      <Divider />
      <List>
        {['Encoder', 'Decoder'].map((text, index) => (
          <ListItem button key={text} 
          onClick={(e)=>{
              handleDecodeEl( text === 'Encoder' ? false : true)
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
          onClick={()=>{
                history.push('/blog');
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
          onClick={()=>{
              history.push('/aboutus');
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