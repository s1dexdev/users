import { call, put, takeLatest } from '@redux-saga/core/effects';
import { FETCH_USERS_REQUEST } from './types';
import { fetchUsersSuccess, fetchUsersError } from './actions';
import fetchUsers from '../../API/userService';

function* fetchUsersSaga(): Generator {
    try {
        const users = yield call(fetchUsers);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
