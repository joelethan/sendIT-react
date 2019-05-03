import { ADD_POST, GET_ERRORS,PARCELS_LOAD_FAILED,PARCELS_LOADING,PARCELS_LOADED } from "./types";
import axios from "axios";

//Add post
export const addParcel = (postData,hist) => dispatch => {
    return axios
      .post("https://joelcamp14.herokuapp.com/api/v1/parcels",postData,
      {
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwtToken")
        }
    })
      .then(res => {
          console.log(res.data);
          
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        document.location.href="/";
    })
      .catch(err =>{


        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })

    }
        );
        
    }


export const getParcels=()=>dispatch=>{
    dispatch({
        type:PARCELS_LOADING
    })


        return axios.get("https://joelcamp14.herokuapp.com/api/v1/parcels",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwtToken")
            }
        }).then(res=>{
            dispatch({
                type:PARCELS_LOADED,
                payload:res.data.Orders
            })
    
        }).catch(err=>{
            dispatch({
                type:PARCELS_LOAD_FAILED,
                payload:err.response.data.message
            })
        })
    

}
