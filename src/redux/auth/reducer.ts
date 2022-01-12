import { IAction } from '../interfaces';
import * as Type from './types';

interface IAuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | Error;
}

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;

const initialState: IAuthState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const authReducer = <T>(state: IAuthState, action: IAction<T>) => {
    state = state || initialState;

    switch (action.type) {
        case Type.LOGIN_REQUEST:
        case Type.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };

        case Type.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: setTrue(),
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: setFalse(),
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.LOGIN_ERROR:
        case Type.LOGOUT_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        default:
            return state;
    }
};
