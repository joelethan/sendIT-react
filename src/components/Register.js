import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

class Register extends Component {
   
        state = {
            name: "",
            email: "",
            password: "",
            errors: "", 
        };
    
    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push("/")
      }
    }

    componentWillReceiveProps (nextProps){
       if(nextProps.errors){
         this.setState({errors: nextProps.errors })
       }
    }

    onChange=(e)=>{
          this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit=(e)=>{
      e.preventDefault();
      const newUser = {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
      this.props.registerUser(newUser, this.props.history)
      }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your sendIT account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" 
                    placeholder="Email Address" value={this.state.email}  onChange={this.onChange} name="email" required/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" 
                    placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required/>
                  </div>
                   {!isAuthenticated && this.state.errors.message && <div className="alert alert-danger" >{this.state.errors.message}</div>}
                  <input type="submit" className="btn btn-info btn-block mt-4" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

Register.propTypes =  {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps =  (state) =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register)); 
