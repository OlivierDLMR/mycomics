import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
} from "../actions/login";

const initialState = {
    user: null,
    token: null
};

function login(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, loading: true};

        case USER_LOGIN_SUCCESS:
            return { ...state, token: action.payload.token, user: action.payload.user};

        case USER_LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: true};

        default:
            return state;
    }
}

export default login;