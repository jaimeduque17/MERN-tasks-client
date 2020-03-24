import {
    SIGNUP_SUCCESSFUL,
    SIGNUP_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESSFUL:
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload
            }
        case LOGOUT:
        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                auth: null,
                message: action.payload
            }
        default:
            return state;
    }
}