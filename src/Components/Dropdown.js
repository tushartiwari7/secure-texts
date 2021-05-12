import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Button,Tab,Tabs,Input,Paper,Box} from '@material-ui/core';
import RadioTypes from './RadioTypes';

const types = {
    cipher: ["Caesar Cipher","Substitution Cipher","Keyword Cipher","Vigenere Cipher"],
    encrypt: ["AES","RC4","DES"]
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
  
  function getProcessedData({text,type}) {
    
    if(text && type) {
        switch (type) {
            case 'Caesar Cipher':
                console.log(type);
                return getCaesarCypher(text,23);
            case 'Substitution Cipher':
                console.log(type);
                // getKeywordCypher(text);
            break;
            case 'Keyword Cipher':
                console.log(type);
                // getKeywordCypher(text);
              break;
            case 'Vigenere Cipher':
                console.log(type);
                // getVigenereCypher(text); 
              break;
            case 'AES':
                console.log(type);
                // getAES(text); 
              break;  
            case 'DES':
                console.log(type);
                // getDES(text); 
              break;  
            case 'RC4':
                console.log(type);
                // getRC4(text); 
              break; 
            default:
              console.log(`Sorry, some error occured Please Try Again!.`);
          }
}
else {
    alert("Please fill all details first.")
    return null;
}


}

export default function CryptoTabs({rawText}) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [radioType, setradioType] = useState('');
  const [encodedMsg, setencodedMsg] = useState('');

  const getJSresult = () => {
    setencodedMsg(getProcessedData({text: rawText,type: radioType}));
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
        Encrypt 
    </Button>
    <Input 
        // className={classes.input}
        placeholder="Encoded Message..."
        autoFocus
        required
        multiline
        value={encodedMsg}
        readOnly
        rows="4"
    />
</React.Fragment>
);
}
