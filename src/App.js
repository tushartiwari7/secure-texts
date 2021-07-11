import './styles/App.css';
import React,{ useState,useEffect } from "react";
import Encrypt from './Components/Encrypt';
import {	BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar';
import Blog from './Components/Blog';
import Home from './Components/Home';
import logo from './logo.svg';
import tawkTo from './utils/tawkto';    

function App() {  
  const [dark, setdark] = useState(true);
  const [isDecode, setIsDecode] = useState(false);
  const [page,setPage] = useState('Home');
  useEffect(()=>tawkTo(), []);
  
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
            <div className="encrypt">
              <Encrypt isDecode={isDecode} handleDecodeEl={handleDecodeEl} setPage={setPage} />
            </div>
            </Route>
            <Route path="/" exact>
              <Home handleDecodeEl={handleDecodeEl} setPage={setPage}/>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
          </Switch>

          <footer>
            <a
              href="happynewyear.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by {' '}          
              <img src={logo} alt="logo" className="logo" />
            </a>
          </footer>

          <style jsx>{`

            footer {
            width: 100%;
            height: 80px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            }
            footer img {
            margin-left: 0.5rem;
            }
            footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .logo {
            height: 1em;
            }
            .encrypt {
              min-height: 80vh;
            }
          `}
          </style>

        </div>
        </ThemeProvider>
    </Router>
  );
}

export default App;
