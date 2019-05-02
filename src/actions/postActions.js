import { ADD_POST, GET_ERRORS } from "./type";
import axios from "axios";

//Add post
export const addPost = postData => dispatch => {
    axios
      .post("http://127.0.0.1:5003/api/v1/parcels", postData)
      .then(res => 
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
      )
      .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
    }
