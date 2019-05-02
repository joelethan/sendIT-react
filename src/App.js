import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React, { Component } from 'react';

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import Register from './components/auth/Register';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utilis/setAuthToken';
import Login from './components/auth/Login';
import store from './store';
import './App.css';


  // Check for token
  if (localStorage.jwtToken) {
    //Set auth token header
    setAuthToken(localStorage.jwtToken);
    //Decode token
    const decoded = jwt_decode(localStorage.jwtToken);
    //Set current user
    store.dispatch(setCurrentUser(decoded));

    //Check for expiration time
    const currentTime = Date.now()/1000;
    if(decoded.exp < currentTime){
      store.dispatch(logoutUser());
      window.location.href = "/login";
    }
  }

class App extends Component {
  render() {
    return (
      <Provider store={ store  }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={ Landing  } />
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>
            <Footer />
          </div>
        </Router> 
      </Provider>
    )
  }
}
export default App;
