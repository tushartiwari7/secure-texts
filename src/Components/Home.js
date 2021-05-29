import { Box,Container } from '@material-ui/core';
import React,{ useState } from "react";
import TextEditor from './TextEditor';
import AvailableCiphers from './AvailableCiphers';

const Home = ({isDecode}) => {
    
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
        </Container>
        </>
    );

}

export default Home;