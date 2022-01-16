import * as Type from './types';
import { Action } from '../../interfaces';

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | Error;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const authReducer = <T>(state: AuthState, action: Action<T>) => {
    state = state || initialState;

    switch (action.type) {
        case Type.LOGIN_REQUEST:
        case Type.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Type.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            };

        case Type.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            };

        case Type.LOGIN_ERROR:
        case Type.LOGOUT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
