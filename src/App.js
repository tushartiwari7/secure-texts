import { Box,Container } from '@material-ui/core';
import React,{ useState } from "react";
import './App.css';
import AppBar from './Components/AppBar';
import TextEditor from './Components/TextEditor';
import Dropdown from './Components/Dropdown';
function App() {
  const [rawText,setRawText] = useState('');

  function textHandler(event) {
    setRawText(event);
  }

  return (
    <div className="App">
      <AppBar />
      <Box m={4} p={4} >
        <TextEditor textHandler={textHandler}/>
      </Box>
        <Container >
          <Dropdown rawText={rawText}/>
        </Container>
    </div>
  );
}

export default App;
