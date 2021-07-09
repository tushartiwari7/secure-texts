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
import FilterNone from '@material-ui/icons/FilterNone';
import MuiAlert from '@material-ui/lab/Alert';
import {Bar} from 'react-chartjs-2';

// algorithms
import getCaesarCypher from './Algorithms/Caesar';
import getVigenereCypher from './Algorithms/Vigenere';
import getSubstitutionCipher from './Algorithms/Substitution';
import { getAES,getDES,getRC4 } from './Algorithms/Encrypters';


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


  const getSubstitution = {};
  getSubstitution.toQWERTY = getSubstitutionCipher;

const cipherTypes = [
  "Caesar Cipher",
  "Substitution Cipher",
  "Vigenere cipher",
  "AES Encryption",
  "RC4 Encryption",
  "DES Encryption"
];




export default function CryptoTabs({rawText,isDecode}) {
  const classes = useStyles();

  const [encodedMsg, setencodedMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [key, setkey] = useState("");
  const [copied, setcopied] = useState(false);
  const [cipherUsed, setcipherUsed] = useState(null);
  
function use_compared_encryption({text,key,isDecode}) {
  const x = text.length;

  if(x) {
    if(x<=4) {
      setcipherUsed('Caesar Cipher');
      return getCaesarCypher(text,key ? Number(key) : 3,isDecode);
    }
    else if (x<=6) {
      setcipherUsed('Substitution Cipher');
      return getSubstitution.toQWERTY(text,isDecode);
    }
    else if (x<=10) {
      setcipherUsed('Vigenere Cipher');
      return getVigenereCypher(text,key || "abc",isDecode); 
    }
    else if (x<=20) {
      setcipherUsed('AES Encryption');
      return getAES(text,key || "secret Passcode",isDecode); 
    }
    else if (x<=30) {
      setcipherUsed('RC4 Encryption');
      return getRC4(text,key || "secret Passcode",isDecode); 
    }
    else if(x>30) {
      setcipherUsed('DES Encryption');
      return getDES(text,key || "secret Passcode",isDecode); 
    }
    else {
      alert(`Sorry, some error occured Please Try Again!.`);
    }
  }
}

const howMuchOptimized = () => {  
  const data = [33,53,60,41,44,65];
  const index = cipherTypes.findIndex((el)=> el === cipherUsed);
  data[index] = 85;
  return data;
};

const dataForChart = {
  labels: cipherTypes,
  datasets: [
    {
      label: "security",
      data: howMuchOptimized(),
      fill: true,
      backgroundColor: "#3f51b5",
      borderColor: "#ffffff"
    }
  ]
};
  
  const getJSresult = () => {
    if(rawText && key ) {
        setencodedMsg(use_compared_encryption({text: rawText,key: key,isDecode: isDecode}));
        setOpen(true);
    }
    else {
        alert("Please fill all details first.");
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
          onClick={
            getJSresult
          }
          style={{margin: "1rem",width: "30%"}} >
          {isDecode ? "Decode" : "Encode"}
        </Button>
    </Paper>
    
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="body1" >
          <strong>{isDecode ? "Decoded " : "Encoded "} Message..</strong>
          {!isDecode? 
          <Chip label={'Algorithm Used: ' + cipherUsed} color="primary" className={classes.chip}/> : null}
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
            <Bar data={dataForChart} />
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
