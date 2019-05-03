import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utilis/setAuthToken";
 
//Register User
export const registerUser = (userData, history) => dispatch => {
    return axios
    .post("https://joelcamp14.herokuapp.com/auth/signup", userData )
    .then((res) => history.push("/login"))
    
    .catch(err /* istanbul ignore next */ => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
     };

//Login - GET User token
export const loginUser = (userData) => dispatch => {
return axios
.post("https://joelcamp14.herokuapp.com/auth/login", userData )
.then(res => /* istanbul ignore next */{
    //save to localstorage
    const { token } = res.data;
    localStorage.setItem( "jwtToken", token )
    setAuthToken(token)
    // Decode token
    const decoded = jwt_decode(token);
    // Set current user 
    dispatch(setCurrentUser(decoded))
})
.catch((err) /* istanbul ignore next */=> 
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//Log out user
export const logoutUser = () => dispatch => {
    // Remove token local storage
    localStorage.removeItem("jwtToken");
    //Remove Auth headers 
    setAuthToken(false);
    //Set current user to {}
    setCurrentUser({})
}
