import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getParcels} from "../actions/parcelsActions";
import Landing from "./Landing";
import Parcel from "./Parcels";

class Home extends Component {

componentDidMount(){
this.props.getParcels();
}
  render() {

    const {parcels,loading}=this.props.parcels;

    if(loading){
      return <h2>Loading...</h2>
    }
    if(parcels==="No orders found"){
      return(
        <h3>No Parcels created by you yet</h3>
      )
    }

    if(!this.props.auth.isAuthenticated){
      return (
   <Landing/>
        )

      }
        return(
          
          <table className="table table-condensed">
        <thead>
            <tr>
                <th>Pickup Location</th>
                <th>Destination Location</th>
                <th>Current Location</th>
                <th>status</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
        
        {Array.from(parcels).map(parcel=>(
          <tr>
            <td>{parcel.pickup_location}</td>  <td>{parcel.destination}</td>  <td>{parcel.present_location}</td>
              <td>{parcel.status}</td>  <td>{parcel.weight}</td>
          </tr>
         ))
        }
         </tbody>
         </table>
         
        )
    
    
  }
}

Home.propTypes =  {
 auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
 auth: state.auth,
 parcels:state.parcels
})

export default connect(mapStateToProps, {getParcels}) (Home);
