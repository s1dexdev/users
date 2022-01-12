import { IAction } from '../interfaces';
import * as Type from './types';

export const fetchUsersRequest = <T>(data?: T): IAction<T> => ({
    type: Type.FETCH_USERS_REQUEST,
    payload: data,
});

export const fetchUsersSuccess = <T>(data: T): IAction<T> => ({
    type: Type.FETCH_USERS_SUCCESS,
    payload: data,
});

export const fetchUsersError = <T>(data: T): IAction<T> => ({
    type: Type.FETCH_USERS_ERROR,
    payload: data,
});
