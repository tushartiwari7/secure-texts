import './App.css';
import React from "react";
import {Application} from './Components/Application';
import UserProvider from './Providers/UserProvider';
function App() {  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default App;
