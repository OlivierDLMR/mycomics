export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export function register(user) {
    return function (dispatch) {
        dispatch(registerRequest());
        return fetch('http://192.168.1.23:4000/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(
                response => response.json(),
                error => dispatch(registerFailure(error))
            )
            .then(user => {
                dispatch(registerSuccess(user));
            });
    }
}

export function registerRequest() {
    return {type: ADD_USER_REQUEST}
}

export function registerSuccess(user) {
    return {type: ADD_USER_SUCCESS, payload: user}
}

export function registerFailure(error) {
    return {type: ADD_USER_FAILURE, payload: error}
}