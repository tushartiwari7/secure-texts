import { Box,Button,Container, Divider } from '@material-ui/core';
import React,{ useState } from "react";
import TextEditor from './Components/TextEditor';
import AvailableCiphers from './Components/AvailableCiphers';

const Encrypt = ({isDecode,handleDecodeEl}) => {
    
    const [rawText,setRawText] = useState('');

    function textHandler(event) {
        setRawText(event);
      }

    return (
        <>
        <Box p={4} >
        <TextEditor textHandler={textHandler}/>
        </Box>
        <Container maxWidth="md">
            <AvailableCiphers rawText={rawText} isDecode={isDecode} />
            <Divider />
            <Button fullWidth style={{marginTop: '4em',height: '4rem'}} variant="contained"
            color={isDecode ? "secondary" : "primary"} 
            onClick={()=> handleDecodeEl(!isDecode)}
            >
                Move to 
                {isDecode ? ' Encoder' : ' Decoder'}
            </Button>
        </Container>
        </>
    );

}

export default Encrypt;