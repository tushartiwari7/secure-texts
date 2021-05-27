import './App.css';
import React,{ useState } from "react";
import Home from './Home';
import {	BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import Blog from './Blog';
function App() {  
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

export default App;
