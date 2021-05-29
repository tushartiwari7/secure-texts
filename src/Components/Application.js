import React,{ useState } from "react";
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import Blog from '../Blog';


export const Application = () => {
      
  const [dark, setdark] = useState(false);
  const [isDecode, setIsDecode] = useState(false);
  // const [user,setUSer] = useState(null);
  const user = null;
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
    <Router>
      
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <div className="App">
        {user ? 
          <>
          <AppBar checked={dark} handleTheme={handleTheme} isDecode={isDecode} handleDecodeEl={handleDecodeEl} />
          <Switch>
            <Route path="/" exact>
              <Home isDecode={isDecode}/>
            </Route>
            <Route path="/aboutus" exact>
              <h2>about page</h2>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
          </Switch>
          </> : 
          <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/passwordreset" exact>
            <ResetPassword />
          </Route>
        </Switch> 
      }
        
        </div> 
        </ThemeProvider>
    </Router>
  );
}