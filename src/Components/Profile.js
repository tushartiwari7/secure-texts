import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import {auth} from "../Authentication/firebase";
import {useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core';
import '@fontsource/roboto';
import {Button,Grid,Paper,Avatar,Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(5),
      textAlign: 'left',
      padding: theme.spacing(5)
    },
    grid: {
      color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(5),
        background: theme.palette.background.default,
    },
    name: {
        fontFamily: 'Roboto'
    },
    picture: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: 'auto'
    },
    button: {
        margin: theme.spacing(2)
    }
}));

const ProfilePage = () => {
  
    const classes = useStyles();
  let history = useHistory();
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  return (
    <>
    <div className={classes.root}>
        <Grid container spacing={3} margin="normal">
            <Grid item xs={4} className={classes.grid}>
                <Avatar alt={displayName} src={photoURL} className={classes.picture}/>             
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" gutterBottom classes={classes.name} >
                       {displayName}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                       {email}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                       onClick = {() => {
                        history.push('/');
                        auth.signOut();
                        }}
                    >Sign out
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
    </>
  )
};
export default ProfilePage;