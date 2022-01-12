import { IUser } from '../interfaces';
import * as Type from './types';

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: null | Error;
}

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;

const initialState: IUserState = {
    users: [],
    isLoading: setFalse(),
    error: setNull(),
};

interface IAction<T> {
    type: string;
    payload: T & T[];
}

export const usersReducer = <T>(state: IUserState, action: IAction<T>) => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        default:
            return initialState;
    }
};
