import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from '../actions/authActions';
import Register from './Register';
import CreateParcels from './CreateParcels';
import {Provider} from "react-redux";
import Navigation from './Navigation';
import store from "../Store";
import setAuthToken from '../utilis/setAuthToken';



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


export default class App extends Component {

  getStyle=()=>{
    return{
      backgroundColor:"#4B5320",
      height:"-webkit-fill-available"
    }

  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={this.getStyle()}>
        <Navigation/>
      
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/create" component={CreateParcels}></Route>
            </div>
          
        </Router>
        </Provider>
    )
  }
}
