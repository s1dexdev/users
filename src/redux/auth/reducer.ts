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
import { reducerSetters } from '../../utils/helpers';

const { setTrue, setFalse, setNull, setPayload } = reducerSetters;

const isAuthenticated = createReducer(false, {
    [loginSuccess.type]: setTrue,
    [logoutSuccess.type]: setFalse,

    [loginError.type]: setFalse,
    [logoutError.type]: setFalse,
});

const isLoading = createReducer(false, {
    [loginRequest.type]: setTrue,
    [logoutRequest.type]: setTrue,

    [loginSuccess.type]: setFalse,
    [logoutSuccess.type]: setFalse,

    [loginError.type]: setFalse,
    [logoutError.type]: setFalse,
});

const error = createReducer(null, {
    [loginError.type]: setPayload,
    [logoutError.type]: setPayload,

    [loginRequest.type]: setNull,
    [logoutRequest.type]: setNull,
});

export const authReducer = combineReducers({
    isAuthenticated,
    isLoading,
    error,
});
