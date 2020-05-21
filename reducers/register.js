import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
} from "../actions/register";

const initialState = {
    users: []
};

function register(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {...state, loading: true};

        case ADD_USER_SUCCESS:
            return { users: [...state.users, action.payload]};

        case ADD_USER_FAILURE:
            return { ...state, error: action.payload, loading: true};

        default:
            return state;
    }
}

export default register;