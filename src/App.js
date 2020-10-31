import { formatMs } from '@material-ui/core';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        // the uesr just logged in / the usr was logged in

      } else {
        //the user is logged out
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            
            <Login />
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
