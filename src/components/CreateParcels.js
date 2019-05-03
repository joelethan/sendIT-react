import React, { Component } from "react";
import {addParcel} from "../actions/parcelsActions";
import {connect} from "react-redux";
class CreateParcels extends Component {




  componentDidMount(){
    if(localStorage.getItem("jwtToken")===null){
      window.location.href="/login?message=Please login first";
    }
  }

  state = {
    pickup_location: "",
    weight: "",
    destination: "",
    present_location: "", 
};

onSubmit=(e)=>{

  const newParcel = {
    pickup_location: this.state.pickup_location,
    weight: parseFloat(this.state.weight),
    destination: this.state.destination,
    present_location:this.state.present_location
  }
  this.props.addParcel(newParcel, this.props.history)

  e.preventDefault()
}


onChange=(e)=>{
  this.setState({[e.target.name]: e.target.value})
}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Create a Parcel delivery order</p>
            <form  onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                placeholder="Pickup Location" name="pickup_location"  value={this.state.pickup_location} onChange={this.onChange} required  />
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" 
                placeholder="Present Location"   name="present_location" value={this.state.present_location} onChange={this.onChange} required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" 
                placeholder="Destination" name="destination" value={this.state.destination} onChange={this.onChange} required />
              </div>
              <div className="form-group">
                <input type="number" className="form-control form-control-lg" 
                placeholder="Weight" name="weight" value={this.state.weight} onChange={this.onChange} required />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(null,{addParcel})(CreateParcels);
