import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles,Button,Slider,Tab,Tabs,Paper,Box,Dialog,DialogTitle,IconButton,DialogContent,Typography,DialogActions,TextField,Snackbar} from '@material-ui/core';
import RadioTypes from './RadioTypes';
import CryptoJS from 'crypto-js';
import FilterNone from '@material-ui/icons/FilterNone';
import MuiAlert from '@material-ui/lab/Alert';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
              {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const useStyles = makeStyles({
    root: {
      width: 400,
      margin: "auto"
    },
    keyContainer: {
      marginBottom: "1rem",
      top: "-.5rem"
    },
    tabPanel: {
      paddingBottom: "-1rem"
    },
    copyButton: {
      position: 'absolute',
      right: "0.5rem",
      top: "0.5rem",
    },
    caesar: {
      width: 300,
      margin: "auto"
    }
  });

const types = {
  cipher: ["Caesar Cipher","Vigenere Cipher","Substitution Cipher"],
  encrypt: ["AES Encryption","RC4 Encryption","DES Encryption"]
};

// caesar cipher
function getCaesarCypher(str,key,isDecode) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, convert);
  
    function convert(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      if(isDecode) {
        return String.fromCharCode(
          ((charCode - key) >= 65) ? charCode - key : (charCode - key) % 65 + 26);
      }      

      return String.fromCharCode(
              ((charCode + key) <= 90) ? charCode + key : (charCode + key) % 90 + 64 );
  
    }
  }
  
// vigenere cipher
//  Handles the input/output for Vigenère cipher encryption/decription.

	function getVigenereCypher(textElem,keyStr,isDecode) {
  
		var keyArray = filterKey(keyStr);
		if (keyArray.length === 0) {
			alert("Key has no letters");
			return;
		}		
		if (isDecode) {
			for (var i = 0; i < keyArray.length; i++)
				keyArray[i] = (26 - keyArray[i]) % 26;
		}
	
		return crypt(textElem, keyArray).toUpperCase();
	};
	
	
	
	/* 
	 * Returns an array of numbers, each in the range [0, 26), representing the given key.
	 * The key is case-insensitive, and non-letters are ignored.
	 * Examples:
	 * - filterKey("AAA") = [0, 0, 0].
	 * - filterKey("abc") = [0, 1, 2].
	 * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
	 */
	function filterKey(key) {
		var result = [];
		for (var i = 0; i < key.length; i++) {
			var c = key.charCodeAt(i);
			if (isLetter(c))
				result.push((c - 65) % 32);
		}
		return result;
	}
	
	// Tests whether the given character code is a Latin letter.
	function isLetter(c) {
		return isUppercase(c) || isLowercase(c);
	}
	
	// Tests whether the given character code is an Latin uppercase letter.
	function isUppercase(c) {
		return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
	}
	
	// Tests whether the given character code is a Latin lowercase letter.
	function isLowercase(c) {
		return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
	}
	/* 
	 * Returns the result the Vigenère encryption on the given text with the given key.
	 */
	function crypt(input, key) {
		var output = "";
		for (var i = 0, j = 0; i < input.length; i++) {
			var c = input.charCodeAt(i);
			if (isUppercase(c)) {
				output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
				j++;
			} else if (isLowercase(c)) {
				output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
				j++;
			} else {
				output += input.charAt(i);
			}
		}
		return output;
	}
	
//SUBSTITUTION CIPHER
var getSubstitutionCipher = {};
getSubstitutionCipher.toQWERTY = function(text, isDecode) {
    // ABCDEF to QWERTY map
    var map = {
        a: 'q', b: 'w', c: 'e',
        d: 'r', e: 't', f: 'y',
        g: 'u', h: 'i', i: 'o',
        j: 'p', k: 'a', l: 's',
        m: 'd', n: 'f', o: 'g',
        p: 'h', q: 'j', r: 'k',
        s: 'l', t: 'z', u: 'x',
        v: 'c', w: 'v', x: 'b',
        y: 'n', z: 'm'
    };

    // Flip the map
    if(isDecode) {
        map = (function() {
            var tmp = {};
            var k;

            // Populate the tmp variable
            for(k in map) {
                if(!map.hasOwnProperty(k)) continue;
                tmp[map[k]] = k;
            }

            return tmp;
        })();
    }

    return text.split('').filter(function(v) {
        // Filter out characters that are not in our list
        return map.hasOwnProperty(v.toLowerCase());
    }).map(function(v) {
        // Replace old character by new one
        // And make it uppercase to make it look fancier
        return map[v.toLowerCase()].toUpperCase();
    }).join('');

};

