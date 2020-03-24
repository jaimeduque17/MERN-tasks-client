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
                message: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
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
                message: action.payload,
                loading: false
            }
        default:
            return state;
    }
}