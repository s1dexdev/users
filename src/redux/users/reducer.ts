import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    addFetchUsersSuccess,
} from './actions';

const users = createReducer([], {
    [fetchUsersSuccess.type]: (_, { payload }) => payload,
    [addFetchUsersSuccess.type]: (state, { payload }) => [...state, ...payload],
});

const isLoading = createReducer(false, {
    [fetchUsersRequest.type]: () => true,
    [fetchUsersSuccess.type]: () => false,
    [fetchUsersError.type]: () => false,

    [addFetchUsersSuccess.type]: () => false,
});

const error = createReducer(null, {
    [fetchUsersError.type]: (_, { payload }) => payload,
});

export const usersReducer = combineReducers({ users, isLoading, error });
