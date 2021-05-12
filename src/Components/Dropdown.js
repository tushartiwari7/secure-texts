import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Button,Tab,Tabs,Paper,Box,Dialog,DialogTitle,DialogContent,Typography,DialogActions} from '@material-ui/core';
import RadioTypes from './RadioTypes';
import CryptoJS from 'crypto-js';

const types = {
    cipher: ["Caesar Cipher","Vigenere Cipher","Substitution Cipher"],
    encrypt: ["AES Encryption","RC4 Encryption","DES Encryption"]
};

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

// substitution cipher
function getCaesarCypher(str,key) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, convert);
  
    function convert(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + key) <= 90) ? charCode + key : (charCode + key) % 90 + 64 );
      
    }
  }
  
// vigenere cipher

// var app = new function() {
	
	/* 
	 * Handles the HTML input/output for Vigenère cipher encryption/decription.
	 * This is the one and only entry point function called from the HTML code.
	 */
	function getVigenereCypher(textElem,keyStr,isDecrypt) {
        
		var keyArray = filterKey(keyStr);
		if (keyArray.length === 0) {
			alert("Key has no letters");
			return;
		}		
		if (isDecrypt) {
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

  function getProcessedData({text,type}) {
    
        switch (type) {
            case 'Caesar Cipher':
                return getCaesarCypher(text,3);
            case 'Substitution Cipher':
                return getSubstitutionCipher.toQWERTY(text);
            case 'Vigenere Cipher':
                return getVigenereCypher(text,"abc",false); 
            case 'AES Encryption':
                return getAES(text,"secret Passcode"); 
            case 'RC4 Encryption':
                return getRC4(text,"secret Passcode"); 
            case 'DES Encryption':
                return getDES(text,"secret Passcode"); 
            break;
            default:
              console.log(`Sorry, some error occured Please Try Again!.`);
          }
}

export default function CryptoTabs({rawText}) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [radioType, setradioType] = useState('');
  const [encodedMsg, setencodedMsg] = useState('');
  const [open, setOpen] = useState(false);

  const getJSresult = () => {
    if(rawText && radioType) {
        setencodedMsg(getProcessedData({text: rawText,type: radioType}));
        setOpen(true);
    }
    else {
        alert("Please fill all details first.")
        return null;
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
<React.Fragment >
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="cryptography types"
        centered
      >
        <Tab label="Cipher" />
        <Tab label="Encryption" />
      </Tabs>
      <TabPanel value={value} index={0} >
        <RadioTypes methods={types.cipher} setradioType={setradioType}></RadioTypes>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <RadioTypes methods={types.encrypt} setradioType={setradioType} ></RadioTypes>
      </TabPanel>
    </Paper>
    <Button variant="contained"
     color="primary"
     onClick={getJSresult}
      style={{margin: "5vw"}} >
        Encode 
    </Button>

    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Encoded Message..
        </DialogTitle> 
        <DialogContent dividers>
          <Typography gutterBottom>
            {encodedMsg}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Try Again!
          </Button>
        </DialogActions>
    </Dialog>
</React.Fragment>
);
}
