import React,{useState} from 'react';
import {makeStyles,Button,Paper,Dialog,DialogTitle,IconButton,DialogContent,Typography,DialogActions,TextField,Snackbar} from '@material-ui/core';
import CryptoJS from 'crypto-js';
import FilterNone from '@material-ui/icons/FilterNone';
import MuiAlert from '@material-ui/lab/Alert';

  const useStyles = makeStyles({
    root: {
      width: "100%",
      margin: "auto"
    },
    keyContainer: {
      marginTop: "1rem",
      width: "60%"
    },
    tabPanel: {
      paddingBottom: "-1rem"
    },
    copyButton: {
      position: 'absolute',
      right: "0.5rem",
      top: "0.5rem",
    }
  });



function getDES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.DES.encrypt(text, key).toString();
}

  function getProcessedData({text,key,isDecode}) {
    return getDES(text,key || "secret Passcode",isDecode); 
}

export default function CryptoTabs({rawText,isDecode}) {
  const classes = useStyles();

  const [encodedMsg, setencodedMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [key, setkey] = useState("");
  const [copied, setcopied] = useState(false);

  const getJSresult = () => {
    if(rawText && key ) {
        setencodedMsg(getProcessedData({text: rawText,key: key,isDecode: isDecode}));
        setOpen(true);
    }
    else {
        alert("Please fill all details first.")
        return null;
    }    
  };

  
  const handleKey = (event) => {
    setkey(event.target.value);
  }

  const handleClose = () => {
    setOpen(false);
    setcopied(false);
  };

  return (
<React.Fragment >
    <Paper className={classes.root} variant="elevation" elevation={4} square>
      <TextField 
          id="key" 
          label="Secret Key" 
          size="small" 
          color={isDecode ? "secondary" : "primary"}
          defaultValue=""
          className={classes.keyContainer}
          onChange={handleKey}
          variant="outlined" 
        /> 
        <Button variant="contained"
          color={isDecode ? "secondary" : "primary"}
          onClick={getJSresult}
          style={{margin: "1rem",width: "30%"}} >
          {isDecode ? "Decode" : "Encode"}
        </Button>
    </Paper>
    
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="body1" >
          <strong>{isDecode ? "Decoded " : "Encoded "} Message..</strong>
          </Typography>
          <IconButton aria-label=""
            className={classes.copyButton} 
            onClick={() =>  {
              navigator.clipboard.writeText(encodedMsg);
              setcopied(true);
            }}
          >
          <FilterNone />
        </IconButton>
        </DialogTitle> 
        <DialogContent dividers>
          <Typography gutterBottom >
            {encodedMsg}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color={isDecode ? "secondary" : "primary"}>
            Try Again!
          </Button>
        </DialogActions>
    </Dialog>
    <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={copied}
        autoHideDuration={2500}
        onClose={handleClose}
        message="Message Copied Successfully!"
    >
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success" >
      Message Copied Successfully!
      </MuiAlert>
    </Snackbar>
</React.Fragment>
);
}
