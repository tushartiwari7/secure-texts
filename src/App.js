import './App.css';
import React,{ useState } from "react";
import Encrypt from './Encrypt';
import {	BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar';
import Blog from './Blog';
import Home from './Components/Home';

function App() {  
  const [dark, setdark] = useState(true);
  const [isDecode, setIsDecode] = useState(false);
  const [page,setPage] = useState('Home');
  
  const palletType = dark ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    }
  });

  const handleTheme = () => {
    setdark(!dark);
  };

  const handleDecodeEl = (event) => {
    setIsDecode(event);
  };
  
  

  return (
    <Router>
      
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <div className="App" >
          <AppBar checked={dark} handleTheme={handleTheme} isDecode={isDecode} handleDecodeEl={handleDecodeEl} page={page} setPage={setPage}/>
          <Switch>
            <Route path="/encrypt" exact>
              <Encrypt isDecode={isDecode} handleDecodeEl={handleDecodeEl} />
            </Route>
            <Route path="/" exact>
              <Home handleDecodeEl={handleDecodeEl} setPage={setPage}/>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
          </Switch>
          
        </div>
        </ThemeProvider>
    </Router>
  );
}

export default App;
