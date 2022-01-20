import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
} from './actions';

const isAuthenticated = createReducer(false, {
    [loginSuccess.type]: () => true,
    [logoutSuccess.type]: () => false,

    [loginError.type]: () => false,
    [logoutError.type]: () => false,
});

const isLoading = createReducer(false, {
    [loginRequest.type]: () => true,
    [loginSuccess.type]: () => false,
    [loginError.type]: () => false,

    [logoutRequest.type]: () => true,
    [logoutSuccess.type]: () => false,
    [logoutError.type]: () => false,
});

const error = createReducer(null, {
    [loginError.type]: (_, { payload }) => payload,
    [logoutError.type]: (_, { payload }) => payload,

    [loginRequest.type]: () => null,
    [logoutRequest.type]: () => null,
});

export const authReducer = combineReducers({
    isAuthenticated,
    isLoading,
    error,
});
