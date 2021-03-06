import React, { Component } from "react";
import { connect } from 'react-redux'; 
import PropTypes from "prop-types";
import { loginUser } from '../actions/authActions';
import { ToastContainer, toast } from "react-toastify";

class Login extends Component {
    constructor(){
        super();
        this.state = {
          username: "",
          password: "",
          errors: {}
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
}

componentDidMount(){
  if(this.props.auth.isAuthenticated){
    this.props.history.push("/")
  }
}

// complete function ....
        /* istanbul ignore next */
componentWillReceiveProps (nextProps){
  if(nextProps.auth.isAuthenticated){
    this.props.history.push("/")
    this.setState({errors: {} })
  }

  if(nextProps.errors){
    this.setState({errors: nextProps.errors })
   }
}

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}

onSubmit(e){
  e.preventDefault( );
  const userData = {
    username: this.state.username,
      password: this.state.password,
  }
  this.props.loginUser(userData);
}

render() {
  const { isAuthenticated } = this.props.auth;

  return (
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your sendIT account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Username" name="username"  value={this.state.username} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password"  value={this.state.password} onChange={this.onChange} />
                  </div>
                   {!isAuthenticated && this.state.errors.message && <div className="alert alert-danger" >{this.state.errors.message}</div>}
                  <input type="submit" className="btn btn-info btn-block mt-4" value="Submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

Login.propTypes =  {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps =  (state) =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);
