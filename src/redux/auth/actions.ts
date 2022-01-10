import * as Type from './types';

interface IAction<T> {
    type: string;
    payload?: T;
}

export const loginRequest = <T>(): IAction<T> => ({
    type: Type.LOGIN_REQUEST,
});

export const loginSuccess = <T>(): IAction<T> => ({
    type: Type.LOGIN_SUCCESS,
});

export const loginError = <T>(data: T): IAction<T> => ({
    type: Type.LOGIN_ERROR,
    payload: data,
});
