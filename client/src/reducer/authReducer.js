import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_SUCCESS } from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
    isLoaded: false,
    isAuthenticated: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isUpdate: false,
                isLoading: true,
                isLoaded: false

            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoaded: true,
                isLoading: false,
                user: action.payload,

            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,

            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isUpdate: true,
                isAuthenticated: true,
                isLoading: false,

            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            // case UPDATE_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            };
        default:
            return state;
    }
}