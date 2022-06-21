import axios from 'axios';
import { returnErrors } from './errorActions';

import {  USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });
    // get token from localstorage
    const token = getState().auth.token;
    console.log("Token from load User", token);

    // Header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    // if token , add to headers
    if (token) {
        config.headers['x-auth-token'] = token;

        axios.get("/api/auth/user", config)
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data

            }))
            .catch(err => {
                console.log(err);
                dispatch(returnErrors(err.response.data, err.response.status));
                dispatch({
                    type: AUTH_ERROR
                });
            })
    }
}

// Login User
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    // Request body

    const body = JSON.stringify({ email, password });
    console.log(body);

    axios.post("/api/auth/login", body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log("catch block error")
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL
            });
        })

}

// Register User
export const register = ({ name, email, password }) => dispatch => {
    // Headers
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    // Request body

    const body = JSON.stringify({ name, email, password });
    console.log(body);

    axios.post("/api/auth/register", body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log("catch block error")
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            });
        })

}

// Logout uSER
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};
