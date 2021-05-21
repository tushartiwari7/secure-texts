import './App.css';
import Home from './Home';
import {	BrowserRouter as Router, Route,Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutus" exact>
          <h2>about page</h2>
        </Route>
        <Route path="/blog" exact>
          <h2>blog page</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
