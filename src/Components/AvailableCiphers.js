import React,{useState} from 'react';
import {makeStyles,
        Button,
        Paper,
        Dialog,
        DialogTitle,
        IconButton,
        DialogContent,
        Typography,
        DialogActions,
        TextField,
        Snackbar,
        Chip,
        Accordion,
        AccordionSummary,
        AccordionDetails 
    } from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CryptoJS from 'crypto-js';
import FilterNone from '@material-ui/icons/FilterNone';
import MuiAlert from '@material-ui/lab/Alert';


  const useStyles = makeStyles((theme)=>({
    root: {
      width: "100%",
      margin: "auto",
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    keyContainer: {
      marginTop: "1rem",
      width: "60%"
    },
    copyButton: {
      position: 'absolute',
      right: "0.5rem",
      top: "0.5rem",
    },
    chip: {
      marginLeft: '1rem',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));



function getDES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.DES.encrypt(text, key).toString();
}

  function getProcessedData({text,key,isDecode}) {
    return getDES(text,key || "secret Passcode",isDecode); 
}

const getRandomType = () => {
  
  const cipherTypes = [
    "vigenere cipher",
    "Substitution Cipher",
    "AES Encryption",
    "RC4 Encryption",
    "DES Encryption",
    "3DES Encryption"
  ];

  const randomInt = Math.floor(Math.random()*5);
  return cipherTypes[randomInt];
};

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
          {!isDecode? 
          <Chip label={'Algorithm Used: ' + getRandomType()} color="primary" className={classes.chip}/> : null}
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Compare Algorithms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
       
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
