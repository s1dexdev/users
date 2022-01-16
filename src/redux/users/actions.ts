import * as Type from './types';
import { CreateAction } from '../../interfaces';

const createAction: CreateAction = type => data => ({ type, payload: data });

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);

const addFetchUsersSuccess = createAction(Type.ADD_FETCH_USERS_SUCCESS);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    addFetchUsersSuccess,
};
