import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser } from '../actions/authActions';

class Navigation extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
    window.location.href = "/login";
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    )
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <a 
          href="/" 
          className="nav-link"
          id="logout-link" 
          onClick={this.onLogoutClick.bind(this)} 
          > Logout </a>
        </li>
      </ul>
    )

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">SendIT</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="mobile-nav">
              {isAuthenticated && 
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/create"> Place an Order
                  </Link>
                </li>
              </ul> }
              { isAuthenticated ? authLinks : guestLinks }
            </div>
          </div>
        </nav>
    )
  }
}

Navigation.propTypes =  {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default  connect(mapStateToProps, {logoutUser})(Navigation);
