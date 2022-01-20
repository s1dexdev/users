import { createAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces';

interface Payload {
    page: number;
    results: number;
}

type FetchUsers = Payload | undefined;

const fetchUsersRequest = createAction<FetchUsers>('USERS/FETCH_USERS_REQUEST');
const fetchUsersSuccess = createAction<User[]>('USERS/FETCH_USERS_SUCCESS');
const fetchUsersError = createAction<unknown>('USERS/FETCH_USERS_ERROR');

const addFetchUsersSuccess = createAction<User[]>(
    'USERS/ADD_FETCH_USERS_SUCCESS',
);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    addFetchUsersSuccess,
};