function getAES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.AES.encrypt(text, key).toString();
}

function getRC4(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.RC4.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.RC4.encrypt(text, key).toString();
}

function getDES(text,key,isDecode) {
    if(isDecode) {
        return CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    return CryptoJS.DES.encrypt(text, key).toString();
}

  function getProcessedData({text,type,key,isDecode}) {
        switch (type) {
            case 'Caesar Cipher':
                return getCaesarCypher(text,key ? Number(key) : 3,isDecode);
            case 'Substitution Cipher':
                return getSubstitutionCipher.toQWERTY(text,isDecode);
            case 'Vigenere Cipher':
                return getVigenereCypher(text,key || "abc",isDecode); 
            case 'AES Encryption':
                return getAES(text,key || "secret Passcode",isDecode); 
            case 'RC4 Encryption':
                return getRC4(text,key || "secret Passcode",isDecode); 
            case 'DES Encryption':
                return getDES(text,key || "secret Passcode",isDecode); 
            default:
              alert(`Sorry, some error occured Please Try Again!.`);
          }
}

export default function CryptoTabs({rawText,isDecode}) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [radioType, setradioType] = useState('');
  const [encodedMsg, setencodedMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [key, setkey] = useState("");
  const [copied, setcopied] = useState(false);

  const getJSresult = () => {
    if(rawText && radioType ) {
        setencodedMsg(getProcessedData({text: rawText,type: radioType,key: key,isDecode: isDecode}));
        setOpen(true);
    }
    else {
        alert("Please fill all details first.")
        return null;
    }    
  };

  
  const handleKey = (event, newValue) => {
    radioType === 'Caesar Cipher' ? setkey(newValue.toString()) : setkey(event.target.value);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
    setcopied(false);
  };

  return (
<React.Fragment >
    <Paper className={classes.root} variant="elevation" elevation={2} square>
      <Tabs
        value={value}
        indicatorColor={isDecode ? "secondary" : "primary" }
        textColor={isDecode ? "secondary" : "primary" }
        onChange={handleChange}
        aria-label="cryptography types"
        centered
      >
        <Tab 
        label="Cipher" />
        <Tab label="Encryption" />
      </Tabs>
      <TabPanel className={classes.tabPanel} value={value} index={0} >
        <RadioTypes methods={types.cipher} isDecode={isDecode} setradioType={setradioType}></RadioTypes>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1} >
        <RadioTypes methods={types.encrypt} isDecode={isDecode} setradioType={setradioType} ></RadioTypes>
      </TabPanel>
      {radioType === 'Caesar Cipher' ? (
      <div className={classes.caesar}>
        <Typography id="Key-for-Caesar-Cipher" gutterBottom>
          Key for Caesar Cipher
        </Typography>
        <Slider
          defaultValue={3}
          aria-labelledby="Key-for-Caesar-Cipher"
          step={2}
          marks
          min={1}
          max={26}
          color={isDecode ? "secondary" : "primary"}
          onChange={handleKey}
          valueLabelDisplay="auto"
        />
      </div>
      ) : radioType && (radioType !== 'Substitution Cipher') ? (
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
      ): null}
    </Paper>
    <Button variant="contained"
     color={isDecode ? "secondary" : "primary"}
     onClick={getJSresult}
      style={{margin: "1rem"}} >
       {isDecode ? "Decode" : "Encode"}
    </Button>
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
