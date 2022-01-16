import * as Type from './types';
import { CreateAction } from '../../interfaces';

const createAction: CreateAction = type => data => ({ type, payload: data });

const loginRequest = createAction(Type.LOGIN_REQUEST);
const loginSuccess = createAction(Type.LOGIN_SUCCESS);
const loginError = createAction(Type.LOGIN_ERROR);

const logoutRequest = createAction(Type.LOGOUT_REQUEST);
const logoutSuccess = createAction(Type.LOGOUT_SUCCESS);
const logoutError = createAction(Type.LOGOUT_ERROR);

export {
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
};
