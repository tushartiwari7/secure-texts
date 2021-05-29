import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Alert} from '@material-ui/lab';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: theme.spacing(16),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  Typography: {
    marginTop: theme.spacing(4)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
      textDecoration: 'none',
      fontSize: 12
  },
  alignToLeft: {
      textAlign: 'left'
  }
}));

const PasswordReset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
//   const [error, setError] = useState(null);
    const error = null; // just to remove errors temporarily

  return (
    <Box mt={5} mb={5}>
    <Card className={classes.root} variant="outlined" raised>
    {error !== null && <Alert severity="error" > {error} </Alert>}
    {emailHasBeenSent && <Alert severity="info" > Email has been Sent! </Alert>}
      <Typography className={classes.Typography} variant="h5" component="h2" gutterBottom>
        Reset Your Password
      </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Lost your password? Please enter your email address. You will receive a link to create a new password via email.
          </Typography>
        </CardContent>
      <CardActions>
        <form className={classes.form} noValidate>
          <TextField
                variant="filled"
                margin="normal"
                autoFocus
                required
                fullWidth
                id="email"
                label="Email Address"
                name="userEmail"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {(event) => {
              console.log(email);
              setEmailHasBeenSent(true);  
              event.preventDefault();
            }}
          >
            Send Me a Reset Link
          </Button>
          <Grid container>
            <Grid item xs className={classes.alignToLeft}>
            <Link className={classes.link} to="/" >
              &larr; back to the signin page
              </Link>
            </Grid>
          </Grid>
        </form>
      </CardActions>
    </Card>
    </Box>
  );
};
export default PasswordReset;