import { IState } from '../interfaces';

export const users = (state: IState) => state.usersReducer.users;
export const loading = (state: IState) => state.usersReducer.isLoading;
