import { GET_ERRORS, SET_CURRENT_USER } from "./type";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utilis/setAuthToken";
 
//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
    .post("http://127.0.0.1:5003/auth/signup", userData )
    .then(res => history.push("/login"))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
     };

//Login - GET User token
export const loginUser = (userData) => dispatch => {
axios
.post("http://127.0.0.1:5003/auth/login", userData )
.then(res => {
    //save to localstorage
    const { token } = res.data;
    localStorage.setItem( "jwtToken", token )
    setAuthToken(token)
    // Decode token
    const decoded = jwt_decode(token);
    // Set current user 
    dispatch(setCurrentUser(decoded))
})
.catch(err => 
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
