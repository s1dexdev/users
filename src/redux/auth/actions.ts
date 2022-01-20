import { createAction } from '@reduxjs/toolkit';

const loginRequest = createAction('AUTH/LOGIN_REQUEST');
const loginSuccess = createAction('AUTH/LOGIN_SUCCESS');
const loginError = createAction<unknown>('AUTH/LOGIN_ERROR');

const logoutRequest = createAction('AUTH/LOGOUT_REQUEST');
const logoutSuccess = createAction('AUTH/LOGOUT_SUCCESS');
const logoutError = createAction<unknown>('AUTH/LOGOUT_ERROR');

export {
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
};
