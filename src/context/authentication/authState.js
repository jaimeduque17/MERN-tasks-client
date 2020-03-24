import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
    SIGNUP_SUCCESSFUL,
    SIGNUP_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const signupUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data);
            console.log(response.data);
            dispatch({
                type: SIGNUP_SUCCESSFUL,
                payload: response.data
            });

            // Get user
            userAuthenticated();

        } catch (error) {
            // console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            })
        }
    }

    // Return the authenticated user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: Function to send token by headers
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get('/api/auth');
            // console.log(response);
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // When the user log in
    const logIn = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data);

            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });

            // Get user
            userAuthenticated();

        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    // Close session
    const logOut = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                signupUser,
                logIn,
                userAuthenticated,
                logOut
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;