import { Box,Container,CssBaseline } from '@material-ui/core';
import React,{ useState } from "react";
import './App.css';
import AppBar from './Components/AppBar';
import TextEditor from './Components/TextEditor';
import Dropdown from './Components/Dropdown';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


function App() {
  const [rawText,setRawText] = useState('');
  const [dark, setdark] = useState(false);
  const [isDecode, setIsDecode] = useState(false);

  function textHandler(event) {
    setRawText(event);
  }
  
  const palletType = dark ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });
  const handleTheme = () => {
    setdark(!dark);
  };

  const handleDecodeEl = (event) => {
    setIsDecode(event);
  };

  return (
    
    <ThemeProvider theme={darkTheme} >
    <CssBaseline />
    <div className="App">
      <AppBar checked={dark} handleTheme={handleTheme} isDecode={isDecode} handleDecodeEl={handleDecodeEl} />
      <Box m={4} p={4} >
        <TextEditor textHandler={textHandler}/>
      </Box>
        <Container maxWidth="md">
          <Dropdown rawText={rawText} isDecode={isDecode} />
        </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
