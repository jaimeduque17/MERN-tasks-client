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
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: null,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state;
    }
}