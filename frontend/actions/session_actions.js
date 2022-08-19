import * as sessionAPI from "../utils/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_RECEIVE_ERRORS = "CLEAR_RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearReceiveErrors = () => ({
    type: CLEAR_RECEIVE_ERRORS
});

export const signup = user => dispatch => {
    return sessionAPI.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
            )
};

export const login = user => dispatch => {
    return sessionAPI.login(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
            )
};

export const logout = () => dispatch => {
    return sessionAPI.logout()
        .then(
            user => dispatch(logoutCurrentUser())
        )
};