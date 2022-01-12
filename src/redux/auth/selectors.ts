import { IState } from '../interfaces';

export const isAuthenticated = (state: IState) =>
    state.authReducer.isAuthenticated;

export const loading = (state: IState) => state.authReducer.isLoading;
