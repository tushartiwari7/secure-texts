import React,{ useState,useContext } from "react";
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import Blog from '../Blog';
import Profile from './Profile';
import {UserContext} from '../Providers/UserProvider';

export const Application = () => {
      
  const user = useContext(UserContext);
  const [dark, setdark] = useState(false);
  const [isDecode, setIsDecode] = useState(false);
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
            <Route path="/profile" exact>
                <Profile />
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