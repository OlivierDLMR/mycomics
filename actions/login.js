export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());
        return fetch("http://192.168.1.23:4000/users/login", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(
                response => response.json(),
                error => dispatch(loginFailure(error))
            )
            .then(
                data => {
                    dispatch(loginSuccess(data.token, data.user));
                });
    }
}

export function loginRequest() {
    return {type: USER_LOGIN_REQUEST}
}

export function loginSuccess(token, user) {
    return {type: USER_LOGIN_SUCCESS, payload: {token, user}}
}

export function loginFailure(error) {
    return {type: USER_LOGIN_FAILURE, payload: error}
}