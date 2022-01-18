import * as Type from './types';
import { User } from '../../interfaces';

interface UserState {
    users: User[];
    isLoading: boolean;
    error: null | Error;
}

interface Action<T> {
    type: string;
    payload: T & T[];
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
};

export const usersReducer = <T>(state: UserState, action: Action<T>) => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.ADD_FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: false,
                error: null,
            };

        case Type.FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
