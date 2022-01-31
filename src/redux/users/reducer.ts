import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    addFetchUsersSuccess,
} from './actions';
import { reducerSetters } from '../../utils/helpers';
import { User } from '../../interfaces';

const { setTrue, setFalse, setPayload } = reducerSetters;

const users = createReducer<User[]>([], {
    [fetchUsersSuccess.type]: setPayload,
    [addFetchUsersSuccess.type]: (state, { payload }) => [...state, ...payload],
});

const isLoading = createReducer(false, {
    [fetchUsersRequest.type]: setTrue,

    [fetchUsersSuccess.type]: setFalse,
    [addFetchUsersSuccess.type]: setFalse,

    [fetchUsersError.type]: setFalse,
});

const error = createReducer(null, {
    [fetchUsersError.type]: setPayload,
});

export const usersReducer = combineReducers({ users, isLoading, error });
