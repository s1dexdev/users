import * as Type from './types';

interface IState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | Error;
}

interface IAction<T> {
    type: string;
    payload: T;
}

const setFalse = () => false;
const setTrue = () => true;
const setNull = () => null;

const initialState: IState = {
    isAuthenticated: setFalse(),
    isLoading: setFalse(),
    error: setNull(),
};

export const authReducer = <T>(state: IState, action: IAction<T>) => {
    state = state || initialState;

    switch (action.type) {
        case Type.LOGIN_REQUEST:
        case Type.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: setFalse(),
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
                isAuthenticated: setNull(),
                isLoading: setFalse(),
                error: setNull(),
            };

        default:
            return initialState;
    }
};
